// src/Training.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, Quote, GraduationCap, MapPin } from 'lucide-react';

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in pb-20">
      
      {/* HERO SECTION */}
      <header className="relative pt-40 pb-20 px-6 bg-[#0c4a6e] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs mb-4 block bg-white/10 w-fit mx-auto px-4 py-1 rounded-full">Our Curriculum</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Sewing God's Way</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A holistic training and discipleship program designed to restore dignity and expand impact.
          </p>
        </div>
      </header>

      {/* TRAIN THE TRAINER */}
      <section className="py-16 px-6 bg-[#e0f2fe]/50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0284c7] mx-auto mb-6 shadow-sm">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Train the Trainer</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Our vision extends beyond the walls of our current workshop. By developing our curriculum at the Tumaini site, we are actively preparing to <strong>"Train the Trainer."</strong> This scalable model ensures that our graduates can take the "Sewing God's Way" curriculum into new communities, multiplying our impact across Kenya.
          </p>
        </div>
      </section>

      {/* CURRICULUM UNITS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0c4a6e] mb-4">Core Curriculum</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { unit: "Unit 1", title: "The Foundation", theme: "Identity", q: "Who am I becoming?" },
              { unit: "Unit 2", title: "The Basics", theme: "Service", q: "How do I serve?" },
              { unit: "Unit 3", title: "Clothing", theme: "Purpose", q: "What am I living for?" },
              { unit: "Unit 4", title: "Advanced", theme: "Leadership", q: "How do I empower others?" },
            ].map((u, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-[#e0f2fe] transition-colors">
                <span className="text-[#0284c7] font-bold text-xs uppercase tracking-widest">{u.unit}</span>
                <h3 className="text-xl font-bold text-[#0c4a6e] mt-2 mb-1">{u.title}</h3>
                <div className="w-8 h-1 bg-[#0284c7] rounded-full mb-4"></div>
                <p className="text-sm font-bold text-slate-600">Theme: {u.theme}</p>
                <p className="text-xs text-slate-500 italic mt-1">"{u.q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCRIPTURE BLOCK */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-[#0c4a6e] rounded-[2rem] p-10 md:p-16 text-center text-white shadow-xl">
          <Quote className="mx-auto mb-8 text-[#0284c7]" size={40} />
          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-6 font-medium">
            "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving."
          </p>
          <div className="inline-block bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm">
            <p className="font-bold uppercase tracking-widest text-sm text-white">Colossians 3:23-24</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;