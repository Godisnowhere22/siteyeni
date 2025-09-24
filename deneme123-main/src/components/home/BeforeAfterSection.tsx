import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const BeforeAfterSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      title: "Otomotiv Yan Sanayi Firması",
      industry: "Otomotiv",
      beforeTitle: "Manuel Süreçler",
      afterTitle: "PrismaCore.ai ile",
      before: {
        metrics: [
          { label: "Stok Hatası", value: "15%", color: "text-red-500" },
          { label: "Geciken Bakım", value: "8 gün", color: "text-red-500" },
          { label: "Ödeme Gecikme", value: "30%", color: "text-red-500" }
        ],
        description: "Elektronik tablolar, manuel takip, gecikmeli bildirimler"
      },
      after: {
        metrics: [
          { label: "Stok Hatası", value: "2%", color: "text-green-500" },
          { label: "Geciken Bakım", value: "1 gün", color: "text-green-500" },
          { label: "Ödeme Gecikme", value: "5%", color: "text-green-500" }
        ],
        description: "Gerçek zamanlı izleme, otomatik uyarılar, akıllı raporlama"
      }
    },
    {
      title: "Tekstil Üretim Tesisi",
      industry: "Tekstil",
      beforeTitle: "Geleneksel Yöntemler",
      afterTitle: "Dijital Dönüşüm",
      before: {
        metrics: [
          { label: "Kalite Hatası", value: "12%", color: "text-red-500" },
          { label: "Makine Durma", value: "18 saat", color: "text-red-500" },
          { label: "Sipariş Gecikme", value: "25%", color: "text-red-500" }
        ],
        description: "Kağıt bazlı takip, reaktif bakım, manuel kalite kontrol"
      },
      after: {
        metrics: [
          { label: "Kalite Hatası", value: "3%", color: "text-green-500" },
          { label: "Makine Durma", value: "4 saat", color: "text-green-500" },
          { label: "Sipariş Gecikme", value: "6%", color: "text-green-500" }
        ],
        description: "Prediktif bakım, otomatik kalite takibi, akıllı planlama"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Öncesi & Sonrası
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gerçek müşterilerimizin dijital dönüşüm hikayelerini keşfedin
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentCase.title}
              </h3>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                {currentCase.industry}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentCase.beforeTitle}
                </h4>
              </div>
              
              <div className="space-y-4 mb-6">
                {currentCase.before.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{metric.label}</span>
                    <span className={`font-bold text-xl ${metric.color}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {currentCase.before.description}
              </p>
            </div>

            {/* After */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {currentCase.afterTitle}
                </h4>
              </div>
              
              <div className="space-y-4 mb-6">
                {currentCase.after.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{metric.label}</span>
                    <span className={`font-bold text-xl ${metric.color}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {currentCase.after.description}
              </p>
            </div>
          </div>

          {/* Improvement Arrow */}
          <div className="flex justify-center items-center my-8">
            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Ortalama %75 İyileşme</span>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;