// src/About.jsx
import React, { useEffect } from 'react';
import { Users, Heart, Star, Shield, Quote, BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in">
      
      {/* HERO */}
      <header className="relative pt-40 pb-20 px-6 bg-brand-dark text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-4 block">Est. 2025 • Tumaini, Kenya</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
            Rooted in Faith, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">Growing in Hope.</span>
          </h1>
        </div>
      </header>

      {/* LEADERSHIP (Updated Roles) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-dark">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Emily Card - Updated to include Spiritual Leadership */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand hover:-translate-y-1 transition-transform">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-light">
                <img src="/emily.jpg" alt="Emily Hooper" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark text-center">Emily Hooper</h3>
              <p className="text-brand text-xs font-bold uppercase text-center mb-4">Founder & Spiritual Lead</p>
              <p className="text-center text-sm text-slate-500 leading-relaxed">
                As the One Collective Catalyst, Emily drives the holistic vision of TOT. She leads the spiritual discipleship program and curriculum development, ensuring that faith and restoration remain the heart of the mission.
              </p>
            </div>

            {/* Sheila Card - Updated to focus on Sewing only */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand hover:-translate-y-1 transition-transform">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-light">
                <img src="/sheila.jpg" alt="Sheila Muhenje" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark text-center">Sheila Muhenje</h3>
              <p className="text-brand text-xs font-bold uppercase text-center mb-4">Founding Trainer</p>
              <p className="text-center text-sm text-slate-500 leading-relaxed">
                Sheila is the master of the craft. She leads the daily vocational training, teaching technical sewing skills and ensuring that every product made in the workshop meets the highest standard of excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand font-bold uppercase text-xs">Our Foundation</span>
              <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Core Values</h2>
              <div className="space-y-6">
                {[
                  { title: "Honesty", text: "Committing to truthfulness and transparency." },
                  { title: "Integrity", text: "Upholding the highest moral and ethical standards." },
                  { title: "Unity", text: "Fostering collaboration and mutual respect." },
                  { title: "Excellence", text: "Striving for the highest quality in all we do." }
                ].map((val, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand shrink-0">
                      <Star size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{val.title}</h4>
                      <p className="text-sm text-slate-500">{val.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* STATEMENT OF FAITH */}
            <div className="bg-brand-dark text-white p-10 rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                   <BookOpen className="text-brand" /> Statement of Faith
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed mb-4">
                   We believe in the Trinity, the Bible as the authoritative Word of God, and salvation through Christ alone. Our work is an expression of this faith, serving others as we serve the Lord.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMUNITY SERVICE --- */}
      <section className="py-20 px-6 bg-brand-light/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Heart size={14} className="fill-brand text-brand" />
            Serving Our Neighbors
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">Community School Uniforms</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            In addition to our export products, TOT serves the local families of Molo by producing high-quality, affordable school uniforms. 
            While not available for international purchase, this initiative ensures local children attend school with dignity while providing our trainees with essential income.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;