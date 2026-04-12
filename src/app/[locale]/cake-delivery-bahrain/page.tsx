import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic ? "توصيل كيك في البحرين | مخبوزات طازجة من فرحتي" : "Cake Delivery in Bahrain | Premium Fresh Baking | Farhati",
    description: isArabic ? "اطلب أرقى أنواع الكيك المخبوز يومياً في البحرين. نقدم كيك عيد الميلاد والمناسبات الخاصة مع توصيل سريع بالثلاجات المبردة لجميع مناطق البحرين." : "Order the finest artisanal cakes baked daily in Bahrain. Birthday cakes and luxury treats delivered rapidly via our climate-controlled fleet.",
    alternates: {
      languages: {
        'en': '/cake-delivery-bahrain',
        'ar': '/ar/cake-delivery-bahrain',
        'x-default': '/cake-delivery-bahrain',
      }
    }
  };
}

export default function CakeDeliveryPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={isArabic ? "توصيل كيك في البحرين | فرحتي" : "Cake Delivery in Bahrain | Farhati"}
        description={isArabic ? "أفضل أنواع الكيك الفاخر للمناسبات بالبحرين" : "Finest luxury cakes in Bahrain"}
        url="https://farhati.bh/cake-delivery-bahrain"
        isProductPage={true}
      />
      
      <section className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {isArabic ? "كيك فاخر، يخبز بحب باستخدام الكاكاو البلجيكي والنكهات الأصيلة" : "Artisanal Cakes Crafted with Pure Belgian Chocolate"}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            {isArabic ? "كل شريحة تعكس تفوقاً حرفياً لا يُضاهى. يتم توصيل الكيك باستخدام أسطولنا المبرد بالكامل لضمان وصول التغليف سليماً." : "Every slice is an engineering masterpiece in taste. Delivered exclusively via highly insulated, refrigerated transit so the icing never melts."}
          </p>
        </div>
      </section>

      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</a>
            <span>/</span>
            <span className="text-primary font-bold">{isArabic ? "توصيل كيك" : "Cake Delivery"}</span>
         </div>
      </div>

      <ProductGrid title={isArabic ? "توصيل كيك" : "Cake Delivery"} baseTitle="cake" locale={params.locale} />

      <section className="py-16 px-4 bg-trust text-white max-w-7xl mx-auto rounded-3xl my-12 shadow-2xl">
         <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-6">{isArabic ? "الكيك الحرفي الفاخر: تحفة فنية في البحرين" : "Artisanal Luxury Cakes: The Gold Standard in Bahrain"}</h2>
            <div className="text-gray-100 space-y-6 text-lg leading-relaxed font-body">
               <p>{isArabic ? 
                  "نحن في فرحتي نفخر بأنفسنا لكوننا الوجهة الأولى للكيك المخبوز ببراعة وشغف. بالنسبة لنا، الكعكة ليست مجرد حلوى، بل هي المركز الأساسي لأي احتفال استثنائي. هذا التوجه يدفعنا لاستخدام مكونات ذات جودة استثنائية، بدءًا من الكاكاو البلجيكي الخالص المستخدم في خلطاتنا، إلى فانيلا مدغشقر الطازجة، لضمان إنتاج قطعة فنية لا تُضاهى شكلاً ومذاقاً للمناسبات في أي منطقة من مناطق البحرين." 
                  : 
                  "At Farhati, we pride ourselves on being the premier destination for masterfully baked, artisanal cakes. To us, a cake is never just a dessert; it is the absolute epicenter of an exceptional celebration. This core philosophy completely mandates our use of aggressively high-quality ingredients. From the pure, unadulterated Belgian cocoa infused into our sponges, to the authentic Madagascar vanilla beans, our entire baking process is designed to produce an unparalleled gustatory and visual masterpiece for events anywhere in Bahrain."}</p>
               <p>{isArabic ? 
                  "يُعد الاهتمام بالتفاصيل سمة رئيسية تميز قسم المخبوزات لدينا. كل تصميم يرتكز على دقة هندسية عالية؛ حيث يُراعى فيه تناسق التزيين ومثالية القوام. هذا ليس مجرد إنتاج تجاري، بل عملية حرفية خالصة لا تقبل بوجود أي مخزون كيك مسبق التجميد. نقوم دائماً بخبز المنتجات يومياً للحفاظ على طراوتها وقوة قوامها. إذا كنت تبحث عن كيك مصمم لزفاف في الجفير أو حفل ذكرى سنوية في السيف، فإن جودتنا ستلبي حتى أكثر المتطلبات صرامة."
                  : 
                  "Attention to detail defines our master baking division. Every single structural design and frosting technique is executed with architectural precision. This is not mass-market commercial production; it is pure culinary artistry that strictly forbids the use of pre-frozen inventory. We exclusively bake on demand, ensuring your cake achieves maximum sponge integrity and flavor depth. Whether you require an elaborate, multi-tiered wedding cake for a reception in Juffair or a dense, rich truffle cake for an anniversary in Seef, our quality standards satisfy the most rigorous palates."}</p>
               <p>{isArabic ?
                  "ولأن درجات الحرارة المرتفعة تشكل تحدياً كبيراً، فقد ابتكرنا حلاً لوجستياً مثالياً يعتمد حصرياً على مركبات معزولة حرارياً. بفضل أسطولنا المبرد القوي، نضمن أن كل طلبية يتم التوصيل دون أن تنصهر تزييناتها أو يتغير طعمها. فريقنا للتوصيل يفهم مدى هشاشة وحساسية هذه المنتجات المصنوعة يدوياً، ويستخدم إجراءات تخفيف الصدمات القاسية أثناء رحلته عبر شوارع المنامة لتسليم طلبك بأمان لا مثيل له."
                  :
                  "Because high gradients of ambient temperature actively threaten luxury baked goods, we have engineered an elite logistical response. Operating exclusively via heavy-duty, thermal-controlled vehicles, we guarantee that the icing remains perfectly stablilized and the structural integrity undisturbed. Our dispatch team intuitively grasps the extreme physical fragility of these handcrafted cakes and executes severe shock-mitigation protocols while navigating the streets of Manama, resulting in a delivery experience characterized by absolute safety and zero compromises."}</p>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">{isArabic ? "أسئلة شائعة حول توصيل الكيك" : "Cake Delivery FAQs"}</h2>
            
            <div className="border border-gray-100 rounded-lg p-6 mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل سيذوب الكيك قبل وصوله للرفاع أو المحرق؟" : "Will the cake melt before arriving in Riffa or Muharraq?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "مستحيل. نحن نستخدم مركبات معزولة حرارياً بالكامل؛ طلبات الكيك تُنقل في درجة حرارة باردة تضمن سلامة الشكل والطعم الأصلي." : "Impossible. We deploy heavy-duty thermal insulation on every vehicle, ensuring the cake remains entirely stabilized during Bahrain transit."}</p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل الكيك يُجهز في نفس اليوم؟" : "Are the cakes baked on the same day?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "نعم نخبز منتجاتنا يومياً في منشآتنا. ليس لدينا أي مخزون كيك مسبق التجميد، مما يضمن الجودة القصوى للطعم." : "Yes, our baking division strictly operates on a zero-backlog policy. Your cake is assembled fresh, ensuring maximum sponge integrity and flavor."}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
