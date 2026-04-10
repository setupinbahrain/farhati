import { SILO_PAGES } from "@/lib/routes";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";
import LongFormSEOContent from "@/components/LongFormSEOContent";
import LongFormSEOContentAR from "@/components/LongFormSEOContentAR";
import { translateCityToArabic, translateSiloToArabic } from "@/lib/translate";

type Props = {
  params: { slug: string };
};

export default function DeepSiloTemplate({ slug, city, locale = 'en' }: { slug: string, city?: string, locale?: string }) {
  const isArabic = locale === 'ar';

  if (!SILO_PAGES.includes(slug)) {
    notFound();
  }

  const englishTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  const englishCity = city 
    ? city.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "Bahrain";

  const baseTitle = isArabic ? translateSiloToArabic(slug) : englishTitle;
  const cityName = isArabic ? translateCityToArabic(city) : englishCity;

  const title = city 
      ? (isArabic ? `${baseTitle} إلى ${cityName}` : `${baseTitle} Delivery in ${cityName}`)
      : baseTitle;

  if (!SILO_PAGES.includes(slug)) {
    notFound();
  }



  const categories = isArabic 
    ? ["ورود", "كيك", "شوكولاتة", "صناديق هدايا", "مجموعات", "توصيل اليوم"]
    : ["Flowers", "Cakes", "Chocolates", "Gift Boxes", "Combos", "Same Day"];

  // DYNAMIC INTELLIGENCE LOGIC
  const isCake = slug.includes("cake");
  const isChocolate = slug.includes("chocolate");
  const isFlower = slug.includes("flower") || slug.includes("rose") || slug.includes("bouquet");
  
  let dynamicImage = "/images/editorial_luxury_combo_1775846441612.png";
  let specificText = "When absolute perfection is mandatory, Farhati stands completely unmatched. We have engineered our entire supply chain to ensure that your gifts surpass expectations.";
  
  if (isCake) {
    dynamicImage = "/images/editorial_luxury_cake_1775846333180.png";
    specificText = "Our artisanal bakery division operates with zero compromises. From Madagascar vanilla to rich Belgian cocoa, every tier is sculpted to provide an unparalleled gustatory experience. Delivered fresh with strictly climate-controlled logistics so the frosting remains pristine.";
  } else if (isChocolate) {
    dynamicImage = "/images/editorial_luxury_chocolates_1775846399674.png";
    specificText = "Master chocolatiers craft each piece to elicit profound emotion. Sourced from the world's most prestigious cocoa reserves, our chocolate selections range from intense dark truffles to velvet-smooth pralines.";
  } else if (isFlower) {
    dynamicImage = "/images/editorial_luxury_roses_1775846366221.png";
    specificText = "Our botanical curation is globally recognized. We import directly from elite farms in Ecuador and Holland, ensuring that every stem possesses optimum vitality. These are not just flowers; they are living poetry.";
  }

  // DYNAMIC FAQS EXPANDED (10 Massive Schema Elements for 100/100 SEO & Wordcount)
  const faqsEN = [
    { q: `Do you offer same-day delivery for ${englishTitle.toLowerCase()} to ${englishCity}?`, a: `Absolutely. We engineered a specific rapid-response logistics framework. If you finalize your order before 6:00 PM, our directly managed, climate-controlled fleet will secure rapid delivery directly to ${englishCity}. This entirely circumvents third-party delays.` },
    { q: `Can I customize my ${englishTitle.toLowerCase()} order before delivery?`, a: "Customization is the core pillar of our luxury service model. Throughout our secure checkout flow, you have the operational ability to selectively attach premium Belgian chocolates, bespoke helium balloon groupings, and highly specific custom packaging variants that perfectly calibrate your gift." },
    { q: `Will the ${isFlower ? 'blooms' : isCake ? 'cake' : 'gift'} match the website photography precisely?`, a: "We mathematically guarantee 100% aesthetic parity. The high-resolution editorial photography on our platform defines the exact structural blueprint our artisans must follow. Our internal quality assurance protocols mandate that your recipient in Bahrain receives exactly the premium arrangement you visually verified." },
    { q: `How do you protect temperature-sensitive items like cakes and chocolates during transit to ${englishCity}?`, a: "Bahrain's temperature gradients are actively hostile to luxury consumables. To counter this, every single vehicle in our delivery fleet is heavily insulated and equipped with advanced multi-zone climate control technology. This ensures your items bypass ambient heat entirely, arriving frozen, firm, or perfectly tempered depending on the product's chemical requirements." },
    { q: `Can I send ${englishTitle.toLowerCase()} anonymously?`, a: "Yes, preserving your operational privacy is fully integrated into our platform. You may specifically check the 'Anonymous Delivery' protocol during checkout. We will execute the physical delivery to the recipient in Bahrain without disclosing your digital transaction records or personal identity parameters." },
    { q: `Do you deliver to hospitals, hotels, or corporate offices within ${englishCity}?`, a: "Our concierge network is highly adept at navigating complex institutional architectures. Whether traversing the corporate security systems of the Bahrain Financial Harbour, delivering to exclusive recovery suites in local hospitals, or accessing private hotel properties, our drivers maintain the professional tact necessary to seamlessly complete the gesture." },
    { q: `What if the recipient is not physically present in ${englishCity} when the driver arrives?`, a: "If the target recipient is unavailable, our standard protocol involves safely returning the asset to our climate-controlled holding facility immediately to prevent environmental degradation. We will then contact you directly to organize an alternate deployment sequence that aligns perfectly with their schedule." },
    { q: `Are the floral arrangements imported or locally sourced?`, a: "To maintain the absolute zenith of botanical quality, we actively bypass local secondary markets. Our floral structures consist almost entirely of elite genetics imported directly from high-altitude farms located in Ecuador and Holland. These specific strains guarantee significantly enhanced vibrancy, exceptional stem thickness, and a dramatically prolonged vase life." },
    { q: `Can I include a personalized luxury greeting card with the order?`, a: "A luxury gesture is incomplete without explicit context. Every order on our platform includes the option to digitally input a deeply personalized message. This emotional payload is then physically transcribed onto thick, premium-grade cardstock and enclosed within a sealed envelope to ensure your recipient understands your precise intention." },
    { q: `Which localized payment systems are accepted for deliveries to ${englishCity}?`, a: "We have fully localized our financial processing layer to ensure zero transaction friction. We accept all major international gateways including Visa, Mastercard, and American Express, while also deeply integrating native regional systems like BenefitPay and the standard Benefit debit network for absolute convenience." }
  ];

  const faqsAR = [
    { q: `هل يتوفر توصيل في نفس اليوم لـ ${baseTitle.toLowerCase()} إلى ${cityName}؟`, a: `بالتأكيد. لقد قمنا بتصميم إطار لوجستي خاص للاستجابة السريعة. إذا أتممت طلبك قبل الساعة 6:00 مساءً، سيضمن أسطولنا المكيف والمدار مباشرة توصيلاً سريعاً ومباشراً إلى ${cityName}.` },
    { q: `هل يمكنني تخصيص طلب ${baseTitle.toLowerCase()} الخاص بي قبل التوصيل؟`, a: "التخصيص هو ركيزة أساسية في نموذج خدمتنا الفاخرة. خلال عملية الدفع الآمنة، يمكنك إضافة شوكولاتة بلجيكية فاخرة، أو مجموعات بالونات هيليوم، أو خيارات تغليف مخصصة بعناية." },
    { q: `هل سيتطابق الـ ${isFlower ? 'ورد' : isCake ? 'كيك' : 'هدية'} مع الصور؟`, a: "نحن نضمن تطابقاً بنسبة 100%. صورنا عالية الدقة تُحدد المخطط الهيكلي الدقيق الذي يتبعه الحرفيون لدينا. تضمن بروتوكولات ضمان الجودة الصارمة لدينا استلام هديتك تماماً كما رأيتها." },
    { q: `كيف يتم حماية الطلبات الحساسة للحرارة أثناء النقل إلى ${cityName}؟`, a: "تم تجهيز كل مركبة في أسطول التوصيل لدينا بعزل مكثف وأنظمة تحكم مناخية متطورة تضمن بقاء الطلبات مبردة في أقصى درجات حرارة الصيف." },
    { q: `هل يمكنني إرسال ${baseTitle.toLowerCase()} بشكل مجهول؟`, a: "نعم، الخصوصية التشغيلية مدمجة بالكامل. يمكنك التأشير على خيار 'توصيل مجهول' وسنقوم بالتوصيل دون الكشف عن بيانات هويتك." },
    { q: `هل تقومون بالتوصيل للمستشفيات، الفنادق، أو المكاتب في ${cityName}؟`, a: "شبكتنا اللوجستية قادرة على التنقل عبر الأنظمة الأمنية للمستشفيات، والشركات الكبرى، والمنتجعات الفاخرة لضمان وصول الهدية للشخص المعني بأرقى مستوى من الاحترافية." },
    { q: `ماذا لو لم يكن المستلم متواجداً في ${cityName} عند وصول السائق؟`, a: "إذا لم يكن المستلم موجوداً، نقوم بإرجاع الهدية فوراً إلى منشأتنا المكيفة لمنع تلفها البيئي. ثم نتواصل معك لترتيب موعد بديل." },
    { q: `هل تنسيقات الزهور مستوردة أم محلية؟`, a: "لضمان الجودة المطلقة، نستورد جميع زهورنا مباشرة من مزارع النخبة المستدامة في الإكوادور وهولندا لتوفير ألوان أكثر حيوية وسيقاناً أقوى." },
    { q: `هل يمكنني إرفاق بطاقة تهنئة فاخرة مخصصة؟`, a: "بالطبع. يتضمن كل طلب إمكانية إدخال رسالة شخصية يتم طباعتها على بطاقات فاخرة وتغليفها بظرف مغلق لضمان الخصوصية التامة." },
    { q: `ما هي وسائل الدفع المعتمدة للتوصيل إلى ${cityName}؟`, a: "نقبل جميع وسائل الدفع الموثوقة كبطاقات Visa وMastercard وAmerican Express، بالإضافة إلى التوافق التام مع النظام البنكي المحلي وتطبيق BenefitPay لتجربة مريحة." }
  ];

  const faqs = isArabic ? faqsAR : faqsEN;

  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={`${title} | Premium Farhati Gifting`}
        description={`Order the best ${baseTitle.toLowerCase()} in ${cityName} with Farhati Bahrain.`}
        url={`https://farhati.bh/${city ? `${city}/` : ''}${slug}`}
        isProductPage={true}
      />
      {/* 1. HERO SECTION */}
      <section className="bg-primary text-white py-24 px-4 text-center pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            {isArabic ? `الوجهة الأمثل للهدايا الفاخرة في ${cityName}. نضمن لك الجودة الاستثنائية والتوصيل في نفس اليوم.` : `${cityName}'s Ultimate Destination for Premium Gifting. Guaranteed Freshness & Same Day Delivery.`}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md text-lg">
              {isArabic ? "اطلب الآن" : "Order Now"}
            </button>
            <button className="bg-white text-primary border-2 border-white hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all shadow-md text-lg">
              {isArabic ? "متاح للتوصيل في نفس اليوم" : "Same Day Delivery Available"}
            </button>
          </div>
          {/* Trust Badges */}
          <div className="flex justify-center gap-6 text-sm font-bold opacity-90 uppercase tracking-wide">
             <span className="flex items-center gap-1">⭐ 4.9/5 {isArabic ? "تقييم" : "Rating"}</span>
             <span className="flex items-center gap-1">⏱️ {isArabic ? "توصيل اليوم" : "Same Day Delivery"}</span>
             <span className="flex items-center gap-1">🔒 {isArabic ? "دفع آمن" : "Secure Payment"}</span>
          </div>
        </div>
      </section>

      {/* DYNAMIC BREADCRUMBS */}
      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</a>
            <span>/</span>
            {city && (
               <>
                 <span className="text-gray-400 capitalize">{cityName}</span>
                 <span>/</span>
               </>
            )}
            <span className="text-gray-400 cursor-default">{isArabic ? "المجموعات" : "Collections"}</span>
            <span>/</span>
            <span className="text-primary font-bold">{baseTitle}</span>
         </div>
      </div>

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
      <ProductGrid title={title} baseTitle={baseTitle} locale={locale} />

      {/* 4. TRUST STRIP */}
      <section className="py-12 bg-trust text-white px-4">
         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><h4 className="font-bold text-xl mb-2 font-heading">{isArabic ? "توصيل في نفس اليوم" : "Same Day Delivery"}</h4><p className="text-sm opacity-80 font-body">{isArabic ? "لجميع أنحاء البحرين" : "Across all areas in Bahrain"}</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">{isArabic ? "جودة فاخرة" : "Premium Quality"}</h4><p className="text-sm opacity-80 font-body">{isArabic ? "مستوردة من أفضل مزارع النخبة" : "Sourced from the finest local & global farms"}</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">{isArabic ? "نضارة تامة" : "Always Fresh"}</h4><p className="text-sm opacity-80 font-body">{isArabic ? "نقل محكم بوحدات تبريد مخصصة" : "Climate-controlled logistics"}</p></div>
            <div><h4 className="font-bold text-xl mb-2 font-heading">{isArabic ? "طرق دفع آمنة" : "Secure Payment"}</h4><p className="text-sm opacity-80 font-body">{isArabic ? "بنفت باي وفيزا وماستر كارد" : "Benefit, BenefitPay, Visa & Mastercard"}</p></div>
         </div>
      </section>

      {/* 5. LONG-FORM CONTENT (Massive Programmatic Injection for SEO Word Count) */}
      {isArabic ? (
        <LongFormSEOContentAR 
          baseTitle={baseTitle}
          cityName={cityName}
          dynamicImage={dynamicImage}
          specificTextAR="الخبرة الفاخرة المطلقة: تمكّننا علاقاتنا وشبكتنا العالمية من ضمان وصول هديتك بكل أناقة وثقة لا مثيل لها."
          isCake={isCake}
          isFlower={isFlower}
          isChocolate={isChocolate}
        />
      ) : (
        <LongFormSEOContent 
          baseTitle={baseTitle}
          cityName={cityName}
          dynamicImage={dynamicImage}
          specificText={specificText}
          isCake={isCake}
          isFlower={isFlower}
          isChocolate={isChocolate}
        />
      )}

      {/* 6. INTERNAL LINKING BLOCK */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">{isArabic ? `اكتشف المزيد من خيارات التوصيل إلى ${cityName}` : `Explore More ${cityName} Delivery Options`}</h2>
            <div className="grid md:grid-cols-4 gap-4">
               <a href={`/${isArabic ? 'ar/' : 'en/'}${city ? city + '/' : ''}flowers-delivery-bahrain`} className="text-trust hover:underline cursor-pointer">{isArabic ? `توصيل زهور إلى ${cityName}` : `Flowers Delivery in ${cityName}`}</a>
               <a href={`/${isArabic ? 'ar/' : 'en/'}${city ? city + '/' : ''}same-day-gift-delivery-bahrain`} className="text-trust hover:underline cursor-pointer">{isArabic ? `توصيل ${baseTitle} في نفس اليوم` : `Same Day ${baseTitle} Delivery`}</a>
               <a href={`/${isArabic ? 'ar/' : 'en/'}${city ? city + '/' : ''}birthday-gifts-bahrain`} className="text-trust hover:underline cursor-pointer">{isArabic ? `هدايا أعياد ميلاد في ${cityName}` : `Birthday Gifts in ${cityName}`}</a>
               <a href={`/${isArabic ? 'ar/' : 'en/'}manama/flower-delivery`} className="text-trust hover:underline cursor-pointer">{isArabic ? `توصيل سريع للمنامة` : `Fast Delivery to Manama`}</a>
               <a href={`/${isArabic ? 'ar/' : 'en/'}${city ? city + '/' : ''}luxury-gifts-bahrain`} className="text-trust hover:underline cursor-pointer">{isArabic ? `تسوق هدايا فاخرة` : `Shop Luxury Gifts`}</a>
               <a href={`/${isArabic ? 'ar/' : 'en/'}riffa/cake-delivery-bahrain`} className="text-trust hover:underline cursor-pointer">{isArabic ? `كيك الفراولة للرفاع` : `Premium Cakes in Riffa`}</a>
            </div>
         </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
         <h2 className="text-3xl font-heading font-bold text-center mb-12">{isArabic ? `آراء العملاء في ${cityName}` : `What Bahrain is Saying`}</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white p-8 rounded-xl shadow-soft ${isArabic ? 'text-right' : ''}`}>
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">{isArabic ? `"لقد أنقذوا ذكرى زواجي بالكامل. كانت الزهور ضخمة وطازجة، وكان طعم الكيك لا يُصدق. المندوب كان في قمة التهذيب."` : `"Absolutely saved my anniversary. The flowers were massive and fresh, and the cake tasted incredible. Driver was very polite."`}</p>
               <p className="font-bold">{isArabic ? "- أحمد أ.، الرفاع" : "- Ahmed A., Riffa"}</p>
            </div>
            <div className={`bg-white p-8 rounded-xl shadow-soft ${isArabic ? 'text-right' : ''}`}>
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">{isArabic ? `"طلبت من السعودية لوالدتي في المحرق. قامت فرحتي بتوصيل الطلب مطابقاً للصورة تماماً خلال 3 ساعات. مذهل."` : `"I ordered from Saudi Arabia for my mother in Muharraq. Farhati delivered exactly what the picture showed within 3 hours. Amazing."`}</p>
               <p className="font-bold">{isArabic ? "- سارة م.، السعودية" : "- Sarah M., KSA"}</p>
            </div>
            <div className={`bg-white p-8 rounded-xl shadow-soft ${isArabic ? 'text-right' : ''}`}>
               <div className="text-accent text-2xl mb-4">★★★★★</div>
               <p className="text-gray-600 mb-4">{isArabic ? `"التغليف بحد ذاته يصرخ بالفخامة. بصراحة لا يمكنك العثور على هذا المستوى من الاهتمام بالتفاصيل في أي مكان آخر بالبحرين."` : `"The packaging alone screams luxury. You honestly can't find this kind of premium curation anywhere else in Bahrain."`}</p>
               <p className="font-bold">{isArabic ? "- فاطمة الكوهجي، السيف" : "- Fatima Al-K., Seef"}</p>
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center" itemScope itemType="https://schema.org/FAQPage">{isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h2>
            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-soft transition-all" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                     <h4 className="font-bold text-lg mb-2" itemProp="name">{faq.q}</h4>
                     <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.a}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="bg-primary text-white py-20 px-4 text-center">
         <h2 className="text-4xl font-heading font-bold mb-6">{isArabic ? "جاهز لنشر الفرح؟" : "Ready to Send Joy?"}</h2>
         <p className="text-xl mb-8">{isArabic ? "احجز موعد التسليم اليوم واجعل يومهم لا ينسى." : "Secure your delivery slot today and make someone's day unforgettable."}</p>
         <button className="bg-accent hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-lg transition-transform hover:scale-105 inline-block">
            {isArabic ? `اطلب ${title} الآن` : `Order ${title} Now`}
         </button>
      </section>
    </main>
  );
}
