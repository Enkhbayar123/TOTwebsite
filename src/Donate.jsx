// src/Donate.jsx
import React, { useEffect, useState } from 'react';
import { Heart, CreditCard, Smartphone, Shield, Check, Copy, CheckCircle, ArrowRight, Home, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [paymentMethod, setPaymentMethod] = useState('card'); 
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- LINKS SETUP ---
  // 1. For PayPal (International)
  const PAYPAL_LINK = "https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_ID";
  
  // 2. For Credit Card (Use Paystack, Flutterwave, or your PayPal link again)
  const CARD_LINK = "https://paystack.com/pay/YOUR_PAYMENT_PAGE"; 

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const impactData = {
    10: "Provides lunch for a trainee for one week.",
    25: "Purchases high-quality Kitenge fabric for 5 tote bags.",
    50: "Covers sewing machine maintenance and thread for a month.",
    100: "Sponsors a full vocational training module for one woman.",
    200: "Contributes to a new sewing machine for the workshop."
  };

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in">
      
      {/* HERO */}
      <header className="relative pt-40 pb-20 px-6 bg-[#0c4a6e] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7] rounded-full blur-[150px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs mb-4 block bg-white/10 w-fit mx-auto px-4 py-1 rounded-full">Support The Mission</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Invest in Dignity.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-cyan-300">Fuel Transformation.</span></h1>
        </div>
      </header>

      {/* DONATION WIDGET */}
      <section className="py-20 px-6 relative top-[-50px] z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[500px]">
          
          {/* LEFT: Impact Visualizer */}
          <div className="md:w-5/12 bg-[#0c4a6e] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0284c7] opacity-10 mix-blend-multiply"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Your Impact</h3>
              <p className="text-slate-300 text-sm mb-8">100% of public donations go directly to program costs.</p>
              
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-[#38bdf8]">
                  <Heart className="fill-[#38bdf8]" />
                  <span className="font-bold text-lg">${selectedAmount} Donation</span>
                </div>
                <p className="text-lg leading-relaxed font-medium">"{impactData[selectedAmount]}"</p>
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <div className="flex items-center gap-2 text-xs text-slate-400"><Shield size={14} /> Secure SSL Payment</div>
            </div>
          </div>

          {/* RIGHT: Payment Section */}
          <div className="md:w-7/12 p-10 md:p-14 bg-white relative">
            
            {isSuccess ? (
              // --- THANK YOU VIEW ---
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Thank You!</h3>
                <p className="text-slate-500 mb-8 max-w-sm">
                  Your generous donation of <span className="font-bold text-[#0c4a6e]">${selectedAmount}</span> helps us continue the work of restoring dignity in Molo.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <Link to="/" className="bg-[#0284c7] text-white py-3 rounded-xl font-bold shadow-lg hover:bg-[#0c4a6e] transition-all flex items-center justify-center gap-2">
                    <Home size={18} /> Return Home
                  </Link>
                  <button onClick={() => setIsSuccess(false)} className="text-sm font-bold text-slate-400 hover:text-[#0284c7] py-2">
                    Make another donation
                  </button>
                </div>
              </div>
            ) : (
              // --- FORM VIEW ---
              <div className="animate-fade-in">
                {/* Amount Selector */}
                <div className="mb-10">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-4">Choose Amount (USD)</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {[10, 25, 50, 100, 200].map((amount) => (
                      <button key={amount} onClick={() => setSelectedAmount(amount)} className={`py-3 rounded-xl font-bold transition-all ${selectedAmount === amount ? 'bg-[#0284c7] text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>${amount}</button>
                    ))}
                  </div>
                </div>

                {/* Method Tabs */}
                <div className="mb-8 border-b border-slate-100 flex gap-4 overflow-x-auto pb-1">
                  <button onClick={() => setPaymentMethod('card')} className={`pb-3 whitespace-nowrap text-sm font-bold transition-colors ${paymentMethod === 'card' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-slate-400'}`}>
                    Credit Card
                  </button>
                  <button onClick={() => setPaymentMethod('paypal')} className={`pb-3 whitespace-nowrap text-sm font-bold transition-colors ${paymentMethod === 'paypal' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-slate-400'}`}>
                    PayPal
                  </button>
                  <button onClick={() => setPaymentMethod('mpesa')} className={`pb-3 whitespace-nowrap text-sm font-bold transition-colors ${paymentMethod === 'mpesa' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-slate-400'}`}>
                    M-Pesa
                  </button>
                </div>

                {/* 1. CREDIT CARD OPTION */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                       <span className="text-sm font-bold text-slate-600">We Accept:</span>
                       <div className="flex gap-2">
                         <div className="h-6 w-10 bg-white border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
                         <div className="h-6 w-10 bg-white border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-red-600">MC</div>
                         <div className="h-6 w-10 bg-white border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-orange-600">AMEX</div>
                       </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-4">You will be redirected to our secure payment processor to complete your donation of <strong>${selectedAmount}</strong>.</p>
                    <button 
                      onClick={() => handleLinkClick(CARD_LINK)}
                      className="w-full bg-[#0c4a6e] text-white font-bold py-4 rounded-xl hover:bg-[#0284c7] transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                       <CreditCard size={20} /> Pay with Card
                    </button>
                  </div>
                )}

                {/* 2. PAYPAL OPTION */}
                {paymentMethod === 'paypal' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 text-sm mb-4">
                      <strong>PayPal</strong> is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.
                    </div>
                    <button 
                      onClick={() => handleLinkClick(PAYPAL_LINK)}
                      className="w-full bg-[#fbbf24] text-slate-900 font-bold py-4 rounded-xl hover:bg-[#f59e0b] transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                       <Globe size={20} /> Donate with PayPal
                    </button>
                  </div>
                )}

                {/* 3. M-PESA OPTION */}
                {paymentMethod === 'mpesa' && (
                  <div className="space-y-6 animate-fade-in bg-slate-50 p-6 rounded-xl border border-slate-100">
                     <div className="flex items-center gap-3 mb-2">
                       <Smartphone className="text-[#16a34a]" />
                       <h4 className="font-bold text-slate-800">Lipa na M-Pesa</h4>
                     </div>
                     <div className="space-y-4 text-sm">
                       <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                         <span className="text-slate-500">Paybill Number</span>
                         <span className="font-mono font-bold text-slate-800 text-lg">123456</span>
                       </div>
                       <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                         <span className="text-slate-500">Account Number</span>
                         <div className="flex items-center gap-2">
                           <span className="font-mono font-bold text-slate-800 text-lg">DONATE</span>
                           <button onClick={() => copyToClipboard("DONATE")} className="text-[#0284c7] hover:text-[#0c4a6e]"><Copy size={14}/></button>
                         </div>
                       </div>
                     </div>
                     {copied && <p className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={12}/> Copied to clipboard!</p>}
                     <button onClick={() => setIsSuccess(true)} className="w-full bg-[#16a34a] text-white font-bold py-3 rounded-xl hover:bg-[#15803d] transition-colors shadow-md mt-2">I have sent the money</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY SECTION */}
      <section className="py-16 px-6 bg-white mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-12">Where Your Money Goes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6"><div className="w-32 h-32 rounded-full border-[8px] border-[#e0f2fe] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#0284c7]">60%</div><h4 className="font-bold text-[#0c4a6e] mb-2">Program Costs</h4><p className="text-sm text-slate-500">Fabrics, machines, meals.</p></div>
            <div className="p-6"><div className="w-32 h-32 rounded-full border-[8px] border-[#e0f2fe] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#0284c7]">30%</div><h4 className="font-bold text-[#0c4a6e] mb-2">Stipends</h4><p className="text-sm text-slate-500">Trainee support & wages.</p></div>
            <div className="p-6"><div className="w-32 h-32 rounded-full border-[8px] border-[#e0f2fe] flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-[#0284c7]">10%</div><h4 className="font-bold text-[#0c4a6e] mb-2">Admin</h4><p className="text-sm text-slate-500">Rent & Utilities.</p></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;