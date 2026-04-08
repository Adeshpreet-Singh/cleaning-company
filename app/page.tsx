'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const testimonials = [
    { name: "Maria Johnson", role: "Homeowner", text: "ProClean has been cleaning my home for 3 years. Always thorough, on time, and they use eco-friendly products. My house has never looked better!", rating: 5, date: "March 2026" },
    { name: "Robert Chen", role: "Office Manager", text: "We hired ProClean for our 5,000 sq ft office. They clean after hours so there's no disruption. Staff is professional and reliable.", rating: 5, date: "February 2026" },
    { name: "Sarah Williams", role: "Property Manager", text: "Managing 20 rental properties, I need consistent cleaning between tenants. ProClean delivers every single time. Highly recommend!", rating: 5, date: "January 2026" },
    { name: "David Lee", role: "New Homeowner", text: "The post-construction cleanup was incredible. They handled everything - from dust to debris. My new home was move-in ready!", rating: 4, date: "December 2025" }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80', alt: 'Clean sparkling kitchen', caption: 'Kitchen Deep Clean' },
    { src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80', alt: 'Bathroom being cleaned', caption: 'Bathroom Sanitization' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80', alt: 'Vacuuming carpet', caption: 'Carpet Cleaning' },
    { src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80', alt: 'Office space clean', caption: 'Commercial Cleaning' },
    { src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&q=80', alt: 'Spotless windows', caption: 'Window Washing' },
    { src: 'https://images.unsplash.com/photo-1560508180-03f285bc6758?w=600&q=80', alt: 'Organized living room', caption: 'Residential Clean' }
  ];

  const services = [
    { title: 'Residential', desc: 'Homes, apartments, and condos', icon: '\uD83C\uDFE0' },
    { title: 'Commercial', desc: 'Offices, retail, and warehouses', icon: '\uD83D\uDCBC' },
    { title: 'Post-Construction', desc: 'New build and renovation cleanup', icon: '\uD83D\uDD28' },
    { title: 'Specialty', desc: 'Carpet, windows, and deep sanitization', icon: '\u2728' },
  ];

  return (
    <div className="bg-sky-50 text-gray-900 min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-sky-700 text-white px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>
      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center text-white text-xl" aria-hidden="true">\uD83E\uDDF9</div>
              <div><h1 className="text-lg font-bold text-sky-900">ProClean</h1><p className="text-[9px] text-sky-600 tracking-wider">COMMERCIAL & RESIDENTIAL</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','Why Us','Testimonials','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase().replace(' ','-'))} aria-label={`Navigate to ${item} section`} className="text-sm text-gray-600 hover:text-sky-700 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free cleaning quote" className="bg-sky-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-sky-800 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2">Free Quote</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-500 rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
        </nav>
      </header>
      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true"><div className="absolute top-20 right-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"/></div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-700 text-sm font-bold tracking-widest mb-4">TRUSTED SINCE 2008</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-sky-900">Professional<br/><span className="text-sky-600">Cleaning</span></h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">Commercial and residential cleaning with trained crews, eco-friendly products, and a 100% satisfaction guarantee.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <button aria-label="Get your free cleaning quote" className="bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-800 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2">Free Quote</button>
                <button aria-label="View our cleaning services" className="border-2 border-sky-700 text-sky-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-sky-50 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2">Our Services</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'2K+',label:'Clients Served'},{num:'15+',label:'Years Experience'},{num:'4.9',label:'Google Rating'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-sky-700">{s.num}</div><div className="text-sm text-gray-500">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative"><div className="bg-white rounded-3xl p-8 shadow-xl"><img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80" alt="Professional cleaning crew working in modern office space" className="w-full rounded-2xl"/></div></div>
          </div>
        </section>
        <section id="services" aria-labelledby="services-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16"><p className="text-sky-700 text-sm font-bold tracking-widest mb-4">WHAT WE CLEAN</p><h2 id="services-heading" className="text-4xl font-bold text-sky-900 mb-4">Service Types</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s,i) => (<article key={i} className="bg-sky-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-105"><div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div><h3 className="text-xl font-bold text-sky-900 mb-2">{s.title}</h3><p className="text-gray-500 text-sm">{s.desc}</p></article>))}
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 bg-sky-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sky-700 text-sm font-bold tracking-widest mb-4">CLIENT REVIEWS</p>
              <h2 id="testimonials-heading" className="text-4xl font-bold text-sky-900 mb-4">What Clients Say</h2>
            </div>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex mb-3" aria-label={`${t.rating} stars`}>
                    {[...Array(t.rating)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="text-gray-600 mb-3 italic">&quot;{t.text}&quot;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sky-900 font-medium">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role} • {t.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" aria-labelledby="gallery-heading" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sky-700 text-sm font-bold tracking-widest mb-4">OUR WORK</p>
              <h2 id="gallery-heading" className="text-4xl font-bold text-sky-900 mb-4">Before & After</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sky-700 text-sm font-bold tracking-widest mb-4">GET STARTED</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-sky-900 mb-6">Request Your Quote</h2>
              <p className="text-gray-600 mb-8">Tell us about your space and cleaning needs. We'll respond within 2 hours.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-sky-700/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">📍</div>
                  <div><h3 className="font-bold text-sky-900">Visit Us</h3><p className="text-gray-600">456 Clean Street<br/>Service Area, Dallas, TX 75201</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-sky-700/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">📞</div>
                  <div><h3 className="font-bold text-sky-900">Call Us</h3><p className="text-gray-600">(214) 555-CLEAN</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-sky-700/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">🕒</div>
                  <div><h3 className="font-bold text-sky-900">Hours</h3><p className="text-gray-600">Mon-Fri: 8AM-6PM<br/>Sat: 9AM-3PM<br/>Sun: Emergency Only</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form noValidate className="space-y-6">
                <div><label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><input id="contact-name" type="text" aria-required="true" placeholder="Chris Clean" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label><input id="contact-email" type="email" aria-required="true" placeholder="chris@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-colors"/></div>
                <div><label htmlFor="contact-service-type" className="block text-sm font-medium text-gray-700 mb-2">Service Type</label><select id="contact-service-type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-colors"><option value="">Select service</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="post-construction">Post-Construction</option><option value="specialty">Specialty Cleaning</option></select></div>
                <button type="submit" aria-label="Request your free cleaning quote" className="w-full bg-sky-700 text-white py-4 rounded-xl font-bold hover:bg-sky-800 transition-all hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-2">Request Quote</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer role="contentinfo" className="py-12 bg-sky-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-700 rounded-lg flex items-center justify-center text-white" aria-hidden="true">🧹</div>
                <div><h3 className="text-white font-bold">ProClean Company</h3><p className="text-xs text-sky-300">COMMERCIAL & RESIDENTIAL</p></div>
              </div>
              <p className="text-sky-300 text-sm">Licensed & insured cleaning services since 2008.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-sky-300 hover:text-white transition-colors text-sm">Services</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-sky-300 hover:text-white transition-colors text-sm">Reviews</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-sky-300 hover:text-white transition-colors text-sm">Gallery</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-sky-300 hover:text-white transition-colors text-sm">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-sky-300 text-sm">Residential</span></li>
                <li><span className="text-sky-300 text-sm">Commercial</span></li>
                <li><span className="text-sky-300 text-sm">Post-Construction</span></li>
                <li><span className="text-sky-300 text-sm">Specialty</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-sky-700 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-sky-700 rounded-lg flex items-center justify-center text-white hover:bg-sky-600 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-800 pt-8 text-center">
            <p className="text-sky-300 text-sm">&copy; 2026 ProClean Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}