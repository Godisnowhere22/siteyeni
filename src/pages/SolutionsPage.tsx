import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TrendingUp, Bell, FileText, CreditCard, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

const SolutionsPage = () => {
  const { solutionId } = useParams();

  const solutions = [
    {
      id: 'stok-kontrol',
      title: "Stok Kontrol Sistemi",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-500",
      problem: `Geleneksel stok yönetimi genellikle Excel tabloları, manuel sayımlar veya ERP'ye işlenen gecikmeli kayıtlarla yürütülür. Bu yöntemler zaman kaybına yol açar, insan hatalarına açıktır ve stok tükenmesi, fazla stoklama ya da yanlış sipariş gibi kritik riskler doğurur. Bu hatalar yalnızca maliyetleri artırmakla kalmaz, aynı zamanda üretim hattının durmasına kadar gidebilecek sonuçlar doğurur.`,
      solution:
        "PrismaCore Stok Kontrol Sistemi, tüm stok hareketlerini gerçek zamanlı izleyerek depo ve üretim süreçlerini uçtan uca dijitalleştirir. Her ürünün mevcut seviyesi anlık olarak takip edilir, kritik stoklara ulaşıldığında otomatik bildirimler devreye girer. Tedarikçilerle sağlanan entegrasyon sayesinde sipariş süreçleri doğrudan ve hatasız yönetilir. Tüm stok hareketleri, tüketim eğilimleri ve maliyet dağılımları düzenli raporlarla yöneticilere sunulur.",
      details:
        "",
      benefits: [
        "Hata oranı minimuma iner → Yanlış kayıtlar ve hatalı siparişler ortadan kalkar",
        "Maliyet kontrol altına alınır → Gereksiz stok yükü azalır, nakit akışı dengelenir",
        "Zaman tasarrufu sağlar → Çalışanlar manuel işler yerine stratejik konulara odaklanır",
        "Kesintisiz üretim garanti edilir → Stok tükenmesi riski ortadan kalkar"
      ],
      features: [
        "Anlık stok takibi ve kritik seviye uyarıları",
        "Tedarikçi entegrasyonu",
        "Detaylı raporlama ve analiz",
        "Gerçek zamanlı bildirimler"
      ],
      usageScenario:
        "Bir üretim tesisinde kritik bir hammadde seviyesi azaldığında sistem yöneticiyi anında bilgilendirir. Onay verildiğinde sipariş talebi otomatik olarak tedarikçiye iletilir. Böylece insan hatası ortadan kalkar, üretim hattı malzeme beklemek zorunda kalmaz ve firma her zaman optimum stok seviyesinde kalır."
    },
    {
      id: 'bakim-kalibrasyon',
      title: "Bakım & Kalibrasyon",
      icon: Bell,
      color: "from-green-500 to-blue-500",
      problem:
        "İşletmelerde bakım zamanlarının kaçırılması veya düzensiz yapılması: Arızaların artmasına, plansız duruşlara, bakım maliyetlerinin yükselmesine, ekipman ömrünün kısalmasına yol açar. Çoğu zaman bakım kayıtları Excel veya defterlerde tutulur, ekip arasındaki iletişim kopukluğu yüzünden yapılması gereken işlemler atlanır. Bu da ciddi üretim kayıplarına sebep olur.",
      solution:
        "PrismaCore Bakım & Kalibrasyon Sistemi, tüm ekipman bakım süreçlerini otomatikleştirir ve hatırlatmalarla süreci kesintisiz hale getirir.",
      details:
        "• Otomatik Bakım Planlaması: Her ekipman için bakım tarihleri otomatik belirlenir ve takvime işlenir.\n\n• Ekipman Takip Sistemi: Hangi cihazın ne zaman ve kim tarafından bakıma alındığı kayıt altında tutulur.\n\n• WhatsApp Entegrasyonu: Ekip sorumlularına doğrudan WhatsApp üzerinden hatırlatmalar gönderilir.\n\n• Geçmiş Raporlama: Tüm bakım işlemleri kayıt altına alınır ve detaylı raporlanır.",
      benefits: [
        "Arızalar önemli ölçüde azalır, üretim kesintiye uğramaz",
        "Bakım maliyetleri düşer, gereksiz servis çağrıları önlenir",
        "Proaktif bakım yönetimi sağlanır, sorunlar büyümeden çözülür",
        "Ekipman ömrü uzar, yatırımın geri dönüşü artar"
      ],
      features: [
        "Otomatik bakım planlaması",
        "Ekipman takip sistemi",
        "Bakım geçmişi raporları",
        "WhatsApp entegrasyonu",
        "Kalibrasyon hatırlatmaları"
      ],
      usageScenario:
        "Bir fabrikanın üretim hattında kritik makinenin yağ değişim zamanı yaklaşmıştır. Sistem, ilgili teknisyene WhatsApp üzerinden hatırlatma gönderir. Teknisyen işlemi yaptıktan sonra rapor sisteme işlenir. Yönetim, tüm bakım kayıtlarını tek ekranda görebilir. Böylece hiçbir bakım gözden kaçmaz, üretim sürekliliği korunur."
    },
    {
      id: 'merkezi-kontrol',
      title: "Merkezi Kontrol Sistemi",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      problem:
        "Bir fabrikanın veya üretim tesisinin içinde stok yönetimi, bakım & kalibrasyon, kalite kontrol ve ödeme takibi gibi farklı alanlarda çalışan sistemler bulunur. Ancak bu süreçler ayrı ayrı takip edildiğinde: Yöneticiler için bilgi dağınıklığı oluşur, gerçek zamanlı görünürlük kaybolur, karar alma süreçleri yavaşlar, raporlama zaman alır. Her modül tek başına güçlü olsa da, tümünü tek merkezden yönetmek daha üst düzey bir kontrol sağlar.",
      solution:
        "Merkezi Kontrol Sistemi, PrismaCore'un tüm çözümlerini tek bir panel altında toplar. Yöneticiler, işletmenin tüm kritik süreçlerini gerçek zamanlı olarak takip edebilir.",
      details:
        "• Tek Ekranda Görünürlük: Stok, bakım, kalite ve ödeme durumları tek panelde görüntülenir.\n\n• Gerçek Zamanlı Bildirimler: Kritik eşikler (azalan stok, yaklaşan bakım, geciken ödeme) anında bildirilir.\n\n• Modüller Arası Entegrasyon: Bakım malzemeleri otomatik stoktan düşülür, süreçler birbiriyle eşleştirilir.\n\n• Yönetici Raporları: Tüm modüllerden gelen veriler analiz edilerek haftalık/aylık raporlar sunulur.\n\n• Mobil Erişim: Uzaktan tüm süreçler canlı takip edilebilir.",
      benefits: [
        "Tüm süreçler tek merkezden kontrol edilir, bilgi dağınıklığı sona erer",
        "Kararlar veriye dayalı alınır, riskler önceden görülür",
        "Zaman kaybı azalır, yönetim operasyonel iş yükünden kurtulur",
        "Şeffaflık artar, hem çalışan hem de müşteri tarafında güven oluşur"
      ],
      features: [
        "Tek ekranda görünürlük",
        "Gerçek zamanlı bildirimler",
        "Modüller arası entegrasyon",
        "Yönetici raporları",
        "Mobil ve web erişim"
      ],
      usageScenario:
        "Bir fabrika yöneticisi sabah ofisine geldiğinde Merkezi Kontrol Sistemi panelini açar. Depo stok seviyelerini, gün içinde yapılacak bakım görevlerini, kalite kontrol raporlarını, vadesi yaklaşan müşteri ödemelerini tek ekrandan görür. Kritik bir durum varsa (örneğin bir makinenin bakımı gecikmişse veya bir ödeme vadesi aşılmışsa), sistem bunu otomatik bildirimle yöneticinin önüne getirir. Böylece yönetici hem operasyonel detaylara hakim olur hem de stratejik kararlarını güvenle alır."
    },
    {
      id: 'odeme-takip',
      title: "Ödeme Takip Sistemi",
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      problem:
        "Şirketlerde müşteri ödemelerinin manuel olarak takip edilmesi; geciken tahsilatlar, unutulan ödemeler, eksik veya yanlış kayıtlar, nakit akışında belirsizlik gibi sorunlara yol açar. Bu durum işletmenin finansal dengesini bozduğu gibi, müşteri ilişkilerinde de güven kaybı oluşturur. Özellikle birden fazla müşterisi ve sürekli hareketi olan şirketlerde, manuel takip sürdürülebilir olmaktan çıkar.",
      solution:
        "PrismaCore Ödeme Takip Sistemi, müşteri ödemelerini uçtan uca dijitalleştirir ve tahsilat süreçlerini otomatik hale getirir.",
      details:
        "• Fatura Kaydı: Her müşteri için fatura bilgileri sisteme girilir veya ERP'den otomatik alınır.\n\n• Otomatik Hatırlatmalar: Vade tarihi yaklaşan ödemeler için WhatsApp/e-posta hatırlatmaları gönderilir.\n\n• Gecikme Yönetimi: Ödemesi geciken müşteriler için sistem uyarı verir ve yöneticilere bildirim gönderir.\n\n• Tahsilat Raporları: Ödeme oranları, geciken tahsilatlar ve nakit akışı detaylı raporlanır.\n\n• Müşteri Portalı: Müşteriler özel bağlantıdan fatura ve ödeme durumlarını görüntüleyebilir.",
      benefits: [
        "Geciken tahsilatlar azalır, nakit akışı düzenli hale gelir",
        "Ödeme hatırlatma süreçleri otomatikleşir, insan hatası ortadan kalkar",
        "Finansal raporlar netleşir, yöneticiler gerçek veriler üzerinden karar alır",
        "Müşteri memnuniyeti artar, çünkü ödeme süreçleri daha şeffaf ve kolay takip edilebilir hale gelir"
      ],
      features: [
        "Fatura ve ödeme kaydı",
        "Otomatik hatırlatmalar",
        "Gecikme yönetimi",
        "Raporlama ve analiz",
        "Müşteri entegrasyonu",
        "Vade hatırlatmaları",
        "Müşteri ödeme geçmişi",
        "Tahsilat raporları",
        "SMS/Email entegrasyonu"
      ],
      usageScenario:
        "Bir toptan satış firmasında vadesi yaklaşan faturalar için sistem müşterilere otomatik WhatsApp mesajı gönderir. Müşteri ödemesini yaptıktan sonra sistem kaydı günceller ve yönetim panelinde 'tamamlandı' olarak işaretler. Böylece finans departmanı ek bir efor sarf etmez, hiçbir ödeme gözden kaçmaz, firma düzenli bir nakit akışı sağlar."
    }
  ];

  const selectedSolution = solutionId ? solutions.find(s => s.id === solutionId) : null;

  if (selectedSolution) {
    return (
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/cozumler"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Tüm Çözümlere Dön
              </Link>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${selectedSolution.color} shadow-lg`}>
                  <selectedSolution.icon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {selectedSolution.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Problem Statement */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse" />
                  Neden Bu Sistem Gerekli?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {selectedSolution.problem}
                </p>
              </div>

              {/* Solution Description */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                  Sistemimizin İşleyişi
                </h3>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="whitespace-pre-line">{selectedSolution.solution}</p>
                  {selectedSolution.details && (
                    <p className="whitespace-pre-line">{selectedSolution.details}</p>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Temel Özellikler
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedSolution.color}`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                  Sağladığı Kazanımlar
                </h3>
                <div className="space-y-3">
                  {selectedSolution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Scenario */}
              {selectedSolution.usageScenario && (
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3" />
                    Kullanım Senaryosu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {selectedSolution.usageScenario}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="text-center py-8">
                <Link
                  to="/iletisim"
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${selectedSolution.color} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  İletişime Geç
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Tüm çözümler listesi
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Akıllı</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Otomasyon Çözümleri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              İşinize özel tasarlanmış, kullanımı kolay ve etkili otomasyon sistemleri
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} shadow-lg`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {solution.solution}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Temel Özellikler:</h4>
                  {solution.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/cozumler/${solution.id}`}
                  className={`inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r ${solution.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200`}
                >
                  Detayları İncele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hangi Çözüm Size Uygun?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzmanlarımızla görüşerek işinize en uygun otomasyon paketini belirleyin
          </p>
          <Link
            to="/iletisim"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            İletişime Geçin
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
