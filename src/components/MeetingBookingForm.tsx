import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Building, Mail, Phone, CheckCircle, ArrowRight, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, type MeetingSlot, type BookingData } from '../lib/supabase';

interface TimeSlot {
  time: string;
  available: boolean;
}

const MeetingBookingForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState<MeetingSlot[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    meetingType: 'Demo',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate next 30 business days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('tr-TR', { 
            weekday: 'short', 
            day: 'numeric', 
            month: 'short' 
          })
        });
      }
    }
    
    return dates;
  };

  // Generate calendar days for current month
  const generateCalendarDays = (monthDate: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to avoid timezone issues
    
    const month = monthDate.getMonth();
    const year = monthDate.getFullYear();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    
    // Add empty cells for days before month starts
    const firstDayOfWeek = firstDay.getDay();
    const mondayOffset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Monday = 0
    
    for (let i = 0; i < mondayOffset; i++) {
      days.push({ isEmpty: true });
    }
    
    // Add all days of the current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDate = new Date(year, month, day);
      currentDate.setHours(0, 0, 0, 0); // Reset time to avoid timezone issues
      
      // Create date string manually to avoid timezone conversion
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      const isPast = currentDate < today;
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      const isFutureMonth = currentDate > new Date(today.getFullYear(), today.getMonth() + 2, 0);
      
      days.push({
        date: dateString,
        day: day,
        isPast,
        isWeekend,
        isFutureMonth,
        isEmpty: false
      });
    }
    
    return days;
  };

  const goToPreviousMonth = () => {
    const today = new Date();
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    
    // Don't go before current month
    if (prevMonth >= new Date(today.getFullYear(), today.getMonth(), 1)) {
      setCurrentMonth(prevMonth);
    }
  };

  const goToNextMonth = () => {
    const today = new Date();
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
    
    // Don't go beyond 2 months ahead
    if (nextMonth <= maxMonth) {
      setCurrentMonth(nextMonth);
    }
  };
  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  // Load available slots for selected date
  useEffect(() => {
    if (selectedDate) {
      loadAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const loadAvailableSlots = async (date: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('meeting_slots')
        .select('*')
        .eq('date', date);

      if (error) throw error;

      setAvailableSlots(data || []);
    } catch (err) {
      console.error('Error loading slots:', err);
      setError('Müsait saatleri yüklerken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const isTimeSlotAvailable = (time: string): boolean => {
    const slot = availableSlots.find(s => s.time === time + ':00' && s.date === selectedDate);
    return !slot || slot.is_available;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError('Lütfen tarih ve saat seçin');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // First, check if this exact slot is already booked
      const { data: existingBookedSlots, error: checkError } = await supabase
        .from('meeting_slots')
        .select('*')
        .eq('date', selectedDate)
        .eq('time', selectedTime + ':00')
        .eq('is_available', false)
        .limit(1);

      if (checkError) {
        throw checkError;
      }

      if (existingBookedSlots && existingBookedSlots.length > 0) {
        throw new Error('Bu saat dilimi artık müsait değil. Lütfen başka bir saat seçin.');
      }

      // Try to update an existing available slot or insert a new one
      const { data: updatedSlot, error: upsertError } = await supabase
        .from('meeting_slots')
        .upsert({
          date: selectedDate,
          time: selectedTime + ':00',
          is_available: false,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_company: formData.company,
          meeting_type: formData.meetingType,
          notes: formData.notes
        }, {
          onConflict: 'date,time',
          ignoreDuplicates: false
        })
        .select()
        .single();

      if (upsertError) {
        if (upsertError.code === '23505') { // Unique constraint violation
          throw new Error('Bu saat dilimi artık müsait değil. Lütfen başka bir saat seçin.');
        }
        throw upsertError;
      }

      // Refresh available slots to show updated availability
      await loadAvailableSlots(selectedDate);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error booking meeting:', err);
      setError(err.message || 'Rezervasyon yapılırken hata oluştu');
      // Refresh slots to show current state
      if (selectedDate) {
        await loadAvailableSlots(selectedDate);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Toplantı Rezervasyonu Tamamlandı!
        </h3>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
          <p className="text-green-800 dark:text-green-200 font-medium">
            {(() => {
              const [year, month, day] = selectedDate.split('-');
              const displayDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
              return displayDate.toLocaleDateString('tr-TR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              });
            })()} - {selectedTime} tarihinde toplantınız rezerve edildi.
          </p>
          <p className="text-green-700 dark:text-green-300 text-sm mt-2">
            Toplantı detayları e-posta adresinize gönderilecek.
          </p>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setSelectedDate('');
            setSelectedTime('');
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              meetingType: 'Demo',
              notes: ''
            });
          }}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Yeni rezervasyon yap
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex flex-col sm:flex-row items-start sm:items-center">
        <Calendar className="h-8 w-8 mr-3 text-blue-600" />
        Toplantı Rezervasyonu
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Tarih Seçin
          </label>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={goToPreviousMonth}
                disabled={currentMonth <= new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {currentMonth.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}
              </h3>
              <button
                type="button"
                onClick={goToNextMonth}
                disabled={currentMonth >= new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays(currentMonth).map((day, index) => {
                if (day.isEmpty) {
                  return <div key={index} className="aspect-square" />;
                }
                
                const isToday = day.date === new Date().toISOString().split('T')[0];
                const isSelected = selectedDate === day.date;
                const isDisabled = day.isPast || day.isWeekend || day.isFutureMonth;
                
                return (
                  <button
                    key={index}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => !isDisabled && setSelectedDate(day.date)}
                    className={`
                      aspect-square p-2 text-sm rounded-lg transition-all duration-200 relative
                      ${isDisabled 
                        ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed bg-gray-100 dark:bg-gray-800' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                      }
                      ${isSelected 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : ''
                      }
                      ${isToday && !isSelected 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold' 
                        : ''
                      }
                    `}
                  >
                    {day.day}
                    {isToday && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Clock className="inline h-4 w-4 mr-1" />
              Saat Seçin
              {loading && <Loader className="inline h-4 w-4 ml-2 animate-spin" />}
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots.map((time) => {
                const available = isTimeSlotAvailable(time);
                return (
                  <button
                    key={time}
                    type="button"
                    disabled={!available || loading}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 sm:p-3 text-xs sm:text-sm rounded-lg border transition-all duration-200 ${
                      !available
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700 cursor-not-allowed'
                        : selectedTime === time
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-blue-400'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Ad Soyad *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Adınızı girin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              E-posta *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Phone className="inline h-4 w-4 mr-1" />
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="+90 (546) 973 64 27"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Building className="inline h-4 w-4 mr-1" />
              Şirket *
            </label>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              placeholder="Şirket adınız"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Toplantı Türü
          </label>
          <select
            name="meetingType"
            value={formData.meetingType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
          >
            <option value="Demo">Ürün Demosu</option>
            <option value="Consultation">Danışmanlık</option>
            <option value="Technical">Teknik Görüşme</option>
            <option value="Sales">Satış Görüşmesi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Notlar
          </label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="Toplantı hakkında özel notlarınız..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !selectedDate || !selectedTime}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Rezervasyon Yapılıyor...
            </>
          ) : (
            <>
              Toplantı Rezerve Et
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default MeetingBookingForm;