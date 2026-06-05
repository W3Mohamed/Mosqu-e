import { useState } from 'react';

export default function LocalDonation() {
  const [copied, setCopied] = useState(false);

  const copyCCP = () => {
    navigator.clipboard.writeText('123456789');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
      <h3 className="font-kufi text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
        التبرع من داخل الجزائر
      </h3>
      
      <div className="space-y-4 mb-6 flex-grow">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <p className="text-gray-400 text-xs mb-1">الحساب الجاري (CCP)</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl tracking-wider text-gray-800" dir="ltr">1234567 89</span>
            <button onClick={copyCCP} className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>
              {copied ? 'تم النسخ' : 'نسخ الرقم'}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 font-semibold">باسم: الحساب الجاري لـمسجد صيادة</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-400 text-xs mb-2">الدفع السريع عبر البريد (BaridiMob)</p>
          <div className="w-32 h-32 bg-gray-100 mx-auto rounded-lg border border-dashed flex items-center justify-center border-gray-300">
            <span className="text-xs text-gray-400 font-kufi">QR Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}