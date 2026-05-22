// src/About.jsx
import React, { useEffect } from 'react';
import { Users, Heart, Star, Shield, Quote, BookOpen } from 'lucide-react';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in">
      {/* HERO */}
      <header className="relative pt-40 pb-20 px-6 bg-[#0c4a6e] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">About Threads of Tumaini</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Threads of Tumaini (TOT) is a Public Benefits Organization working to empower women in rural communities across Kenya, starting in Kiambogo and Tumaini.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
            We focus on practical, sustainable solutions that help women build skills, earn income, and improve their quality of life.
          </p>
        </div>
      </header>

      {/* VISION & MISSION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border-t-4 border-[#0284c7]">
            <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              A transformed community where women are equipped with skills, have access to economic opportunities, and live with dignity and confidence.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border-t-4 border-[#0284c7]">
            <h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To support marginalized women through vocational training, education, and community-based initiatives that enable them to become independent and self-sustaining.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0c4a6e] mb-4">What We Do</h2>
            <div className="w-16 h-1 bg-[#0284c7] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Vocational Training</h3>
              <p className="text-slate-600">We train women in sewing and textile production, including school uniforms and homeware, using a range of machines and techniques.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Income Opportunities</h3>
              <p className="text-slate-600">We run community-based production initiatives that create jobs and make essential items like school uniforms more accessible.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Education & Skills Development</h3>
              <p className="text-slate-600">We provide practical knowledge and life skills that support informed decision-making and long-term stability.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Mentorship</h3>
              <p className="text-slate-600">We connect women across generations to share skills, experience, and guidance.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 md:col-span-2">
              <h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Community Support</h3>
              <p className="text-slate-600">We design programs that reduce barriers and strengthen families and communities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* (Keep the remaining section for Values and Location/Why it matters as previously structured) */}
    </div>
  );
};

export default About;