import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Pour les liens internes vers les détails de chaque étape

export default function ProgressSection() {
  // L'état qui gère combien de cartes afficher
  const [visibleCount, setVisibleCount] = useState(3);

  const milestones = [
    { 
      id: 1, 
      title: 'حفر الأساسات', 
      description: 'تم الانتهاء من حفر ووضع الأساسات المتينة للمسجد وتجهيز الأرضية.',
      status: 'completed', 
      date: 'جانفي 2026' 
    },
    { 
      id: 2, 
      title: 'بناء الطابق الأرضي', 
      description: 'بناء الجدران الأساسية والأعمدة للطابق الأرضي المخصص للرجال.',
      status: 'completed', 
      date: 'مارس 2026' 
    },
    { 
      id: 3, 
      title: 'صب خرسانة السقف', 
      description: 'نحن الآن في مرحلة صب سقف الطابق الأول. وتتطلب هذه المرحلة توفير الإسمنت والحديد.',
      status: 'current', 
      date: 'جوان 2026' 
    },
    { 
      id: 4, 
      title: 'أشغال التشطيب (الطلاء والبلاط)', 
      description: 'البدء في أعمال التلبيس والطلاء وتلبيس الأرضيات بالبلاط.',
      status: 'pending', 
      date: 'قريباً' 
    },
    { 
      id: 5, 
      title: 'بناء المئذنة والتهيئة الخارجية', 
      description: 'بناء المئذنة وتهيئة ساحة المسجد وأماكن الوضوء.',
      status: 'pending', 
      date: 'قريباً' 
    },
  ];

  // On coupe le tableau pour n'afficher que le nombre voulu
  const visibleMilestones = milestones.slice(0, visibleCount);

  return (
    <section id="progress" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-kufi text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            مراحل إنجاز المشروع
          </h2>
          <p className="font-kufi text-gray-500 text-lg">تابع معنا مسيرة البناء خطوة بخطوة</p>
        </motion.div>

        <div className="relative border-r-4 border-gray-200 pr-8 ml-4 md:ml-0 md:pr-12">
          
          <AnimatePresence>
            {visibleMilestones.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }} // Animation si on masque
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
                className="mb-12 relative"
              >
                {/* Le point (Node) */}
                <div 
                  className={`absolute -right-[43px] md:-right-[59px] w-6 h-6 rounded-full border-4 border-white shadow-md
                    ${step.status === 'completed' ? 'bg-[var(--color-primary)]' : 
                      step.status === 'current' ? 'bg-[var(--color-accent)] animate-pulse' : 'bg-gray-300'}`
                  }
                ></div>

                {/* La Carte */}
                <div className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1 border-t-4 
                  ${step.status === 'current' ? 'bg-white border-[var(--color-accent)] shadow-[var(--color-accent)]/20' : 
                    step.status === 'completed' ? 'bg-white border-[var(--color-primary)]' : 'bg-gray-50 border-gray-300'}`}
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-3 gap-2">
                    <h3 className={`font-kufi text-xl font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>
                      {step.title}
                    </h3>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full w-max
                      ${step.status === 'completed' ? 'bg-green-100 text-green-700' : 
                        step.status === 'current' ? 'bg-amber-100 text-amber-700' : 'bg-gray-200 text-gray-500'}`}
                    >
                      {step.date}
                    </span>
                  </div>
                  
                  <p className={`text-sm mb-4 leading-relaxed ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step.description}
                  </p>

                  {/* Bouton "Voir les détails" intégré dans chaque carte */}
                  <Link to={`/progress/${step.id}`} className="flex items-center gap-1 text-sm font-bold hover:underline transition-all" style={{ color: 'var(--color-primary)' }}>
                    <span>عرض التفاصيل (Détails)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rtl:rotate-180">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {/* Bouton "Voir plus" en bas de la ligne */}
        {visibleCount < milestones.length && (
          <div className="flex justify-center mt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(milestones.length)}
              className="font-kufi px-6 py-2.5 rounded-full border-2 text-gray-600 font-bold hover:bg-gray-50 transition-colors shadow-sm"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              عرض المزيد (Afficher plus)
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}