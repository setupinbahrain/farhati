import React from 'react';
import Link from 'next/link';

export default function Enterprise() {
  return (
    <main className="flex flex-col min-h-screen bg-cream text-gray-900">
      {/* B2B HERO - BURGUNDY POWER SECTION */}
      <section className="relative w-full py-32 px-4 flex flex-col items-center text-center bg-primary text-white border-b-4 border-trust">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-trust font-bold tracking-widest uppercase mb-4 block text-sm">
            Farhati Infrastructure API
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            The Logistics Backbone of the GCC.
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Scale your floral business instantly. Inject our climate-controlled fulfillment, inventory sync, and AI predictive engines directly into your native operations.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-cta hover:bg-[#A61E1E] text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl">
               Get API Keys
             </button>
             <button className="bg-trust hover:bg-white hover:text-trust text-[#1A1A1A] px-8 py-4 rounded-md font-bold transition-all shadow-xl">
               Read Documentation
             </button>
          </div>
        </div>
      </section>

      {/* CODE BLOCK SHOWCASE */}
      <section className="py-24 px-4 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-3xl font-heading font-bold mb-4 text-[#1A1A1A]">Integrate in Minutes</h2>
            <p className="text-[#4A5568] text-lg mb-8 leading-relaxed">
               Drop the `Farhati SDK` into your Next.js, Node, or Python backend. You instantly gain access to 40,000+ sqm of warehouse space and our automated sorting algorithms. Focus on acquiring customers; we handle the last-mile orchestration.
            </p>
            <ul className="space-y-4 text-[#1A1A1A] font-bold">
               <li className="flex items-center gap-2">✓ Real-time Inventory Sync</li>
               <li className="flex items-center gap-2">✓ Automated Rider Dispatch</li>
               <li className="flex items-center gap-2">✓ Predictive AI Stock Procurement</li>
            </ul>
         </div>

         {/* FAKE IDE WINDOW */}
         <div className="bg-[#1A1A1A] rounded-xl border border-gray-200 shadow-2xl overflow-hidden text-sm">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
               <span className="text-gray-400 text-xs ml-4">create-order.ts</span>
            </div>
            <div className="p-6 overflow-x-auto text-[#D4AF37] leading-relaxed font-mono">
               <pre>
{`import { FarhatiClient } from '@farhati/sdk';

const farhati = new FarhatiClient(process.env.FARHATI_SECRET);

export async function processOrder(req, res) {
  const order = await farhati.orders.create({
    items: ['BOUQ-001', 'CAKE-054'],
    dropoff_geo: req.body.location,
    is_emergency: true
  });

  return res.json({ 
    tracking_id: order.id, 
    eta_minutes: order.routing.eta 
  });
}`}
               </pre>
            </div>
         </div>
      </section>

      {/* TRUST METRICS */}
      <section className="bg-white py-16 border-t border-gray-200 shadow-soft">
         <div className="max-w-5xl mx-auto grid grid-cols-3 text-center divide-x divide-gray-200">
            <div>
               <div className="text-4xl font-heading font-black text-primary mb-2">12M+</div>
               <div className="text-[#8B98A5] text-sm uppercase tracking-widest">API Requests / Mo</div>
            </div>
            <div>
               <div className="text-4xl font-heading font-black text-trust mb-2">99.99%</div>
               <div className="text-[#8B98A5] text-sm uppercase tracking-widest">Uptime SLA</div>
            </div>
            <div>
               <div className="text-4xl font-heading font-black text-primary mb-2">0.2s</div>
               <div className="text-[#8B98A5] text-sm uppercase tracking-widest">Avg Response Time</div>
            </div>
         </div>
      </section>
    </main>
  );
}
