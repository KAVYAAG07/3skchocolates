import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data';

export default function CustomWrapper() {
  const [activeTab, setActiveTab] = useState<'customizer' | 'simulation' | 'samples'>('customizer');
  const [expandPreview, setExpandPreview] = useState(false);

  // form state for customizer
  const [primaryMessage, setPrimaryMessage] = useState('3SK SPECIAL');
  const [subtitle, setSubtitle] = useState('FOR SPECIAL MOMENTS');
  const [pattern, setPattern] = useState<'plain' | 'damask' | 'geometric' | 'leaves'>('damask');
  const [flavour, setFlavour] = useState<'Pistachio' | 'Hazelnut' | 'Assorted'>('Pistachio');

  const openWhatsAppWithDesign = () => {
    const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const lines = [] as string[];
    lines.push('Hello, I would like to submit a custom wrapper design request:');
    lines.push(`Primary message: ${primaryMessage}`);
    lines.push(`Subtitle / Date: ${subtitle}`);
    lines.push(`Pattern: ${pattern}`);
    lines.push(`Flavour preference: ${flavour}`);
    lines.push('Minimum order: 50 bars');
    lines.push('Please contact me to proceed.');
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="custom-wrapper-section" className="bg-dark-chocolate min-h-screen py-12 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-extrabold text-gold-100">Custom Wrapper Personalization</h2>
          <p className="text-gray-400 mt-2">Design and preview your bespoke, gold-foiled wrapper. Minimum order starts at 50 bars.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column: tabs and content */}
          <div>
            <div className="flex gap-2 mb-4">
              <button onClick={() => setActiveTab('customizer')} className={`px-3 py-2 rounded ${activeTab === 'customizer' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Customizer</button>
              <button onClick={() => setActiveTab('simulation')} className={`px-3 py-2 rounded ${activeTab === 'simulation' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>3D Simulation</button>
              <button onClick={() => setActiveTab('samples')} className={`px-3 py-2 rounded ${activeTab === 'samples' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Samples</button>
            </div>

            <div className="bg-cocoa-card rounded-xl p-6 border border-gold-900/10">
              {activeTab === 'customizer' && (
                <div>
                  <h3 className="text-lg text-gold-100 font-bold mb-3">Wrapper Style Customizer</h3>
                  <label className="text-sm text-gray-300 block mb-2">Primary Brand/Message</label>
                  <input value={primaryMessage} onChange={e => setPrimaryMessage(e.target.value)} className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200 mb-3" placeholder="3SK SPECIAL" />

                  <label className="text-sm text-gray-300 block mb-2">Subtitle / Date</label>
                  <input value={subtitle} onChange={e => setSubtitle(e.target.value)} className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200 mb-3" placeholder="FOR SPECIAL MOMENTS" />

                  <label className="text-sm text-gray-300 block mb-2">Wrapper Pattern</label>
                  <div className="flex gap-2">
                    <button onClick={() => setPattern('plain')} className={`px-3 py-2 rounded ${pattern === 'plain' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Plain</button>
                    <button onClick={() => setPattern('damask')} className={`px-3 py-2 rounded ${pattern === 'damask' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Damask</button>
                    <button onClick={() => setPattern('geometric')} className={`px-3 py-2 rounded ${pattern === 'geometric' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Geometric</button>
                    <button onClick={() => setPattern('leaves')} className={`px-3 py-2 rounded ${pattern === 'leaves' ? 'bg-gold-700 text-dark-chocolate' : 'bg-cocoa-card text-gray-300'}`}>Leaves</button>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm text-gray-300 block mb-2">Chocolate Flavour</label>
                    <select value={flavour} onChange={e => setFlavour(e.target.value as any)} className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200">
                      <option>Pistachio</option>
                      <option>Hazelnut</option>
                      <option>Assorted</option>
                    </select>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button onClick={() => setActiveTab('simulation')} className="bg-gold-600 px-4 py-2 rounded text-dark-chocolate font-bold">Preview Simulation</button>
                    <button onClick={openWhatsAppWithDesign} className="border border-gold-700 px-4 py-2 rounded text-gold-200">Submit design through WhatsApp</button>
                  </div>
                </div>
              )}

              {activeTab === 'simulation' && (
                <div>
                  <h3 className="text-lg text-gold-100 font-bold mb-3">Complimentary 3D Wrapper Simulation</h3>
                  <div className="bg-dark-chocolate p-6 rounded">
                    <div className="w-full h-56 bg-black/40 rounded flex items-center justify-center">
                      {/* Placeholder for wrapper preview */}
                      <div className="text-gray-500">3D Wrapper Preview Area</div>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button onClick={() => setExpandPreview(true)} className="bg-gold-600 px-4 py-2 rounded text-dark-chocolate font-bold">View Large Preview</button>
                      <button onClick={openWhatsAppWithDesign} className="border border-gold-700 px-4 py-2 rounded text-gold-200">Submit design through WhatsApp</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'samples' && (
                <div>
                  <h3 className="text-lg text-gold-100 font-bold mb-3">Sample Designs</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-28 bg-black/20 rounded flex items-center justify-center">Sample 1</div>
                    <div className="h-28 bg-black/20 rounded flex items-center justify-center">Sample 2</div>
                    <div className="h-28 bg-black/20 rounded flex items-center justify-center">Sample 3</div>
                    <div className="h-28 bg-black/20 rounded flex items-center justify-center">Sample 4</div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right column: larger preview or additional info */}
          <div>
            <div className="bg-cocoa-card rounded-xl p-6 border border-gold-900/10">
              <h3 className="text-lg text-gold-100 font-bold mb-4">Preview / Summary</h3>
              <p className="text-gray-400 mb-4">Here you can preview the applied wrapper customizations and order summary.</p>

              <div className="w-full h-72 bg-black/30 rounded flex items-center justify-center">
                <div className="text-gray-500">Large Preview Panel</div>
              </div>

              <div className="mt-6">
                <button onClick={openWhatsAppWithDesign} className="w-full bg-gold-600 px-4 py-3 rounded text-dark-chocolate font-bold">Submit design through WhatsApp</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-screen preview modal */}
      {expandPreview && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-dark-chocolate rounded-lg max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-gold-100 font-semibold">Large Wrapper Preview</h4>
              <button onClick={() => setExpandPreview(false)} className="text-gray-300">Close</button>
            </div>
            <div className="w-full h-[60vh] bg-black/40 rounded flex items-center justify-center">Full-size preview area</div>
            <div className="mt-4 flex justify-end gap-3">
              <button onClick={openWhatsAppWithDesign} className="bg-gold-600 px-4 py-2 rounded text-dark-chocolate font-bold">Submit design through WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
