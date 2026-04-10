"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { useParams } from 'next/navigation';

export default function FloatingWhatsApp() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const isArabic = locale === 'ar';
  const whatsappNumber = "+97333333333";
  const message = isArabic ? "مرحباً فرحتي! أحتاج إلى مساعدة في طلب هدية فاخرة اليوم." : "Hello Farhati! I need a luxury gift delivered today.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all cursor-pointer group"
    >
       <MessageCircle size={32} />
       
       <div className={`absolute ${isArabic ? 'right-full mr-4 origin-right translate-x-4 group-hover:translate-x-0' : 'left-full ml-4 origin-left -translate-x-4 group-hover:translate-x-0'} bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none transform duration-300`}>
         {isArabic ? "تحتاج مساعدة؟ تحدث معنا" : "Need Help? Chat Now"}
         <div className={`absolute top-1/2 ${isArabic ? '-right-2' : '-left-2'} transform -translate-y-1/2 w-4 h-4 bg-white rotate-45`} />
       </div>
    </motion.a>
  );
}
