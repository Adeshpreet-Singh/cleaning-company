'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 {{ACCENTBG}} text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* CENTERED HERO */}
      <section className="pt-24 text-center">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-sm text-emerald-600 tracking-widest uppercase mb-4">SparkleClean</h1>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 whitespace-pre-line uppercase">Come home
to clean.</h2>
          <p className="text-xl text-gray-500 mb-10">Professional cleaning with eco-friendly products and satisfaction guaranteed.</p>
          <button onClick={() => scrollTo('pricing')} className="bg-emerald-600 text-white px-10 py-4 text-lg rounded-full font-bold">Get Free Quote</button>
        </div>
      </section>
      {/* PRICING TABLES - The main feature */}
      <section id="pricing" className="py-24 bg-gray-50" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16"><h2 id="pricing-heading" className="text-4xl font-bold">Choose Your Plan</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Standard Clean</h3>
              <p className="text-sm text-gray-500 mb-6">Dusting, vacuuming, mopping.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-xl font-bold mb-2">Deep Clean</h3>
              <p className="text-sm text-gray-500 mb-6">Baseboards, appliances, fixtures.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">Move In/Out</h3>
              <p className="text-sm text-gray-500 mb-6">Move-in ready condition.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Office Cleaning</h3>
              <p className="text-sm text-gray-500 mb-6">Daily/weekly commercial.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-2">Post-Construction</h3>
              <p className="text-sm text-gray-500 mb-6">Dust and debris removal.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-2">Green Clean</h3>
              <p className="text-sm text-gray-500 mb-6">100% eco-friendly products.</p>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES LIST */}
      <section className="py-24" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="features-heading" className="text-4xl font-bold mb-6">Why choose us?</h2>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-600/20 flex items-center justify-center text-2xl font-bold text-emerald-600">JA</div>
              <h3 className="font-bold">Jessica Adams</h3><p className="text-sm text-emerald-600">Ops Director</p><p className="text-sm text-gray-500 mt-1">ISSA certified</p></div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-600/20 flex items-center justify-center text-2xl font-bold text-emerald-600">CM</div>
              <h3 className="font-bold">Carlos Mendez</h3><p className="text-sm text-emerald-600">Team Lead</p><p className="text-sm text-gray-500 mt-1">8yr exp</p></div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-600/20 flex items-center justify-center text-2xl font-bold text-emerald-600">AF</div>
              <h3 className="font-bold">Amanda Foster</h3><p className="text-sm text-emerald-600">Quality Mgr</p><p className="text-sm text-gray-500 mt-1">100% audit</p></div>
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-600/20 flex items-center justify-center text-2xl font-bold text-emerald-600">DN</div>
              <h3 className="font-bold">David Nguyen</h3><p className="text-sm text-emerald-600">Green Lead</p><p className="text-sm text-gray-500 mt-1">Eco-certified</p></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-600">10K+</div><div className="text-sm text-gray-500 mt-1">Homes cleaned</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-600">100%</div><div className="text-sm text-gray-500 mt-1">Satisfaction</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-600">Insured</div><div className="text-sm text-gray-500 mt-1">& bonded</div></div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-24 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-bold">Questions?</h2></div>
          <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Need to be home?<span className="ml-4 text-gray-500 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">No, we're insured and bonded.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Products?<span className="ml-4 text-gray-500 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Eco-friendly, safe for kids/pets.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Cancellation?<span className="ml-4 text-gray-500 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">Free 24hr before, $25 same-day.</p></details></div>
        </div>
      </section>
      {/* CTA BANNER */}
      <section className="py-16 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <button onClick={() => scrollTo('contact')} className="bg-white text-black px-8 py-4 rounded-full font-bold">Get Free Quote</button>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="py-24" aria-labelledby="contact-heading">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 id="contact-heading" className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4 text-gray-500 mb-8">                  <div><div className="font-bold">Phone</div><a href="tel:(555) 123-4567" className="text-emerald-600">(555) 123-4567</a></div>
                  <div><div className="font-bold">Address</div><p>Serving Denver, CO Metro</p></div>
                  <div><div className="font-bold">Hours</div><p>Mon–Sat 7 AM – 7 PM</p></div></div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" />
            <input type="email" placeholder="Email" className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent" />
            <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold">Get Free Quote</button>
          </form>
        </div>
      </section>
      <footer className="py-8 text-center text-sm text-gray-500">&copy; 2026 SparkleClean</footer>
    </div>
  );
}
