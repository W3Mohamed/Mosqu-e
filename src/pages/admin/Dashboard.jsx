import { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = [
    { title: 'إجمالي التبرعات (Dons)', value: '1,250,000 د.ج', color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'نسبة الإنجاز (Avancement)', value: '35%', color: 'text-[var(--color-primary)]', bg: 'bg-emerald-100' },
    { title: 'الأخبار المنشورة (Actualités)', value: '12', color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'الزوار هذا الشهر (Visites)', value: '3,450', color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      
      {/* On passe l'état au Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Le contenu principal prend toute la largeur sur mobile, et laisse 64 unités à droite sur Desktop (ps-64) */}
      <main className="flex-1 flex flex-col min-w-0 md:ps-64 transition-all duration-300">
        
        {/* Topbar Admin */}
        <header className="bg-white shadow-sm border-b border-gray-100 h-20 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4">
            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden text-gray-600 hover:text-[var(--color-primary)] focus:outline-none"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-kufi text-xl md:text-2xl font-bold text-gray-800">الرئيسية</h1>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:block font-kufi font-bold text-gray-600 text-sm">مرحباً، المشرف</span>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-[var(--color-primary)] overflow-hidden shadow-sm">
              <img src="https://ui-avatars.com/api/?name=Admin&background=064e3b&color=fff" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Contenu du Dashboard */}
        <div className="p-4 sm:p-8 overflow-y-auto">
          
          {/* Grille des statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 font-kufi font-bold text-sm mb-1">{stat.title}</p>
                  <p className={`font-bold text-xl sm:text-2xl ${stat.color}`} dir="ltr">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex shrink-0 items-center justify-center ${stat.bg}`}>
                  <svg className={`w-6 h-6 ${stat.color} fill-current`} viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Section d'activité récente */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-kufi text-lg font-bold text-gray-800 mb-6 border-b pb-4">آخر النشاطات</h3>
            <div className="space-y-6">
              {[
                { action: 'تم إضافة خبر جديد:', target: '"وصول شحنة الحديد"', time: 'منذ ساعتين' },
                { action: 'تم تحديث نسبة الإنجاز إلى:', target: '35%', time: 'أمس' },
                { action: 'تم تحديث قائمة مواد البناء المطلوبة', target: '', time: 'منذ 3 أيام' }
              ].map((log, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="hidden sm:block w-3 h-3 rounded-full bg-[var(--color-accent)] shrink-0"></div>
                  <p className="font-kufi text-sm sm:text-base text-gray-700 flex-1">
                    <span className="sm:hidden inline-block w-2 h-2 rounded-full bg-[var(--color-accent)] ml-2"></span>
                    {log.action} <span className="font-bold">{log.target}</span>
                  </p>
                  <span className="text-xs sm:text-sm text-gray-400 font-bold self-start sm:self-auto">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}