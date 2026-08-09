import React, { useMemo, useState } from 'react';
import { Minus, Plus, ShoppingBag, MessageCircle, ShoppingCart, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

type SizeKey = 'g15' | 'g25' | 'g50' | 'g100';
type Flavour = 'Pistachio' | 'Hazelnut';

const products: Record<SizeKey, { size: string; price: number }> = {
  g15: { size: '15g', price: 45 },
  g25: { size: '25g', price: 75 },
  g50: { size: '50g', price: 150 },
  g100: { size: '100g', price: 300 },
};

const flavours: Flavour[] = ['Pistachio', 'Hazelnut'];

type CartKey = `${SizeKey}-${Flavour}`;

export default function ChocolateShop() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedFlavour, setSelectedFlavour] = useState<Record<SizeKey, Flavour>>({
    g15: 'Pistachio',
    g25: 'Pistachio',
    g50: 'Pistachio',
    g100: 'Pistachio',
  });
  const [showCart, setShowCart] = useState(false);

  const updateCart = (sizeKey: SizeKey, flavour: Flavour, amount: number) => {
    const key = `${sizeKey}-${flavour}` as CartKey;
    setCart((current) => ({
      ...current,
      [key]: Math.max(0, (current[key] || 0) + amount),
    }));
  };

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, value) => sum + value, 0),
    [cart]
  );

  const total = useMemo(
    () =>
      (Object.keys(cart) as CartKey[]).reduce((sum, key) => {
        const [sizeKey] = key.split('-') as [SizeKey];
        return sum + (cart[key] || 0) * products[sizeKey].price;
      }, 0),
    [cart]
  );

  const cartLines = useMemo(
    () =>
      (Object.keys(cart) as CartKey[])
        .filter((key) => cart[key] > 0)
        .map((key) => {
          const [sizeKey, flavour] = key.split('-') as [SizeKey, Flavour];
          return {
            key,
            size: products[sizeKey].size,
            flavour,
            qty: cart[key],
            amount: cart[key] * products[sizeKey].price,
          };
        }),
    [cart]
  );

  const placeOrderOnWhatsApp = () => {
    if (totalItems === 0) {
      alert('Please add at least one chocolate to your cart before placing your order.');
      return;
    }

    const lines = cartLines.map(
      (item) => `• ${item.flavour} — ${item.size} × ${item.qty} = ₹${item.amount}`
    );

    const message = [
      '🍫 *3SK Chocolate Order*',
      '',
      ...lines,
      '',
      `*Total Quantity:* ${totalItems}`,
      `*Total Amount:* ₹${total}`,
      '',
      'Please confirm my order and share the payment/delivery details.',
    ].join('\n');

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-gold-400 text-[10px] tracking-[0.25em] uppercase font-bold mb-2">
          <ShoppingBag className="w-4 h-4" /> Order Chocolate
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-gold-100">Choose Your Chocolate</h2>
        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          Select a flavour, choose a size, add quantities to your cart, then place your order through WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(Object.keys(products) as SizeKey[]).map((key) => {
          const product = products[key];
          const flavour = selectedFlavour[key];
          const selectedQty = cart[`${key}-${flavour}`] || 0;

          return (
            <div key={key} className="bg-cocoa-card border border-gold-800/25 rounded-xl p-4 sm:p-5 shadow-xl">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-serif text-lg sm:text-xl font-bold text-gold-100">3SK Chocolate</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-0.5">{product.size} bar</div>
                </div>

                <div className="text-right whitespace-nowrap">
                  <div className="text-[9px] uppercase tracking-widest text-gray-500">MRP</div>
                  <div className="text-base sm:text-lg font-black text-gold-300">₹{product.price}</div>
                </div>
              </div>

              {/* Flavour selection directly below MRP */}
              <div className="mt-4">
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Choose Flavour</div>
                <div className="flex gap-2">
                  {flavours.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedFlavour((current) => ({ ...current, [key]: option }))}
                      className={`flex-1 rounded-lg border px-3 py-2 text-xs sm:text-sm font-bold transition-all ${
                        flavour === option
                          ? 'bg-gold-600/30 border-gold-400 text-gold-100'
                          : 'bg-dark-chocolate border-gold-800/40 text-gray-400 hover:border-gold-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    updateCart(key, flavour, 1);
                    setShowCart(true);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-dark-chocolate rounded-lg px-4 py-2.5 text-xs font-black tracking-wide transition-all active:scale-[0.98]"
                >
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>

                <div className="flex items-center border border-gold-700/50 rounded-lg overflow-hidden bg-dark-chocolate">
                  <button
                    type="button"
                    aria-label={`Decrease ${product.size} ${flavour} quantity`}
                    onClick={() => updateCart(key, flavour, -1)}
                    className="w-9 h-9 flex items-center justify-center text-gold-300 hover:bg-gold-900/40 active:scale-95 transition-all"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-bold text-gold-100 tabular-nums">{selectedQty}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${product.size} ${flavour} quantity`}
                    onClick={() => updateCart(key, flavour, 1)}
                    className="w-9 h-9 flex items-center justify-center text-gold-300 hover:bg-gold-900/40 active:scale-95 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-dark-chocolate border border-gold-700/30 rounded-xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Your Cart</div>
            <div className="font-serif text-xl sm:text-2xl font-black text-gold-100 mt-1">
              {totalItems} {totalItems === 1 ? 'Chocolate' : 'Chocolates'}
            </div>
            <div className="text-lg font-bold text-gold-300 mt-0.5">Total ₹{total}</div>
          </div>

          <div className="flex w-full sm:w-auto gap-2">
            <button
              type="button"
              onClick={() => setShowCart((current) => !current)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 border border-gold-600 text-gold-200 px-5 py-3.5 rounded-lg text-xs font-black tracking-widest hover:bg-gold-900/30 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              VIEW CART ({totalItems})
            </button>
            <button
              type="button"
              onClick={placeOrderOnWhatsApp}
              id="whatsapp-chocolate-order"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate px-5 py-3.5 rounded-lg text-xs font-black tracking-widest hover:from-gold-500 hover:to-gold-400 active:scale-[0.98] transition-all shadow-lg shadow-gold-950/30"
            >
              <MessageCircle className="w-5 h-5" />
              ORDER NOW
            </button>
          </div>
        </div>

        {showCart && (
          <div className="mt-5 border-t border-gold-800/30 pt-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-lg font-bold text-gold-100">Cart Items</h3>
              <button type="button" onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gold-200">
                <X className="w-4 h-4" />
              </button>
            </div>

            {cartLines.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-2">
                {cartLines.map((item) => (
                  <div key={item.key} className="flex items-center justify-between gap-3 bg-cocoa-card rounded-lg px-3 py-2.5">
                    <div>
                      <div className="text-sm font-bold text-gold-100">{item.flavour} Chocolate</div>
                      <div className="text-xs text-gray-500">{item.size} × {item.qty}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gold-300">₹{item.amount}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const [sizeKey, flavour] = item.key.split('-') as [SizeKey, Flavour];
                          updateCart(sizeKey, flavour, -1);
                        }}
                        className="p-1.5 text-gray-500 hover:text-red-300"
                        aria-label={`Remove one ${item.flavour} ${item.size}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
