import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data';

export default function B2BInquiry() {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'inquiry'>('overview');

  const openWhatsApp = () => {
    const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      'Hello, I would like to enquire about B2B / corporate orders.\nCompany: \nContact person: \nWhatsApp / Phone: \nEstimated monthly volume: '\n    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="b2b-section" className="bg-dark-chocolate min-h-screen py-12 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-extrabold text-gold-100">B2B & Corporate Services</h2>
          <p className="text-gray-400 mt-2">We partner with hotels, cafes, retailers and corporate clients for bespoke supply and gifting.</p>
        </div>

        <div className="mb-6 flex gap-2 justify-center">
          <button onClick={() => setActiveTab('overview')} className={`px-3 py-2 rounded ${activeTab === 'overview' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Overview</button>
          <button onClick={() => setActiveTab('services')} className={`px-3 py-2 rounded ${activeTab === 'services' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Services</button>
          <button onClick={() => setActiveTab('inquiry')} className={`px-3 py-2 rounded ${activeTab === 'inquiry' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Inquiry</button>
        </div>

        <div className="bg-cocoa-card rounded-xl p-6 border border-gold-900/10">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-xl text-gold-100 font-bold mb-3">Commercial Accounts & Partnerships</h3>
              <p className="text-gray-300 mb-4">Dedicated B2B support for hotels, cafes, corporate gifting and wholesale. Minimum bulk orders, custom pricing and logistics arranged.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-dark-chocolate/40 rounded">
                  <h4 className="text-gold-200 font-semibold">Corporate Gifting</h4>
                  <p className="text-gray-400 text-sm mt-1">Premium hampers and branded wrappers for client gifting and events.</p>
                </div>
                <div className="p-4 bg-dark-chocolate/40 rounded">
                  <h4 className="text-gold-200 font-semibold">Cafe & Patisserie Supply</h4>
                  <p className="text-gray-400 text-sm mt-1">High-quality ready-to-sell mini-bars for premium outlets and menus.</p>
                </div>
                <div className="p-4 bg-dark-chocolate/40 rounded">
                  <h4 className="text-gold-200 font-semibold">Wholesale & Hospitality</h4>
                  <p className="text-gray-400 text-sm mt-1">Volume orders, co-packing and logistical support for hotel and airline partners.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div>
              <h3 className="text-xl text-gold-100 font-bold mb-3">Services & Deliverables</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Customized wrapper design & digital proofs</li>
                <li>Bulk pricing, sample approvals, and quality checks</li>
                <li>Temperature-controlled packaging and fast logistics</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setActiveTab('inquiry')} className="bg-gold-600 px-4 py-2 rounded text-dark-chocolate font-bold">Proceed to Inquiry</button>
                <button onClick={openWhatsApp} className="border border-gold-700 px-4 py-2 rounded text-gold-200">Inquire via WhatsApp</button>
              </div>
            </div>
          )}

          {activeTab === 'inquiry' && (
            <div>
              <h3 className="text-xl text-gold-100 font-bold mb-3">Inquire Corporate Partnership</h3>
              <p className="text-gray-300 mb-4">To request a dedicated B2B quote, please message us on WhatsApp and include your company details and estimated monthly volume. We will respond within 4 hours.</p>

              <div className="flex items-center gap-3 mt-2">
                <button type="button" onClick={openWhatsApp} className="w-full border border-gold-700 px-5 py-3 rounded text-gold-200">Enquire via WhatsApp</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
