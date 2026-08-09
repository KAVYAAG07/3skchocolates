import React, { useEffect, useState } from 'react';
import { SIZES_DATA, CHOCOLATE_PRODUCTS, WHATSAPP_NUMBER } from '../data';

type CartItem = {
  size: string;
  flavour: 'pistachio' | 'hazelnut';
  qty: number;
  price: number;
};

export default function ChocolateShop() {
  const product = CHOCOLATE_PRODUCTS[0]; // using first product as base (3SK Chocolate)
  const [selectedFlavours, setSelectedFlavours] = useState<Record<string, 'pistachio' | 'hazelnut'>>(() => {
    const map: Record<string, 'pistachio' | 'hazelnut'> = {};
    SIZES_DATA.forEach(s => (map[s.weight] = 'pistachio'));
    return map;
  });

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    console.info('ChocolateShop mounted');
  }, []);

  const chooseFlavour = (weight: string, flavour: 'pistachio' | 'hazelnut') => {
    setSelectedFlavours(prev => ({ ...prev, [weight]: flavour }));
  };

  const addToCart = (weight: string) => {
    const flavour = selectedFlavours[weight];
    const sizeInfo = SIZES_DATA.find(s => s.weight === weight)!;
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.size === weight && item.flavour === flavour);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].qty += 1;
        return copy;
      }
      return [...prev, { size: weight, flavour, qty: 1, price: sizeInfo.priceInr }];
    });
  };

  const updateQty = (weight: string, flavour: 'pistachio' | 'hazelnut', delta: number) => {
    setCart(prev => {
      const copy = prev.map(i => ({ ...i }));
      const idx = copy.findIndex(it => it.size === weight && it.flavour === flavour);
      if (idx === -1) return prev;
      copy[idx].qty = Math.max(0, copy[idx].qty + delta);
      if (copy[idx].qty === 0) copy.splice(idx, 1);
      return copy;
    });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.price, 0);

  const openWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before ordering.');
      return;
    }

    const lines: string[] = [];
    lines.push('Hello, I would like to place an order:');
    cart.forEach(it => lines.push(`${it.qty} x ${it.size} (${it.flavour}) — INR ${it.qty * it.price}`));
    lines.push(`Total: INR ${cartTotal}`);
    lines.push('Name / WhatsApp:');

    const text = encodeURIComponent(lines.join('\n'));
    const phone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="shop-section" className="bg-dark-chocolate min-h-screen py-12 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl font-extrabold text-gold-100">Order Chocolate</h2>
          <p className="text-gray-400 mt-2">Choose sizes, flavours and add to your cart. Click Order Now to message us on WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SIZES_DATA.map(size => (
            <div key={size.weight} className="bg-cocoa-card rounded-xl p-6 border border-gold-900/10 shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-gold-100 font-bold">3SK Chocolate</h3>
                  <div className="text-sm text-gray-400">{size.weight} bar</div>
                </div>
                <div className="text-gold-300 font-bold">₹{size.priceInr}</div>
              </div>

              <div className="mt-4">
                <div className="text-xs uppercase text-gray-400 mb-2">Choose Flavour</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => chooseFlavour(size.weight, 'pistachio')}
                    className={`flex-1 py-2 rounded-md border ${selectedFlavours[size.weight] === 'pistachio' ? 'bg-gold-700 text-dark-chocolate font-semibold' : 'bg-transparent text-gray-300 border-gold-900/20'}`}>
                    Pistachio
                  </button>
                  <button
                    onClick={() => chooseFlavour(size.weight, 'hazelnut')}
                    className={`flex-1 py-2 rounded-md border ${selectedFlavours[size.weight] === 'hazelnut' ? 'bg-gold-700 text-dark-chocolate font-semibold' : 'bg-transparent text-gray-300 border-gold-900/20'}`}>
                    Hazelnut
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button onClick={() => addToCart(size.weight)} className="flex-1 bg-gold-600 hover:bg-gold-500 text-dark-chocolate px-4 py-3 rounded font-bold">🛒 Add to Cart</button>

                <div className="flex items-center gap-2 bg-dark-chocolate/60 px-3 py-2 rounded border border-gold-900/10">
                  <button aria-label="decrease" onClick={() => updateQty(size.weight, selectedFlavours[size.weight], -1)} className="px-3 py-1 rounded border border-gold-900/10">−</button>
                  <div className="min-w-[2rem] text-center">{cart.find(i => i.size === size.weight && i.flavour === selectedFlavours[size.weight])?.qty ?? 0}</div>
                  <button aria-label="increase" onClick={() => updateQty(size.weight, selectedFlavours[size.weight], 1)} className="px-3 py-1 rounded border border-gold-900/10">+</button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-cocoa-card rounded-xl border border-gold-900/10 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 uppercase">Your Cart</div>
            <div className="font-serif text-2xl text-gold-100 font-bold">{cartCount} Chocolates</div>
            <div className="text-gold-300 font-bold mt-1">Total ₹{cartTotal}</div>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-3 border border-gold-700 rounded text-gold-200">View Cart ({cartCount})</button>
            <button onClick={openWhatsAppOrder} className="px-6 py-3 bg-gold-600 rounded text-dark-chocolate font-bold">Order Now</button>
          </div>
        </div>

      </div>
    </section>
  );
}
