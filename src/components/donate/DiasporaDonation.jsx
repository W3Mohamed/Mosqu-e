export default function DiasporaDonation() {
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full justify-between">
      <div>
        <h3 className="font-kufi text-xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>
          التبرع من خارج الجزائر (Diaspora)
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          إلى جاليتنا الكرام في الخارج، يمكنكم المساهمة ودعم إعمار بيت الله عبر البطاقات البنكية الدولية بكل أمان من خلال رابط الجمعية الرسمي عـلى منصة الدفع العالمية.
        </p>
      </div>

      <div className="space-y-4">
        <a 
          href="#" 
          className="block text-center font-kufi w-full py-4 rounded-xl text-white font-bold text-lg shadow-md hover:-translate-y-0.5 transition-transform"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          المساهمة عبر رابط CotizUp
        </a>
        <p className="text-center text-xs text-gray-400" dir="ltr">Secured payment via Stripe / PayPal</p>
      </div>
    </div>
  );
}