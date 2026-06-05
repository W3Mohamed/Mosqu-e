import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Importation du style par défaut de Splide
import '@splidejs/react-splide/css';

export default function NewsPreview() {
  const articles = [
    { id: 1, title: 'وصول شحنة الـحديد اليوم', date: '5 جوان 2026', excerpt: 'الحمد لله تم استقبال 15 طن من حديد التسليح اللازم لأعمدة الطابق الأول بفضل تبرعاتكم...', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: 'إتمام صب خرسانة الأرضية بالكامل', date: '28 ماي 2026', excerpt: 'بفضل الله ثم بفضل جهود المحسنين والمتطوعين، تم الانتهاء من صب خرسانة الأرضية الأساسية...', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
    { id: 3, title: 'انطلاق أشغال الحفر والأساسات', date: '10 أفريل 2026', excerpt: 'بداية أشغال الحفر بحضور مهندسي الحي واللجنة الدينية المكلفة بمتابعة المشروع...', image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&auto=format&fit=crop' },
    { id: 4, title: 'اجتماع اللجنة الدينية', date: '1 أفريل 2026', excerpt: 'تم عقد اجتماع لتحديد ميزانية المرحلة الأولى وتعيين المشرفين على الورشة...', image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop' }
  ];

  return (
    <section id="news" className="py-24" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-kufi text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
              آخر أخبار ومستجدات الورشة
            </h2>
            <p className="font-kufi text-gray-500 text-lg">تابع توثيق العمل أولاً بأول</p>
          </div>
          <Link to="/news" className="hidden md:flex items-center gap-2 font-kufi font-bold hover:underline" style={{ color: 'var(--color-accent)' }}>
            عرض كل الأخبار
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 rtl:rotate-180"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
          </Link>
        </div>

        {/* Le Carrousel Splide */}
        <Splide 
          options={{
            type: 'slide',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            direction: 'rtl', // Indispensable pour l'arabe
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1, arrows: false } // Sur mobile, on cache souvent les flèches pour swiper
            }
          }}
          className="pb-12" // Ajoute de l'espace en bas pour les points de pagination
        >
          {articles.map((post) => (
            <SplideSlide key={post.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow text-right">
                  <span className="text-xs font-bold text-gray-400 mb-2">{post.date}</span>
                  <h3 className="font-kufi text-lg font-bold mb-3 text-gray-900 line-clamp-1">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                  <Link to={`/news/${post.id}`} className="font-kufi text-sm font-bold flex items-center gap-1 mt-auto self-start" style={{ color: 'var(--color-primary)' }}>
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/news" className="font-kufi font-bold text-lg inline-block py-3 px-8 rounded-full text-white shadow-md" style={{ backgroundColor: 'var(--color-accent)' }}>
            عرض كل الأخبار
          </Link>
        </div>

      </div>
    </section>
  );
}