import React, { useState } from 'react';
import { IMAGE_PATHS } from '../data';
import { Sparkles, ArrowRight, Layers, Percent, Heart, Eye } from 'lucide-react';

interface ProductGalleryProps {
  onOrderClick: () => void;
}

export default function ProductGallery({ onOrderClick }: ProductGalleryProps) {
  const [activeFlavor, setActiveFlavor] = useState<'pistachio' | 'hazelnut'>('pistachio');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomActive, setZoomActive] = useState(false);

  const productsData = {
    pistachio: {
      title: '3SK Pistachio Kunafa Chocolate',
      tagline: 'The Original Dubai Green Sensation',
      images: [
        { url: IMAGE_PATHS.pistachioPure, label: 'Pistachio Cream Filling' },
        { url: IMAGE_PATHS.pistachioSizeChart, label: 'Pistachio Bar Sizes' }
      ],
      description: 'The authentic globally-renowned sensation. Inside our glossy, tempered milk chocolate shell lies an abundance of golden toasted, micro-thin shredded kunafa pastry threads folded into a rich pistachio butter — a triumphant balance of crunch and silk.',
      flavorNotes: 'Nutty, rich, highly-crispy, balanced sweet-savory notes.',
      features: [
        { name: '100% Pure Pistachio', value: 'Slow-ground, single-origin Turkish pistachio butter. Zero artificial additives.' },
        { name: 'Golden-Toasted Pastry', value: 'Toasted in pure clarifying butter to secure long-lasting crunchiness.' },
        { name: 'Artisan Contrast', value: 'Offers an unparalleled physical crunch followed immediately by melting velvet.' }
      ],
      sensoryProfiles: [
        { label: 'Crunch Factor', percentage: 100 },
        { label: 'Nuttiness', percentage: 98 },
        { label: 'Cocoa Richness', percentage: 75 },
        { label: 'Velvet Smoothness', percentage: 88 }
      ]
    },
    hazelnut: {
      title: '3SK Hazelnut Kunafa Chocolate',
      tagline: 'Rich Velvet Hazelnut Crackle',
      images: [
        { url: IMAGE_PATHS.hazelnutPure, label: 'Hazelnut Praline Filling' }
      ],
      description: 'For the lovers of rich, chocolatey hazelnut spreads. We fold our perfectly golden, crispy kunafa pastry threads into a velvety, decadent hazelnut cream, then lock it inside our signature tempered milk chocolate shell.',
      flavorNotes: 'Toasted hazelnut, deep cocoa, buttery crunch, velvety finish.',
      features: [
        { name: 'Premium Hazelnut Cream', value: 'Velvety, slow-roasted, premium hazelnut butter praline.' },
        { name: 'Toasted Kunafa Crust', value: 'Buttery, light crispy flakes that crackle perfectly in every bite.' },
        { name: 'Gourmet Milk Chocolate', value: 'Smooth, slow-tempered Swiss-grade milk chocolate couverture.' }
      ],
      sensoryProfiles: [
        { label: 'Crunch Factor', percentage: 95 },
        { label: 'Nuttiness', percentage: 100 },
        { label: 'Cocoa Richness', percentage: 82 },
        { label: 'Velvet Smoothness', percentage: 92 }
      ]
    }
  };

  const currentProduct = productsData[activeFlavor];
  const currentImage = currentProduct.images[selectedImageIndex] || currentProduct.images[0];

  const handleFlavorChange = (flavor: 'pistachio' | 'hazelnut') => {
    setActiveFlavor(flavor);
    setSelectedImageIndex(0);
    setZoomActive(false);
  };

  return (
    <div className="bg-dark-chocolate min-h-screen py-12 text-gray-100 selection:bg-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-950/40 border border-gold-600/20 rounded-full text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisan Culinary Showcase</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Culinary <span className="text-gold-gradient font-bold">Art Gallery</span>
          </h1>
          <p className="text-gray-400 font-light text-xs sm:text-sm">
            Inspect the high-resolution, close-up textures of our authentic, hand-ground kunafa chocolate fillings.
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto pt-1" />
        </div>

        {/* Interactive Flavor Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-cocoa-card p-1.5 rounded-lg border border-gold-900/20 flex gap-2 max-w-md w-full">
            <button
              onClick={() => handleFlavorChange('pistachio')}
              className={`flex-1 py-2.5 px-4 rounded font-serif text-xs sm:text-sm tracking-wider font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeFlavor === 'pistachio'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate shadow-lg shadow-gold-500/15'
                  : 'text-gray-400 hover:text-gold-300 hover:bg-dark-chocolate/45'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeFlavor === 'pistachio' ? 'bg-dark-chocolate' : 'bg-emerald-500'}`} />
              Pistachio Kunafa
            </button>
            <button
              onClick={() => handleFlavorChange('hazelnut')}
              className={`flex-1 py-2.5 px-4 rounded font-serif text-xs sm:text-sm tracking-wider font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeFlavor === 'hazelnut'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate shadow-lg shadow-gold-500/15'
                  : 'text-gray-400 hover:text-gold-300 hover:bg-dark-chocolate/45'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeFlavor === 'hazelnut' ? 'bg-dark-chocolate' : 'bg-amber-600'}`} />
              Hazelnut Kunafa
            </button>
          </div>
        </div>

        {/* Core Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Image Box */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative group bg-cocoa-card rounded-xl border border-gold-800/15 overflow-hidden shadow-2xl flex-grow flex flex-col justify-center min-h-[350px] md:min-h-[420px]">
              
              {/* Image Container with Custom Zoom Toggle */}
              <div className="relative overflow-hidden w-full h-full aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[440px]">
                <img
                  src={currentImage.url}
                  alt={currentProduct.title}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    zoomActive ? 'scale-150 cursor-zoom-out' : 'scale-100 hover:scale-103 cursor-zoom-in'
                  }`}
                  onClick={() => setZoomActive(!zoomActive)}
                />
                
                {/* Decorative gradients and overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                
                {/* Micro-instructions overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded text-[10px] text-gold-300 tracking-wider uppercase font-semibold">
                  <Eye className="w-3.5 h-3.5 animate-pulse" />
                  <span>{zoomActive ? 'Click to Zoom Out' : 'Click to Inspect Texture'}</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-serif text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold block mb-1">
                    {currentProduct.tagline}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-black text-white">
                    {currentProduct.title}
                  </h2>
                </div>
              </div>

            </div>

            {/* Thumbnail Navigation (Only if flavor has multiple images) */}
            {currentProduct.images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {currentProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedImageIndex(idx); setZoomActive(false); }}
                    className={`relative w-20 h-16 rounded-md overflow-hidden border transition-all duration-300 cursor-pointer ${
                      selectedImageIndex === idx 
                        ? 'border-gold-400 ring-1 ring-gold-400 shadow-md shadow-gold-500/10' 
                        : 'border-gold-900/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Culinary Specifications & Sensory Profile Sliders */}
          <div className="lg:col-span-6 bg-cocoa-card rounded-xl p-6 sm:p-8 border border-gold-800/15 shadow-2xl flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Product Description */}
              <div className="space-y-3">
                <div className="text-[10px] text-gold-400 uppercase tracking-widest font-mono flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-gold-400" />
                  Artisan Food Architecture
                </div>
                <h3 className="font-serif text-2xl font-bold text-gold-100">
                  {currentProduct.title}
                </h3>
                <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed">
                  {currentProduct.description}
                </p>
                <div className="bg-dark-chocolate p-3 rounded border border-gold-900/10">
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">Sensory Flavor Notes:</div>
                  <div className="text-xs text-gold-300 font-medium mt-0.5">{currentProduct.flavorNotes}</div>
                </div>
              </div>

              {/* Ingredient Feature Breakdown */}
              <div className="space-y-4 pt-4 border-t border-gold-900/10">
                <h4 className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Sensation Highlights
                </h4>
                <div className="space-y-3.5">
                  {currentProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs">
                      <div className="p-1.5 bg-gold-950/30 border border-gold-500/15 rounded text-gold-400 flex-shrink-0 mt-0.5">
                        <Heart className="w-3 h-3 fill-gold-500/10" />
                      </div>
                      <div>
                        <div className="font-serif font-bold text-gold-200">{feat.name}</div>
                        <div className="text-gray-400 font-light leading-relaxed mt-0.5">{feat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Sensory Sliders */}
              <div className="space-y-4 pt-4 border-t border-gold-900/10">
                <h4 className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex justify-between items-center">
                  <span>Culinary Science Profiles</span>
                  <span className="text-[9px] font-mono lowercase text-gray-500">(laboratory analysis)</span>
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {currentProduct.sensoryProfiles.map((profile, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-[10px] tracking-wider uppercase">
                        <span className="text-gray-400">{profile.label}</span>
                        <span className="font-mono text-gold-300 font-bold">{profile.percentage}%</span>
                      </div>
                      <div className="h-1.5 bg-dark-chocolate rounded-full overflow-hidden border border-gold-900/10">
                        <div 
                          className="h-full bg-gradient-to-r from-gold-700 to-gold-500 rounded-full transition-all duration-1000"
                          style={{ width: `${profile.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Order Call to Action Block */}
            <div className="pt-6 border-t border-gold-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark-chocolate/40 p-4 rounded-lg border border-gold-900/5">
              <div className="text-center sm:text-left">
                <div className="text-[9px] text-emerald-400 font-mono font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
                  <Percent className="w-3 h-3" />
                  <span>Shipping on Prepaid Orders Only</span>
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">Freshly enrobed & dispatched in cooling gel packs.</div>
              </div>
              <button
                onClick={onOrderClick}
                id="gallery-order-cta"
                className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate hover:from-gold-500 hover:to-gold-400 px-6 py-3 rounded text-xs font-bold tracking-wider flex items-center gap-2"
              >
                SELECT SIZES & ORDER NOW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
