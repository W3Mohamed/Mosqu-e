import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('العربية');

  const navLinks = [
    { name: 'الرئيسية', href: '/' }, // J'ai remis les vrais liens vers la page d'accueil
    { name: 'نسبة الإنجاز', href: '/#progress' },
    { name: 'آخر الأخبار', href: '/news' },
  ];

  const languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-accent)]/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rotate-45 flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
              <div className="-rotate-45 text-white font-kufi font-bold text-xl" style={{ color: 'var(--color-accent)' }}>م</div>
            </div>
            <div>
              <h1 className="font-kufi font-bold text-2xl" style={{ color: 'var(--color-primary)' }}>مسجد صيادة</h1>
              <p className="font-kufi text-sm text-gray-500">مشروع بناء وإعمار</p>
            </div>
          </div>

          {/* =============================== */}
          {/* MENU BUREAU (DESKTOP)           */}
          {/* =============================== */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="font-kufi text-gray-700 hover:text-[var(--color-primary)] font-bold text-lg transition-colors duration-200">
                {link.name}
              </a>
            ))}

            {/* Sélecteur de Langue Bureau */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-gray-600 hover:text-[var(--color-primary)] transition-colors font-kufi font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <span>{currentLang}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}>
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute start-0 mt-4 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang.label); setIsLangOpen(false); }}
                      className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)] font-kufi"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="/#donate" className="font-kufi px-8 py-2.5 rounded-sm text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
              تبرع الآن
            </a>
          </div>

          {/* =============================== */}
          {/* MENU MOBILE                     */}
          {/* =============================== */}
          <div className="md:hidden flex items-center gap-4">
             
             {/* Sélecteur de Langue Mobile (CORRIGÉ) */}
             <div className="relative">
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="text-gray-600 focus:outline-none flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </button>

                {/* Dropdown Mobile */}
                {isLangOpen && (
                  <div className="absolute end-0 mt-4 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setCurrentLang(lang.label); setIsLangOpen(false); }}
                        className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)] font-kufi"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
             </div>

            {/* Bouton Hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Déroulant Hamburger Mobile */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4 px-2 pt-4 border-t border-gray-100">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} onClick={() => setIsOpen(false)} className="font-kufi block text-gray-700 font-bold text-lg hover:bg-gray-50 p-2 rounded-md">
                  {link.name}
                </a>
              ))}
              <a href="/#donate" onClick={() => setIsOpen(false)} className="font-kufi block text-center px-4 py-3 rounded-lg text-white font-bold shadow-md mt-4" style={{ backgroundColor: 'var(--color-accent)' }}>
                تبرع الآن
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}