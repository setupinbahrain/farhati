import Link from "next/link";
import SEO from "@/components/SEO";

export default function OccasionsDirectory() {
  const occasions = [
    { title: "Ramadan Essentials", href: "/ramadan-gifts-bahrain", desc: "Premium dates, crescents, and luxury hampers", icon: "🌙" },
    { title: "Eid Celebrations", href: "/eid-gifts-bahrain", desc: "Money bouquets and lavish family sharing boxes", icon: "✨" },
    { title: "Mother's Day", href: "/mothers-day-flowers-bahrain", desc: "Express ultimate gratitude with luxury botanicals", icon: "👑" },
    { title: "Valentine's Day", href: "/valentines-day-flowers-bahrain", desc: "500-stem red rose bouquets and fine chocolates", icon: "❤️" },
    { title: "Anniversaries", href: "/anniversary-gifts-bahrain", desc: "Milestone luxury packages for your partner", icon: "💍" },
    { title: "Birthdays", href: "/birthday-gifts-bahrain", desc: "Cakes, balloons, and high-energy floral arrangements", icon: "🎂" },
    { title: "Weddings & Bridal", href: "/wedding-gifts-bahrain", desc: "Exclusive luxury floral design and bridal cakes", icon: "🕊️" },
    { title: "Graduations", href: "/graduation-gifts-bahrain", desc: "Celebrate massive achievements with impact", icon: "🎓" },
  ];

  return (
    <main className="min-h-screen bg-cream pb-32 pt-28">
      <SEO 
        title="Luxury Occasions & Milestones | Farhati Bahrain"
        description="Shop absolute luxury gifting for Ramadan, Eid, Valentine's, and Birthdays in Bahrain. Delivering Joy across all major milestones."
        url="https://farhati.bh/occasions"
      />

      {/* HERO */}
      <section className="text-center px-4 max-w-4xl mx-auto mt-16 mb-20 animate-float-slow">
         <h1 className="text-5xl md:text-7xl font-heading font-black text-primary mb-6 drop-shadow-sm">Life&apos;s Masterpieces.</h1>
         <p className="text-xl text-gray-500 font-body leading-relaxed max-w-2xl mx-auto">
            We categorize our $1 Billion inventory into the milestones that matter. Select your occasion below and unlock highly curated ecosystems of luxury.
         </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 z-20 relative">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ, idx) => (
               <Link 
                  key={occ.title} 
                  href={occ.href} 
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-2xl transition-all group overflow-hidden relative transform hover:-translate-y-2 duration-300 block"
               >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl z-0 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10 flex flex-col h-full">
                     <span className="text-6xl mb-6 block group-hover:scale-110 transition-transform duration-300 origin-left">{occ.icon}</span>
                     <h3 className="text-2xl font-bold font-heading text-primary mb-3">{occ.title}</h3>
                     <p className="text-gray-500 flex-grow mb-6 leading-relaxed">{occ.desc}</p>
                     
                     <div className="text-trust font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs mt-auto">
                        Explore Collection &rarr;
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>
    </main>
  );
}
