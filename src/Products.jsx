// src/Products.jsx
import React, { useEffect } from 'react';
import { ExternalLink, ShoppingBag, Heart } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CATALOGUE_LINK = "https://canva.link/epsgp9o40944lfr";

  return (
    <div className="font-sans text-slate-600 bg-slate-50 min-h-screen animate-fade-in flex flex-col items-center justify-center py-32 px-6">
      <div className="max-w-3xl w-full bg-white rounded-[3rem] shadow-xl p-10 md:p-16 text-center border border-slate-100">
        
        <div className="w-24 h-24 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0284c7] mx-auto mb-8">
          <ShoppingBag size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0c4a6e] mb-6">Our Catalogue</h1>
        
        <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
          We have recently added exciting new items to our collection! View our live, continually updated catalogue to see our beautiful, handcrafted bags, homeware, and accessories.
        </p>

        <a 
          href={CATALOGUE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#0c4a6e] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:bg-[#0284c7] transition-all hover:-translate-y-1 text-lg mb-12"
        >
          View Live Catalogue
          <ExternalLink size={20} />
        </a>

        <div className="pt-10 border-t border-slate-100">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-slate-600 text-sm font-bold uppercase tracking-widest">
            <Heart size={16} className="text-[#0284c7]" /> Impact Driven
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-md mx-auto">
            100% of proceeds fund our training program in Molo, providing sustainable income and dignity to marginalized women.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Products;