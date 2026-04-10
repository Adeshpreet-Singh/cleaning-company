'use client';
import { useState, useEffect } from 'react';

const SERVICES = [
  { name: 'Standard Clean', price: 'From $120', desc: 'Dusting, vacuuming, mopping, bathroom and kitchen cleaning. Perfect for regular maintenance.', icon: '🏠' },
  { name: 'Deep Clean', price: 'From $220', desc: 'Everything in Standard plus baseboards, inside appliances, light fixtures, and window sills.', icon: '🧹' },
  { name: 'Move In/Out', price: 'From $280', desc: 'Complete top-to-bottom cleaning to get your deposit back or prepare for new tenants.', icon: '📦' },
  { name: 'Office Cleaning', price: 'Custom quote', desc: 'Daily, weekly, or monthly commercial cleaning for offices, retail, and medical facilities.', icon: '🏢' },
  { name: 'Post-Construction', price: 'From $350', desc: 'Construction dust, debris, paint spots, and sticker removal. Make it move-in ready.', icon: '🏗️' },
  { name: 'Green Clean', price: 'From $140', desc: '100% eco-friendly, non-toxic products. Safe for kids, pets, and the planet.', icon: '🌿' },
];

export default function Home() {
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-green-950">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>

      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-[#f0fdf4]/95 backdrop-blur-md border-b border-green-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-green-800">Sparkle<span className="text-green-600">Clean</span></h1><p className="text-[10px] tracking-[0.2em] text-green-600 uppercase">Professional Cleaning — Denver</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-green-700 hover:text-green-500 transition-colors">Services</button>
            <button onClick={() => scrollTo('pricing')} className="text-sm text-green-700 hover:text-green-500 transition-colors">Pricing</button>
            <button onClick={() => scrollTo('contact')} className="bg-green-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-green-700 transition-colors">Get Quote</button>
          </div>
        </div>
      </nav>

      <main id="main" role="main">
        <section className="pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-600 text-sm tracking-[0.3em] uppercase mb-4">Satisfaction Guaranteed — Est. 2014</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">Come home<br />to clean.</h2>
              <p className="text-xl text-green-700 max-w-md mb-8">Professional residential and commercial cleaning with eco-friendly products. 100% satisfaction guaranteed or we re-clean for free.</p>
              <div className="flex gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-green-600 text-white px-8 py-4 text-lg rounded-full hover:bg-green-700 transition-colors">Get Free Quote</button>
                <button onClick={() => scrollTo('services')} className="border-2 border-green-300 text-green-700 px-8 py-4 text-lg rounded-full hover:bg-green-50 transition-colors">Our Services</button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '✓', text: '10,000+ homes cleaned' },
                { icon: '✓', text: '100% satisfaction guarantee' },
                { icon: '✓', text: 'Insured & bonded' },
                { icon: '✓', text: 'Eco-friendly products available' },
                { icon: '✓', text: 'Same-day service available' },
              ].map((item, i) => (
                <div key={i} className="trust-badge">
                  <span className="text-green-600 font-bold">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="reveal py-24 bg-white" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-bold">Services & Pricing</h2><p className="text-green-600 mt-3">Transparent pricing. No hidden fees.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <div key={i} className="clean-card p-8">
                  <div className="text-4xl mb-4" aria-hidden="true">{svc.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{svc.name}</h3>
                  <div className="text-green-600 font-bold text-lg mb-3">{svc.price}</div>
                  <p className="text-green-700 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal py-24" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-4xl font-bold mb-6">Why SparkleClean?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Trained & Vetted', desc: 'Every cleaner passes background checks and completes our 40-hour training program.' },
                  { title: 'Same Team Every Time', desc: 'We send the same cleaners to your home. They learn your preferences and priorities.' },
                  { title: 'Eco-Friendly Options', desc: 'Green cleaning products available at no extra cost. Safe for kids, pets, and allergies.' },
                  { title: 'Satisfaction Guarantee', desc: 'Not happy? We\'ll come back and re-clean the areas you\'re not satisfied with — for free.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                    <div><div className="font-bold">{item.title}</div><div className="text-green-700 text-sm">{item.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80" alt="Cleaning professional" className="rounded-xl w-full" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="pricing" className="reveal py-24 bg-white" aria-labelledby="pricing-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="pricing-heading" className="text-4xl font-bold">Recurring Plans</h2><p className="text-green-600 mt-3">Save more with regular service.</p></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Weekly', price: '$99/visit', save: 'Save 17%', desc: 'Best for busy households' },
                { name: 'Bi-Weekly', price: '$109/visit', save: 'Save 9%', desc: 'Most popular choice' },
                { name: 'Monthly', price: '$115/visit', save: 'Save 4%', desc: 'Maintenance cleaning' },
              ].map((plan, i) => (
                <div key={i} className={`clean-card p-8 text-center ${i === 1 ? 'border-green-500 border-2' : ''}`}>
                  {i === 1 && <div className="text-green-600 text-xs font-bold uppercase tracking-wider mb-2">Most Popular</div>}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-1">{plan.price}</div>
                  <div className="text-green-500 text-sm font-medium mb-3">{plan.save}</div>
                  <p className="text-green-700 text-sm mb-6">{plan.desc}</p>
                  <button onClick={() => scrollTo('contact')} className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-medium">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal py-24" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="contact-heading" className="text-4xl font-bold">Get a Free Quote</h2><p className="text-green-600 mt-3">We respond within 1 hour during business hours.</p></div>
            <form className="clean-card p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }} aria-label="Quote form">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label htmlFor="name" className="block text-sm font-medium mb-2">Name</label><input id="name" type="text" placeholder="Your name" required className="w-full border border-green-200 rounded-xl px-4 py-3 bg-green-50/50 placeholder:text-green-400 focus:border-green-500 focus:outline-none" /></div>
                <div><label htmlFor="email" className="block text-sm font-medium mb-2">Email</label><input id="email" type="email" placeholder="you@email.com" required className="w-full border border-green-200 rounded-xl px-4 py-3 bg-green-50/50 placeholder:text-green-400 focus:border-green-500 focus:outline-none" /></div>
              </div>
              <div><label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label><input id="phone" type="tel" placeholder="(555) 000-0000" className="w-full border border-green-200 rounded-xl px-4 py-3 bg-green-50/50 placeholder:text-green-400 focus:border-green-500 focus:outline-none" /></div>
              <div><label htmlFor="service" className="block text-sm font-medium mb-2">Service</label>
                <select id="service" className="w-full border border-green-200 rounded-xl px-4 py-3 bg-green-50/50 focus:border-green-500 focus:outline-none">
                  {SERVICES.map((s, i) => <option key={i}>{s.name} — {s.price}</option>)}
                </select>
              </div>
              <div><label htmlFor="details" className="block text-sm font-medium mb-2">Home Details</label><textarea id="details" rows={3} placeholder="Bedrooms, bathrooms, pets, special requests..." className="w-full border border-green-200 rounded-xl px-4 py-3 bg-green-50/50 placeholder:text-green-400 focus:border-green-500 focus:outline-none resize-none" /></div>
              <button type="submit" disabled={submitted} className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors disabled:opacity-60">
                {submitted ? '✓ Quote Requested! We\'ll call you shortly' : 'Get Free Quote'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-green-900 text-green-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">© {new Date().getFullYear()} SparkleClean. Denver, CO. Insured & Bonded.</div>
      </footer>
    </div>
  );
}
