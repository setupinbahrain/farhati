import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-black text-primary tracking-tight">FARHATI</span>
          <span className="hidden md:inline-block text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
            Bahrain
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm text-gray-600">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/flowers-delivery-bahrain" className="hover:text-primary transition-colors">Flowers</Link>
          <Link href="/cake-delivery-bahrain" className="hover:text-primary transition-colors">Cakes</Link>
          <Link href="/chocolate-delivery-bahrain" className="hover:text-primary transition-colors">Chocolates</Link>
          <Link href="/gift-delivery-bahrain" className="hover:text-primary transition-colors">Gifts</Link>
          <Link href="/flowers-and-cake-delivery-bahrain" className="hover:text-primary transition-colors">Combos</Link>
          <Link href="/birthday-gifts-bahrain" className="hover:text-primary transition-colors">Occasions</Link>
          <Link href="/same-day-gift-delivery-bahrain" className="text-secondary hover:text-accent transition-colors">Same Day</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all hidden sm:block">
            Order Now
          </button>
          
          <button className="lg:hidden p-2 text-gray-600">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
