import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  context?: any;
}

export default function OrderModal({ isOpen, onClose, context }: Props) {
  const [name, setName] = useState('');
  const [size, setSize] = useState('50g');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-xl bg-dark-chocolate border border-gold-900/20 rounded p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gold-100">Place an Order</h3>
          <button onClick={onClose} className="text-gray-400">Close</button>
        </div>

        <p className="text-sm text-gray-300 mb-4">Ordering from: {context?.source ?? 'site'}</p>

        <div className="space-y-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name or WhatsApp"
            className="w-full px-3 py-2 bg-black/20 rounded border border-gold-900/10 text-gray-100"
          />

          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="w-full px-3 py-2 bg-black/20 rounded border border-gold-900/10 text-gray-100"
          >
            <option>15g</option>
            <option>25g</option>
            <option>50g</option>
            <option>100g</option>
          </select>

          <div className="flex gap-3">
            <a
              href={`https://wa.me/91${encodeURIComponent(name || '')}?text=${encodeURIComponent(`Hi, I'd like to order a ${size} bar. (from ${context?.source})`)}`}
              className="flex-1 bg-emerald-600 px-4 py-2 rounded text-dark-chocolate font-bold text-center"
              onClick={onClose}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>

            <button
              onClick={() => { alert('Order submitted (demo)'); onClose(); }}
              className="flex-1 border border-gold-700 text-gold-200 px-4 py-2 rounded"
            >
              Submit (demo)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
