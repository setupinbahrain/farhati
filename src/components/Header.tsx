"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/lib/store";
import { ShoppingBag, Menu, X, Trash2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

export default function Header() {
  const params = useParams();
  const locale = params?.locale || 'en';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Checkout Form State
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [checkoutAddress, setCheckoutAddress] = useState("");

  const { items, isCartOpen, toggleCart, removeItem } = useCartStore();
  
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const isArabic = locale === 'ar';

  const handleWhatsAppCheckout = () => {
    if (!checkoutName || !checkoutPhone || !checkoutAddress) {
       alert(isArabic ? "الرجاء إكمال بيانات التوصيل للمتابعة." : "Please fill in your delivery details to proceed.");
       return;
    }
    
    let msg = `*New Farhati Elite Order* 👑\n\n*Customer Details:*\nName: ${checkoutName}\nContact: ${checkoutPhone}\nAddress: ${checkoutAddress}\n\n*Order Details:*\n`;
    items.forEach(item => {
        msg += `- ${item.quantity}x ${item.name} (${item.price} BHD)\n`;
    });
    msg += `\n*Subtotal:* ${cartTotal} BHD\n*Delivery:* Free\n*Total:* ${cartTotal} BHD\n\nPlease confirm my order.`;
    
    const whatsappUrl = `https://wa.me/97333333333?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  const navLinks = isArabic ? [
    { name: "الرئيسية", href: "/ar" },
    { name: "ورود", href: "/ar/flowers-delivery-bahrain" },
    { name: "كيك", href: "/ar/cake-delivery-bahrain" },
    { name: "شوكولاتة", href: "/ar/chocolate-delivery-bahrain" },
    { name: "هدايا", href: "/ar/gift-delivery-bahrain" },
    { name: "باقات", href: "/ar/flowers-and-cake-delivery-bahrain" },
    { name: "مناسبات", href: "/ar/occasions" },
    { name: "مناطق", href: "/ar/areas" },
    { name: "نفس اليوم", href: "/ar/same-day-gift-delivery-bahrain" },
    { name: "اتصل بنا", href: "/ar/contact-us" },
  ] : [
    { name: "Home", href: "/en" },
    { name: "Flowers", href: "/en/flowers-delivery-bahrain" },
    { name: "Cakes", href: "/en/cake-delivery-bahrain" },
    { name: "Chocolates", href: "/en/chocolate-delivery-bahrain" },
    { name: "Gifts", href: "/en/gift-delivery-bahrain" },
    { name: "Combos", href: "/en/flowers-and-cake-delivery-bahrain" },
    { name: "Occasions", href: "/en/occasions" },
    { name: "Areas", href: "/en/areas" },
    { name: "Same Day", href: "/en/same-day-gift-delivery-bahrain" },
    { name: "Contact", href: "/en/contact-us" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 grid grid-cols-3 items-center">
          
          {/* Left: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 font-bold text-xs uppercase tracking-widest text-[#4A5568]">
            {navLinks.slice(0, 4).map((link) => (
               <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
               </Link>
            ))}
          </nav>

          {/* Left: Hamburger (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2 text-gray-800 hover:text-primary">
               <Menu size={24} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
             <Link href="/" className="relative w-24 h-24 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Image src="/images/final_transparent_logo.png" alt="Farhati Logo" fill className="object-contain" priority />
             </Link>
          </div>
          
          {/* Right: Secondary Nav + Actions */}
          <div className="flex items-center justify-end gap-6">
            <nav className="hidden lg:flex items-center gap-6 font-bold text-xs uppercase tracking-widest text-[#4A5568]">
              {navLinks.slice(4, 8).map((link) => (
                 <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                 </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
               <button 
                 onClick={toggleCart} 
                 className="relative p-2 text-gray-800 hover:text-primary transition-colors"
               >
                  <ShoppingBag size={22} />
                  {cartItemCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full"
                    >
                      {cartItemCount}
                    </motion.span>
                  )}
               </button>
               {/* Language Switcher */}
               <Link href={isArabic ? "/en" : "/ar"} className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary transition-colors bg-gray-50 uppercase px-3 py-2 rounded-lg border border-gray-100">
                  <Globe size={16} />
                  {isArabic ? "EN" : "عربي"}
               </Link>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-50 bg-white flex flex-col p-6 ${isArabic ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex justify-between items-center mb-12 border-b pb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
              <span className="font-heading font-bold text-2xl text-primary">{isArabic ? "القائمة" : "Menu"}</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-primary">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-bold text-[#1A1A1A]">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary active:text-primary block">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHOPPING CART DRAWER */}
      <AnimatePresence>
         {isCartOpen && (
            <>
              {/* BACKDROP */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={toggleCart} 
                className="fixed inset-0 bg-black z-50 cursor-pointer" 
              />
              {/* DRAWER */}
              <motion.div 
                initial={{ x: isArabic ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: isArabic ? "-100%" : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} bottom-0 w-full md:w-[400px] bg-white z-50 shadow-2xl flex flex-col`}
              >
                 <div className={`p-6 border-b flex justify-between items-center bg-gray-50 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <h2 className="font-heading font-bold text-2xl">{isArabic ? "سلة المشتريات" : "Your Bag"}</h2>
                    <button onClick={toggleCart} className="hover:text-primary"><X size={24} /></button>
                 </div>
                 
                 <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                       <div className="text-center text-gray-500 mt-20 flex flex-col items-center gap-4">
                          <ShoppingBag size={48} className="opacity-20" />
                          <p>{isArabic ? "سلة المشتريات فارغة حالياً." : "Your bag is currently empty."}</p>
                          <button onClick={toggleCart} className="text-primary font-bold hover:underline">{isArabic ? "مواصلة التسوق" : "Continue Shopping"}</button>
                       </div>
                    ) : (
                       items.map((item) => (
                          <div key={item.id} className="flex gap-4 items-center border-b pb-4">
                             <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                               <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">img</div>
                             </div>
                             <div className="flex-1">
                                <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                                <p className="text-primary font-bold text-sm">{item.price}.00 BHD</p>
                                <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                             </div>
                             <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 p-2">
                                <Trash2 size={18} />
                             </button>
                          </div>
                       ))
                    )}
                 </div>

                 {items.length > 0 && (
                    <div className="p-6 border-t bg-gray-50 flex flex-col gap-4">
                       <div className="flex flex-col gap-3 mb-2">
                           <h4 className={`font-bold font-heading text-primary border-b pb-2 ${isArabic ? 'text-right' : ''}`}>{isArabic ? "بيانات التوصيل" : "Delivery Details"}</h4>
                           <input 
                             type="text" 
                             placeholder={isArabic ? "الاسم الكامل" : "Full Name"} 
                             value={checkoutName}
                             onChange={(e) => setCheckoutName(e.target.value)}
                             className={`w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm ${isArabic ? 'text-right' : ''}`} 
                           />
                           <input 
                             type="tel" 
                             placeholder={isArabic ? "رقم الواتساب" : "WhatsApp Number"} 
                             value={checkoutPhone}
                             onChange={(e) => setCheckoutPhone(e.target.value)}
                             className={`w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm ${isArabic ? 'text-right' : ''}`} 
                           />
                           <textarea 
                             placeholder={isArabic ? "عنوان التوصيل الكامل (مجمع، طريق، مبنى)" : "Full Delivery Address (Block, Road, Building)"} 
                             value={checkoutAddress}
                             onChange={(e) => setCheckoutAddress(e.target.value)}
                             className={`w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-sm resize-none h-20 ${isArabic ? 'text-right' : ''}`} 
                           />
                       </div>

                       <div className={`flex justify-between items-center font-bold text-lg border-t pt-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                          <span>{isArabic ? "المجموع" : "Total"}</span>
                          <span className="text-primary">{cartTotal}.00 BHD</span>
                       </div>
                       
                       <button onClick={handleWhatsAppCheckout} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg shadow-lg flex justify-center items-center gap-2 transition-all">
                          {isArabic ? "إتمام الطلب عبر واتساب" : "Checkout via WhatsApp"}
                       </button>
                    </div>
                 )}
              </motion.div>
            </>
         )}
      </AnimatePresence>
    </>
  );
}
