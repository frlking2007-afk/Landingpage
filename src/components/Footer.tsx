import React from 'react';
import { Code2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="font-bold text-xl text-white">ModernWeb</span>
            </div>
            <p className="max-w-xs">
              Biznesingizni rivojlantirish uchun zamonaviy va sifatli raqamli yechimlar.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Bo'limlar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Bosh sahifa</a></li>
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Xizmatlar</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Yordam</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Bog'lanish</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Maxfiylik siyosati</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} ModernWeb. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2 md:mt-0">Toshkent, O'zbekiston</p>
        </div>
      </div>
    </footer>
  );
};
