"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A2E2E] font-poppins">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E0F2F1]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#009688] rounded-xl flex items-center justify-center">
              <span className="text-white text-lg">&#10052;</span>
            </div>
            <span className="text-xl font-bold text-[#1A2E2E]">Sparkle<span className="text-[#009688]">Clean</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-[#009688] transition-colors">Services</a>
            <a href="#how" className="hover:text-[#009688] transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-[#009688] transition-colors">Pricing</a>
            <a href="#gallery" className="hover:text-[#009688] transition-colors">Gallery</a>
            <a href="#booking" className="bg-[#009688] text-white px-5 py-2.5 rounded-full hover:bg-[#00796B] transition-all hover:shadow-lg">Book Now</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F7FA] via-white to-[#E0F2F1]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#009688]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#26C6DA]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-[#009688]/10 text-[#009688] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#009688] rounded-full animate-pulse"></span>
              #1 Rated Cleaning Service
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              A Cleaner Space,<br />
              A <span className="text-[#009688]">Happier</span> Life
            </h1>
            <p className="text-lg text-[#5A7C7C] mb-8 max-w-lg leading-relaxed">
              Professional cleaning services for homes and offices. Our vetted, insured team uses eco-friendly products to deliver a spotless result every time. Satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-[#009688] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00796B] transition-all hover:shadow-xl hover:shadow-[#009688]/20">
                Get Free Estimate &rarr;
              </a>
              <a href="#services" className="border-2 border-[#B2DFDB] text-[#1A2E2E] px-8 py-4 rounded-full font-semibold hover:border-[#009688] hover:text-[#009688] transition-all">
                Our Services
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {["AB", "CD", "EF", "GH"].map((init, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#009688] to-[#26C6DA] border-2 border-white flex items-center justify-center text-white text-xs font-bold">{init}</div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array(5).fill(0).map((_, i) => <span key={i} className="text-[#FFB300]">&#9733;</span>)}
                </div>
                <p className="text-xs text-[#5A7C7C]">2,500+ happy customers</p>
              </div>
            </div>
          </div>
          <div className="reveal-scale relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#009688] to-[#00796B] p-1">
              <div className="w-full h-full rounded-3xl bg-[#F5FFFE] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">&#128703;</div>
                  <div className="flex gap-3 justify-center text-4xl">
                    <span>&#127838;</span>
                    <span>&#128701;</span>
                    <span>&#10052;</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E0F2F1]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#009688]/10 rounded-full flex items-center justify-center text-2xl">&#9851;</div>
                <div>
                  <p className="font-bold text-sm">Eco-Friendly</p>
                  <p className="text-xs text-[#5A7C7C]">100% green products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#F8FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#009688] font-semibold text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">Our <span className="text-[#009688]">Services</span></h2>
            <p className="text-[#5A7C7C] max-w-2xl mx-auto">From routine home cleaning to deep commercial sanitization, we have a solution for every space.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "&#127968;", title: "Home Cleaning", desc: "Regular, deep, and move-in/out cleaning for apartments, houses, and condos.", price: "From $89" },
              { icon: "&#127970;", title: "Office Cleaning", desc: "Daily, weekly, or monthly cleaning for offices, coworking spaces, and retail.", price: "From $149" },
              { icon: "&#128703;", title: "Deep Cleaning", desc: "Intensive top-to-bottom cleaning including behind appliances, vents, and baseboards.", price: "From $199" },
              { icon: "&#127838;", title: "Kitchen Deep Clean", desc: "Oven degreasing, fridge sanitizing, cabinet wipe-down, and countertop polishing.", price: "From $129" },
              { icon: "&#128701;", title: "Carpet & Upholstery", desc: "Hot water extraction cleaning for carpets, rugs, sofas, and upholstered chairs.", price: "From $99" },
              { icon: "&#10052;", title: "Window Cleaning", desc: "Interior and exterior window washing, frame cleaning, and screen washing.", price: "From $79" },
            ].map((service, i) => (
              <div key={i} className="reveal group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E0F2F1] hover:border-[#009688]/30 cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-[#5A7C7C] mb-4 leading-relaxed">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#009688] font-bold">{service.price}</span>
                  <span className="text-[#009688] text-sm font-semibold group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#009688] font-semibold text-sm tracking-widest uppercase">Simple Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">How It <span className="text-[#009688]">Works</span></h2>
            <p className="text-[#5A7C7C] max-w-2xl mx-auto">Getting your space professionally cleaned is as easy as 1-2-3.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Book Online", desc: "Choose your service, pick a date and time that works for you, and book in under 60 seconds.", icon: "&#128197;" },
              { num: "2", title: "We Clean", desc: "Our vetted, insured professionals arrive on time with all supplies. Just sit back and relax.", icon: "&#128703;" },
              { num: "3", title: "You Relax", desc: "Come home to a sparkling clean space. Not happy? We'll re-clean for free within 24 hours.", icon: "&#128522;" },
            ].map((step, i) => (
              <div key={i} className="reveal relative text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#009688]/10 rounded-2xl flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-1/3 w-8 h-8 bg-[#009688] rounded-full flex items-center justify-center text-white text-sm font-bold">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-[#5A7C7C] leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#F8FFFE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#009688] font-semibold text-sm tracking-widest uppercase">Affordable Plans</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">Transparent <span className="text-[#009688]">Pricing</span></h2>
            <p className="text-[#5A7C7C] max-w-2xl mx-auto">No hidden fees, no surprises. Choose the plan that fits your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Essential", price: "$89", freq: "per visit", desc: "Standard cleaning for small spaces", features: ["Up to 1,000 sq ft", "Kitchen & bathroom", "Vacuuming & mopping", "Dusting all surfaces", "Trash removal"], highlight: false },
              { name: "Premium", price: "$149", freq: "per visit", desc: "Deep cleaning for medium homes", features: ["Up to 2,000 sq ft", "Everything in Essential", "Inside appliance cleaning", "Baseboard detailing", "Window sills & tracks", "Eco-friendly products"], highlight: true },
              { name: "Ultimate", price: "$249", freq: "per visit", desc: "Complete cleaning for large homes", features: ["Up to 4,000 sq ft", "Everything in Premium", "Inside cabinets & drawers", "Light fixture cleaning", "Garage & laundry room", "Priority scheduling"], highlight: false },
            ].map((plan, i) => (
              <div key={i} className={`reveal rounded-2xl p-8 border transition-all ${plan.highlight ? 'bg-white border-[#009688] shadow-xl shadow-[#009688]/10 scale-[1.02]' : 'bg-white border-[#E0F2F1] hover:shadow-lg'}`}>
                {plan.highlight && <span className="text-xs font-semibold text-white bg-[#009688] px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-[#009688]">{plan.price}</span>
                  <span className="text-[#5A7C7C] text-sm ml-2">{plan.freq}</span>
                </div>
                <p className="text-sm text-[#5A7C7C] mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#1A2E2E]">
                      <span className="text-[#009688]">&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`block text-center py-3 rounded-full font-semibold transition-all ${plan.highlight ? 'bg-[#009688] text-white hover:bg-[#00796B] hover:shadow-lg' : 'border-2 border-[#B2DFDB] text-[#009688] hover:bg-[#009688] hover:text-white'}`}>
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="text-[#009688] font-semibold text-sm tracking-widest uppercase">Our Results</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">Before & <span className="text-[#009688]">After</span></h2>
            <p className="text-[#5A7C7C] max-w-2xl mx-auto">See the transformations our team delivers every day.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { room: "Kitchen Deep Clean", before: "Greasy oven, stained counters", after: "Pristine, sanitized surfaces", emoji: "&#127858;" },
              { room: "Living Room", before: "Dusty, cluttered, stained carpet", after: "Fresh, spotless, organized", emoji: "&#127968;" },
              { room: "Bathroom Sanitization", before: "Mildew, soap scum buildup", after: "Sparkling tile, streak-free mirrors", emoji: "&#128701;" },
              { room: "Office Space", before: "Dusty desks, stained floors", after: "Professional, clean workspace", emoji: "&#127970;" },
              { room: "Move-Out Clean", before: "Years of accumulated grime", after: "Deposit-ready condition", emoji: "&#128230;" },
              { room: "Window Washing", before: "Smeared, streaky, dusty glass", after: "Crystal clear, invisible glass", emoji: "&#9728;" },
            ].map((item, i) => (
              <div key={i} className="reveal group relative rounded-2xl overflow-hidden bg-[#F8FFFE] border border-[#E0F2F1] hover:shadow-lg transition-all">
                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold mb-3">{item.room}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-red-400 mb-1">Before</p>
                      <p className="text-xs text-[#5A7C7C]">{item.before}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-[#009688] mb-1">After</p>
                      <p className="text-xs text-[#5A7C7C]">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 bg-gradient-to-br from-[#009688] to-[#00796B] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="reveal bg-white/10 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-white/20">
            <div className="text-center mb-10">
              <span className="text-[#B2DFDB] font-semibold text-sm tracking-widest uppercase">Book Your Clean</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-3 mb-4">Schedule <span className="text-white">Now</span></h2>
              <p className="text-white/70 max-w-xl mx-auto">Fill in your details and we will confirm your booking within 1 hour. Free cancellation up to 24 hours before.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all" placeholder="Sarah Johnson" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all" placeholder="(555) 234-5678" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all" placeholder="sarah@email.com" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all">
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In/Out Cleaning</option>
                    <option>Carpet & Upholstery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Address</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all" placeholder="123 Main St, Apt 4B, City" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Special Instructions</label>
                <textarea className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all resize-none" rows={3} placeholder="Pets, access codes, focus areas..."></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-[#009688] py-4 rounded-xl font-semibold text-lg hover:bg-[#E0F7FA] transition-all hover:shadow-xl">
                Book My Cleaning &rarr;
              </button>
              <p className="text-center text-sm text-white/60">Free estimates &bull; Insured &amp; bonded &bull; Satisfaction guaranteed</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2E2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#009688] rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">&#10052;</span>
                </div>
                <span className="text-xl font-bold">Sparkle<span className="text-[#26C6DA]">Clean</span></span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">Professional cleaning services for homes and offices. Eco-friendly, reliable, and affordable.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#26C6DA]">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Home Cleaning</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Office Cleaning</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Deep Cleaning</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Carpet Cleaning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#26C6DA]">Service Areas</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>Manhattan & Brooklyn</li>
                <li>Queens & Bronx</li>
                <li>Westchester County</li>
                <li>Northern New Jersey</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#26C6DA]">Contact</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>(555) 876-5432</li>
                <li>book@sparkleclean.com</li>
                <li>Mon-Sat: 7am - 8pm</li>
                <li>Sun: 9am - 5pm</li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#009688] transition-colors text-sm">f</a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#009688] transition-colors text-sm">ig</a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#009688] transition-colors text-sm">tw</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">&copy; 2025 SparkleClean. All rights reserved.</p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
