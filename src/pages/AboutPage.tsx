import React, { useState } from 'react';
import { Users, Target, Globe, CheckCircle, Linkedin, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const [ulusBartuImageError, setUlusBartuImageError] = useState(false);

  const timeline = [
    {
      year: "2023",
      title: "İlk Adımlar",
      description: "Endüstriyel otomasyonda karşılaşılan sorunlara çözüm üretme fikri doğdu. Bu dönemde proje için araştırmalar yapıldı ve temel konsept oluşturuldu."
    },
    {
      year: "2023 Q4",
      title: "Pilot Çalışmalar",
      description: "Farklı sektörlerde pilot uygulamalar gerçekleştirildi. Bu çalışmalar, ürünün temel yapı taşlarını oluşturdu ve sistemin ilk işleyiş modeli test edildi."
    },
    {
      year: "2024 Q1",
      title: "Ürün Geliştirme",
      description: "Pilot projelerden elde edilen geri bildirimlerle otomasyon paketleri geliştirildi. Süreçler daha kararlı, kullanıcı dostu ve ölçeklenebilir hale getirildi."
    },
    {
      year: "2025 Q3",
      title: "Pilot Projeler ve Saha Deneyimi",
      description: "Çeşitli şirketlerle yapılan pilot çalışmalar genişletildi. Farklı sektörlerdeki uygulamalar sayesinde sistemin sahadaki etkisi kanıtlandı, performansı test edildi ve gerçek kullanım senaryolarında olgunlaştırıldı."
    },
    {
      year: "2025 Q4",
      title: "Resmi Kuruluş ve Gelecek Planları",
      description: "PrismaCore resmen kuruldu. Şirketin odağı, Türkiye'deki başarıyı Avrupa ve MENA pazarına açılarak daha geniş bir alana taşımak."
    }
  ];

  const founders = [
    {
      name: "Ulus Bartu",
      title: "Kurucu Ortak & Proje Müdürü",
      description: "10+ yıl endüstriyel otomasyon deneyimi. Önceki kariyerinde 500+ projeyi başarıyla tamamladı.",
      avatar: "/11111111111111.png"
    },
    {
      name: "Ahmet Efe",
      title: "Kurucu Ortak & Proje Müdürü", 
      description: "Yazılım geliştirme ve sistem entegrasyonu uzmanı. AI ve makine öğrenmesi alanında uzman.",
      avatar: "/232323.png"
    },
    {
      name: "Cengiz Özkan",
      title: "Proje Danışmanı",
      description: "Endüstriyel satış ve iş geliştirme alanında 15+ yıl deneyim. Müşteri ilişkileri ve pazar stratejileri uzmanı.",
      avatar: "/AabCExSVT8YGvJgBJTcHa.jpeg"
    }
  ];

  const values = [
    {
      title: "Güvenilirlik",
      description: "İş ortaklarımızın kritik süreçlerini gönül rahatlığıyla emanet edebilecekleri, şeffaf ve sürdürülebilir çözümler sunuyoruz.",
      icon: CheckCircle
    },
    {
      title: "Yenilikçilik", 
      description: "En yeni teknolojileri kullanarak sürekli gelişen, geleceğe hazır ve rekabet avantajı sağlayan otomasyon sistemleri geliştiriyoruz.",
      icon: Target
    },
    {
      title: "Verimlilik",
      description: "Kaynakları en doğru şekilde kullanarak maliyetleri azaltıyor, iş gücünü stratejik noktalara yönlendiriyor ve işletmelere maksimum fayda sağlıyoruz.",
      icon: TrendingUp
    },
    {
      title: "İnsana Odaklılık",
      description: "Teknolojinin her zaman insana hizmet etmesi gerektiğine inanıyoruz. Çözümlerimizi, kullanıcı deneyimini merkeze alarak yalın, anlaşılır ve erişilebilir şekilde tasarlıyoruz.",
      icon: Users
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Endüstrinin</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Dijital Partneri
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Manuel süreçleri ortadan kaldırarak, endüstriyel işletmelerin verimliliğini artırıyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Misyonumuz</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Endüstriyel işletmelerde manuel hataları ortadan kaldırmak, süreçleri optimize etmek ve 
                çalışanların zamanını daha değerli işlere ayırmasını sağlamak. Her şirkete özel, 
                kullanımı kolay ve etkili otomasyon çözümleri sunuyoruz.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Vizyonumuz</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                2030 yılına kadar Avrupa ve MENA bölgesinin en güvenilir endüstriyel otomasyon ortağı olmak. 
                Binlerce şirketin dijital dönüşümüne öncülük ederek, endüstrinin geleceğini şekillendirmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hikayemiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Küçük bir fikirden başlayarak, endüstriyel otomasyonda devrim yaratan bir hikaye
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
              
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Kurucularımız
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Alanında uzman, deneyimli kurucularımız endüstriyel otomasyon alanındaki birikimleriyle 
              PrismaCore'u hayata geçirdiler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-xl border-4 border-white dark:border-gray-800 select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {founder.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {founder.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Her çözümümüzde ve müşteri ilişkimizde rehber aldığımız temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Geleceği Birlikte İnşa Edelim
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Endüstriyel otomasyonda yeni bir çağın kapılarını aralamak için bizimle iletişime geçin
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;