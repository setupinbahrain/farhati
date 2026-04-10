import Link from "next/link";
import SEO from "@/components/SEO";
import { CITIES_BAHRAIN } from "@/lib/cities";

export default function AreasDirectory() {
  return (
    <main className="min-h-screen bg-cream pb-32 pt-28">
      <SEO 
        title="Delivery Areas & Cities in Bahrain | Farhati"
        description="We deliver luxury cakes, flowers, and gifts to over 100 cities and neighborhoods across Bahrain. Rapid, climate-controlled logistics."
        url="https://farhati.bh/areas"
      />

      {/* HERO */}
      <section className="text-center px-4 max-w-4xl mx-auto mt-16 mb-20 animate-float-slow">
         <h1 className="text-5xl md:text-7xl font-heading font-black text-primary mb-6 drop-shadow-sm">Nationwide Reach.</h1>
         <p className="text-xl text-gray-500 font-body leading-relaxed max-w-2xl mx-auto">
            From the diplomatic luxury of Manama to the exclusive residences of Saar, our climate-controlled fleet spans all 100 established blocks and regions in Bahrain.
         </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 z-20 relative">
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CITIES_BAHRAIN.map((citySlug) => {
               const cityName = citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
               
               return (
                  <Link 
                     key={citySlug} 
                     href={`/${citySlug}/luxury-gifts-bahrain`} 
                     className="bg-white rounded-xl p-4 border border-gray-100 shadow-soft hover:shadow-lg transition-all text-center flex items-center justify-center font-bold text-gray-700 hover:text-primary min-h-[80px]"
                  >
                     {cityName}
                  </Link>
               );
            })}
         </div>
      </section>
    </main>
  );
}
