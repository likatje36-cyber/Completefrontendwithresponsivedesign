import imgProConnectPng2 from "figma:asset/5e6ed8efe138d846f71795a1269ebc75d919f3ed.png";
import { Twitter, Send, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    product: ['Features', 'Roadmap', 'Whitepaper', 'Token Sale'],
    company: ['About Us', 'Team', 'Careers', 'Blog'],
    resources: ['Documentation', 'Support', 'FAQ', 'Community'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Send, label: 'Telegram', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="relative bg-black text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[72px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="h-[28px] w-[46px] lg:h-[33px] lg:w-[55px] relative">
                <img alt="ProConnect Logo" className="absolute inset-0 object-cover brightness-0 invert" src={imgProConnectPng2} />
              </div>
              <p className="font-semibold text-sm lg:text-base text-white whitespace-nowrap">PCT by ProConnect</p>
            </div>
            <p className="text-sm lg:text-base text-white/70 max-w-[300px]">
              The world's first crypto-powered decentralized work ecosystem. Join the revolution.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 ProConnect. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Disclaimer: Cryptocurrency investments carry risk. Please do your own research.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
