import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Bell, FileText, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';

const PackagePreviewSection = () => {
  const solutions = [
    {
      id: 'stok-kontrol',
      title: "Stok Kontrol Sistemi",
      icon: TrendingUp,
      problem: "Manuel stok takibi hem zaman kaybettiriyor hem de hatalara yol açıyor.",
      solution: "Akıllı sistemimizle stok seviyelerini anlık olarak görebilir, kritik eşiklere ulaşıldığında otomatik uyarılar alabilir ve tüm hareketleri detaylı raporlarla takip edebilirsiniz.",
      details: "Sistem ayrıca tedarikçilerle entegre çalışarak sipariş önerileri sunar. Böylece stok yönetimi kendi kendine işler hale gelir.",
      benefits: [
        "Hatalar büyük ölçüde azalır",
        "Maliyetler gözle görülür şekilde düşer",
        "Zaman kazanırsınız",
        "Stokların tükenme riski tamamen ortadan kalkar"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 'bakim-kalibrasyon',
      title: "Bakım & Kalibrasyon",
      icon: Bell,
      problem: "Bakım zamanlarının kaçırılması ekipman arızalarını artırıyor ve üretimi aksatıyor.",
      solution: "Akıllı sistemle tüm bakım süreçleri otomatik planlanıyor, ekipmanlar düzenli takip ediliyor ve geçmiş raporlar kolayca erişilebilir hale geliyor.",
      details: "WhatsApp entegrasyonu sayesinde bakım ve kalibrasyon hatırlatmaları doğrudan ekibinize iletiliyor. Böylece hiçbir görev gözden kaçmıyor.",
      benefits: [
        "Arızalar büyük ölçüde azalır",
        "Bakım maliyetleri ciddi oranda düşer",
        "Süreçler proaktif bir şekilde yönetilir",
        "Ekipmanların ömrü uzar"
      ],
      color: "from-green-500 to-blue-500"
    },
    {
      id: 'merkezi-kontrol',
      title: "Merkezi Kontrol Sistemi",
      icon: FileText,
      problem: "Farklı sistemler ayrı ayrı takip edildiğinde bilgi dağınıklığı oluşur ve karar alma süreçleri yavaşlar.",
      solution: "Merkezi Kontrol Sistemi, tüm çözümleri tek panel altında toplar. Yöneticiler, işletmenin tüm kritik süreçlerini gerçek zamanlı takip edebilir.",
      details: "Tek ekranda görünürlük, gerçek zamanlı bildirimler ve modüller arası entegrasyon ile üst düzey kontrol sağlanır.",
      benefits: [
        "Tüm süreçler tek merkezden kontrol edilir",
        "Kararlar veriye dayalı alınır",
        "Zaman kaybı azalır",
        "Şeffaflık artar"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'odeme-takip',
      title: "Ödeme Takip Sistemi",
      icon: CreditCard,
      problem: "Müşteri ödemeleri gecikiyor, tahsilat zorluğu yaşanıyor.",
      solution: "Otomatik ödeme takibi sistemiyle müşteri ödemelerini kolayca izleyebilir, vade hatırlatmaları gönderebilir ve tahsilat süreçlerinizi optimize edebilirsiniz.",
      details: "Akıllı bildirim(WhatsApp ve Mail) entegrasyonu sayesinde müşterilerinizle düzenli iletişim kurarak ödeme süreçlerini hızlandırabilirsiniz.",
      benefits: [
        "Ödemeler hızlanır",
        "Tahsilat oranı artar",
        "Nakit akışı iyileşir",
        "Müşteri ilişkileri güçlenir"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            İşinizi Otomatikleştirin 🚀
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zaman kaybını, manuel hataları ve gereksiz maliyetleri geride bırakın.
            <br />
            Tüm süreçlerinizi akıllı otomasyonla yönetin.
          </p>
        </div>

        {/* Solutions - Vertical Layout */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                  {solution.title}
                </h3>
              </div>

              {/* Problem */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-lg p-4 border-l-4 border-red-500 mb-4">
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse" />
                    Mevcut Durum
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border-l-4 border-blue-500 mb-4`}>
                  <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    Akıllı Çözümümüz
                  </h4>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>{solution.solution}</p>
                    <p>{solution.details}</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="text-green-400 font-semibold mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                    Sonuç olarak:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3 group">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  to={`/cozumler/${solution.id}`}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${solution.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
                >
                  Detayları İncele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hangi Çözüm Size Uygun?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Uzmanlarımızla görüşerek işinize en uygun otomasyon paketini belirleyin
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:-translate-y-1"
              >
                İletişime Geçin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagePreviewSection;