import { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import ProductGrid from "@/components/ProductGrid";
import SEO from "@/components/SEO";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isArabic = params.locale === 'ar';
  return {
    title: isArabic ? "توصيل زهور في البحرين | باقات فاخرة من فرحتي" : "Flowers Delivery in Bahrain | Premium Bouquets | Farhati",
    description: isArabic ? "اطلب باقات زهور نضرة ومستوردة في البحرين. نقدم تنسيقات فاخرة مع توصيل مجاني وسريع في نفس اليوم للمنامة والرفاع والمحرق." : "Order fresh, imported flowers in Bahrain. Premium luxury floral arrangements with fast same-day delivery to Manama, Riffa, and Muharraq.",
    alternates: {
      languages: {
        'en': '/flowers-delivery-bahrain',
        'ar': '/ar/flowers-delivery-bahrain',
        'x-default': '/flowers-delivery-bahrain',
      }
    }
  };
}

export default function FlowersDeliveryPage({ params }: { params: { locale: string } }) {
  const isArabic = params.locale === 'ar';
  console.log("SERVER LOG - FlowersDeliveryPage locale:", params.locale);
  
  return (
    <main className="flex flex-col min-h-screen bg-cream pb-32">
      <SEO 
        title={isArabic ? "توصيل زهور في البحرين | فرحتي" : "Flowers Delivery in Bahrain | Farhati"}
        description={isArabic ? "باقات زهور مستوردة نضرة في البحرين" : "Fresh imported flowers in Bahrain"}
        url="https://farhati.bh/flowers-delivery-bahrain"
        isProductPage={true}
      />
      
      <section className="bg-primary text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-md">
            زهور نضرة مستوردة من أفضل مزارع الإكوادور
          </h1>
          <p className="text-lg md:text-2xl font-body mb-8 opacity-95">
            نحن لا نلتزم بالزهور العادية. تنسيقاتنا الفاخرة مصممة لتدوم طويلاً، مع توصيل مضمون في نفس اليوم داخل البحرين.
          </p>
        </div>
      </section>

      <div className="bg-white/50 py-3 border-b border-gray-100 text-sm text-gray-500">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2">
            <a href="/" className="hover:text-primary">الرئيسية</a>
            <span>/</span>
            <span className="text-primary font-bold">توصيل زهور</span>
         </div>
      </div>

      <ProductGrid title="توصيل زهور" baseTitle="flowers" locale="ar" />

      <section className="py-16 px-4 bg-trust text-white max-w-7xl mx-auto rounded-3xl my-12 shadow-2xl">
         <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold mb-6">الفن المعماري لتنسيق الزهور الفاخرة في البحرين</h2>
            <div className="text-gray-100 space-y-6 text-lg leading-relaxed font-body">
               <p>في فرحتي، نحن نرفض التسوية أو القبول بالزهور العادية. تنسيقاتنا تعتبر معياراً ذهبياً في قطاع الهدايا الفاخرة داخل مملكة البحرين. نحن ندرك تماماً أن إهداء الزهور ليس مجرد معاملة تجارية، بل هو رسالة عاطفية عميقة تتطلب أقصى درجات الاهتمام بالتفاصيل. لذلك، كل باقة تخرج من منشأتنا تمثل تحفة فنية حقيقية صُممت بعناية فائقة لتتجاوز التوقعات وتخلق ذكريات تدوم طويلاً، سواء كنت تهديها في المنامة، الرفاع، المحرق أو الجفير.</p>
               <p>سلسلة التوريد الخاصة بنا مصممة بطريقة تضمن جودة لا تُضاهى. لضمان حصولك على أفضل الألوان وأطول عمر للزهور، نقوم باستيراد زهورنا بشكل مباشر وحصري من مزارع النخبة الواقعة على ارتفاعات شاهقة في الإكوادور وهولندا. هذه المزارع المتخصصة تنتج وردًا يتفوق في حجمه، سماكة ساقه، وكثافة بتلاته مقارنة بالأسواق المحلية العادية. عند وصول هذه الزهور إلى البحرين، تدخل فوراً إلى غرف التبريد الخاصة بنا، حيث يتم حفظها في بيئة مثالية من حيث درجة الحرارة والرطوبة لضمان نضارتها التامة حتى لحظة التوصيل.</p>
               <p>عملية التوصيل لدينا في البحرين تعتمد على الثقة والسرعة القصوى. نستخدم أسطولاً خاصاً من السيارات المعزولة والمبردة التي تضمن بقاء الزهور بحالة ممتازة وعدم تعرضها لحرارة الخليج القاسية. سواء كنت تحتاج إلى توصيل مفاجئ في نفس اليوم لحفلة عيد ميلاد في المحرق أو ترتيب استثنائي لاجتماع مهم في خليج البحرين، فإن فريق العمليات الميدانية لدينا يمتلك الكفاءة والاحترافية لتنفيذ المهمة بدقة استثنائية.</p>
            </div>
         </div>
      </section>

      <section className="py-16 bg-white px-4">
         <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">{isArabic ? "أسئلة شائعة حول طلبات الزهور" : "Flower Delivery FAQs"}</h2>
            
            <div className="border border-gray-100 rounded-lg p-6 mb-4" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "من أين تستورد فرحتي زهورها؟" : "Where do your flowers originate?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "لضمان الجودة، يتم شحن زهورنا مباشرة من مزارع النخبة في الإكوادور وهولندا مما يضمن عِصياً أكثر سمكاً وألواناً غنية." : "To bypass inferior local supply chains, our stems are air-freighted directly from elite, high-altitude farms in Ecuador and Holland."}</p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-lg p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
               <h4 className="font-bold text-lg mb-2" itemProp="name">{isArabic ? "متى يجب أن أطلب التوصيل للمنامة في نفس اليوم؟" : "What is the cutoff for Manama same-day delivery?"}</h4>
               <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-600" itemProp="text">{isArabic ? "يرجى تأكيد طلبك قبل الساعة 6:00 مساءً. ستقوم سياراتنا المبردة بضمان عدم تلف الزهور بسبب حرارة البحرين." : "Finalize your order before 6:00 PM. Our climate-controlled fleet guarantees the flowers will never wilt in the Bahrain heat."}</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
