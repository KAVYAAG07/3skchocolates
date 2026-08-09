import React, { useState } from 'react';
import Header from './components/Header';
import HomeHero from './components/HomeHero';
import ProductGallery from './components/ProductGallery';
import ChocolateShop from './components/ChocolateShop';
import CustomWrapper from './components/CustomWrapper';
import B2BInquiry from './components/B2BInquiry';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'shop' | 'custom' | 'b2b'>('home');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderContext, setOrderContext] = useState<{ source?: string; product?: string } | null>(null);

  const openOrderModal = (context?: { source?: string; product?: string }) => {
    setOrderContext(context ?? null);
    setOrderModalOpen(true);
    setActiveTab('shop');
  };
  const closeOrderModal = () => setOrderModalOpen(false);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeHero onOrderClick={() => openOrderModal({ source: 'hero' })} onCustomClick={() => setActiveTab('custom')} />;
      case 'gallery':
        return <ProductGallery onOrderClick={() => openOrderModal({ source: 'gallery' })} />;
      case 'shop':
        return <ChocolateShop onOrderClick={(ctx?: any) => openOrderModal({ source: 'shop', ...ctx })} />;
      case 'custom':
        return <CustomWrapper onRequestQuote={() => openOrderModal({ source: 'custom' })} />;
      case 'b2b':
        return <B2BInquiry onRequestContact={() => openOrderModal({ source: 'b2b' })} />;
      default:
        return <HomeHero onOrderClick={() => openOrderModal({ source: 'hero' })} onCustomClick={() => setActiveTab('custom')} />;
    }
  };

  return (
    <div className="bg-dark-chocolate min-h-screen flex flex-col font-sans select-none">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} onOrderNow={() => openOrderModal({ source: 'header' })} />

      <main className="flex-grow">{renderActiveSection()}</main>

      <Footer onNavClick={setActiveTab} />

      <OrderModal isOpen={orderModalOpen} onClose={closeOrderModal} context={orderContext} />
    </div>
  );
}
