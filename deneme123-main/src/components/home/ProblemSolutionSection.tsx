import React from 'react';
import { TrendingUp, Bell, FileText, CreditCard, CheckCircle } from 'lucide-react';

const ProblemSolutionSection = () => {
  const solutions = [
    {
      problem: "Stok Sorunları",
      solution: "Gerçek zamanlı takip",
      icon: TrendingUp,
      description: "Stok seviyeleri kritik noktaya geldiğinde otomatik uyarılar",
      color: "from-red-500 to-orange-500"
    },
    {
      problem: "Geciken Bakımlar",
      solution: "WhatsApp hatırlatmaları",
      icon: Bell,
      description: "Bakım zamanları yaklaşırken ekibinize otomatik bildirimler",
      color: "from-yellow-500 to-orange-500"
    },
    {
      problem: "Kalite Problemleri",
      solution: "Otomatik raporlar",
      icon: FileText,
      description: "Kalite metrikleri sürekli izlenir ve raporlanır",
      color: "from-green-500 to-blue-500"
    },
    {
      problem: "Tahsilat Gecikmeleri",
      solution: "Ödeme hatırlatmaları",
      icon: CreditCard,
      description: "Ödeme tarihleri yaklaşırken müşterilere otomatik hatırlatma",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Endüstriyel süreçlerde karşılaştığınız en büyük sorunları, akıllı otomasyon ile çözüme dönüştürüyoruz.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-right flex-1 ml-6">
                  <div className="text-red-600 dark:text-red-400 font-medium text-lg mb-2 group-hover:opacity-0 transition-opacity duration-300">
                    ❌ {item.problem}
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
                    ✅ {item.solution}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full w-full group-hover:w-full group-hover:bg-green-500 transition-all duration-1000 transform origin-left" />
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;