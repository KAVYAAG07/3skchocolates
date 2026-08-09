import { ArrowRight, Sparkles, ShieldCheck, Truck, Clock, Award } from 'lucide-react';
import { INDIA_SHIPPING_INFO } from '../data';

interface HomeHeroProps {
  onOrderClick: () => void;
  onCustomClick: () => void;
}

export default function HomeHero({ onOrderClick, onCustomClick }: HomeHeroProps) {
  return (
    <div className="bg-dark-chocolate min-h-screen text-gray-100 font-sans">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-28 border-b border-gold-900/10">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-700/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-950/40 border border-gold-600/25 rounded-full text-gold-300 text-xs font-semibold tracking-wider uppercase animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Original Dubai Kunafa Bar</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Indulge in the Ultimate <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-extrabold">Crunch & Velvet</span> Sensation
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Handcrafted in small batches using premium toasted shred-kunafa pastry, rich pistachio cream, and roasted hazelnut praline—all locked inside a decadent, glossy milk chocolate shell.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <button
              onClick={onOrderClick}
              id="hero-order-cta"
              className="w-full sm:w-auto bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-dark-chocolate hover:from-gold-500 hover:to-gold-400 px-8 py-4 rounded text-base font-bold transition-all flex items-center gap-3 justify-center"
            >
              EXPLORE FLAVOURS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onCustomClick}
              id="hero-custom-cta"
              className="w-full sm:w-auto border border-gold-600/30 text-gold-300 hover:text-gold-100 hover:bg-gold-950/20 px-8 py-4 rounded text-base font-semibold tracking-wider transition-all"
            >
              CUSTOM WRAPPERS
            </button>
          </div>

          {/* Trust highlights */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gold-900/10 max-w-md mx-auto">
            <div className="text-center">
              <div className="font-serif text-xl sm:text-2xl font-bold text-gold-200">100%</div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1">Authentic</div>
            </div>
            <div className="text-center border-l border-gold-900/10 pl-4">
              <div className="font-serif text-xl sm:text-2xl font-bold text-gold-200">Express</div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1">All India</div>
            </div>
            <div className="text-center border-l border-gold-900/10 pl-4">
              <div className="font-serif text-xl sm:text-2xl font-bold text-gold-200">4.9 ★</div>
              <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1">Customer Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-dark-chocolate relative overflow-hidden border-b border-gold-900/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-950/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-semibold tracking-widest uppercase justify-center">
              <span className="h-px w-6 bg-gold-600/50" />
              <span>The Artisanal Journey</span>
              <span className="h-px w-6 bg-gold-600/50" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Our Story
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              <p>
                Founded in 2026 by Kavya Agrawal, 3SK Chocolates was born from a simple yet powerful vision—to make premium Kunafa Chocolates accessible to everyone without the premium price tag.
              </p>
              <p>
                When we explored the market, we noticed that high-quality Kunafa Chocolates were often sold at exceptionally high prices, making them a luxury that many chocolate lovers could not afford.
              </p>
              <p>
                Based in Jaipur, Rajasthan, we set out to redefine the Indian Kunafa Chocolate market by offering the finest quality at the most competitive prices across the country. Every chocolate is handcrafted in small batches.
              </p>
            </div>

            <div className="pt-6 border-t border-gold-900/10 max-w-xl mx-auto">
              <p className="font-serif text-sm sm:text-base italic text-gold-300">
                "Every bar is a testament to our pursuit of unparalleled texture, rich aroma, and visual elegance."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dubai Kunafa Standard Features */}
      <section className="py-20 bg-cocoa-card relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
              What Makes <span className="text-gold-gradient font-bold">3SK Chocolate</span> Irresistible?
            </h2>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
            <p className="text-gray-400 font-light text-sm sm:text-base">
              Unlike ordinary candy, 3SK Chocolates are artisan masterworks designed to balance intense crispiness with supreme silkiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-chocolate p-8 rounded border border-gold-900/20 shadow-gold-glow flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-200">
              <div className="p-4 bg-gold-950/40 rounded-full border border-gold-500/20 text-gold-300">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">Gourmet Toasted Kunafa</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We toast premium, micro-thin shredded kunafa pastry threads in clarifying butter until they achieve a gorgeous golden crunch that remains delightfully crispy.
              </p>
            </div>

            <div className="bg-dark-chocolate p-8 rounded border border-gold-900/20 shadow-gold-glow flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-200">
              <div className="p-4 bg-gold-950/40 rounded-full border border-gold-500/20 text-gold-300">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">100% Pure Butter Fillings</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Whether you choose our vibrant, rich green pistachio butter or our deeply aromatic, roasted hazelnut cream, we use only single-origin premium nuts. No artificial preservatives.
              </p>
            </div>

            <div className="bg-dark-chocolate p-8 rounded border border-gold-900/20 shadow-gold-glow flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-200">
              <div className="p-4 bg-gold-950/40 rounded-full border border-gold-500/20 text-gold-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gold-200">Enrobed in Royal Cocoa</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Our chocolate shells are tempered with meticulous precision to achieve a rich, glossy finish and a satisfying snap when broken, melting beautifully on the palate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Cold-Chain Shipping Section */}
      <section className="py-20 bg-dark-chocolate border-t border-gold-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Shipping Info */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-semibold tracking-widest uppercase">
                <Truck className="w-4 h-4" />
                <span>Pan-India Transit Excellence</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
                {INDIA_SHIPPING_INFO.title}
              </h2>
              
              <p className="text-gray-400 font-light leading-relaxed">
                {INDIA_SHIPPING_INFO.description}
              </p>

              <div className="space-y-4">
                {INDIA_SHIPPING_INFO.details.map((detail, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-gold-950/30 rounded border border-gold-500/15 text-gold-400 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-gold-200">{detail.title}</h4>
                      <p className="text-gray-400 text-xs mt-0.5 font-light leading-relaxed">{detail.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Infographics or packaging showcase */}
            <div className="lg:col-span-6 bg-cocoa-card rounded-lg p-8 border border-gold-800/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/5 blur-2xl rounded-full" />
              
              <h3 className="font-serif text-lg font-bold text-gold-300 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                Temperature-Safe Transit Packaging
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-gold-600 pl-4 space-y-1">
                  <div className="text-xs text-gold-400 font-semibold tracking-widest uppercase">Layer 01</div>
                  <div className="text-sm font-bold text-gray-200">Vacuum Sealed Moisture Barricade</div>
                  <div className="text-xs text-gray-500">Locks in the roasted aroma and protects the chocolate surface from humidity.</div>
                </div>

                <div className="border-l-2 border-gold-500 pl-4 space-y-1">
                  <div className="text-xs text-gold-400 font-semibold tracking-widest uppercase">Layer 02</div>
                  <div className="text-sm font-bold text-gray-200">Insulated Foil Bubble Liner</div>
                  <div className="text-xs text-gray-500">Deflects external heat and maintains a steady interior temperature.</div>
                </div>

                <div className="border-l-2 border-gold-400 pl-4 space-y-1">
                  <div className="text-xs text-gold-400 font-semibold tracking-widest uppercase">Layer 03</div>
                  <div className="text-sm font-bold text-gray-200">Reusable Cooling Gel Packs</div>
                  <div className="text-xs text-gray-500">Sustains cold conditions for up to 72 hours of transit across India.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quick Taste Prompt Block */}
      <section className="py-16 bg-gradient-to-b from-dark-chocolate to-cocoa-card text-center relative border-t border-gold-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Experience the Original Dubai Sensation?
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-xl mx-auto">
            Order today and let us prepare a fresh batch of Crunchy Kunafa bars for you. Hand-wrapped and cooling-shipped directly to your doorstep.
          </p>
          <div className="pt-2">
            <button
              onClick={onOrderClick}
              id="hero-final-cta"
              className="bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate hover:from-gold-500 hover:to-gold-400 px-10 py-3.5 rounded font-bold tracking-wider hover:shadow-lg transition-all"
            >
              ORDER YOUR BARS NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
