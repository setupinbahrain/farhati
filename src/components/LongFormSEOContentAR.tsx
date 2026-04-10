import React from "react";

type LongFormProps = {
  baseTitle: string;
  cityName: string;
  dynamicImage: string;
  specificTextAR: string;
  isCake: boolean;
  isFlower: boolean;
  isChocolate: boolean;
};

export default function LongFormSEOContentAR({ 
  baseTitle, 
  cityName, 
  dynamicImage, 
  specificTextAR, 
  isCake, 
  isFlower, 
  isChocolate 
}: LongFormProps) {

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full text-[#4A5568] copy-block space-y-12 text-right dir-rtl">
      {/* Chapter 1: The Context */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">الدليل الشامل والأمثل لـ {baseTitle} في {cityName}</h2>
        <p className="leading-relaxed text-lg mb-4">
          مرحباً بكم في المرجع الأمثل والأكثر تفرداً والمصمم خصيصاً لتأمين أرقى <strong>{baseTitle.toLowerCase()}</strong> في قلب <strong>{cityName}</strong>. إن فن الإهداء يتجاوز بكثير مجرد تبادل الأشياء المادية؛ إنه تعبير مدروس ومتقن عن المشاعر العميقة، والحب المستدام، والاحترام المطلق. في المجتمعات النابضة بالحياة والمتصلة بعمق في جميع أنحاء {cityName}، فإن ضمان وصول هديتك ليس فقط في الوقت المحدد بل وتغليفها بشكل لا تشوبه شائبة هو أمر في غاية الأهمية للحفاظ على علاقاتك الشخصية والمهنية.
        </p>
        <p className="leading-relaxed text-lg mb-4">
          تأسست منصة &quot;فرحتي&quot; برؤية حازمة: لقد تم إجبار العملاء في {cityName} لعقود على الاختيار بين الجودة العالية والراحة الرقمية؛ حيث كانت وسائل التوصيل العادية تشوه دائماً تجربة تقديم المنتجات الفاخرة. 
        </p>
        <p className="leading-relaxed text-lg mb-4">
          من خلال التسارع التكنولوجي المكثف وتجميع سلاسل التوريد المادية الفاخرة، قمنا بتغيير هذا المفهوم بالكامل. عندما تطلب {baseTitle.toLowerCase()} الخاص بك إلى {cityName}، فإنك لا تتواصل مع مجرد خدمة توصيل، بل أنت توظف آلية تقديم فاخرة تم هندستها خصيصاً لك.
        </p>
        
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl my-10">
            <img src={dynamicImage} alt={`Premium ${baseTitle} showcased exclusively for residents of ${cityName}, Bahrain.`} className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-6 right-6 text-white font-bold text-xl drop-shadow-md">مجموعة حصرية لمدينة {cityName}</span>
        </div>
      </div>

      {/* Chapter 2: The Logic Context */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">لماذا يثق سكان {cityName} في فرحتي بلا حدود؟</h2>
        <p className="leading-relaxed text-lg mb-4">
          {specificTextAR}
        </p>
        <p className="leading-relaxed text-lg mb-4">
          إن توصيل عناصر شديدة الحساسية لدرجة الحرارة والأهمية الجمالية مثل {baseTitle.toLowerCase()} يتطلب بنية لوجستية لا يمكن للأنظمة القياسية توفيرها. تم ضبط خوارزميات أسطولنا الإقليمي لخدمة {cityName} على وجه التحديد.
        </p>
        <blockquote className="border-r-4 border-primary pr-6 my-8 italic text-2xl text-gray-700 font-heading">
          &quot;إن دمج النقل المتحكم فيه بالمناخ مع معايير جودة لا تقبل المساومة يتيح لنا تنفيذ عمليات التوصيل إلى {cityName} بشكل لا مثيل له.&quot;
        </blockquote>
        <p className="leading-relaxed text-lg mb-4">
          تعمل كل مركبة في أسطولنا بأنظمة تحكم مناخية متطورة. لماذا يهم هذا؟ إذا كنت ترسل عناصر فاخرة إلى {cityName} خلال ذروة الصيف في البحرين، فستتسبب المركبات العادية بانهيار الهيكل الجمالي. نظامنا يضمن أن {isFlower ? 'الهيكل الخلوي النباتي يظل سليمًا ومفعمًا بالحيوية' : isCake ? 'الهيكل وكريمة الزينة يظلان متماسكين وبشكل مثالي' : 'خصائص الكاكاو الفاخر لدينا تظل غير متأثرة'}، لتصل إلى وجهتها تماماً كما ظهرت في استوديوهاتنا الخاصة.
        </p>
      </div>

      {/* Chapter 3: Product Subsystems */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">منظومتنا الفاخرة للتنسيقات</h2>
        <p className="leading-relaxed text-lg mb-4">نحن لا نبيع الهدايا فقط؛ بل نصنع تجارب عاطفية مبهرة. من أجل ضمان أن يكون {baseTitle.toLowerCase()} خاصاً بك مثالياً، قمنا بتنظيم فرق متخصصة لاستيراد أجود المواد عالمياً.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">القسم النباتي: واردات الأزهار النخبوية</h3>
        <p className="leading-relaxed text-lg mb-4">يتم استيراد الورود مباشرة من مزارع النخبة المستدامة الواقعة في الإكوادور وكولومبيا وهولندا. حيث تمنحها تلك البيئة ألواناً خلابة، وسيقان أكثف، وعمر أطول بعد القطف. يتم تنسيقها في البحرين وتوصيلها فوراً إلى {cityName} عبر أسطولنا المكيف.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">قسم الحلويات: الكيك بنكهات وحرفية عالية</h3>
        <p className="leading-relaxed text-lg mb-4">نحن نرفض استخدام المواد الحافظة الاصطناعية أو الزيوت المهدرجة. عندما يصل الطلب إلى عزيزك في {cityName} سيتذوق نكهات أصلية من فانيليا مدغشقر الحقيقية، وكريمة الألبان الأوروبية العضوية، والشوكولاتة البلجيكية الصافية.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">قسم الشوكولاتة: خبراء الكاكاو</h3>
        <p className="leading-relaxed text-lg mb-4">يتضمن اختيارنا قطع الكمأة الفاخرة المرسومة يدويًا، والشوكولاتة الداكنة العميقة، والبرالين ذو الملمس المخملي. تصل كل هذه التحف الفنية إلى {cityName} داخل علب الهدايا الفاخرة المعتمدة لدى منصة &quot;فرحتي&quot;.</p>
      </div>

      {/* Chapter 4: Occasions */}
      <div>
         <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">التناغم مع الأحداث الثقافية والعاطفية</h2>
         <p className="leading-relaxed text-lg mb-4">
           إن النسيج الثقافي الأصيل في {cityName} يؤكد دائماً على أهمية المواعيد.
         </p>
         <ul className="space-y-4 text-lg list-disc pr-6 text-gray-700">
           <li><strong>المناسبات الرومانسية:</strong> تتطلب ذكريات الزواج أو إعلانات الحب توصيلاً مبهرًا، وأنظمتنا تضع الأولوية لتلك اللحظات.</li>
           <li><strong>العلاقات المهنية والشركات:</strong> الهدية الفاخرة المرسلة إلى الشركات في {cityName} تعكس احترافية وذوق مرسلها.</li>
           <li><strong>الاعتذار والأسف:</strong> الوقت ثمين للغاية. وتضمن أنظمة التوصيل السريع لدينا وصول رسالتك بشكل عاجل.</li>
           <li><strong>المناسبات الدينية والثقافية:</strong> ننسق تجهيزات ضخمة لتكون محط الأنظار والاهتمام في تجمعات شهر رمضان، عيد الفطر، وعيد الأضحى وغيرها في {cityName}.</li>
         </ul>
      </div>

      {/* Chapter 6: The Guarantee */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-100 rounded-2xl shadow-sm mt-12">
         <h2 className="text-3xl font-heading font-bold text-primary mb-4 text-center">خدمة &quot;فرحتي&quot; المطلقة</h2>
         <p className="leading-relaxed text-lg text-center mx-auto max-w-2xl font-bold">
           نحن لا نطلب ثقتك؛ بل نفرض التميز من خلال إثباته لك على أرض الواقع في {cityName}. ابدأ طلبك الآن، ودعنا نحوّل هديتك إلى واقع ملموس ومذهل ومفعم بالرفاهية المطلقة.
         </p>
      </div>
    </section>
  );
}
