import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic ? "توصيل شوكولاتة في البحرين | شوكولاتة فاخرة هدية | فرحتي" : "Chocolate Delivery in Bahrain | Premium Gift Boxes | Farhati",
    description: isArabic ? "تسوق الشوكولاتة البلجيكية والسويسرية الفاخرة للطلب والتوصيل في البحرين. هدايا شوكولاتة راقية لجميع المناسبات مع توصيل آمن المنامة والرفاع." : "Shop authentic Belgian and Swiss chocolate boxes for delivery in Bahrain. High-end luxury chocolate gifts for all occasions with temperature-controlled shipping.",
    alternates: {
      languages: {
        'en': '/chocolate-delivery-bahrain',
        'ar': '/ar/chocolate-delivery-bahrain',
        'x-default': '/chocolate-delivery-bahrain',
      }
    }
  };
}

export default function ChocolateDeliveryPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  
  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={isArabic ? "توصيل شوكولاتة في البحرين | فرحتي" : "Chocolate Delivery in Bahrain | Farhati"}
        description={isArabic ? "صناديق شوكولاتة فاخرة ومستوردة" : "Premium imported luxury chocolates"}
        url="https://farhati.bh/chocolate-delivery-bahrain"
        isProductPage={true}
      />
      
      <section className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            {isArabic ? "روائع الشوكولاتة السويسرية والبلجيكية الأصلية" : "Authentic Swiss & Belgian Chocolate Masterpieces"}
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            {isArabic ? "صناديق هدايا شوكولاتة راقية تناسب الذوق الرفيع. يتم تبريدها بالكامل في طريقها إليك لتصل مثالية في جميع أوقات السنة." : "High-end luxury chocolate profiles designed for elite gifting. Fully refrigerated all the way to your door."}
          </p>
        </div>
      </section>

      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">{isArabic ? "الرئيسية" : "Home"}</a>
            <span>/</span>
            <span className="text-primary font-bold">{isArabic ? "توصيل شوكولاتة" : "Chocolate Delivery"}</span>
         </div>
      </div>

      <ProductGrid title={isArabic ? "توصيل شوكولاتة" : "Chocolate Delivery"} baseTitle="chocolate" locale={params.locale} />

      <section className="py-16 px-4 bg-trust text-white max-w-7xl mx-auto rounded-3xl my-12 shadow-2xl">
         <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-6">{isArabic ? "الشوكولاتة السويسرية والبلجيكية: تجربة ذواقة في البحرين" : "Swiss & Belgian Chocolate: A Gourmet Experience in Bahrain"}</h2>
            <div className="text-gray-100 space-y-6 text-lg leading-relaxed font-body">
               <p>{isArabic ? 
                  "نحن نؤمن بأن الشوكولاتة الفاخرة تتحدث لغة عالمية من الرفاهية والعمق. كل صندوق هدايا نوفره يمثل رحلة استثنائية من النكهات المنسقة بعناية للذواقة وأصحاب الذوق الرفيع. نستورد أفضل أنواع الكاكاو عالمياً لتقديم تجربة حيوية من حلاوة الكراميل الداكنة إلى حلاوة الحليب الكريمي. في البحرين، من غير المقبول تقديم شوكولاتة ذائبة أو تالفة بسبب حرارة الجو، ولذلك وضعنا معايير صارمة جداً تركز على سلامة المنتجات في جميع الأوقات." 
                  : 
                  "We fundamentally believe that true luxury chocolate articulates a universal language of opulence and depth. Every single curated gift box we provide represents an exceptional flavor journey, specifically designed for genuine gourmands and individuals with highly refined palates. We globally source the absolute finest cocoa to deliver a dynamic experience ranging from intensely dark, bitter truffles to impossibly smooth, creamy milk praglines. Within the harsh climate of Bahrain, it is entirely unacceptable to deliver compromised or melted chocolate, which is why our strict operational standards prioritize product integrity at all times."}</p>
               <p>{isArabic ? 
                  "جودة الشوكولاتة تبدأ من زراعة حبوب الكاكاو، لهذا نتعامل حصرياً مع موردين ذوي سمعة عالمية وتاريخ عريق في بلجيكا وسويسرا للابتعاد عن المنتجات الرخيصة والمقلدة. إن صناديق الشوكولاتة التي لدينا ليست مجرد تغليف جميل، بل هي قطع فنية تضم مكونات حقيقية بدون إضافات اصطناعية مبالغ فيها، سواء كانت شوكولاتة بالحليب تعكس عراقة المزارع السويسرية الجبلية، أو الشوكولاتة الداكنة ذات الأصل الواحد."
                  : 
                  "The ultimate quality of chocolate originates at the cocoa bean cultivation stage. We completely bypass mass-market manufacturers and deal exclusively with world-renowned, sustainably certified suppliers boasting deep historical roots in both Belgium and Switzerland. Our premium chocolate assortments are not merely aesthetically pleasing packaging; they are edible culinary art pieces made with authentic, unadulterated ingredients. Whether it’s velvety milk chocolate reflecting the heritage of alpine Swiss farms, or aggressive, single-origin dark chocolate, zero artificial extenders are utilized."}</p>
               <p>{isArabic ?
                  "ولحماية هذه الروائع الهشة، تم تجهيز أسطولنا حصرياً بمقصورات مبردة معزولة حرارياً بالكامل لضمان بقائها بدرجة حرارة ثابتة حتى خلال أشد أيام الصيف حرارة في المنامة والمحرق. وبمجرد استلام طلبك عبر منصتنا المتقدمة وسهلة الاستخدام، يتم تغليف صندوق الهدايا بشكل فاخر وتجهيزه للتسليم السريع. سواء كنت ترغب في مفاجأة شريكك، مكافأة موظفيك بتميز، أو تقديم هدية تعتذر بها بصمت، فإن صناديق الشوكولاتة الفاخرة لدينا قادرة على إيصال رسالتك بكل براعة ورقي."
                  :
                  "To actively protect these fragile masterpieces, our delivery fleet is exclusively outfitted with fully thermal-insulated, heavily refrigerated cargo holds. This guarantees absolute temperature stabilization even during the most aggressive summer heatwaves spanning Manama, Riffa, and Seef. Once your order is processed via our frictionless digital platform, the selected chocolate assortment is secured in premium, bespoke packaging and dispatched rapidly. Whether you aim to surprise a highly valued partner, reward top-tier executives, or offer a profound gesture of apology, our luxury chocolate collections eloquently articulate your intention with absolute sophistication."}</p>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">{isArabic ? "أسئلة شائعة حول توصيل الشوكولاتة" : "Chocolate Delivery FAQs"}</h2>
            
            <div className="border border-gray-100 rounded-lg p-6 mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "هل صناديق هدايا الشوكولاتة لديكم أصلية؟" : "Are your chocolate gift boxes authentic?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "بكل تأكيد. جميع العلامات التجارية المتوفرة لدينا مثل فيريرو والكمأ السويسري أصلية 100% ويتم التأكد من صلاحيتها للعملاء في البحرين." : "Absolutely. All luxury profiles, including Swiss truffles and artisanal Belgian selections, are 100% authentic and strictly vetted for structural integrity."}</p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "كيف يتم التوصيل دون أن تنصهر الشوكولاتة في الخليج؟" : "How is delivery completed without the chocolate melting in the Gulf?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "يتم تخزين ونقل منتجاتنا حصرياً في بيئات خاضعة للتحكم الحراري. عرباتنا توفر تبريداً طوال فترة النقل في البحرين." : "We store and transport these products exclusively in highly insulated, thermal-controlled units to prevent any risk of melting during Bahrain summers."}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
