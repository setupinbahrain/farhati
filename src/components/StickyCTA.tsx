"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function StickyCTA() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const isArabic = locale === 'ar';

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.05)] z-50 md:hidden flex gap-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
      <button className="flex-1 bg-primary text-white font-bold py-3 rounded-xl shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        {isArabic ? "اطلب الآن" : "Order Now"}
      </button>
      <a href="https://wa.me/9733xxxxxxx" target="_blank" rel="noopener noreferrer" className="flex-none bg-[#25D366] text-white p-3 rounded-xl shadow-md active:scale-95 transition-transform flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
      </a>
    </div>
  );
}
