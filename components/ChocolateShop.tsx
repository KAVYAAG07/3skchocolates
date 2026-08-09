import React, { useEffect } from 'react';

export default function ChocolateShop() {
  useEffect(() => {
    console.info('ChocolateShop mounted');
  }, []);

  return (
    <section id="shop-section" className="bg-dark-chocolate min-h-screen py-12 text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-extrabold text-gold-100 mb-4">Our Chocolate Shop</h2>
        <p className="text-gray-400 mb-6">Explore our delicious chocolate collection and select sizes to order.</p>

        <div className="space-y-4">
          <div className="p-4 bg-cocoa-card rounded border border-gold-900/10">
            <h3 className="font-bold text-gold-200">Available Sizes</h3>
            <ul className="text-gray-300 mt-2 list-disc list-inside text-sm">
              <li>15g — INR 45</li>
              <li>25g — INR 75</li>
              <li>50g — INR 150</li>
              <li>100g — INR 300</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <button id="shop-select-size" className="bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate px-4 py-2 rounded font-bold">Select Size</button>
            <button id="shop-order-now" className="border border-gold-700 text-gold-200 px-4 py-2 rounded">Proceed to Order</button>
          </div>
        </div>
      </div>
    </section>
  );
}
