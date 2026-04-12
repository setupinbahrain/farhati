import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic ? "هدايا أعياد ميلاد في البحرين | باقات وكيك وبالونات | فرحتي" : "Birthday Gifts in Bahrain | Cake, Flowers & Balloons | Farhati",
    description: isArabic ? "مفاجآت أعياد الميلاد المتكاملة. تسوق باقات زهور وكيك هيليوم في البحرين. نقدم توصيل فائق السرعة لكافة احتياجات الاحتفال داخل المنامة وباقي المحافظات." : "Complete Birthday Surprises. Shop premium flower bouquets, custom cakes, and helium balloons. We offer ultra-fast same-day delivery for all your celebration needs across Bahrain.",
    alternates: {
      languages: {
        'en': '/birthday-gifts-bahrain',
        'ar': '/ar/birthday-gifts-bahrain',
        'x-default': '/birthday-gifts-bahrain',
      }
    }
  };
}

export default function BirthdayGiftsPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={isArabic ? "هدايا أعياد ميلاد في البحرين | فرحتي" : "Birthday Gifts in Bahrain | Farhati"}
        description={isArabic ? "أبهر من تحب بمجموعة أعياد الميلاد الكاملة" : "Complete birthday packages and exclusive sets"}
        url="https://farhati.bh/birthday-gifts-bahrain"
        isProductPage={true}
      />
      
      <section className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {isArabic ? "اجعل عيد ميلادهم لا يُنسى" : "Make Their Birthday Utterly Unforgettable"}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            {isArabic ? "نحن نجهز مفاجآت متكاملة تجمع بين الكيك الفاخر، باقات الزهور الجذابة والبالونات بتنسيق مبهر وكل هذا يصل في صندوق واحد متكامل." : "We engineer complete celebrations. Discover synchronized packages of luxury cakes, brilliant floral arrays, and helium balloons delivered seamlessly together."}
          </p>
        </div>
      </section>

      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</a>
            <span>/</span>
            <span className="text-primary font-bold">{isArabic ? "هدايا أعياد ميلاد" : "Birthday Gifts"}</span>
         </div>
      </div>

      <ProductGrid title={isArabic ? "هدايا أعياد ميلاد" : "Birthday Gifts"} baseTitle="birthday" locale={params.locale} />

      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">{isArabic ? "أسئلة شائعة حول ترتيبات أعياد الميلاد" : "Birthday Arrangement FAQs"}</h2>
            
            <div className="border border-gray-100 rounded-lg p-6 mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل التوصيل في نفس توقيت ومكان الحفلة ممكن؟" : "Can you coordinate delivery directly to an ongoing birthday party?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "مؤكد. سيصل فريقنا في الموعد المحدد إلى القاعات، المطاعم أو الفلل الخاصة، مما يسهل لك الحصول على الاحتفال في موعده بدقة تامة." : "Affirmative. Our fleet can reliably target restaurants, hotel event halls, or private residences in Bahrain perfectly in sync with your event timing."}</p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل تأتي البالونات منفوخة بغاز الهيليوم؟" : "Are balloons delivered already inflated with helium?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "نعم، كافة تشكيلات البالونات الخاصة بأعياد الميلاد تأتي منفوخة جاهزة بغاز الهيليوم الآمن مع أشرطة أنيقة ومثبتات لمنع تطايرها." : "Yes, all birthday balloon groupings are pre-inflated using high-grade helium and secured with premium ribbon weights prior to dispatch."}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
