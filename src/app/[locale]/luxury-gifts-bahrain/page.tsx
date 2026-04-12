import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic ? "هدايا فاخرة في البحرين | هدايا حصرية وراقية | فرحتي" : "Luxury Gifts in Bahrain | Exclusive Premium Gifting | Farhati",
    description: isArabic ? "احصل على هدايا فاخرة ومختارة بعناية للمناسبات الراقية. نوفر تصميمات حصرية لكبار الشخصيات مع خدمات توصيل خاصة لجميع ضواحي البحرين." : "Discover our curated collection of luxury gifts tailored for VIPS and exclusive occasions. Premium bespoke arrangements and corporate gifting delivered securely in Bahrain.",
    alternates: {
      languages: {
        'en': '/luxury-gifts-bahrain',
        'ar': '/ar/luxury-gifts-bahrain',
        'x-default': '/luxury-gifts-bahrain',
      }
    }
  };
}

export default function LuxuryGiftsPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={isArabic ? "هدايا فاخرة في البحرين | فرحتي" : "Luxury Gifts in Bahrain | Farhati"}
        description={isArabic ? "هدايا راقية بتنسيقات حصرية للمناسبات الكبيرة" : "Bespoke premium gift collections"}
        url="https://farhati.bh/luxury-gifts-bahrain"
        isProductPage={true}
      />
      
      <section className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {isArabic ? "هدايا النخبة للمناسبات الاستثنائية" : "Elite Gifting for the Most Exclusive Occasions"}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            {isArabic ? "عندما تخطط لتقديم هدية تترك انطباعاً لا ينسى، توفر لك مجموعاتنا الفاخرة تنسيقات وتغليفات مصممة باحتراف لا يُعلى عليه، مع توصيل خاص وكتمان تام." : "When absolutely leaving a profound impression is mandatory, our curated luxury suites deliver unparalleled aesthetics. Exclusive packaging and deeply secure delivery included."}
          </p>
        </div>
      </section>

      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</a>
            <span>/</span>
            <span className="text-primary font-bold">{isArabic ? "هدايا فاخرة" : "Luxury Gifts"}</span>
         </div>
      </div>

      <ProductGrid title={isArabic ? "هدايا فاخرة" : "Luxury Gifts"} baseTitle="luxury-gifts" locale={params.locale} />

      <section className="py-16 px-4 bg-trust text-white max-w-7xl mx-auto rounded-3xl my-12 shadow-2xl">
         <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-6">{isArabic ? "الهدايا الفاخرة لكبار الشخصيات والشركات في البحرين" : "Executive & VIP Luxury Gifting Curations in Bahrain"}</h2>
            <div className="text-gray-100 space-y-6 text-lg leading-relaxed font-body">
               <p>{isArabic ? 
                  "هناك مناسبات لا تحتمل الهدايا التقليدية. عندما تكون الغاية هي ترك بصمة قوية وتأثير لا يُنسى لدى شركاء الأعمال أو الشخصيات الهامة، فإن باقات الهدايا الفاخرة لدينا هي الخيار الوحيد الذي يرتقي لمستوى الحدث. في فرحتي، قمنا بتأسيس قسم متخصص في تنسيق الهدايا الراقية مصمم خصيصاً لتلبية المعايير الصارمة لقطاع الشركات وكبار الشخصيات في البحرين. كل مجموعة استثنائية نقدمها تعبر عن الاحترام الشديد، الثقة، ومستوى غير مسبوق من الذوق الرفيع." 
                  : 
                  "There are decisive moments in life and business where a generic gift is fundamentally inadequate. When the objective is to forge a commanding impression and leave a profound impact on executive partners, elite clients, or VIP individuals, our luxury gifting suites are the only viable solution. At Farhati, we have established a dedicated luxury concierge division strictly engineered to satisfy the rigorous standards of Bahrain’s corporate and elite sectors. Every exceptional curation we deploy serves to communicate extreme respect, strategic trust, and an unprecedented level of refinement."}</p>
               <p>{isArabic ? 
                  "يتم إعداد كل صندوق هدايا بتركيز مهووس على التفاصيل الدقيقة. ندمج بين أندر أنواع الزهور المستوردة، كعك المصممين الفاخر، وشوكولاتة النخبة لتشكيل باقة هدايا متناسقة تبهر العين قبل الحواس. لا يتم استخدام أي مواد تغليف تجارية؛ بل نعتمد على صناديق مخصصة ثقيلة الوزن، وأشرطة مخملية أنيقة، وبطاقات تهنئة مطبوعة بأعلى جودة لضمان تقديم القطعة بطريقة تعكس قيمة العلاقة."
                  : 
                  "Every single gift box and presentation suite is engineered with an obsessive focus on granular detail. We strategically integrate the rarest imported botanical specimens, extreme high-end designer cakes, and master-crafted artisanal chocolates to form a cohesive, overwhelming visual and sensory experience. Commercial packaging materials are strictly forbidden in this division; instead, we utilize heavyweight bespoke boxes, plush velvet ribbon treatments, and heavy-stock embossed physical cards to guarantee the physical unboxing accurately reflects the immense value of your relationship."}</p>
               <p>{isArabic ?
                  "ولأن هذه الهدايا غالباً ما توجه لشخصيات بالغة الأهمية في مواقع حساسة مثل مرفأ البحرين المالي أو فنادق السيف الفاخرة، فإن فريقنا مكلف باحترام البروتوكولات الأمنية والسرية المطلقة. المندوبون لدينا محترفون ومدربون لتسليم الهدايا بثقة تامة ونظام أتمتة يضمن وصول كل شحنة بسرعة وكفاءة دون الإخلال بمهنية الموقف."
                  :
                  "Because these specific offerings are frequently directed towards high-net-worth individuals located in highly secure protocols like Bahrain Financial Harbour or the exclusive hospitality zones in Seef, our logistical unit operates under absolute discretion. Our delivery couriers are professionally vetted and heavily trained to navigate complex corporate security infrastructures smoothly. This elite tier of delivery guarantees that your high-value shipment arrives not only rapidly and efficiently but with the extreme professionalism and privacy the situation dictates."}</p>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">{isArabic ? "الأسئلة الشائعة للخدمات الفاخرة" : "Concierge Gifting FAQs"}</h2>
            
            <div className="border border-gray-100 rounded-lg p-6 mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل التوصيل يشمل الهيئات الإدارية والأبراج التجارية؟" : "Do you deliver to corporate towers and government institutions?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "نعم، مندوبينا مدربون للتعامل مع الإجراءات الأمنية في المواقع التجارية الكبرى بلياقة تامة وسرية، مما يضمن وصول الهدية للشخص المطلوب بسهولة." : "Yes, our drivers are extensively trained to navigate the complex security protocols of Bahrain Financial Harbour and premium corporate sectors politely and seamlessly."}</p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل يتوفر خيار التوصيل السري / المجهول؟" : "Is an anonymous concierge delivery available?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "نعم. يمكننا تسهيل وصول هديتك الفاخرة للطرف الآخر مع الحفاظ التام على خصوصيتك. يمكنك طلب خيار التوصيل المجهول بثقة تامة." : "You may strictly select 'Anonymous Delivery'. We will fully execute the logistics while maintaining zero footprint regarding your private identity."}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
