export default function Footer() {
  return (
    <footer className="text-white pt-16 pb-8" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Colonne 1 : À propos */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rotate-45 flex items-center justify-center bg-white shadow-lg">
                <div className="-rotate-45 font-kufi font-bold" style={{ color: 'var(--color-primary)' }}>م</div>
              </div>
              <h3 className="font-kufi text-2xl font-bold text-[var(--color-accent)]">مسجد صيادة</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              جمعية دينية معتمدة تهدف إلى بناء مسجد ومدرسة قرآنية. 
              نسعى لنكون منارة للعلم والعبادة وخدمة المجتمع في صيادة ومستغانم.
            </p>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="font-kufi text-xl font-bold mb-6 border-b-2 border-[var(--color-accent)] inline-block pb-1">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">الرئيسية</a></li>
              <li><a href="#progress" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">نسبة الإنجاز</a></li>
              <li><a href="#donate" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">طرق التبرع</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-[var(--color-accent)] transition-colors">آخر الأخبار</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact (Corrigé pour RTL parfait et sans emojis) */}
          <div>
            <h4 className="font-kufi text-xl font-bold mb-6 border-b-2 border-[var(--color-accent)] inline-block pb-1">تواصل معنا</h4>
            
            <ul className="space-y-4">
              {/* Adresse Physique */}
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">بلدية صيادة، مستغانم 27045، الجزائر</span>
              </li>

              {/* Numéro de téléphone */}
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-accent)] shrink-0">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {/* Le text-start s'assure que le texte reste collé à l'icône, et le dir="ltr" garantit que l'indicatif +213 se lit dans le bon sens */}
                <span className="text-gray-300 text-start flex-grow" dir="ltr">+213 550 00 00 00</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[var(--color-accent)] shrink-0">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="text-gray-300 text-start flex-grow font-sans text-sm mt-1" dir="ltr">contact@mosquee-sayada.dz</span>
              </li>
            </ul>

          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-kufi">
            © 2026 جميع الحقوق محفوظة - جمعية مسجد صيادة.
          </p>
        </div>
      </div>
    </footer>
  );
}