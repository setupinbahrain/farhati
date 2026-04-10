import React from "react";

type LongFormProps = {
  baseTitle: string;
  cityName: string;
  dynamicImage: string;
  specificText: string;
  isCake: boolean;
  isFlower: boolean;
  isChocolate: boolean;
};

export default function LongFormSEOContent({ 
  baseTitle, 
  cityName, 
  dynamicImage, 
  specificText, 
  isCake, 
  isFlower, 
  isChocolate 
}: LongFormProps) {

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full text-[#4A5568] copy-block space-y-12">
      {/* Chapter 1: The Context */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">The Definitive Guide to {baseTitle} in {cityName}</h2>
        <p className="leading-relaxed text-lg mb-4">
          Welcome to the ultimate, unparalleled resource designed explicitly for securing the finest <strong>{baseTitle.toLowerCase()}</strong> in the heart of <strong>{cityName}</strong>. Gifting is profoundly more than an exchange of physical items; it is a meticulously calculated expression of deep emotion, enduring love, and absolute respect. In the vibrant, culturally rich, and deeply connected communities throughout {cityName}, ensuring that your gift arrives not only on time, but flawlessly presented and radiating unmistakable exclusivity, is absolutely critical to maintaining your personal and professional relationships.
        </p>
        <p className="leading-relaxed text-lg mb-4">
          Farhati was established under a singular, uncompromising vision: to obliterate the compromises historically associated with online gifting platforms in Bahrain. For decades, residents of {cityName} were forced to choose between premium quality—often requiring tedious physical travel to boutique locations—and the convenience of digital logistics, which almost universally guaranteed a degradation in product presentation.
        </p>
        <p className="leading-relaxed text-lg mb-4">
          Through intense technological acceleration and the aggregation of elite physical supply chains, we have completely transformed the paradigm. When you initiate an order for {baseTitle.toLowerCase()} designated for {cityName}, you are not simply engaging a delivery service; you are deploying a luxury concierge mechanism engineered specifically for you.
        </p>
        
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl my-10">
            <img src={dynamicImage} alt={`Premium ${baseTitle} showcased exclusively for residents of ${cityName}, Bahrain.`} className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">Exclusive Collection for {cityName}</span>
        </div>
      </div>

      {/* Chapter 2: The Logic Context */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">Why the Residents of {cityName} Trust Farhati Unconditionally</h2>
        <p className="leading-relaxed text-lg mb-4">
          {specificText}
        </p>
        <p className="leading-relaxed text-lg mb-4">
          Delivering highly delicate, temperature-sensitive, and aesthetically critical items like {baseTitle.toLowerCase()} demands a logistical architecture that standard courier setups cannot provide. The geographic layout of {cityName} features unique traffic patterns, atmospheric variables, and structural complexities. Our regional fleet algorithms are tuned specifically for {cityName}, guaranteeing that your gift bypasses traditional transit friction.
        </p>
        <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-2xl text-gray-700 font-heading">
          &quot;The integration of climate-controlled transit with zero-compromise product curation allows us to consistently execute flawless {baseTitle.toLowerCase()} deliveries across {cityName} at speeds previously considered physically impossible.&quot;
        </blockquote>
        <p className="leading-relaxed text-lg mb-4">
          Every vehicle in the Farhati fleet operates with integrated multi-zone climate control systems. Why does this matter? If you are sending luxury items into {cityName} during the peak of Bahrain&apos;s intense summer, standard vehicles will initiate irreversible aesthetic and structural decay within minutes. Our ecosystem ensures that {isFlower ? 'the botanical cellular structure remains totally intact' : isCake ? 'the structural integrity and icing arrays remain immaculately firm' : 'the temper algorithms of our cocoa reserves remain untarnished'}, arriving at your recipient&apos;s door exactly as it appeared in our zero-compromise photography studios.
        </p>
      </div>

      {/* Chapter 3: Product Subsystems */}
      <div>
        <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">Unveiling Our Extensive Material Ecosystem</h2>
        <p className="leading-relaxed text-lg mb-4">We do not just curate gifts; we meticulously engineer emotional experiences. To execute your intent perfectly when searching for {baseTitle.toLowerCase()}, you must have access to a fundamentally superior catalog. Our product ecosystems are vast, dynamic, and strictly quality-controlled.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">The Botanical Division: Elite Floral Imports</h3>
        <p className="leading-relaxed text-lg mb-4">If your intent surrounding {baseTitle.toLowerCase()} includes floral arrangements, you require absolute genetic superiority. Farhati actively circumvents secondary markets, importing directly from prestigious, sustainable high-altitude farms situated in Ecuador, Colombia, and Holland. The environmental stress placed upon these specific geographical altitudes yields blooms with violently saturated colors, thicker stems, and significantly extended vase-life guarantees. These imported assets are then physically arranged by master florists within our central Bahrain processing hubs, before being immediately dispatched directly to {cityName}. Wrapped in premium, hydrophobic Korean silk papers and secured with bespoke satin ribboning, the physical unpacking experience is intentionally designed to trigger profound chemical joy.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">The Gustatory Division: Artisanal Patisseries and Cakes</h3>
        <p className="leading-relaxed text-lg mb-4">Perhaps your search for {baseTitle.toLowerCase()} resolves around celebratory consumption. The Farhati bakery infrastructure recruits elite artisan patisseries. We absolutely forbid the utilization of artificial preservatives, hydrogenated oils, or mass-produced fondant layers that compromise the foundational culinary experience. Instead, your recipient in {cityName} will experience authentic Madagascar vanilla pod infusions, Grade-A Japanese Matcha, organic European dairy creams, and pure Belgian chocolate couverture. From classical red velvet sponge architectures to highly avant-garde modern dessert arrays, every tier is a calculated masterpiece.</p>
        
        <h3 className="text-2xl font-heading font-bold text-primary mt-8 mb-3">The Confectionery Division: Master Chocolatiers</h3>
        <p className="leading-relaxed text-lg mb-4">Chocolate is not simply candy; it is a highly evolved, culturally significant medium of exchange. For clients requiring {baseTitle.toLowerCase()} with a chocolate focus, our curation includes hand-painted ganache truffles, intensely rich dark couverture shards, and velvet-smooth textural pralines. Every sequence is housed within rigid, magnetic-closure presentation boxes that exude an undeniable aura of premium exclusivity when delivered in {cityName}.</p>
      </div>

      {/* Chapter 4: Occasions */}
      <div>
         <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">Synchronizing with Cultural and Emotional Occasions</h2>
         <p className="leading-relaxed text-lg mb-4">
           The necessity for {baseTitle.toLowerCase()} rarely occurs in a vacuum; it is almost universally tethered to a precise temporal event. The cultural fabric of {cityName} demands that specific occasions are respected with exacting precision.
         </p>
         <ul className="space-y-4 text-lg list-disc pl-6 text-gray-700">
           <li><strong>Romantic Engagements:</strong> Anniversaries and unexpected declarations of love require immediate, overwhelming aesthetic impact. Our systems prioritize these emotional states.</li>
           <li><strong>Corporate Assertions:</strong> When attempting to solidify a business relationship with a partner in {cityName}, sending a premium corporate gift must reflect your own brand&apos;s zero-tolerance for mediocrity.</li>
           <li><strong>Apologies and Remorse:</strong> Time is the most critical variable when executing an apology. Our rapid deployment network ensures your gesture arrives before emotional distances widen.</li>
           <li><strong>Religious & Cultural Milestones:</strong> Ramadan, Eid Al-Fitr, and Eid Al-Adha are intensely communal. We construct vast, shareable arrangements designed to act as physical centerpieces for family gatherings.</li>
         </ul>
      </div>
      
      {/* Chapter 5: Local SEO Mechanics */}
      <div>
         <h2 className="text-3xl font-heading font-bold text-[#1A1A1A] mb-6">The Unseen Mechanics of {cityName} Logistics</h2>
         <p className="leading-relaxed text-lg mb-4">
           How exactly do we guarantee that your {baseTitle.toLowerCase()} arrives looking flawless? The answer lies in our obsession with the &quot;Last Mile.&quot; The moment your luxury item leaves our central sorting environment, it enters a highly monitored transit state. Our dispatch software consistently analyzes traffic gridlocks, municipal construction variables, and hyper-local routing anomalies specific to {cityName}. 
         </p>
         <p className="leading-relaxed text-lg mb-4">
           This means if you are residing internationally in the United States, the United Kingdom, or Saudi Arabia, and require a gift executed flawlessly for an individual in {cityName}, you operate with the absolute certainty that Farhati acts as your physical proxy. You are not just buying {baseTitle.toLowerCase()}; you are purchasing complete emotional security and purchasing back your own time.
         </p>
      </div>

      {/* Chapter 6: The Guarantee */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-10 border border-gray-100 rounded-2xl shadow-sm mt-12">
         <h2 className="text-3xl font-heading font-bold text-primary mb-4 text-center">The Farhati Absolute Protocol</h2>
         <p className="leading-relaxed text-lg text-center mx-auto max-w-2xl font-bold">
           We do not ask for your trust; we systemically demand it through flawless execution. Your search for {baseTitle.toLowerCase()} in {cityName} ends today. Proceed to our secure checkout, input the coordinates, and allow our network to aggressively transform your digital request into a profound physical reality.
         </p>
      </div>
    </section>
  );
}
