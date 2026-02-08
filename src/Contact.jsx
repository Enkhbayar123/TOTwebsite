// src/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send, CheckCircle, AlertCircle, Heart, Hand, Globe } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // --- PASTE YOUR KEYS HERE ---
    const SERVICE_ID = 'service_44art18';   // e.g., 'service_xyz'
    const TEMPLATE_ID = 'template_sx8x6tj'; // e.g., 'template_abc'
    const PUBLIC_KEY = 'STm20vv3zQjuPYFSW';   // e.g., 'W8xTnF...'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <div className="font-sans text-slate-600 bg-white animate-fade-in">
      {/* HERO */}
      <header className="relative pt-40 pb-20 px-6 bg-[#0c4a6e] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0284c7] rounded-full blur-[150px] opacity-40 translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[#0284c7] font-bold uppercase tracking-widest text-xs mb-4 block bg-white/10 w-fit mx-auto px-4 py-1 rounded-full">Connect With Us</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Let's Create Change <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-cyan-300">Together.</span></h1>
        </div>
      </header>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 px-6 relative top-[-50px] z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-[#0c4a6e] text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
              <div className="relative z-10 space-y-12">
                <div><h3 className="text-2xl font-serif font-bold mb-2">Contact Information</h3><p className="text-slate-400 text-sm">Reach out to our team directly.</p></div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#0284c7] shrink-0"><Mail size={20} /></div><div><p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Email</p><a href="mailto:info@threadsoftumaini.org" className="text-lg font-medium hover:text-[#0284c7] transition-colors">info@threadsoftumaini.org</a></div></div>
                  <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#0284c7] shrink-0"><Phone size={20} /></div><div><p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Phone</p><p className="text-lg font-medium">+254 700 000 000</p></div></div>
                  <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#0284c7] shrink-0"><MapPin size={20} /></div><div><p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Headquarters</p><p className="text-lg font-medium">Molo, Nakuru County<br/>Kenya</p></div></div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3 p-10 md:p-14 bg-white">
              <h3 className="text-2xl font-serif font-bold text-[#0c4a6e] mb-6">Send a Message</h3>
              
              {status === 'success' && <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 flex items-center gap-3 border border-green-200"><CheckCircle size={24} /><div><p className="font-bold">Message Sent!</p><p className="text-sm">We'll get back to you soon.</p></div></div>}
              {status === 'error' && <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 flex items-center gap-3 border border-red-200"><AlertCircle size={24} /><div><p className="font-bold">Error sending.</p><p className="text-sm">Please try again later.</p></div></div>}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label><input name="first_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" /></div>
                  <div><label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label><input name="last_name" required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" /></div>
                </div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label><input name="email" required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]" /></div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Subject</label>
                  <select name="subject" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] text-slate-600">
                    <option>General Inquiry</option>
                    <option>Bulk Order / School Uniforms</option>
                    <option>Volunteering</option>
                    <option>Donation Support</option>
                  </select>
                </div>
                <div><label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label><textarea name="message" required rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"></textarea></div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-[#0284c7] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0c4a6e] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50">{status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-4">Other Ways to Get Involved</h2><div className="w-24 h-1.5 bg-[#0284c7] mx-auto rounded-full"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300"><div className="w-14 h-14 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0284c7] mb-6"><Heart size={28} /></div><h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Partner With Us</h3><p className="text-slate-500 text-sm mb-6">We are looking for retail partners to stock our handmade tote bags and homeware products.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300"><div className="w-14 h-14 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0284c7] mb-6"><Hand size={28} /></div><h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Volunteer</h3><p className="text-slate-500 text-sm mb-6">Are you a designer, business mentor, or photographer? Your skills can help elevate our mission.</p></div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300"><div className="w-14 h-14 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0284c7] mb-6"><Globe size={28} /></div><h3 className="text-xl font-bold text-[#0c4a6e] mb-2">Visit Molo</h3><p className="text-slate-500 text-sm mb-6">Experience the workshop firsthand. We welcome visitors and mission teams by appointment.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;