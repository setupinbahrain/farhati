import { Metadata } from "next";
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
