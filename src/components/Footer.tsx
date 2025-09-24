import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/favicon site.png" 
                alt="PrismaCore.ai Logo" 
                className="h-12 w-12 object-contain select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
              />
             <h3 className="text-lg font-bold text-white">
                PrismaCore.ai
              </h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Yeni Nesil Endüstriyel Otomasyon. Zamanı geri kazandıran, üretimi hızlandıran, 
              hataları sıfırlayan akıllı çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/prisma-core-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/cozumler" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Çözümler
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@prismacore.ai" className="text-gray-300 hover:text-white transition-colors duration-200">
                  info@prismacore.ai
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+90 (546) 973 64 27</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/905469736427"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                WhatsApp İletişim
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PrismaCore.ai. Tüm hakları saklıdır. | 
            <span className="text-blue-400 font-medium"> Yeni Nesil Endüstriyel Otomasyon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;