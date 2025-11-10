import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import imgProConnectPng2 from "figma:asset/5e6ed8efe138d846f71795a1269ebc75d919f3ed.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Tokens', 'Roadmap', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[7px] bg-white/10 border-b border-white/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px] py-4 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="h-[28px] w-[46px] lg:h-[33px] lg:w-[55px] relative shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)]">
              <img alt="ProConnect Logo" className="absolute inset-0 object-cover" src={imgProConnectPng2} />
            </div>
            <p className="font-semibold text-sm lg:text-base text-black whitespace-nowrap">PCT by ProConnect</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base text-black/60 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-black text-white px-4 py-2.5 rounded-[10px] hover:bg-black/90 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-black/10 pt-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base text-black/60 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-black text-white px-4 py-2.5 rounded-[10px] hover:bg-black/90 transition-colors w-full sm:w-auto">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
