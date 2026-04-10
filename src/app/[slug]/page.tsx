import { SILO_PAGES } from "@/lib/routes";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// 1. Statically generate the 108 SEO pages at build time
export function generateStaticParams() {
  return SILO_PAGES.map((slug) => ({
    slug: slug,
  }));
}

// 2. Generate dynamic metadata based on the slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  
  if (!SILO_PAGES.includes(slug)) {
    return {};
  }

  // Convert slug to human-readable title (e.g., "flowers-delivery-bahrain" -> "Flowers Delivery Bahrain")
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Premium Farhati Gifting`,
    description: `Order the best ${title.toLowerCase()} with Farhati. We offer same-day delivery across all locations in Bahrain!`,
  };
}

// 3. The Deep Polymorphic Page Structural Skeleton
export default function SiloPage({ params }: Props) {
  const { slug } = params;

  if (!SILO_PAGES.includes(slug)) {
    notFound();
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-20 px-4 text-center pb-24 shadow-soft">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-body mb-8 opacity-90">
            Bahrain&apos;s Most Trusted Network for Premium Gifts, Fresh Flowers, and Artisanal Cakes.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-accent hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
              Shop Now
            </button>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. Category Grid (Placeholder) */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full -mt-12 relative z-10">
         <div className="bg-white rounded-xl shadow-soft p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
               <h3 className="font-heading font-bold text-trust text-xl mb-2">Fresh Flowers</h3>
               <p className="text-gray-500 text-sm">Sourced daily from Holland & Kenya</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
               <h3 className="font-heading font-bold text-trust text-xl mb-2">Artisanal Cakes</h3>
               <p className="text-gray-500 text-sm">Baked fresh by local master chefs</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
               <h3 className="font-heading font-bold text-trust text-xl mb-2">Luxury Chocolates</h3>
               <p className="text-gray-500 text-sm">Premium Belgium & Swiss selections</p>
            </div>
         </div>
      </section>

      {/* 3. Product Grid Skeleton */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Trending {title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow-soft border border-gray-100 flex flex-col group cursor-pointer hover:shadow-lg transition-all">
              <div className="bg-gray-200 w-full h-48 rounded-lg mb-4 mb:h-64 object-cover overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                 {/* Image Placeholder */}
                 <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">Image</div>
              </div>
              <h4 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2">Premium {title} Package {item}</h4>
              <p className="text-primary font-bold mt-2">25.00 BHD</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEO Written Content Block (3,500+ words framework) */}
      <section className="py-12 bg-white px-4 border-t border-gray-100 shadow-soft">
        <div className="max-w-4xl mx-auto prose prose-red font-body">
          <h2 className="text-3xl font-heading font-bold mb-6 text-trust">Why Choose Farhati for {title}?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            When you search for <strong>{title.toLowerCase()}</strong>, you need absolute assurance that your gift will arrive on time, looking exactly like the picture, and evoking the perfect emotion. Farhati bridges the gap between premium luxury and rapid same-day execution in Bahrain.
          </p>
          <p className="text-gray-600 leading-relaxed list-disc">
            - <strong>100% Guaranteed Freshness:</strong> We partner only with the top-tier boutiques.<br/>
            - <strong>Same-Day Delivery:</strong> Fast, climate-controlled logistics ensuring your {title.toLowerCase()} never melts or wilts.<br/>
            - <strong>Secure Ordering:</strong> Encrypted networks and dedicated customer success via WhatsApp.
          </p>
        </div>
      </section>

    </main>
  );
}
