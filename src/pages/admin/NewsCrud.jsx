import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';

export default function NewsCrud() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Nouveaux états pour gérer le fichier image et son aperçu
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [articles, setArticles] = useState([
    { id: 1, title: 'وصول شحنة الـحديد اليوم', date: '5 جوان 2026', status: 'منشور (Publié)' },
    { id: 2, title: 'إتمام صب خرسانة الأرضية بالكامل', date: '28 ماي 2026', status: 'منشور (Publié)' },
    { id: 3, title: 'تحديث حول ميزانية المرحلة الثانية', date: '15 ماي 2026', status: 'مسودة (Brouillon)' },
  ]);

  const handleDelete = (id) => {
    if(window.confirm('هل أنت متأكد من حذف هذا الخبر؟ (Confirmer la suppression ?)')) {
      setArticles(articles.filter(article => article.id !== id));
    }
  };

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => {
    setIsModalOpen(false);
    // On nettoie le formulaire quand on ferme
    setImageFile(null);
    setImagePreview(null);
  };

  // Fonction pour gérer la sélection du fichier et créer l'aperçu
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Crée une URL locale temporaire pour afficher l'image sélectionnée
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  // Fonction de soumission (Préparée pour ton futur backend Express)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pour envoyer un fichier au backend, on n'utilise pas du JSON classique, 
    // mais un objet FormData
    const formData = new FormData();
    // formData.append('title', e.target.title.value);
    // formData.append('content', e.target.content.value);
    // formData.append('status', e.target.status.value);
    if (imageFile) {
      // formData.append('image', imageFile);
    }

    console.log("Fichier prêt à être envoyé au serveur :", imageFile);
    alert('Prêt pour l\'envoi au backend avec multer !');
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0 md:ps-64 transition-all duration-300">
        
        <header className="bg-white shadow-sm border-b border-gray-100 h-20 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsSidebarOpen(true)}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h1 className="font-kufi text-xl md:text-2xl font-bold text-gray-800">إدارة الأخبار (Actualités)</h1>
          </div>
          
          <button onClick={openModal} className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg font-kufi font-bold shadow-md hover:bg-emerald-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
            <span className="hidden sm:inline">إضافة خبر جديد</span>
          </button>
        </header>

        <div className="p-4 sm:p-8 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-kufi text-sm">
                    <th className="p-4 font-bold">الرقم</th>
                    <th className="p-4 font-bold">عنوان الخبر</th>
                    <th className="p-4 font-bold">التاريخ</th>
                    <th className="p-4 font-bold">الحالة</th>
                    <th className="p-4 font-bold text-center">إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map((article) => (
                    <tr key={article.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-bold text-gray-700">#{article.id}</td>
                      <td className="p-4 font-kufi font-bold text-gray-900">{article.title}</td>
                      <td className="p-4 text-gray-500 text-sm">{article.date}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${article.status.includes('منشور') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="p-4 flex items-center justify-center gap-2">
                        <button onClick={openModal} className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100" title="تعديل"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg></button>
                        <button onClick={() => handleDelete(article.id)} className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100" title="حذف"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* MODALE AVEC UPLOAD DE FICHIER */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col" dir="rtl">
            
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50 shrink-0">
              <h3 className="font-kufi text-xl font-bold text-gray-800">إضافة / تعديل خبر</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <form className="p-6 space-y-4 overflow-y-auto" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">عنوان الخبر (Titre)</label>
                <input name="title" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" placeholder="اكتب عنوان الخبر هنا..." required />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">تفاصيل الخبر (Contenu)</label>
                <textarea name="content" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" placeholder="اكتب التفاصيل..." required></textarea>
              </div>

              {/* Nouveau champ pour l'upload de fichier */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">صورة الخبر (Upload Image)</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-emerald-50 file:text-[var(--color-primary)] hover:file:bg-emerald-100 transition-colors focus:outline-none" 
                  dir="ltr"
                />
                
                {/* Affichage de l'aperçu si une image est sélectionnée */}
                {imagePreview && (
                  <div className="mt-4 relative rounded-xl overflow-hidden border border-gray-200">
                    <img src={imagePreview} alt="Aperçu" className="w-full h-48 object-cover" />
                    <button 
                      type="button"
                      onClick={() => { setImageFile(null); setImagePreview(null); }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">الحالة (Statut)</label>
                <select name="status" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none">
                  <option value="publie">منشور (Publié)</option>
                  <option value="brouillon">مسودة (Brouillon)</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6 shrink-0">
                <button type="button" onClick={closeModal} className="px-6 py-2 rounded-lg text-gray-600 bg-gray-100 font-bold hover:bg-gray-200 transition-colors font-kufi">
                  إلغاء
                </button>
                <button type="submit" className="px-6 py-2 rounded-lg text-white font-bold transition-colors font-kufi" style={{ backgroundColor: 'var(--color-primary)' }}>
                  حفظ الخبر
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}