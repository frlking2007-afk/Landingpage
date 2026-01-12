import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Biznesingiz uchun <span className="text-indigo-600">zamonaviy yechimlar</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg">
              Sizning brendingizni yangi bosqichga olib chiquvchi, tezkor va chiroyli veb-saytlar yaratamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Buyurtma berish
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Ishlarimizni ko'rish
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Modern Workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">100+ Loyihalar</p>
                  <p className="text-sm text-gray-500">Muvaffaqiyatli yakunlangan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
