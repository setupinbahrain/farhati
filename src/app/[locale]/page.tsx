export const metadata = {
  title: "Farhati | Bahrain's Premier Gifting Authority",
  description: "Order luxury flowers, artisanal cakes, and bespoke gifts with same-day delivery anywhere in Bahrain. Farhati: Delivering Joy.",
};

import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";
import LuxBox3D from "@/components/LuxBox3D";

import Image from "next/image";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';

  const coreCategories = isArabic ? [
    { title: "الزهور الفاخرة", image: "/images/category-flowers.jpg", href: "/ar/flowers-delivery-bahrain" },
    { title: "كيك الحرفيين", image: "/images/category-cakes.jpg", href: "/ar/cake-delivery-bahrain" },
    { title: "مجموعات مميزة", image: "/images/category-combos.jpg", href: "/ar/flowers-and-cake-delivery-bahrain" },
  ] : [
    { title: "Luxury Flowers", image: "/images/category-flowers.jpg", href: "/en/flowers-delivery-bahrain" },
    { title: "Artisanal Cakes", image: "/images/category-cakes.jpg", href: "/en/cake-delivery-bahrain" },
    { title: "Bespoke Combos", image: "/images/category-combos.jpg", href: "/en/flowers-and-cake-delivery-bahrain" },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-cream">
      <SEO 
        title={isArabic ? "فرحتي | الوجهة الأولى للهدايا في البحرين" : "Farhati | Bahrain's Premier Gifting Authority"}
        description={isArabic ? "اطلب أرقى الزهور والكيك والهدايا المخصصة مع التوصيل في نفس اليوم لجميع مناطق البحرين." : "Order luxury flowers, artisanal cakes, and bespoke gifts with same-day delivery anywhere in Bahrain."}
        url={isArabic ? "https://farhati.bh/ar" : "https://farhati.bh/en"}
      />

      {/* MAGNIFICENT HERO SECTION WITH PARALLAX & FLOATING PARTICLES */}
      <section className={`relative w-full min-h-[90vh] flex flex-col md:flex-row items-center bg-primary overflow-hidden ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        
        {/* Floating Particles Background */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-trust/20 rounded-full blur-3xl animate-float-slow" />
        
        {/* Left Side: 3D Visualization */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative z-20 flex items-center justify-center animate-float-slow">
            <LuxBox3D />
        </div>

        {/* Right Side: Typographic Hero */}
        <div className={`w-full md:w-1/2 relative z-20 px-8 py-16 flex flex-col items-start ${isArabic ? 'text-right items-end' : 'text-left items-start'}`}>
           <div className="animate-float">
             <span className="text-trust font-bold tracking-[0.2em] mb-4 text-sm md:text-base border border-trust px-4 py-1 rounded-full inline-block backdrop-blur-sm bg-black/10">
               {isArabic ? "تجربة تجارية ثلاثية الأبعاد" : "3D SPATIAL COMMERCE"}
             </span>
           </div>
           <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 drop-shadow-2xl max-w-xl leading-tight">
             {isArabic ? "فن الفخامة." : "The Art of Luxury."}
           </h1>
           <p className="text-xl text-gray-200 mb-10 max-w-lg font-body leading-relaxed drop-shadow-md">
             {isArabic ? "تفاعل مع تنسيقاتنا المميزة بتقنية 360 درجة. جودة لا تُضاهى تُسلّم مباشرة إلى الباب." : "Interact with our bespoke arrangements in full 360-degrees. Unmatched quality, delivered flawlessly to their door."}
           </p>
           <div className="flex flex-wrap gap-4 group">
             <Link href={isArabic ? "/ar/flowers-delivery-bahrain" : "/en/flowers-delivery-bahrain"} className="bg-cta hover:bg-[#A61E1E] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(198,40,40,0.5)] hover:shadow-[0_0_30px_rgba(198,40,40,0.8)] text-lg min-w-[200px] text-center hover:scale-105 active:scale-95 duration-300">
               {isArabic ? "تسوق الزهور" : "Shop Flowers"}
             </Link>
           </div>
        </div>
      </section>

      {/* VALUE PROP STRIP (Breathing Animation) */}
      <section className={`bg-white py-14 border-b border-gray-100 flex justify-center z-30 shadow-sm relative -mt-4 rounded-t-[2rem] ${isArabic ? 'flex-row-reverse' : ''}`}>
         <div className={`max-w-6xl mx-auto w-full px-4 flex flex-wrap justify-between gap-8 text-center text-gray-800 ${isArabic ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1 min-w-[200px] hover:-translate-y-2 transition-transform duration-300 cursor-default">
               <h4 className="font-heading font-bold text-2xl text-trust mb-2">{isArabic ? "توصيل في 3 ساعات" : "3-Hour Delivery"}</h4>
               <p className="text-sm">{isArabic ? "متاح في جميع أنحاء البحرين" : "Available across all areas"}</p>
            </div>
            <div className="flex-1 min-w-[200px] hover:-translate-y-2 transition-transform duration-300 cursor-default">
               <h4 className="font-heading font-bold text-2xl text-trust mb-2">{isArabic ? "منسقون محترفون" : "Master Florists"}</h4>
               <p className="text-sm">{isArabic ? "زهور مستوردة من أفضل المزارع" : "Globally sourced blooms"}</p>
            </div>
            <div className="flex-1 min-w-[200px] hover:-translate-y-2 transition-transform duration-300 cursor-default">
               <h4 className="font-heading font-bold text-2xl text-trust mb-2">{isArabic ? "تغليف فاخر" : "Premium Packaging"}</h4>
               <p className="text-sm">{isArabic ? "تجربة فتح هدايا استثنائية" : "Unboxing as an experience"}</p>
            </div>
         </div>
      </section>

      {/* CORE CATEGORIES GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full relative">
         <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float-slow" />
         
         <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4 animate-float">{isArabic ? "تنسيقات مدروسة بعناية" : "Curated Expressions"}</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">{isArabic ? "اكتشف هدايانا المصممة لكل لحظة والمناسبة." : "Explore our high-end ecosystems designed for every emotional milestone."}</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {coreCategories.map((cat, idx) => (
               <Link key={cat.title} href={cat.href} className="group relative h-[450px] rounded-2xl overflow-hidden shadow-soft block animate-float-slow" style={{ animationDelay: `${idx * 0.5}s` }}>
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent z-10" />
                  <div className="absolute inset-0 z-0 h-full w-full">
                     <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                  </div>
                  <div className={`absolute bottom-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${isArabic ? 'right-0 text-right' : 'left-0 text-left'}`}>
                     <h3 className="text-3xl font-heading font-bold text-white mb-2 drop-shadow-md">{cat.title}</h3>
                     <span className={`text-trust font-bold flex items-center gap-2 group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100 ${isArabic ? 'flex-row-reverse' : ''}`}>
                        {isArabic ? "استكشف المجموعة &larr;" : "Explore Collection \u2192"}
                     </span>
                  </div>
               </Link>
            ))}
         </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <div className="bg-white py-16 border-y border-gray-100 shadow-sm relative z-20">
        <ProductGrid title={isArabic ? "الأكثر مبيعاً في البحرين" : "Bestsellers in Bahrain"} locale={locale} />
      </div>

      {/* STORY / BRAND SECTION */}
      <section className={`py-24 px-4 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center ${isArabic ? 'direction-rtl text-right' : ''}`}>
         <div className={`relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl animate-float ${isArabic ? 'order-1' : 'order-2 md:order-1'}`}>
            <div className="absolute inset-0 z-0">
               <Image src="/images/category-flowers.jpg" alt="Brand Story" fill className="object-cover hover:scale-105 transition-transform duration-[3s]" />
            </div>
            <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply" />
         </div>
         <div className={isArabic ? 'order-2' : 'order-1 md:order-2'}>
            <span className="text-trust font-bold tracking-widest text-sm uppercase mb-4 block">{isArabic ? "توصيل الفرحة" : "Delivering Joy"}</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">{isArabic ? "أبعد من مجرد هدايا. نحن نبتكر تجارب عاطفية." : "Beyond simply gifting. We craft emotional resonance."}</h2>
            <p className="text-lg text-[#4A5568] mb-8 leading-relaxed">
               {isArabic ? "ولدت فرحتي من رؤية واحدة: رفع معيار التواصل الاجتماعي في البحرين. نحن نؤمن أن كل هدية هي رسالة عميقة تعبر عن مشاعرك. لذلك، نرفض التنازل عن الجودة، مستوردين فقط أرقى ورود الإكوادور والشوكولاتة البلجيكية، ونقوم بتوصيلها في سيارات مبردة لضمان وصولها في أبهى صورة." : "Farhati was born from a singular vision: to elevate the standard of connection in Bahrain. We believe that every gift is a profound messenger of your emotion. That is why we refuse to compromise on quality, sourcing only the finest Ecuadorian roses and Belgian chocolates, utilizing a climate-controlled fleet to ensure absolute perfection upon arrival."}
            </p>
            <Link href={isArabic ? "/ar/about-us" : "/en/about-us"} className="inline-block border-b-2 border-primary text-primary font-bold pb-1 hover:text-trust hover:border-trust transition-colors text-lg group">
               {isArabic ? (<span>اقرأ قصتنا <span className="inline-block group-hover:-translate-x-2 transition-transform">&larr;</span></span>) : (<span>Read Our Story <span className="inline-block group-hover:translate-x-2 transition-transform">&rarr;</span></span>)}
            </Link>
         </div>
      </section>

    </main>
  );
}
