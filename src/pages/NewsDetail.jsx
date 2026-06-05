import { useParams, Link } from 'react-router-dom';

export default function NewsDetail() {
  const { id } = useParams();

  return (
    <article className="pt-8 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/news" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] font-kufi font-bold mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
          العودة للأخبار
        </Link>

        <h1 className="font-kufi text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          عنوان الخبر التفصيلي رقم {id} حول وصول الإمدادات
        </h1>
        
        <div className="flex items-center gap-4 mb-8 text-gray-500 font-bold border-b border-gray-100 pb-6">
          <span>نشر في: 5 جوان 2026</span>
          <span>•</span>
          <span>بواسطة: إدارة الجمعية</span>
        </div>

        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200" alt="News" className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg" />

        <div className="prose prose-lg text-gray-700 max-w-none">
          <p className="leading-loose mb-6">
            بسم الله الرحمن الرحيم. نحمد الله تعالى على تيسير الأمور حيث تم اليوم استلام الدفعة الجديدة من المواد اللازمة لمواصلة البناء. 
            هذا الإنجاز لم يكن ليتحقق لولا فضل الله ثم تبرعات المحسنين من داخل وخارج الوطن.
          </p>
          <p className="leading-loose">
            ندعو الجميع لمواصلة الدعم لأن المرحلة القادمة تتطلب تكاتفاً أكبر لإنهاء الأشغال الكبرى قبل حلول فصل الشتاء.
          </p>
        </div>

      </div>
    </article>
  );
}