// src/CommunityPrograms.jsx
import React, { useEffect } from 'react';
import { Heart, BookOpen, TrendingUp } from 'lucide-react';

const CommunityPrograms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in pb-20">
      {/* HERO */}
      <header className="relative pt-40 pb-20 px-6 bg-[#0c4a6e] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs mb-4 block">Community Transformation</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Beyond the Workshop</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering the wider community through health, education, and financial literacy.
          </p>
        </div>
      </header>

      {/* PROGRAMS GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Public Health / Afya Flow */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#e0f2fe]/50 p-12 rounded-[2.5rem] aspect-square flex items-center justify-center relative overflow-hidden">
               <Heart size={120} className="text-[#0284c7] opacity-20 absolute" />
               <img src="/images/afya-flow.jpg" alt="Afya Flow Sanitary Pads" className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-full" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600?text=Afya+Flow"; }} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">Public Health</div>
              <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Afya Flow: Menstrual Health</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Part of our community transformation objective includes ensuring women and girls have access to essential health resources. Through the Afya Flow program, we produce and distribute reusable sanitary pad kits, keeping girls in school and providing dignified solutions for women.
              </p>
            </div>
          </div>

          {/* Education & Youth */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
             <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">Education</div>
              <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Youth Placement & Local Schools</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We believe in passing on the skills we've learned. TOT offers placement opportunities for youth from the <strong>'Kazi na maisha bora'</strong> initiative, bringing them into our workshop to gain hands-on experience.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Additionally, we partner with local schools to provide basic sewing and tailoring education, equipping the next generation with practical, income-generating skills.
              </p>
            </div>
            <div className="bg-[#e0f2fe]/50 p-12 rounded-[2.5rem] aspect-square flex items-center justify-center order-1 md:order-2">
               <BookOpen size={120} className="text-[#0284c7] opacity-20" />
            </div>
          </div>

          {/* Financial Literacy */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#e0f2fe]/50 p-12 rounded-[2.5rem] aspect-square flex items-center justify-center">
               <TrendingUp size={120} className="text-[#0284c7] opacity-20" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">Empowerment</div>
              <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Financial Literacy Skills</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Earning an income is only the first step. We extend our financial literacy training beyond the workshop to the wider community. By teaching saving, budgeting, and business management, we help families achieve long-term stability and break the cycle of poverty.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CommunityPrograms;