export default function PrayerTimesBar() {
  const prayers = [
    { name: 'الفجر', time: '04:15' },
    { name: 'الظهر', time: '13:05' },
    { name: 'العصر', time: '16:45' },
    { name: 'المغرب', time: '20:10' },
    { name: 'العشاء', time: '21:40' },
  ];

  return (
    <div 
      className="text-white text-sm py-2 px-4 shadow-inner"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        
        {/* Date du jour (Hijri + Grégorien) */}
        <div className="font-kufi font-semibold opacity-90 flex gap-2 items-center">
          <span>19 ذو الحجة 1447</span>
          <span className="text-gray-300">|</span>
          <span>5 جوان 2026</span>
        </div>

        {/* Horaires */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 hide-scrollbar">
          {prayers.map((prayer, index) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-kufi font-bold text-yellow-500">{prayer.name}</span>
              <span className="font-bold tracking-wider">{prayer.time}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}