import React, { useState } from 'react';

export default function CustomWrapper() {
  const [activeTab, setActiveTab] = useState<'customizer' | 'simulation' | 'samples'>('customizer');

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
                  <input className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200 mb-3" placeholder="3SK SPECIAL" />

                  <label className="text-sm text-gray-300 block mb-2">Subtitle / Date</label>
                  <input className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200 mb-3" placeholder="FOR SPECIAL MOMENTS" />

                  <label className="text-sm text-gray-300 block mb-2">Wrapper Pattern</label>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 rounded bg-cocoa-card text-gray-300">Plain</button>
                    <button className="px-3 py-2 rounded bg-cocoa-card text-gray-300">Damask</button>
                    <button className="px-3 py-2 rounded bg-cocoa-card text-gray-300">Geometric</button>
                    <button className="px-3 py-2 rounded bg-cocoa-card text-gray-300">Leaves</button>
                  </div>

                  <div className="mt-6">
                    <label className="text-sm text-gray-300 block mb-2">Chocolate Flavour</label>
                    <select className="w-full rounded px-3 py-2 bg-dark-chocolate border border-gold-900/10 text-gray-200">
                      <option>Pistachio</option>
                      <option>Hazelnut</option>
                      <option>Assorted</option>
                    </select>
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

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-gold-600 px-4 py-3 rounded text-dark-chocolate font-bold">Request Quote</button>
                <button className="flex-1 border border-gold-700 text-gold-200 px-4 py-3 rounded">Order Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
