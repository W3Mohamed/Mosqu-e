import { Link } from 'react-router-dom';

export default function NewsList() {
  // Simule 6 articles pour voir la grille
  const articles = [1, 2, 3, 4, 5, 6].map(id => ({
    id,
    title: `خبر أو مستجد رقم ${id} عن ورشة البناء`,
    date: 'ماي 2026',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600'
  }));

  return (
    <div className="pt-12 pb-24 bg-[var(--color-bg-light)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="font-kufi text-4xl font-bold mb-12 text-center text-gray-900 border-b pb-4">كل الأخبار والمستجدات</h1>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((post) => (
            <Link key={post.id} to={`/news/${post.id}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all block group">
              <div className="h-48 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
              </div>
              <div className="p-6 text-right">
                <span className="text-xs font-bold text-gray-400 mb-2 block">{post.date}</span>
                <h3 className="font-kufi text-lg font-bold text-gray-900">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination simple UI */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 font-bold" disabled>السابق</button>
          <button className="px-4 py-2 rounded-lg text-white font-bold" style={{ backgroundColor: 'var(--color-primary)' }}>1</button>
          <button className="px-4 py-2 rounded-lg bg-white border font-bold hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-lg bg-white border font-bold hover:bg-gray-50">3</button>
          <button className="px-4 py-2 rounded-lg bg-white border font-bold hover:bg-gray-50" style={{ color: 'var(--color-primary)' }}>التالي</button>
        </div>

      </div>
    </div>
  );
}