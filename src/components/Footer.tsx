import Link from "next/link";
import Image from "next/image";

export default function Footer({ locale = 'en' }: { locale?: string }) {
  const isArabic = locale === 'ar';

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t-4 border-trust">
      <div className={`max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 ${isArabic ? 'text-right' : ''}`}>
        <div className="col-span-2 md:col-span-1">
          <Link href={isArabic ? "/ar" : "/"} className={`block mb-6 relative w-32 h-32 ${isArabic ? 'mr-auto ml-0 md:mr-0 md:ml-auto' : ''}`}>
             <Image src="/images/final_transparent_logo.png" alt="Farhati Logo" fill className="object-contain drop-shadow-md" />
          </Link>
          <p className="text-gray-200 text-sm mb-6 leading-relaxed">
            {isArabic ? "الوجهة العُليا للهدايا في البحرين. أفضل المنسقين والحرفيين يسلمون مشاعرك إلى باب المنزل." : "Bahrain's premier gifting authority. Master florists, artisanal bakers, and luxury curation delivered to your door."}
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">{isArabic ? "الأقسام" : "Categories"}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href={isArabic ? "/ar/flowers-delivery-bahrain" : "/flowers-delivery-bahrain"} className="hover:text-white transition-colors">{isArabic ? "ورود" : "Flowers"}</Link></li>
            <li><Link href={isArabic ? "/ar/cake-delivery-bahrain" : "/cake-delivery-bahrain"} className="hover:text-white transition-colors">{isArabic ? "كيك" : "Cakes"}</Link></li>
            <li><Link href={isArabic ? "/ar/chocolate-delivery-bahrain" : "/chocolate-delivery-bahrain"} className="hover:text-white transition-colors">{isArabic ? "شوكولاتة" : "Chocolates"}</Link></li>
            <li><Link href={isArabic ? "/ar/gift-delivery-bahrain" : "/gift-delivery-bahrain"} className="hover:text-white transition-colors">{isArabic ? "هدايا" : "Gifts"}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">{isArabic ? "المناسبات" : "Occasions"}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href={isArabic ? "/ar/birthday-gifts-bahrain" : "/birthday-gifts-bahrain"} className="hover:text-white transition-colors">{isArabic ? "أعياد ميلاد" : "Birthdays"}</Link></li>
            <li><Link href={isArabic ? "/ar/anniversary-gifts-bahrain" : "/anniversary-gifts-bahrain"} className="hover:text-white transition-colors">{isArabic ? "ذكرى زواج" : "Anniversaries"}</Link></li>
            <li><Link href={isArabic ? "/ar/graduation-gifts-bahrain" : "/graduation-gifts-bahrain"} className="hover:text-white transition-colors">{isArabic ? "تخرج" : "Graduation"}</Link></li>
            <li><Link href={isArabic ? "/ar/mothers-day-flowers-bahrain" : "/mothers-day-flowers-bahrain"} className="hover:text-white transition-colors">{isArabic ? "عيد الأم" : "Mother's Day"}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">{isArabic ? "المناطق" : "Locations"}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href={isArabic ? "/ar/flower-delivery-manama" : "/flower-delivery-manama"} className="hover:text-white transition-colors">{isArabic ? "المنامة" : "Manama"}</Link></li>
            <li><Link href={isArabic ? "/ar/flower-delivery-riffa" : "/flower-delivery-riffa"} className="hover:text-white transition-colors">{isArabic ? "الرفاع" : "Riffa"}</Link></li>
            <li><Link href={isArabic ? "/ar/flower-delivery-muharraq" : "/flower-delivery-muharraq"} className="hover:text-white transition-colors">{isArabic ? "المحرق" : "Muharraq"}</Link></li>
            <li><Link href={isArabic ? "/ar/delivery-areas-bahrain" : "/delivery-areas-bahrain"} className="hover:text-white transition-colors">{isArabic ? "كل المناطق" : "All Areas"}</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-heading font-bold text-lg mb-6">{isArabic ? "السياسات والتواصل" : "Policies & Contact"}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href={isArabic ? "/ar/contact-us" : "/contact-us"} className="hover:text-white transition-colors">{isArabic ? "تواصل معنا" : "Contact Us"}</Link></li>
            <li><Link href={isArabic ? "/ar/faq" : "/faq"} className="hover:text-white transition-colors">{isArabic ? "الأسئلة الشائعة" : "FAQs"}</Link></li>
            <li><Link href={isArabic ? "/ar/privacy-policy" : "/privacy-policy"} className="hover:text-white transition-colors">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</Link></li>
            <li><Link href={isArabic ? "/ar/terms-of-service" : "/terms-of-service"} className="hover:text-white transition-colors">{isArabic ? "شروط الخدمة" : "Terms of Service"}</Link></li>
          </ul>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm ${isArabic ? 'direction-rtl text-right' : ''}`}>
        <p>&copy; {new Date().getFullYear()} {isArabic ? "فرحتي البحرين. جميع الحقوق محفوظة." : "Farhati Bahrain. All rights reserved."}</p>
      </div>
    </footer>
  );
}
