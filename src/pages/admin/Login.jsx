import { useState } from 'react';
// Tu peux importer un hook useNavigate de react-router-dom pour rediriger après connexion
// import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, plus tard, on fera l'appel vers ton API Express (Back-end)
    console.log("Tentative de connexion avec :", email);
    alert('Le back-end n\'est pas encore connecté !');
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        
        {/* En-tête du formulaire */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rotate-45 flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="-rotate-45 text-white font-kufi font-bold text-2xl" style={{ color: 'var(--color-accent)' }}>
              م
            </div>
          </div>
          <h2 className="font-kufi text-2xl font-bold text-gray-900">
            لوحة الإدارة
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            تسجيل الدخول خاص بأعضاء الجمعية
          </p>
        </div>

        {/* Formulaire */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">
              البريد الإلكتروني (Email)
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:outline-none transition-colors"
              style={{ focusRingColor: 'var(--color-primary)' }}
              placeholder="admin@mosquee-sayada.dz"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 font-kufi">
              كلمة المرور (Mot de passe)
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:outline-none transition-colors"
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[var(--color-primary)]" />
              <span className="text-gray-600">تذكرني (Se souvenir de moi)</span>
            </label>
            <a href="#" className="font-bold hover:underline" style={{ color: 'var(--color-primary)' }}>
              نسيت كلمة المرور؟
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-white font-kufi font-bold text-lg hover:-translate-y-0.5 transition-all"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            دخول (Connexion)
          </button>
        </form>

        {/* Message de sécurité */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            هذا النظام محمي. يرجى عدم محاولة الدخول إذا لم تكن مخولاً بذلك.
          </p>
        </div>
        
      </div>
    </div>
  );
}