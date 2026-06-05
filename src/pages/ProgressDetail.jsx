import { useParams, Link } from 'react-router-dom';

export default function ProgressDetail() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  // Plus tard, tu feras un fetch(api/progress/id) ici. Pour l'instant on simule :
  const stepDetail = {
    title: `تفاصيل المرحلة رقم ${id}: صب خرسانة السقف`,
    date: 'جوان 2026',
    status: 'في الإنجاز',
    description: 'نحن الآن في مرحلة صب سقف الطابق الأول. تتطلب هذه المرحلة توفير كميات كبيرة من الإسمنت والحديد. نشكر كل من ساهم معنا في الوصول إلى هذه المرحلة المتقدمة.',
    mainImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400',
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=400'
    ]
  };

  return (
    <div className="pt-8 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bouton retour */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-primary)] font-kufi font-bold mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
          العودة للرئيسية
        </Link>

        {/* En-tête */}
        <h1 className="font-kufi text-3xl md:text-5xl font-bold mb-4 text-gray-900">{stepDetail.title}</h1>
        <div className="flex gap-4 mb-8 border-b border-gray-100 pb-6">
          <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-bold font-kufi">{stepDetail.status}</span>
          <span className="text-gray-500 font-bold">{stepDetail.date}</span>
        </div>

        {/* Image principale */}
        <img src={stepDetail.mainImage} alt="Chantier" className="w-full h-64 md:h-[400px] object-cover rounded-3xl mb-8 shadow-md" />

        {/* Contenu */}
        <div className="prose prose-lg text-gray-700 max-w-none font-kufi mb-12">
          <p className="leading-loose text-xl">{stepDetail.description}</p>
        </div>

        {/* Galerie photos */}
        <h3 className="font-kufi text-2xl font-bold mb-6 border-b-2 border-[var(--color-primary)] inline-block pb-2">معرض الصور</h3>
        <div className="grid grid-cols-2 gap-4">
          {stepDetail.gallery.map((img, idx) => (
            <img key={idx} src={img} alt="Galerie" className="w-full h-48 object-cover rounded-xl shadow-sm hover:scale-105 transition-transform" />
          ))}
        </div>

      </div>
    </div>
  );
}