import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-3xl font-heading font-black tracking-tight text-white mb-6 block">
            FARHATI
          </Link>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Bahrain&apos;s premier gifting authority. Master florists, artisanal bakers, and luxury curation delivered to your door.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Categories</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/flowers-delivery-bahrain" className="hover:text-white transition-colors">Flowers</Link></li>
            <li><Link href="/cake-delivery-bahrain" className="hover:text-white transition-colors">Cakes</Link></li>
            <li><Link href="/chocolate-delivery-bahrain" className="hover:text-white transition-colors">Chocolates</Link></li>
            <li><Link href="/gift-delivery-bahrain" className="hover:text-white transition-colors">Gifts</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Occasions</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/birthday-gifts-bahrain" className="hover:text-white transition-colors">Birthdays</Link></li>
            <li><Link href="/anniversary-gifts-bahrain" className="hover:text-white transition-colors">Anniversaries</Link></li>
            <li><Link href="/graduation-gifts-bahrain" className="hover:text-white transition-colors">Graduation</Link></li>
            <li><Link href="/mothers-day-flowers-bahrain" className="hover:text-white transition-colors">Mother&apos;s Day</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Locations</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/flower-delivery-manama" className="hover:text-white transition-colors">Manama</Link></li>
            <li><Link href="/flower-delivery-riffa" className="hover:text-white transition-colors">Riffa</Link></li>
            <li><Link href="/flower-delivery-muharraq" className="hover:text-white transition-colors">Muharraq</Link></li>
            <li><Link href="/delivery-areas-bahrain" className="hover:text-white transition-colors">All Areas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Policies & Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Farhati Bahrain. All rights reserved.</p>
      </div>
    </footer>
  );
}
