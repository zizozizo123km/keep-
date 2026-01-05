
import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 py-3 md:px-12 flex items-center justify-between ${isScrolled ? 'bg-[#141414]' : 'bg-transparent bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center gap-8">
        <h1 className="text-[#e50914] text-2xl md:text-3xl font-black tracking-tighter uppercase cursor-pointer">
          نتفلكس
        </h1>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer transition">الرئيسية</li>
          <li className="hover:text-white cursor-pointer transition">أفلام</li>
          <li className="hover:text-white cursor-pointer transition">مسلسلات</li>
          <li className="hover:text-white cursor-pointer transition">أحدث العروض</li>
          <li className="hover:text-white cursor-pointer transition">قائمتي</li>
        </ul>
      </div>

      <div className="flex items-center gap-4 text-white">
        <div className="relative group hidden sm:block">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="بحث..."
            onChange={(e) => onSearch(e.target.value)}
            className="bg-black/40 border border-gray-600 rounded-full py-1.5 pr-10 pl-4 text-sm focus:outline-none focus:border-red-600 w-32 group-hover:w-64 transition-all duration-300"
          />
        </div>
        <Bell className="w-6 h-6 cursor-pointer hidden sm:block" />
        <div className="bg-red-600 p-1 rounded cursor-pointer">
          <User className="w-5 h-5" />
        </div>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#141414] border-t border-gray-800 p-6 flex flex-col gap-4 md:hidden">
          <span className="text-white hover:text-red-600 cursor-pointer">الرئيسية</span>
          <span className="text-white hover:text-red-600 cursor-pointer">أفلام</span>
          <span className="text-white hover:text-red-600 cursor-pointer">مسلسلات</span>
          <span className="text-white hover:text-red-600 cursor-pointer">قائمتي</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
