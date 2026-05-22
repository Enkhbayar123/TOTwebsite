// src/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Heart, Users, BookOpen, Sun, MapPin, Mail, ArrowRight, Star, Quote, Check, X } from 'lucide-react';

const Home = () => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [activeStory, setActiveStory] = useState(null); // Tracks the currently open story modal

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
    const SERVICE_ID = 'service_44art18';   
    const TEMPLATE_ID = 'template_sx8x6tj'; 
    const PUBLIC_KEY = 'STm20vv3zQjuPYFSW';   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  // --- IMPACT STORIES DATA ---
  const impactStories = [
    {
      id: 1,
      name: "Jane's Story",
      quote: "TOT gave me my life back.",
      fullStory: "Before joining Threads of Tumaini, Jane struggled to provide for her family. Through the vocational training program, she not only learned advanced sewing techniques but also discovered a supportive community. Today, Jane is a lead artisan, earning a sustainable income and paying for her children's education.",
      image: "https://placehold.co/600x600?text=Jane's+Story" // Update with real image paths later
    },
    {
      id: 2,
      name: "Mary's Journey",
      quote: "I found hope in every stitch.",
      fullStory: "Mary joined our program during a particularly difficult season of her life. The daily devotionals and skill-building sessions provided her with a renewed sense of purpose. She now specializes in crafting our signature tote bags and mentors new trainees.",
      image: "https://placehold.co/600x600?text=Mary's+Story"
    },
    {
      id: 3,
      name: "Faith's Transformation",
      quote: "I am now independent and strong.",
      fullStory: "With the financial literacy and tailoring skills acquired at TOT, Faith was able to start her own small business in her community alongside her work with us. She is a testament to the empowerment that comes from dignified labor and holistic support.",
      image: "https://placehold.co/600x600?text=Faith's+Story"
    }
  ];

  return (
    <div className="animate-fade-in relative">
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

      {/* MISSION STATEMENT */}
      <section className="py-16 px-6 bg-[#0c4a6e] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed italic">
            "Our mission is to empower oppressed and marginalised women through sustainable employment, education, and holistic support enabling them to rebuild their lives with dignity, agency, independence, and hope."
          </h2>
        </div>
      </section>

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

      {/* IMPACT STORIES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#0c4a6e] mb-4">Stories of Transformation</h2>
            <div className="w-24 h-1.5 bg-[#0284c7] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story) => (
              <div key={story.id} className="cursor-pointer group" onClick={() => setActiveStory(story)}>
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">"{story.quote}"</h3>
                  </div>
                </div>
                <p className="text-[#0284c7] font-bold text-center group-hover:text-[#0c4a6e] transition-colors">Read {story.name} &rarr;</p>
              </div>
            ))}
          </div>
        </div>

        {/* STORY MODAL OVERLAY */}
        {activeStory && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" 
            onClick={() => setActiveStory(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full p-8 relative overflow-hidden shadow-2xl" 
              onClick={e => e.stopPropagation()} // Prevents clicks inside the modal from closing it
            >
              <button 
                onClick={() => setActiveStory(null)} 
                className="absolute top-4 right-4 text-slate-400 hover:text-[#0c4a6e] transition-colors bg-slate-100 p-2 rounded-full"
              >
                 <X size={20} />
              </button>
              <img src={activeStory.image} alt={activeStory.name} className="w-full h-64 object-cover rounded-2xl mb-6" />
              <h3 className="text-3xl font-serif font-bold text-[#0c4a6e] mb-2">{activeStory.name}</h3>
              <p className="text-[#0284c7] font-bold text-sm uppercase tracking-widest mb-6">"{activeStory.quote}"</p>
              <p className="text-slate-600 leading-relaxed">{activeStory.fullStory}</p>
            </div>
          </div>
        )}
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-16 bg-white overflow-hidden border-t border-slate-100">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Our Current Partners</h2>
        </div>
        <div className="relative w-full flex overflow-hidden">
          {/* Two identical sets of logos, both animating at the same time to create a perfect seamless loop */}
          <div className="flex animate-scroll whitespace-nowrap gap-16 pr-16 items-center shrink-0 hover:cursor-pointer">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                <img src="/partner1.jpg" alt="Partner 1" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner2.PNG" alt="Partner 2" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner3.PNG" alt="Partner 3" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner4.PNG" alt="Partner 4" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner5.jpg" alt="Partner 5" className="h-16 w-auto object-contain shrink-0" />
              </React.Fragment>
            ))}
          </div>
          <div className="flex animate-scroll whitespace-nowrap gap-16 pr-16 items-center shrink-0 hover:cursor-pointer" aria-hidden="true">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                <img src="/partner1.jpg" alt="Partner 1" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner2.PNG" alt="Partner 2" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner3.PNG" alt="Partner 3" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner4.PNG" alt="Partner 4" className="h-16 w-auto object-contain shrink-0" />
                <img src="/partner5.jpg" alt="Partner 5" className="h-16 w-auto object-contain shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION WITH FUNCTIONAL FORM */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
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