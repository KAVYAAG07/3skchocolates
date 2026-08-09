import { Instagram, MessageSquare, Globe, Heart, ShieldCheck, Mail, PhoneCall } from 'lucide-react';
import { WHATSAPP_NUMBER, IMAGE_PATHS } from '../data';

interface FooterProps {
  onNavClick: (tab: 'home' | 'gallery' | 'shop' | 'custom' | 'b2b') => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cocoa-card text-gray-400 border-t border-gold-900/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gold-900/10 pb-12">
          
          {/* Column 01: Brand story & logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 select-none">
              <img 
                src={IMAGE_PATHS.logo} 
                alt="3SK Logo" 
                className="w-10 h-10 object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-extrabold tracking-widest text-gold-gradient leading-none">
                  3SK
                </span>
                <span className="font-serif text-[7px] tracking-[0.3em] text-gold-400 font-medium uppercase mt-0.5 border-t border-gold-800/20 pt-0.5 leading-none">
                  Chocolate
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Crafting authentic, high-end Dubai Kunafa Chocolate bars. Indulge in the perfect harmony of freshly toasted shredded pastry, rich nut butter, and premium milk chocolate.
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href="https://www.instagram.com/3sk_chocolates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                id="footer-insta-link"
                className="w-8 h-8 rounded-full bg-dark-chocolate hover:bg-gold-950/20 text-gray-400 hover:text-gold-300 flex items-center justify-center border border-gold-900/10 hover:border-gold-800/30 transition-all cursor-pointer"
                title="Follow 3SK Chocolate on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="w-8 h-8 rounded-full bg-dark-chocolate hover:bg-gold-950/20 text-gray-400 hover:text-gold-300 flex items-center justify-center border border-gold-900/10 hover:border-gold-800/30 transition-all cursor-pointer"
                title="Chat with us on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 02: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              The Collection
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <button 
                  onClick={() => onNavClick('shop')} 
                  id="footer-nav-pistachio"
                  className="hover:text-gold-200 hover:underline cursor-pointer"
                >
                  Pistachio Kunafa Bar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('shop')} 
                  id="footer-nav-hazelnut"
                  className="hover:text-gold-200 hover:underline cursor-pointer"
                >
                  Hazelnut Kunafa Bar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('custom')} 
                  id="footer-nav-wrapper"
                  className="hover:text-gold-200 hover:underline cursor-pointer"
                >
                  Custom Wrapper Designing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('b2b')} 
                  id="footer-nav-b2b"
                  className="hover:text-gold-200 hover:underline cursor-pointer"
                >
                  Corporate Wholesale Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Column 03: Contact & Sales */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Direct Orders & Support
            </h4>
            <div className="space-y-3 text-xs font-light">
              <div className="flex gap-2 items-center">
                <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-mono">+91 7296937881</span>
              </div>
              <a href="mailto:3skchocolates@gmail.com" className="flex gap-2 items-center hover:text-gold-200">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>3skchocolates@gmail.com</span>
              </a>
              <div className="flex gap-2 items-start leading-relaxed">
                <Globe className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Express Insulated Shipping all over India</span>
              </div>
            </div>
          </div>

          {/* Column 04: Quality Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
              Our Guarantee
            </h4>
            <div className="bg-dark-chocolate p-4 rounded border border-gold-900/10 space-y-2">
              <div className="flex gap-2 items-center text-gold-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Cold-Chain Secure</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-normal font-light">
                Every order is hand-packaged with thermal-insulating foil wraps and gel ice blocks to shield your chocolate from local weather and prevent melting during transit across India.
              </p>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[10px] text-gray-600 space-y-4 sm:space-y-0 font-light">
          <p>© {currentYear} 3SK Chocolate Hub. All Rights Reserved. Crafted for Chocolate Connoisseurs.</p>
          <div className="flex gap-2 items-center">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-gold-500 fill-gold-500" />
            <span>for original Dubai Kunafa Chocolate.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
