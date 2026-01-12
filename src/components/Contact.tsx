import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Biznesingiz uchun sayt kerakmi?
            </h2>
            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              Bizga murojaat qiling va biznesingiz rivoji uchun eng yaxshi veb-yechimni toping. 
              Bepul konsultatsiya va loyiha narxini bilish uchun formani to'ldiring.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-800 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-indigo-300">Telefon</p>
                  <p className="font-semibold">+998 95 647 34 44</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-indigo-300">Email</p>
                  <p className="font-semibold">hvnkompaniyasi@gmail.com</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ismingiz
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon raqamingiz
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Xabar
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Loyiha haqida qisqacha..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-bold transition-colors duration-200"
              >
                Yuborish <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
