import Hero from '../components/home/Hero';
import ProgressSection from '../components/home/ProgressSection';
import NewsPreview from '../components/home/NewsPreview';
import LocalDonation from '../components/donate/LocalDonation';
import DiasporaDonation from '../components/donate/DiasporaDonation';

export default function Home() {
  return (
    <>
      <Hero />
      <ProgressSection />
      <NewsPreview />
      
      {/* Section des Dons qui englobe les deux types de donations */}
      <section id="donate" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-kufi text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              ساهم في بناء المسجد
            </h2>
            <p className="font-kufi text-gray-600 text-lg">
              "مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <LocalDonation />
            <DiasporaDonation />
          </div>
        </div>
      </section>
    </>
  );
}