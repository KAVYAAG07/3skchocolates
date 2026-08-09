import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data';
import { Briefcase, Building2, Store, Gift, Send, Coffee, CheckCircle, MessageSquare } from 'lucide-react';
import { B2BInquiryForm } from '../types';

export default function B2BInquiry() {
  const [form, setForm] = useState<B2BInquiryForm>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    interestType: 'corporate-gifting',
    estimatedQuantity: '100-500 bars',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName || !form.contactPerson || !form.email || !form.phone) {
      alert('Please fill out all required fields.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppB2B = () => {
    const interestLabels = {
      'corporate-gifting': 'Corporate Gifting & Custom Boxes',
      'wholesale': 'Wholesale Retail Distribution',
      'cafe-supply': 'Cafe & Coffee Shop Supply',
      'custom-recipe': 'Custom Recipe Co-Development'
    };

    const text = `Dear 3SK Chocolate Team! 💼🍫

I would like to submit a B2B / Corporate Partnership Inquiry:

*B2B Partnership Details:*
• *Company Name:* ${form.companyName}
• *Contact Person:* ${form.contactPerson}
• *Email Address:* ${form.email}
• *Phone / WhatsApp:* ${form.phone}
• *Partnership Type:* ${interestLabels[form.interestType]}
• *Estimated Volume:* ${form.estimatedQuantity}
• *Specific Requirements:* ${form.message ? form.message : 'Interested in catalog, price-list, and bulk shipping.'}

Please review my inquiry and reach out to establish a business relationship! Thank you.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-dark-chocolate min-h-screen py-12 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-950/40 border border-gold-600/20 rounded-full text-gold-300 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial Accounts</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
            B2B & Corporate <span className="text-gold-gradient font-bold">Services</span>
          </h1>
          <p className="text-gray-400 font-light text-xs sm:text-sm">
            We partner with five-star hotels, gourmet cafes, premium retailers, and global corporate entities to deliver the world's most desired chocolate experience.
          </p>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto pt-1" />
        </div>

        {/* Corporate channels showcase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-cocoa-card p-8 rounded-lg border border-gold-900/10 hover:border-gold-800/35 transition-all duration-300 space-y-4">
            <div className="p-3 bg-gold-950/40 border border-gold-500/20 rounded text-gold-400 w-12 h-12 flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gold-200">Corporate & Client Gifting</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Make a grand impression. We provide high-end, leather-textured boxes and customized hampers tailored with your corporate brand colors, logos, and personalized greeting notes for annual events, VIP client onboarding, and holidays.
            </p>
            <ul className="text-xs text-gold-300/80 space-y-1 pl-4 list-disc font-light">
              <li>Premium heavy-board boxes</li>
              <li>Dynamic logo foils printing</li>
              <li>Pan-India individual-address drops</li>
            </ul>
          </div>

          <div className="bg-cocoa-card p-8 rounded-lg border border-gold-900/10 hover:border-gold-800/35 transition-all duration-300 space-y-4">
            <div className="p-3 bg-gold-950/40 border border-gold-500/20 rounded text-gold-400 w-12 h-12 flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gold-200">Cafe & Patisserie Supply</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Empower your dessert menu. We supply freshly tempered chocolate bars, bulk fillings, or unpackaged premium chocolate blocks to boutique coffee houses and luxury dessert patisseries aiming to offer authentic Dubai kunafa pairings.
            </p>
            <ul className="text-xs text-gold-300/80 space-y-1 pl-4 list-disc font-light">
              <li>Wholesale contract pricing slabs</li>
              <li>Guaranteed fresh weekly batches</li>
              <li>POS display stands & marketing assets</li>
            </ul>
          </div>

          <div className="bg-cocoa-card p-8 rounded-lg border border-gold-900/10 hover:border-gold-800/35 transition-all duration-300 space-y-4">
            <div className="p-3 bg-gold-950/40 border border-gold-500/20 rounded text-gold-400 w-12 h-12 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-gold-200">Wholesale & Hospitality</h3>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              For premium mini-bars, VIP lounges, airline premium cabins, and airport luxury retailers. Offer your guests the original 3SK Kunafa bars in custom dimensions, beautifully boxed and fresh.
            </p>
            <ul className="text-xs text-gold-300/80 space-y-1 pl-4 list-disc font-light">
              <li>FDA & health-certified production</li>
              <li>Insulated express air freight</li>
              <li>Dedicated accounts support manager</li>
            </ul>
          </div>

        </div>

        {/* Dual Layout: Form on Left/Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold-100">
              Inquire Corporate Partnership
            </h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              We understand that high-end business partnerships require precise attention. Submit our formal B2B request sheet. Our commercial account leads review inquiries in real-time and will reach out with customized wholesale catalogs, custom wrapper pricing, and express delivery logistics.
            </p>

            <div className="space-y-4 bg-cocoa-card/50 p-6 rounded border border-gold-900/10">
              <div className="flex gap-3 items-center">
                <span className="w-2.5 h-2.5 bg-gold-500 rounded-full" />
                <span className="text-xs text-gray-300">Dedicated B2B Quote within <strong>4 Hours</strong></span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="w-2.5 h-2.5 bg-gold-500 rounded-full" />
                <span className="text-xs text-gray-300">Volume orders starting from <strong>50 bars</strong></span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="w-2.5 h-2.5 bg-gold-500 rounded-full" />
                <span className="text-xs text-gray-300">Global tax-compliant corporate billing invoicing</span>
              </div>
            </div>
          </div>

          {/* Right Column: B2B Form */}
          <div className="lg:col-span-7 bg-cocoa-card rounded-lg p-6 sm:p-8 border border-gold-800/15 shadow-2xl relative">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-base font-bold text-gold-200 border-b border-gold-900/15 pb-4">
                  B2B Channel Request Form
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                       *
                    </label>
                    <input
                      required
                      type="text"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Resorts Pvt Ltd"
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-4 py-3 text-xs text-gray-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                      Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe (Purchase Mgr)"
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-4 py-3 text-xs text-gray-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                       *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. corporate@acme.com"
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-4 py-3 text-xs text-gray-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                      WhatsApp/Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-4 py-3 text-xs text-gray-200 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                      Partnership Type
                    </label>
                    <select
                      name="interestType"
                      value={form.interestType}
                      onChange={handleChange}
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-3 py-3 text-xs text-gray-300 focus:outline-none focus:border-gold-500 cursor-pointer"
                    >
                      <option value="corporate-gifting">🎁 Corporate Gifting & Hampers</option>
                      <option value="wholesale">🛒 Wholesale Retail Distribution</option>
                      <option value="cafe-supply">☕ Cafe Dessert Supply</option>
                      <option value="custom-recipe">🍫 Custom Recipe / Private Label</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                      Estimated Monthly Volume
                    </label>
                    <select
                      name="estimatedQuantity"
                      value={form.estimatedQuantity}
                      onChange={handleChange}
                      className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-3 py-3 text-xs text-gray-300 focus:outline-none focus:border-gold-500 cursor-pointer"
                    >
                      <option value="50-100 bars">50 - 100 bars (Trial batch)</option>
                      <option value="100-500 bars">100 - 500 bars</option>
                      <option value="500-1000 bars">500 - 1,000 bars</option>
                      <option value="1000+ bars">1,000+ bars (Enterprise Contract)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                    Tell Us About Your Requirements (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe specific custom packaging desires, custom recipes, delivery schedules, or target dates..."
                    className="w-full bg-dark-chocolate border border-gold-900/20 rounded px-4 py-3 text-xs text-gray-200 placeholder-gray-700 focus:outline-none focus:border-gold-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    id="b2b-submit-form"
                    className="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-chocolate hover:from-gold-500 hover:to-gold-400 py-3.5 px-6 rounded text-xs font-bold tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-gold-950/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    SUBMIT FORM INQUIRY
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppB2B}
                    id="b2b-direct-whatsapp"
                    className="bg-emerald-900/20 border border-emerald-500 text-emerald-300 hover:bg-emerald-950/20 py-3.5 px-6 rounded text-xs font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    INQUIRE DIRECT VIA WHATSAPP
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-12 px-6 text-center space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-gold-950/40 rounded-full border border-gold-500/20 text-gold-300">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gold-100">
                  Corporate Inquiry Received!
                </h3>
                
                <p className="text-gray-400 text-xs max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.contactPerson}</strong> from <strong>{form.companyName}</strong>. Your custom B2B inquiry profile has been cataloged successfully.
                </p>

                <div className="bg-dark-chocolate p-4 rounded border border-gold-900/10 text-left space-y-1.5 text-xs max-w-sm mx-auto font-mono">
                  <div><span className="text-gray-500">EMAIL:</span> {form.email}</div>
                  <div><span className="text-gray-500">PHONE:</span> {form.phone}</div>
                  <div><span className="text-gray-500">VOLUME:</span> {form.estimatedQuantity}</div>
                </div>

                <p className="text-gray-500 text-[10px]">
                  Our lead commercial executive will follow up with formal media kits and volume wholesale pricing schedules shortly.
                </p>

                <div className="pt-4 flex flex-col gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleWhatsAppB2B}
                    id="b2b-whatsapp-sub"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-3 px-6 rounded text-xs tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    SEND B2B PROFILE TO WHATSAPP NOW
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    id="b2b-form-reset"
                    className="text-xs text-gold-400 hover:text-gold-200 underline cursor-pointer"
                  >
                    Submit Another Partnership Request
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
