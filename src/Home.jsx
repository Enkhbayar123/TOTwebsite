// src/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Heart, Users, BookOpen, Sun, MapPin, Mail, ArrowRight, Star, Quote, CheckCircle, Clock, Mic, Check } from 'lucide-react';

const Home = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // --- PASTE YOUR KEYS HERE ---
    const SERVICE_ID = 'YOUR_SERVICE_ID';   
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  // --- FEATURED PRODUCTS DATA ---
  const featuredProducts = [
    {
      id: 31,
      name: "Crossbody Bag",
      price: "Ksh 1,600",
      image: "/images/crossbody-bag.JPG",
      maker: "Handmade by Sheila"
    },
    {
      id: 2,
      name: "Shopping Bag",
      price: "Ksh 1,500",
      image: "/images/shopping-bag.jpg",
      maker: "Handmade by Mama Wachuka"
    },
    {
      id: 28,
      name: "Christmas Stocking",
      price: "Ksh 1,300",
      image: "/images/stocking.jpg",
      maker: "Handmade by Terissia"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0284c7]/20 shadow-sm"><span className="w-2.5 h-2.5 rounded-full bg-[#0284c7] animate-pulse"></span><span className="text-[#0284c7] font-bold text-xs uppercase tracking-widest">Nakuru, Kenya</span></div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#2C5F6D] leading-[1.1]">Creating Opportunity, <br />Restoring Dignity, <br /><span className="text-[#6DC0D5]">Inspiring Hope.</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl border-l-4 border-[#0284c7] pl-6">"We believe that every woman possesses inherent dignity, purpose, and potential—regardless of her circumstances."</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})} className="bg-[#0c4a6e] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">Join Our Mission <ArrowRight size={20} /></button>
              <Link to="/products" className="px-8 py-4 rounded-full font-bold text-[#0c4a6e] bg-white border-2 border-slate-200 hover:border-[#0284c7] hover:text-[#0284c7] transition-all flex items-center justify-center">View Products</Link>
            </div>
          </div>
          <div className="relative group perspective-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
              <img src="/woman-working.jpg" alt="Woman working" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-xs"><Quote className="text-[#e0f2fe] opacity-50 mb-2" /><p className="font-serif text-2xl leading-tight">"Every stitch tells a story of transformation."</p></div>
            </div>
          </div>
        </div>
      </header>

      {/* VALUES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20"><h2 className="text-4xl font-serif font-bold text-[#0c4a6e] mb-4">Core Values</h2><div className="w-24 h-1.5 bg-[#0284c7] mx-auto rounded-full"></div></div>
          <div className="grid md:grid-cols-4 gap-6">
            {[{ icon: <Users />, title: "Unity", text: "Collaboration & Mutual Respect" }, { icon: <BookOpen />, title: "Integrity", text: "Highest Moral Standards" }, { icon: <Sun />, title: "Excellence", text: "Quality in Every Action" }, { icon: <Heart />, title: "Honesty", text: "Truthfulness & Transparency" }].map((v, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#0284c7] mb-6 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">{React.cloneElement(v.icon, { size: 28 })}</div>
                <h3 className="font-serif font-bold text-xl text-[#0c4a6e] mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW (UPDATED) */}
      <section className="py-24 px-6 bg-[#e0f2fe]/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div><span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs">Shop for a Cause</span><h2 className="text-4xl font-serif font-bold text-[#0c4a6e] mt-2">Handcrafted Goods</h2></div>
            <Link to="/products" className="flex items-center text-[#0c4a6e] font-bold hover:text-[#0284c7] transition-colors">View Full Catalog <ArrowRight className="ml-2" size={20}/></Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to="/products" className="bg-white p-3 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-[#0284c7]/20">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600?text=Photo+Coming+Soon"; }}
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-sm text-[#0c4a6e] flex items-center gap-1">
                    <CheckCircle size={12} className="text-[#0284c7]" /> In Stock
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-[#0c4a6e] text-lg">{product.name}</h3>
                    <span className="text-[#0284c7] font-extrabold text-xl">{product.price}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">{product.maker}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING & RULES */}
      <section id="training" className="py-24 px-6 bg-[#0c4a6e] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-5">
            <span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs">The Curriculum</span>
            <h2 className="text-4xl font-serif font-bold mb-6 mt-2">Mindset & Skill</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">We teach more than sewing. We teach hearts to dream again through daily devotionals, professional discipline, and skill mastery.</p>
            <div className="space-y-4">
              {["Morning Devotion & Fellowship", "Vocational Skill Acquisition", "Financial Literacy Basics", "Community Discipleship"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"><div className="w-10 h-10 rounded-full bg-[#0284c7] flex items-center justify-center text-sm font-bold shadow-lg">{i + 1}</div><span className="font-medium text-lg">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10"><Star className="fill-yellow-500 text-yellow-500" size={32} /><h3 className="text-3xl font-serif font-bold">Workshop Rules</h3></div>
              <div className="space-y-5">
                {[{ icon: <Users size={20} />, text: "Respect the teacher & every member." }, { icon: <Quote size={20} />, text: "Only speak in English or Swahili." }, { icon: <Sun size={20} />, text: "Take good care of materials & equipment." }, { icon: <Heart size={20} />, text: "Love each other." }, { icon: <Mic size={20} />, text: "Music & conversation must glorify God." }, { icon: <Clock size={20} />, text: "Respect time - be on time, all the time." }].map((rule, i) => (
                  <div key={i} className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-[#0284c7]/20 flex items-center justify-center text-[#0284c7] shrink-0 mt-0.5">{rule.icon}</div><span className="text-slate-300 font-medium text-lg">{rule.text}</span></div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#0284c7] rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4"><Quote size={80} /></div>
                <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2"><Star size={18} className="fill-white" /> Always do your best</h4>
                <p className="text-white/80 text-sm italic leading-relaxed">"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters... It is the Lord Christ you are serving."</p>
                <p className="text-white font-bold text-xs uppercase mt-3 tracking-widest">— Colossians 3:23-24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH FUNCTIONAL FORM */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#0c4a6e] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[#0284c7] opacity-20 mix-blend-multiply"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Get in Touch</h3>
                <p className="text-slate-300 mb-10">Interested in partnering with us or ordering in bulk?</p>
                <div className="space-y-8">
                  <div className="flex items-center gap-5"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#0284c7]"><MapPin size={24} /></div><div><p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Location</p><p className="font-medium text-lg">Molo, Nakuru County, Kenya</p></div></div>
                  <div className="flex items-center gap-5"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#0284c7]"><Mail size={24} /></div><div><p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email</p><p className="font-medium text-lg">emily.hooper@onecollective.org</p></div></div>
                </div>
              </div>
            </div>
            
            <div className="p-10 md:p-12 bg-white">
              {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"><Check size={32} /></div>
                    <h4 className="text-2xl font-bold text-[#0c4a6e] mb-2">Message Sent!</h4>
                    <p className="text-slate-500">Thank you for reaching out. We will respond shortly.</p>
                 </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <input name="first_name" required type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" />
                    <input name="last_name" required type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" />
                  </div>
                  <input name="email" required type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" />
                  <input type="hidden" name="subject" value="Inquiry from Home Page" />
                  
                  <textarea name="message" required rows="4" placeholder="Message" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"></textarea>
                  <button type="submit" disabled={status === 'sending'} className="w-full bg-[#0284c7] text-white font-bold text-lg py-5 rounded-xl hover:bg-sky-500 transition-all shadow-lg hover:-translate-y-1 disabled:opacity-50">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

