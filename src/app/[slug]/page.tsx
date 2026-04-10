import { SILO_PAGES } from "@/lib/routes";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// 1. Statically generate the 108 SEO pages at build time
export function generateStaticParams() {
  return SILO_PAGES.map((slug) => ({
    slug: slug,
  }));
}

// 2. Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  if (!SILO_PAGES.includes(slug)) {
    return {};
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Premium Farhati Gifting`,
    description: `Order the best ${title.toLowerCase()} with Farhati. We offer same-day delivery across all locations in Bahrain!`,
  };
}

export default function DeepSiloPage({ params }: Props) {
  const { slug } = params;

  if (!SILO_PAGES.includes(slug)) {
    notFound();
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Utility to generate random placeholders
  const products = Array.from({ length: 12 }, (_, i) => i + 1);
  const categories = ["Flowers", "Cakes", "Chocolates", "Gift Boxes", "Combos", "Same Day"];

  return (
    <main className="flex flex-col min-h-screen bg-[#F9FBFD] pb-32">
      {/* 1. HERO SECTION */}
      <section className="bg-primary text-white py-24 px-4 text-center pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            Bahrain&apos;s Ultimate Destination for Premium Gifting. Guaranteed Freshness & Same Day Delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md text-lg">
              Order Now
            </button>
            <button className="bg-white text-primary border-2 border-white hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all shadow-md text-lg">
              Same Day Delivery Available
            </button>
          </div>
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 text-sm font-bold opacity-90 uppercase tracking-wide">
             <span className="flex items-center gap-1">⭐ 4.9/5 Rating</span>
             <span className="flex items-center gap-1">⏱️ Same Day Delivery</span>
             <span className="flex items-center gap-1">🔒 Secure Payment</span>
          </div>
        </div>
      </section>

      {/* 2. QUICK CATEGORY NAVIGATION */}
      <section className="py-8 px-4 max-w-7xl mx-auto w-full -mt-16 relative z-20">
         <div className="bg-white rounded-xl shadow-soft p-6 flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
               <a key={cat} href="#products" className="bg-gray-50 hover:bg-trust hover:text-white transition-colors text-trust border border-gray-100 font-bold py-3 px-6 rounded-xl text-center shadow-sm">
                  {cat}
               </a>
            ))}
         </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section id="products" className="py-16 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Top Rated {title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow-soft border border-gray-100 flex flex-col group cursor-pointer hover:shadow-xl transition-all">
              <div className="bg-gray-100 w-full aspect-square rounded-lg mb-4 object-cover overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">Premium Image {item}</div>
              </div>
              <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base line-clamp-2">Exclusive {title} Bundle {item}</h4>
              <p className="text-primary font-bold mt-2 text-lg">35.00 BHD</p>
              <button className="w-full mt-4 bg-gray-50 text-trust font-bold py-2 rounded-lg group-hover:bg-trust group-hover:text-white transition-colors">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="py-12 bg-trust text-white px-4">
         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h4 className="font-bold text-xl mb-2 font-heading">Same Day Delivery</h4><p className="text-sm opacity-80 font-body">Across all areas in Bahrain</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">Premium Quality</h4><p className="text-sm opacity-80 font-body">Sourced from the finest local & global farms</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">Always Fresh</h4><p className="text-sm opacity-80 font-body">Climate-controlled logistics</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">Secure Payment</h4><p className="text-sm opacity-80 font-body">Benefit, BenefitPay, Visa & Mastercard</p></div>
         </div>
      </section>

      {/* 5. LONG-FORM CONTENT (SEO CORE - Skeleton framework for 3500 words) */}
      <section className="py-20 px-4 max-w-4xl mx-auto w-full text-[#4A5568] copy-block space-y-12">
        <div>
          <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-4">Ultimate Guide to {title}</h2>
          <p className="leading-relaxed text-lg mb-4">
            Welcome to the ultimate resource for {title.toLowerCase()}. Gifting is more than just an exchange of physical items; it is a profound expression of emotion, love, and respect. In the vibrant and deeply connected culture of Bahrain, ensuring your gift arrives on time, perfectly presented, and exuding absolute luxury is paramount. This extensive guide will explore everything you need to know about navigating the complex landscape of premium gifting in the Kingdom.
          </p>
          <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 my-8">Lifestyle Image Placeholder</div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-4">Why Choose Us for {title}?</h2>
          <p className="leading-relaxed text-lg mb-4">
            When absolute perfection is mandatory, Farhati stands completely unmatched. We have engineered our entire supply chain to ensure that your {title.toLowerCase()} surpasses expectations. From our network of master florists drawing on international blooms to the bespoke bakeries crafting high-end confections, every single item is audited for quality before dispatch.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-4">Our Extensive Range of Products</h2>
          <p className="leading-relaxed text-lg mb-4">We do not just curate gifts; we engineer emotional experiences. Our product ecosystems are vast:</p>
          <h3 className="text-2xl font-heading font-bold text-trust mt-6 mb-2">Luxury Hand Bouquets</h3>
          <p className="leading-relaxed text-lg">Sourced from Ecuador and Holland, wrapped in premium Korean paper.</p>
          <h3 className="text-2xl font-heading font-bold text-trust mt-6 mb-2">Artisanal Cakes & Patisseries</h3>
          <p className="leading-relaxed text-lg">Utilizing Belgian chocolates and Madagascar vanilla for the perfect bite.</p>
          <h3 className="text-2xl font-heading font-bold text-trust mt-6 mb-2">Bespoke Combos</h3>
          <p className="leading-relaxed text-lg">Why choose one? Our combos fuse flowers, balloons, and sweets beautifully.</p>
        </div>

        <div>
           <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-4">Occasions Covered</h2>
           <p className="leading-relaxed text-lg mb-4">Whether it is a surprise Anniversary, an emergency &quot;I&apos;m Sorry&quot;, a lavish Wedding, or celebrating Eid and Ramadan, our infrastructure ensures that your specific emotional tone is conveyed exactly as you intend.</p>
        </div>
        
        <div>
           <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-4">The Farhati Same Day Delivery System</h2>
           <p className="leading-relaxed text-lg mb-4">Life happens fast. Missed a birthday? Our fleet of climate-controlled vehicles acts as your emergency response unit, securing rapid deployment of gifts across Manama, Riffa, Muharraq, and every corner of Bahrain in a matter of hours.</p>
        </div>
      </section>

      {/* 6. INTERNAL LINKING BLOCK */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">Explore More Categories</h2>
            <div className="grid md:grid-cols-4 gap-4">
               <a href="/flowers-delivery-bahrain" className="text-trust hover:underline">Flowers Delivery in Bahrain</a>
               <a href="/same-day-gift-delivery-bahrain" className="text-trust hover:underline">Same Day Cake Delivery</a>
               <a href="/birthday-gifts-bahrain" className="text-trust hover:underline">Birthday Gifts</a>
               <a href="/flower-delivery-manama" className="text-trust hover:underline">Delivery to Manama</a>
               <a href="/luxury-gifts-bahrain" className="text-trust hover:underline">Shop Luxury Gifts</a>
               <a href="/cake-delivery-riffa" className="text-trust hover:underline">Cakes in Riffa</a>
            </div>
         </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
         <h2 className="text-3xl font-heading font-bold text-center mb-12">What Bahrain is Saying</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft">
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">&quot;Absolutely saved my anniversary. The flowers were massive and fresh, and the cake tasted incredible. Driver was very polite.&quot;</p>
               <p className="font-bold">- Ahmed A., Riffa</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-soft">
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">&quot;I ordered from Saudi Arabia for my mother in Muharraq. Farhati delivered exactly what the picture showed within 3 hours. Amazing.&quot;</p>
               <p className="font-bold">- Sarah M., KSA</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-soft">
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">&quot;The packaging alone screams luxury. You honestly can&apos;t find this kind of premium curation anywhere else in Bahrain.&quot;</p>
               <p className="font-bold">- Fatima Al-K., Seef</p>
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               <div className="border border-gray-100 rounded-lg p-6 hover:shadow-soft transition-all">
                  <h4 className="font-bold text-lg mb-2">Do you offer same-day delivery for {title.toLowerCase()}?</h4>
                  <p className="text-gray-600">Yes! If you place your order before 6 PM, our climate-controlled fleet will deliver it same-day to any location in Bahrain.</p>
               </div>
               <div className="border border-gray-100 rounded-lg p-6 hover:shadow-soft transition-all">
                  <h4 className="font-bold text-lg mb-2">Can I customize my gift?</h4>
                  <p className="text-gray-600">Absolutely. You can add premium chocolates, balloons, teddy bears, and custom printed cards during checkout.</p>
               </div>
               <div className="border border-gray-100 rounded-lg p-6 hover:shadow-soft transition-all">
                  <h4 className="font-bold text-lg mb-2">Are the flowers exactly as shown in the picture?</h4>
                  <p className="text-gray-600">We pride ourselves on 100% accuracy. Because we use master florists, your arrangement will be as lush and vibrant as our photography.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-primary text-white py-20 px-4 text-center">
         <h2 className="text-4xl font-heading font-bold mb-6">Ready to Send Joy?</h2>
         <p className="text-xl mb-8">Secure your delivery slot today and make someone&apos;s day unforgettable.</p>
         <button className="bg-accent hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-lg transition-transform hover:scale-105 inline-block">
            Order {title} Now
         </button>
      </section>
    </main>
  );
}
