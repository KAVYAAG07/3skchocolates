import React, { useState } from 'react';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import ProductGallery from './components/ProductGallery';
import ChocolateShop from './components/ChocolateShop';
import CustomWrapper from './components/CustomWrapper';
import B2BInquiry from './components/B2BInquiry';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'shop' | 'custom' | 'b2b'>('home');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeHero 
            onOrderClick={() => setActiveTab('shop')} 
            onCustomClick={() => setActiveTab('custom')} 
          />
        );
      case 'gallery':
        return <ProductGallery onOrderClick={() => setActiveTab('shop')} />;
      case 'shop':
        return <ChocolateShop />;
      case 'custom':
        return <CustomWrapper />;
      case 'b2b':
        return <B2BInquiry />;
      default:
        return (
          <HomeHero 
            onOrderClick={() => setActiveTab('shop')} 
            onCustomClick={() => setActiveTab('custom')} 
          />
        );
    }
  };

  return (
    <div className="bg-dark-chocolate min-h-screen flex flex-col font-sans select-none selection:bg-gold-500/30 selection:text-gold-100">
      
      {/* Universal Luxury Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Canvas */}
      <main className="flex-grow">
        {renderActiveSection()}
      </main>

      {/* Luxury Brand Footer */}
      <Footer onNavClick={setActiveTab} />

    </div>
  );
}
