import heroImage from '../../assets/mosque.jpg';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Fond décoratif subtil */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundColor: 'var(--color-primary)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bloc Texte (RTL : S'affiche à droite sur Desktop) */}
          <div className="text-right flex flex-col gap-6 z-10">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold w-max"
              style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)', color: 'var(--color-accent)' }}
            >
              مشروع خيري جاري الإنجاز
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              معاً لنبني بيت الله في <br/>
              <span style={{ color: 'var(--color-primary)' }}>صيادة، مستغانم</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl">
              ساهم معنا في بناء مسجد الحي. صدقة جارية لك ولمن تحب. 
              تابع مراحل الإنجاز وتبرع بكل شفافية لبناء هذا الصرح الديني والتعليمي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="#donate" 
                className="px-8 py-4 rounded-xl text-white font-bold text-lg text-center shadow-lg hover:-translate-y-1 transition-transform duration-300"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                ساهم الآن (Faire un don)
              </a>
              <a 
                href="#progress" 
                className="px-8 py-4 rounded-xl font-bold text-lg text-center border-2 transition-colors duration-300 hover:bg-gray-50"
                style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
              >
                شاهد نسبة الإنجاز
              </a>
            </div>
          </div>

          {/* Bloc Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:h-[500px]">
            {/* Remplacer le src par ton image de maquette 3D de la mosquée */}
            <img 
              src={heroImage}
              alt="مشروع بناء مسجد صيادة بمستغانم" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            
            {/* Petit badge superposé sur l'image */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
              <p className="text-sm text-gray-500 font-semibold mb-1">الهدف الحالي</p>
              <p className="text-xl font-bold" style={{ color: 'var(--color-accent)' }}>استكمال الطابق الأول</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}