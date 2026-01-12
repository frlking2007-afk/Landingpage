import { motion } from 'framer-motion';
import { Rocket, Palette, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: 'Tezkor Ishlash',
    description: "Veb-saytlarimiz eng so'nggi texnologiyalar asosida optimallashtirilgan bo'lib, juda tez yuklanadi.",
    color: 'bg-blue-500'
  },
  {
    icon: <Palette className="h-6 w-6 text-white" />,
    title: 'Zamonaviy Dizayn',
    description: "Foydalanuvchi tajribasiga asoslangan, ko'zga yoqimli va zamonaviy UI/UX dizaynlar.",
    color: 'bg-purple-500'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-white" />,
    title: 'Moslashuvchanlik',
    description: "Barcha qurilmalarda (mobil, planshet, kompyuter) ideal ko'rinish va ishlash kafolati.",
    color: 'bg-pink-500'
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Afzalliklarimiz</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nega aynan bizni tanlashingiz kerak?
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Biz har bir loyihaga individual yondashamiz va eng yuqori sifatni ta'minlaymiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
