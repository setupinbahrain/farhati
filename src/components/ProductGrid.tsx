"use client";

import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store";

import Image from "next/image";

export default function ProductGrid({ title, baseTitle, locale = 'en' }: { title: string, baseTitle?: string, locale?: string }) {
  const isArabic = locale === 'ar';
  const products = Array.from({ length: 12 }, (_, i) => i + 1);
  const { addItem } = useCartStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const titleLower = title.toLowerCase();
  const checkStr = `${titleLower} ${baseTitle?.toLowerCase() || ''}`;
  const isCake = checkStr.includes('cake') || checkStr.includes('كيك');
  const isFlower = checkStr.includes('flower') || checkStr.includes('bouquet') || checkStr.includes('rose') || checkStr.includes('زهور') || checkStr.includes('ورد');
  const isCombo = checkStr.includes('combo') || checkStr.includes('and') || checkStr.includes('باقات');
  const isChocolate = checkStr.includes('chocolate') || checkStr.includes('شوكولاتة');
  
  // Isolate the image feed based strictly on the active dynamic category
  let images = ['/images/editorial_luxury_combo_1775846441612.png'];
  
  if (isCake) {
    images = [
      '/images/editorial_luxury_cake_1775846333180.png',
      '/images/luxury_bridal_cake_1775842764107.png'
    ];
  } else if (isFlower) {
    images = [
      '/images/editorial_luxury_roses_1775846366221.png',
      '/images/luxury_flower_bouquet_1775842729298.png'
    ];
  } else if (isChocolate) {
    images = [
      '/images/editorial_luxury_chocolates_1775846399674.png'
    ];
  } else if (isCombo) {
    images = [
      '/images/editorial_luxury_combo_1775846441612.png',
      '/images/luxury_combo_gift_1775842809066.png'
    ];
  } else {
    // Fallback to all for generic pages like "Luxury Gifts Bahrain" or Home
    images = [
      '/images/editorial_luxury_roses_1775846366221.png',
      '/images/editorial_luxury_cake_1775846333180.png',
      '/images/editorial_luxury_combo_1775846441612.png',
      '/images/editorial_luxury_chocolates_1775846399674.png'
    ];
  }

  const translateProductType = (key?: string) => {
    if (!key) return title;
    if (!isArabic) return key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' ');
    const k = key.toLowerCase();
    if (k.includes('flower')) return 'الزهور';
    if (k.includes('cake')) return 'الكيك';
    if (k.includes('chocolate')) return 'الشوكولاتة';
    if (k.includes('birthday')) return 'أعياد الميلاد';
    if (k.includes('gift') || k.includes('luxury')) return 'الهدايا الفاخرة';
    return title;
  };
  const productKeyName = translateProductType(baseTitle || title);

  return (
    <section id="products" className="py-16 px-4 max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">{isArabic ? `الأفضل مبيعاً في ${title}` : `Top Rated ${title}`}</h2>
      
      <motion.div 
         variants={container} 
         initial="hidden" 
         whileInView="show" 
         viewport={{ once: true, margin: "-100px" }}
         className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {products.map((item, idx) => (
          <motion.div 
            key={item} 
            variants={itemAnim}
            className="bg-white p-4 rounded-xl shadow-soft border border-gray-100 flex flex-col group hover:shadow-xl transition-all"
          >
            <div className="bg-gray-100 w-full aspect-square rounded-lg mb-4 overflow-hidden relative">
               <Image 
                  src={images[idx % images.length]} 
                  alt={`Product ${item}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
               />
            </div>
            
            <h4 className={`font-bold text-[#1A1A1A] text-sm md:text-base line-clamp-2 ${isArabic ? 'text-right' : ''}`}>
               {isArabic ? `مجموعة ${productKeyName} فاخرة (${item})` : `Exclusive ${productKeyName} Bundle ${item}`}
            </h4>
            <p className={`text-primary font-bold mt-2 text-lg ${isArabic ? 'text-right' : ''}`}>35.00 {isArabic ? 'د.ب' : 'BHD'}</p>
            
            <button 
               onClick={() => addItem({
                  id: `${title.toLowerCase().replace(/ /g, '-')}-${item}`,
                  name: `Exclusive ${productKeyName} Bundle ${item}`,
                  price: 35,
                  quantity: 1,
                  image: ''
               })}
               className="w-full mt-4 bg-cta text-white hover:bg-[#A61E1E] font-bold py-2 rounded-lg transition-colors cursor-pointer"
            >
              {isArabic ? "اطلب الآن" : "Order Now"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
