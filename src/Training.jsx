// src/Training.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- IMPORT THIS
import { BookOpen, Clock, Heart, Sun, Star, CheckCircle, Users, Quote, Mic } from 'lucide-react';

const Training = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in">
      
      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 px-6 bg-brand-dark text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand rounded-full blur-[150px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand rounded-full blur-[100px] opacity-20 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block bg-white/10 w-fit mx-auto px-4 py-1 rounded-full">The Curriculum</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Sewing God's Way</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A holistic training and discipleship program.
          </p>
        </div>
      </header>

      {/* --- CURRICULUM UNITS --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { unit: "Unit 1", title: "The Foundation", theme: "Identity", q: "Who am I becoming?" },
              { unit: "Unit 2", title: "The Basics", theme: "Service", q: "How do I serve?" },
              { unit: "Unit 3", title: "Clothing", theme: "Purpose", q: "What am I living for?" },
              { unit: "Unit 4", title: "Advanced", theme: "Leadership", q: "How do I empower others?" },
            ].map((u, i) => (
              <div key={i} className="bg-brand-light/20 border border-brand/20 p-8 rounded-2xl hover:bg-brand-light/40 transition-colors">
                <span className="text-brand font-bold text-xs uppercase tracking-widest">{u.unit}</span>
                <h3 className="text-xl font-bold text-brand-dark mt-2 mb-1">{u.title}</h3>
                <div className="w-8 h-1 bg-brand rounded-full mb-4"></div>
                <p className="text-sm font-bold text-slate-600">Theme: {u.theme}</p>
                <p className="text-xs text-slate-500 italic mt-1">"{u.q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKSHOP RULES (Centered) --- */}
      <section className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Workshop Rules</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our workshop is a sanctuary of respect and excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Users />, title: "Respect People", desc: "Respect the teacher and respect every member of TOT." },
              { icon: <Quote />, title: "Language", desc: "Only speak in English or Swahili while in the Workshop." },
              { icon: <Sun />, title: "Stewardship", desc: "Take good care of the materials and equipment." },
              { icon: <Heart />, title: "Community", desc: "Love each other." },
              { icon: <Star />, title: "Effort", desc: "Always do your best." },
              { icon: <Mic />, title: "Atmosphere", desc: "Music and conversation must glorify God." },
              { icon: <Clock />, title: "Punctuality", desc: "Respect time - be on time, all the time." },
            ].map((rule, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors w-full md:w-[48%] lg:w-[23%] flex-grow-0 flex-shrink-0">
                <div className="text-brand mb-4">
                  {React.cloneElement(rule.icon, { size: 32 })}
                </div>
                <h3 className="font-bold text-xl mb-2">{rule.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

          {/* SCRIPTURE BLOCK */}
          <div className="mt-16 bg-brand rounded-3xl p-8 md:p-12 text-center shadow-2xl mx-auto max-w-4xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <Quote className="mx-auto mb-6 text-white/70" size={40} />
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6 font-medium text-white">
                "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving."
              </p>
              <div className="inline-block bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/30">
                <p className="font-bold uppercase tracking-widest text-sm text-white">Colossians 3:23-24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA (FIXED BUTTON) --- */}
      <section className="py-24 px-6 bg-slate-50 text-center">
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Support a Trainee</h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto">
          Your donation provides fabrics, sewing machine maintenance, and meals for women undergoing this life-changing training.
        </p>
        
        {/* CHANGED TO LINK SO IT WORKS */}
        <Link 
          to="/donate" 
          className="inline-block bg-brand-dark text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-brand transition-all"
        >
          Donate Today
        </Link>

      </section>

    </div>
  );
};

export default Training;