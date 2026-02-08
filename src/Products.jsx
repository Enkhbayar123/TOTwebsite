// src/Products.jsx
import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, Heart, Star, ExternalLink, ClipboardList } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ORDER_FORM_LINK = "https://forms.gle/3HwuBpxXyeqVrFbE9";

  // --- FULL CURRICULUM INVENTORY ---
  const products = [
    // --- BAGS ---
    { 
      id: 2, name: "Shopping Bag", category: "Bags", price: "Ksh 1,500", 
      image: "/images/shopping-bag.jpg", // Name your photo: shopping-bag.jpg
      description: "Durable, reusable bag for your daily needs." 
    },
    { 
      id: 3, name: "Book Bag", category: "Bags", price: "Ksh 1,200", 
      image: "/images/book-bag.jpg", // Name your photo: book-bag.jpg
      description: "Sturdy bag designed to carry books and documents." 
    },
    { 
      id: 4, name: "Boho Bag", category: "Bags", price: "Ksh 1,500", 
      image: "/images/boho-bag.JPG", // Name your photo: boho-bag.jpg
      description: "Relaxed-fit shoulder bag, perfect for casual outings." 
    },
    { 
      id: 5, name: "Tote Bag", category: "Bags", price: "Custom Order", // Was Ksh 0
      image: "/images/tote-bag.jpg", // Name your photo: tote-bag.jpg
      description: "Our signature tote. Contact us for custom designs." 
    },
    { 
      id: 8, name: "Everyday Pouch", category: "Bags", price: "Ksh 1,000", 
      image: "/images/everyday-pouch.jpg", 
      description: "Versatile pouch for organizing essentials." 
    },
    { 
      id: 9, name: "Luxury Pouch", category: "Bags", price: "Ksh 1,300", 
      image: "/images/luxurypouch.JPG", 
      description: "High-quality zippered pouch with pleated detailing." 
    },
    { 
      id: 10, name: "Pleated Pouch", category: "Bags", price: "Ksh 1,000", 
      image: "/images/pleated-pouch.jpg", 
      description: "Elegant storage for toiletries or makeup." 
    },
    { 
      id: 15, name: "Large Bottle Bag", category: "Bags", price: "Ksh 450", 
      image: "/images/bottle-bag.JPG", 
      description: "Stylish carrier for water bottles or wine." 
    },
    { 
      id: 19, name: "Pencil Case", category: "Bags", price: "Ksh 1,100", 
      image: "/images/pencil-case.jpg", 
      description: "Keep your stationery organized in style." 
    },
    { 
      id: 30, name: "Exercise Mat Bag", category: "Bags", price: "Ksh 1,700", 
      image: "/images/mat-bag.jpg", 
      description: "Convenient carry bag for yoga or pilates mats." 
    },
    { 
      id: 31, name: "Crossbody Bag", category: "Bags", price: "Ksh 1,600", 
      image: "/images/crossbody-bag.JPG", 
      description: "Hands-free convenience with African print flair." 
    },
    { 
      id: 32, name: "Lay Flat Makeup Bag", category: "Bags", price: "Ksh 1,600", 
      image: "/images/makeup-bag.JPG", 
      description: "Opens fully flat for easy access to cosmetics." 
    },
    { 
      id: 33, name: "Overnight Bag", category: "Bags", price: "Ksh 3,100", 
      image: "/images/overnight-bag.JPG", 
      description: "Spacious duffel style bag for weekend getaways." 
    },

    // --- HOME & LIVING ---
    { 
      id: 1, name: "Patchwork Aprons", category: "Home & Living", price: "Ksh 1,500", 
      image: "/images/patchwork-apron.jpg", 
      description: "Unique kitchen aprons featuring patchwork designs." 
    },
    { 
      id: 14, name: "Pot Cover (3-set)", category: "Home & Living", price: "Ksh 1,200", 
      image: "/images/pot-cover.jpg", 
      description: "Fabric covers to brighten up indoor plant pots." 
    },
    { 
      id: 16, name: "Bespoke Book Cover (S1)", category: "Home & Living", price: "Ksh 1,200", 
      image: "/images/book-cover.jpg", 
      description: "Size 1 protective sleeve for Bibles or journals." 
    },
    { 
      id: 20, name: "Dinner Napkins (4-set)", category: "Home & Living", price: "Ksh 1,200", 
      image: "/images/napkins.jpg", 
      description: "Matching napkins to elevate your table setting." 
    },
    { 
      id: 21, name: "Round Placemats (4-set)", category: "Home & Living", price: "Ksh 1,300", 
      image: "/images/round-placemats.jpg", 
      description: "Sturdy, double-sided round placemats." 
    },
    { 
      id: 22, name: "Rect. Placemats (4-set)", category: "Home & Living", price: "Ksh 1,300", 
      image: "/images/rect-placemats.jpg", 
      description: "Classic rectangular placemats for dining." 
    },
    { 
      id: 23, name: "Nursing Aprons", category: "Home & Living", price: "Ksh 1,400", 
      image: "/images/nursing-apron.JPG", 
      description: "Privacy covers for nursing mothers." 
    },
    { 
      id: 25, name: "Bunting", category: "Home & Living", price: "Ksh 1,500", 
      image: "/images/bunting.jpg", 
      description: "Festive fabric flags for parties or decoration." 
    },
    { 
      id: 37, name: "Sofa Cushions", category: "Home & Living", price: "Ksh 1,700", 
      image: "/images/sofa-cushion.jpg", 
      description: "Decorative throw pillows to accent your living room." 
    },

    // --- ACCESSORIES ---
    { 
      id: 6, name: "SM Gift Bag", category: "Accessories", price: "Ksh 150", 
      image: "/images/gift-bag.jpg", 
      description: "Small reusable gift bag." 
    },
    { 
      id: 11, name: "Eye Mask", category: "Accessories", price: "Ksh 950", 
      image: "/images/eye-mask.jpg", 
      description: "Soft fabric mask for restful sleep." 
    },
    { 
      id: 13, name: "Headband", category: "Accessories", price: "Ksh 400", 
      image: "/images/headband.jpg", 
      description: "Stylish fabric headbands." 
    },
    { 
      id: 24, name: "Men's Tie", category: "Accessories", price: "Ksh 950", 
      image: "/images/mens-tie.jpg", 
      description: "Vibrant Kitenge ties for formal wear." 
    },
    { 
      id: 34, name: "Cable Holder", category: "Accessories", price: "Custom Order", 
      image: "/images/cable-holder.jpg", 
      description: "Organize your tech cords neatly." 
    },
    { 
      id: 38, name: "Wristband", category: "Accessories", price: "Ksh 150", 
      image: "/images/wristband.jpg", 
      description: "Simple fabric wrist accessory." 
    },

    // --- CLOTHING ---
    { 
      id: 26, name: "Wrap Skirt", category: "Clothing", price: "Ksh 2,000", 
      image: "/images/wrap-skirt.jpg", 
      description: "Adjustable, free-size wrap skirt." 
    },
    { 
      id: 27, name: "Trousers", category: "Clothing", price: "Custom Order", 
      image: "/images/trousers.jpg", 
      description: "Comfortable tailored trousers." 
    },

    // --- SPECIALIZED ---
    { 
      id: 28, name: "Christmas Stocking", category: "Specialized", price: "Ksh 1,300", 
      image: "/images/stocking.jpg", 
      description: "Festive holiday stockings with African prints." 
    },
    { 
      id: 29, name: "Hanging Decoration", category: "Specialized", price: "Ksh 400", 
      image: "/images/decoration.jpg", 
      description: "Seasonal fabric ornaments." 
    },
    { 
      id: 35, name: "Afya Flow Pack", category: "Specialized", price: "Ksh 1,400", 
      image: "/images/afya-flow.jpg", 
      description: "Reusable sanitary pads kit." 
    },
    { 
      id: 36, name: "Pilates Head Cushion", category: "Specialized", price: "Ksh 1,500", 
      image: "/images/head-cushion.jpg", 
      description: "Supportive cushion for exercise." 
    },
    { 
      id: 39, name: "Sanitary Pads", category: "Specialized", price: "Ksh 1,400", 
      image: "/images/sanitary-pads.jpg", 
      description: "Eco-friendly reusable pads." 
    },
  ];

  // Filter Logic
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = ['All', 'Bags', 'Home & Living', 'Accessories', 'Clothing', 'Specialized'];

  return (
    <div className="font-sans text-slate-600 bg-slate-50 min-h-screen animate-fade-in pb-20">
      
      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 px-6 bg-white shadow-sm overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-brand-light"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-brand font-bold uppercase tracking-widest text-xs mb-3 block">Global Shop</span>
          <h1 className="text-5xl font-serif font-bold text-brand-dark mb-6">Handcrafted with Purpose</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            100% of proceeds fund our training program in Molo, Kenya.
          </p>
          
          {/* MAIN ORDER BUTTON */}
          <a 
            href={ORDER_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-brand transition-all hover:-translate-y-1 text-lg"
          >
            <ClipboardList size={22} />
            Place an Order
            <ExternalLink size={16} className="ml-1 opacity-70" />
          </a>
        </div>
      </header>

      {/* --- FILTER BAR --- */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand text-white shadow-glow' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col">
                
                {/* Product Image */}
                <div className="relative h-64 bg-slate-200 rounded-2xl overflow-hidden mb-5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/600x600?text=Photo+Coming+Soon"; 
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Order Tag */}
                  {(product.price === "Custom Order" || product.price === "Ksh 0") && (
                    <div className="absolute top-3 right-3 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Custom
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-2 flex-grow flex flex-col">
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2 leading-tight min-h-[1.5em]">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 min-h-[40px] flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center border-t border-slate-100 pt-4 mt-auto">
                    <span className="text-lg font-serif font-bold text-brand-dark">{product.price}</span>
                    
                    <a 
                      href={ORDER_FORM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Order via Google Form"
                      className="w-10 h-10 rounded-full bg-slate-100 text-brand-dark flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm"
                    >
                      <ShoppingBag size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- COMMUNITY IMPACT (School Uniforms Info) --- */}
      <section className="py-20 px-6 bg-brand-light/30 my-12 mx-4 md:mx-12 rounded-[3rem]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full text-brand-dark font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Heart size={14} className="fill-brand text-brand" />
            Local Community Service
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">School Uniforms Initiative</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            In addition to our global shop, TOT serves the families of Molo by producing high-quality, affordable school uniforms.
          </p>
          <div className="bg-white/50 border border-white p-6 rounded-2xl max-w-2xl mx-auto">
             <p className="text-sm text-slate-500 italic">
               "This initiative ensures local children attend school with dignity while providing our trainees with essential income."
             </p>
          </div>
        </div>
      </section>

      {/* --- SHIPPING INFO --- */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand mx-auto mb-4"><CheckCircle size={24} /></div>
            <h4 className="font-bold text-brand-dark mb-2">Quality Guarantee</h4>
            <p className="text-sm text-slate-500">Every item is inspected by our senior trainers.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand mx-auto mb-4"><Heart size={24} /></div>
            <h4 className="font-bold text-brand-dark mb-2">Ethical Impact</h4>
            <p className="text-sm text-slate-500">Fair wages paid directly to the artisan.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand mx-auto mb-4"><Star size={24} /></div>
            <h4 className="font-bold text-brand-dark mb-2">Custom Orders</h4>
            <p className="text-sm text-slate-500">We can customize fabrics for special events.</p>
          </div>
        </div>
      </section>

      {/* --- FLOATING MOBILE BUTTON --- */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden w-[90%]">
        <a 
          href={ORDER_FORM_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-brand-dark text-white py-4 rounded-full font-bold shadow-2xl flex items-center justify-center gap-2 border border-white/20"
        >
          <ClipboardList size={20} />
          Place Order Now
        </a>
      </div>

    </div>
  );
};

export default Products;