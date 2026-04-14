'use client';

import { useState, useEffect } from 'react';

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------

const SERVICES = [
  {
    name: 'Regular Clean',
    price: 'From $120',
    icon: '🏠',
    desc: 'Consistent, scheduled cleaning that keeps your home fresh week after week. We dust, vacuum, mop, sanitise kitchens and bathrooms, wipe surfaces, take out trash, and tidy every room.',
    includes: ['Dusting all surfaces', 'Vacuuming carpets & rugs', 'Mopping hard floors', 'Kitchen counters & sink', 'Bathroom sanitisation', 'Trash removal'],
  },
  {
    name: 'Deep Clean',
    price: 'From $220',
    icon: '🧹',
    desc: 'A thorough top-to-bottom scrub that reaches every forgotten corner. Includes everything in Regular plus baseboards, inside appliances, ceiling fans, light fixtures, window sills, and behind furniture.',
    includes: ['Everything in Regular', 'Baseboards & crown moulding', 'Inside oven & refrigerator', 'Ceiling fans & light fixtures', 'Window sills & tracks', 'Behind & under furniture'],
  },
  {
    name: 'Move-In / Move-Out',
    price: 'From $280',
    icon: '📦',
    desc: 'Designed to help you secure your full deposit or welcome new tenants into a spotless home. We clean every inch — inside cabinets, closets, drawers, and all appliances.',
    includes: ['Full deep clean', 'Inside all cabinets & closets', 'Inside all drawers', 'All appliances inside & out', 'Garage sweep', 'Patio / balcony clean'],
  },
  {
    name: 'Post-Construction',
    price: 'From $350',
    icon: '🏗️',
    desc: 'Construction leaves behind dust, debris, paint spots, adhesive residue, and sticker marks. We make your newly built or renovated space move-in ready with meticulous detail work.',
    includes: ['Construction dust removal', 'Paint spot & sticker removal', 'Window cleaning (interior)', 'Floor scrubbing & polishing', 'Fixture & outlet cleaning', 'Final walkthrough inspection'],
  },
  {
    name: 'Office Cleaning',
    price: 'Custom Quote',
    icon: '🏢',
    desc: 'Daily, weekly, or monthly commercial cleaning for offices, retail shops, medical clinics, and co-working spaces. A clean workspace boosts productivity and leaves a great impression on clients.',
    includes: ['Desk & workstation wipe-down', 'Common area sanitisation', 'Restroom deep clean', 'Kitchen / break room', 'Trash & recycling', 'Floor care (carpet & hard)'],
  },
  {
    name: 'Airbnb / Short-Term Rental',
    price: 'From $150',
    icon: '🔑',
    desc: 'Fast, reliable turnovers between guests so your listing earns 5-star cleanliness ratings every time. We restock essentials, change linens, and ensure photo-ready presentation.',
    includes: ['Full turnover clean', 'Linen change & bed-making', 'Restock toiletries & supplies', 'Kitchen reset & dishes', 'Laundry (towels & sheets)', 'Photo-ready staging'],
  },
];

const PRICING_TIERS = [
  {
    name: 'Essential',
    tagline: 'Great for small spaces',
    price: '$120',
    frequency: 'per visit',
    highlight: false,
    features: [
      { label: 'Up to 1,200 sq ft', included: true },
      { label: '1 bedroom / 1 bathroom', included: true },
      { label: 'Kitchen & living areas', included: true },
      { label: 'Dusting & vacuuming', included: true },
      { label: 'Bathroom sanitisation', included: true },
      { label: 'Inside appliances', included: false },
      { label: 'Interior windows', included: false },
      { label: 'Laundry service', included: false },
    ],
  },
  {
    name: 'Professional',
    tagline: 'Most popular choice',
    price: '$195',
    frequency: 'per visit',
    highlight: true,
    features: [
      { label: 'Up to 2,500 sq ft', included: true },
      { label: 'Up to 3 bed / 2 bath', included: true },
      { label: 'Kitchen & living areas', included: true },
      { label: 'Dusting & vacuuming', included: true },
      { label: 'Bathroom sanitisation', included: true },
      { label: 'Inside appliances', included: true },
      { label: 'Interior windows', included: true },
      { label: 'Laundry service', included: false },
    ],
  },
  {
    name: 'Premium',
    tagline: 'Full-service luxury',
    price: '$295',
    frequency: 'per visit',
    highlight: false,
    features: [
      { label: 'Up to 4,000+ sq ft', included: true },
      { label: 'Unlimited rooms', included: true },
      { label: 'Kitchen & living areas', included: true },
      { label: 'Dusting & vacuuming', included: true },
      { label: 'Bathroom sanitisation', included: true },
      { label: 'Inside appliances', included: true },
      { label: 'Interior windows', included: true },
      { label: 'Laundry service', included: true },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'Cherry Creek, Denver',
    stars: 5,
    text: 'We switched to SparkleClean after our old service became unreliable. The difference is night and day. They send the same two cleaners every time, and they already know our preferences. Our kitchen has never looked this good. Worth every penny.',
  },
  {
    name: 'James & Priya K.',
    location: 'Highlands, Denver',
    stars: 5,
    text: "We used the Move-In package when we bought our new house. They cleaned things I didn't even think about — inside the medicine cabinet, the tops of door frames, the tracks on every window. It felt like moving into a brand-new home. Highly recommend.",
  },
  {
    name: 'Dr. Angela Torres',
    location: 'Baker, Denver',
    stars: 5,
    text: "As a veterinarian, I needed a cleaning service that could handle pet hair and odours without harsh chemicals. SparkleClean's green cleaning option is perfect. My office smells fresh without any chemical residue, and my patients' owners always comment on how clean it is.",
  },
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll-reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen text-[#0d2137]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00bcd4] text-white px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      {/* ================================================================= */}
      {/* NAVIGATION                                                        */}
      {/* ================================================================= */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Sparkle<span className="text-[#00bcd4]">Clean</span>
            </h1>
            <p className="text-xs tracking-[0.2em] text-[#5f5f5f] uppercase">Professional Cleaning — Denver</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-base text-[#5f5f5f] hover:text-[#00bcd4] transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-base text-[#5f5f5f] hover:text-[#00bcd4] transition-colors cursor-pointer">How It Works</button>
            <button onClick={() => scrollTo('pricing')} className="text-base text-[#5f5f5f] hover:text-[#00bcd4] transition-colors cursor-pointer">Pricing</button>
            <button onClick={() => scrollTo('testimonials')} className="text-base text-[#5f5f5f] hover:text-[#00bcd4] transition-colors cursor-pointer">Reviews</button>
            <button onClick={() => scrollTo('booking')} className="bg-[#00bcd4] text-white px-5 py-2.5 rounded-full text-base font-semibold hover:bg-[#0097a7] transition-colors cursor-pointer">Book Now</button>
          </div>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* MAIN                                                              */}
      {/* ================================================================= */}
      <main id="main" role="main">

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section className="hero pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00bcd4] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Satisfaction Guaranteed — Est. 2014</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6 tracking-tight">
                Come home<br />to a spotless space.
              </h2>
              <p className="text-xl text-[#5f5f5f] max-w-md mb-8 leading-relaxed">
                Professional residential and commercial cleaning in Denver. Eco-friendly products, trained teams, and a 100% satisfaction guarantee — or we come back and re-clean for free.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('booking')} className="btn text-base px-8 py-4">Get a Free Quote</button>
                <button onClick={() => scrollTo('services')} className="btn-outline text-base px-8 py-4">Explore Services</button>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-[#5f5f5f]">
                <span className="flex items-center gap-2"><span className="text-[#00bcd4] font-bold">✓</span> 10,000+ homes cleaned</span>
                <span className="flex items-center gap-2"><span className="text-[#00bcd4] font-bold">✓</span> Insured & bonded</span>
                <span className="flex items-center gap-2"><span className="text-[#00bcd4] font-bold">✓</span> Same-day available</span>
              </div>
            </div>
            <div className="img-hover">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Professional cleaner wiping a kitchen countertop with a microfiber cloth in a bright modern home"
                className="w-full rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ───────────────────────────────────────────── */}
        <section id="services" className="reveal section-alt py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="text-4xl font-bold mt-4 tracking-tight">Our Cleaning Services</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">From weekly upkeep to post-construction cleanup, we have a service for every need. All work is backed by our 100% satisfaction guarantee and performed by insured, vetted professionals.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <div key={i} className="card">
                  <div className="text-4xl mb-4" aria-hidden="true">{svc.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{svc.name}</h3>
                  <div className="text-[#00bcd4] font-bold text-lg mb-3">{svc.price}</div>
                  <p className="text-[#5f5f5f] text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.includes.map((item, j) => (
                      <li key={j} className="text-sm text-[#5f5f5f] flex items-start gap-2">
                        <span className="text-[#00bcd4] mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS (3-STEP PROCESS) ───────────────────────────── */}
        <section id="how-it-works" className="reveal py-24" aria-labelledby="how-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Simple Process</span>
              <h2 id="how-heading" className="text-4xl font-bold mt-4 tracking-tight">How It Works</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">Getting your home professionally cleaned has never been easier. Our streamlined three-step process means you spend less time worrying and more time enjoying your sparkling clean space.</p>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-4 mb-12">
              {['Book Online', 'We Clean', 'You Relax'].map((label, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all cursor-pointer ${
                    activeStep === i
                      ? 'bg-[#00bcd4] text-white shadow-lg scale-105'
                      : 'bg-[#f0fdff] text-[#5f5f5f] hover:bg-[#e0f7fa]'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeStep === i ? 'bg-white/20' : 'bg-[#00bcd4]/10 text-[#00bcd4]'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="font-semibold text-sm hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Step cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Book Online or Call',
                  desc: 'Choose your service, pick a date and time that works for you, and tell us about your home. Our online booking form takes less than two minutes, or call us at (720) 555-CLEAN for a quick quote. We offer same-day and next-day availability for most services, and you can reschedule for free up to 24 hours in advance.',
                  icon: '📋',
                  details: ['Choose your cleaning type', 'Pick a convenient date & time', 'Tell us about your space', 'Get an instant estimate'],
                },
                {
                  step: '02',
                  title: 'We Clean Your Space',
                  desc: 'Our trained, background-checked team arrives on time with all the professional-grade equipment and eco-friendly supplies needed. We follow a detailed room-by-room checklist so nothing gets missed. Every team member has completed our 40-hour training programme and carries full insurance and bonding for your peace of mind.',
                  icon: '✨',
                  details: ['Team arrives on time, fully equipped', 'Room-by-room detailed checklist', 'Eco-friendly products available', 'Insured, bonded & vetted staff'],
                },
                {
                  step: '03',
                  title: 'Enjoy Your Sparkling Home',
                  desc: 'Walk through your freshly cleaned space and notice the difference. We perform a final quality inspection before leaving and send you a photo summary of the completed work. If anything does not meet your expectations, just let us know within 24 hours and we will return to re-clean those areas completely free of charge — no questions asked.',
                  icon: '🏡',
                  details: ['Final quality walkthrough', 'Photo summary sent to you', '24-hour re-clean guarantee', '100% satisfaction or your money back'],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`card text-center transition-all duration-500 ${
                    activeStep === i ? 'border-[#00bcd4] border-2 shadow-xl scale-[1.02]' : ''
                  }`}
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className="text-5xl mb-4" aria-hidden="true">{item.icon}</div>
                  <div className="inline-block bg-[#00bcd4]/10 text-[#00bcd4] font-bold text-sm px-4 py-1 rounded-full mb-4">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#5f5f5f] text-sm leading-relaxed mb-5">{item.desc}</p>
                  <ul className="space-y-2 text-left">
                    {item.details.map((detail, j) => (
                      <li key={j} className="text-sm text-[#5f5f5f] flex items-start gap-2">
                        <span className="text-[#00bcd4] mt-0.5 flex-shrink-0">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Connection line visual */}
            <div className="hidden md:flex justify-center items-center mt-12 gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-[#00bcd4] to-[#0097a7] rounded-full"></div>
              <span className="text-[#00bcd4] font-bold text-2xl">→</span>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0097a7] to-[#00bcd4] rounded-full"></div>
              <span className="text-[#00bcd4] font-bold text-2xl">→</span>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00bcd4] to-[#0097a7] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* ── PRICING PLANS ───────────────────────────────────────────── */}
        <section id="pricing" className="reveal section-alt py-24" aria-labelledby="pricing-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Transparent Pricing</span>
              <h2 id="pricing-heading" className="text-4xl font-bold mt-4 tracking-tight">Choose Your Plan</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">Straightforward pricing with no hidden fees. Every plan includes our satisfaction guarantee and insured, vetted professionals who arrive fully equipped with everything needed to make your home shine.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_TIERS.map((tier, i) => (
                <div
                  key={i}
                  className={`card text-center relative ${tier.highlight ? 'border-[#00bcd4] border-2 shadow-lg' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00bcd4] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1 mt-2">{tier.name}</h3>
                  <p className="text-[#5f5f5f] text-sm mb-4">{tier.tagline}</p>
                  <div className="text-4xl font-bold text-[#00bcd4] mb-1">{tier.price}</div>
                  <p className="text-[#5f5f5f] text-sm mb-6">{tier.frequency}</p>
                  <div className="border-t border-[#e5e5e5] pt-5">
                    <ul className="space-y-3 text-left">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${f.included ? 'bg-[#00bcd4]/10 text-[#00bcd4]' : 'bg-[#e5e5e5] text-[#999]'}`}>
                            {f.included ? '✓' : '—'}
                          </span>
                          <span className={f.included ? 'text-[#0d2137]' : 'text-[#999]'}>{f.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={() => scrollTo('booking')} className={`mt-6 w-full py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer ${tier.highlight ? 'btn' : 'btn-outline'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Recurring discount strip */}
            <div className="mt-12 bg-white rounded-2xl border border-[#e5e5e5] p-8 grid md:grid-cols-3 gap-6 text-center">
              {[
                { freq: 'Weekly', price: '$99', save: '17%' },
                { freq: 'Bi-Weekly', price: '$109', save: '9%' },
                { freq: 'Monthly', price: '$115', save: '4%' },
              ].map((plan, i) => (
                <div key={i} className="flex flex-col items-center">
                  <h4 className="font-bold text-lg">{plan.freq}</h4>
                  <div className="text-2xl font-bold text-[#00bcd4] mt-1">{plan.price}<span className="text-sm text-[#5f5f5f] font-normal">/visit</span></div>
                  <div className="text-green-500 text-sm font-semibold mt-1">Save {plan.save}</div>
                  <p className="text-[#5f5f5f] text-xs mt-2">on our standard rate</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE / AFTER GALLERY ──────────────────────────────────── */}
        <section className="reveal py-24" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Our Results</span>
              <h2 id="gallery-heading" className="text-4xl font-bold mt-4 tracking-tight">See the Difference</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">Real transformations from our recent jobs across the Denver metro area. Every home tells a story — let us write the sparkling clean chapter.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="img-hover group relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80"
                  alt="Sparkling clean modern kitchen with gleaming countertops and polished stainless steel appliances after professional cleaning"
                  className="w-full h-72 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/80 to-transparent rounded-xl flex items-end p-6">
                  <div>
                    <span className="bg-[#00bcd4] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Kitchen Deep Clean</span>
                    <p className="text-white text-sm mt-2">Complete kitchen sanitisation including inside appliances, backsplash detail, and countertop polishing.</p>
                  </div>
                </div>
              </div>
              <div className="img-hover group relative">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80"
                  alt="Bright and airy living room with spotless hardwood floors and clean white furniture after professional cleaning service"
                  className="w-full h-72 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/80 to-transparent rounded-xl flex items-end p-6">
                  <div>
                    <span className="bg-[#00bcd4] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Living Room Refresh</span>
                    <p className="text-white text-sm mt-2">Full dusting, vacuuming, upholstery care, and window cleaning to brighten the entire space.</p>
                  </div>
                </div>
              </div>
              <div className="img-hover group relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
                  alt="Pristine white bathroom with gleaming tiles, polished fixtures, and spotless glass shower enclosure after deep cleaning"
                  className="w-full h-72 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/80 to-transparent rounded-xl flex items-end p-6">
                  <div>
                    <span className="bg-[#00bcd4] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Bathroom Sanitisation</span>
                    <p className="text-white text-sm mt-2">Deep scrub of tiles, grout, fixtures, mirrors, and full disinfection of all surfaces.</p>
                  </div>
                </div>
              </div>
              <div className="img-hover group relative">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
                  alt="Professional cleaning team member carefully wiping a surface demonstrating meticulous attention to detail"
                  className="w-full h-72 object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2137]/80 to-transparent rounded-xl flex items-end p-6">
                  <div>
                    <span className="bg-[#00bcd4] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">Move-In Ready</span>
                    <p className="text-white text-sm mt-2">Comprehensive move-in clean covering every surface, cabinet interior, and appliance for a fresh start.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
        <section id="testimonials" className="reveal section-alt py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Real Reviews</span>
              <h2 id="testimonials-heading" className="text-4xl font-bold mt-4 tracking-tight">What Our Clients Say</h2>
              <p className="text-[#5f5f5f] mt-3">We are proud of our 4.9-star average across 500+ verified reviews from happy Denver homeowners and business owners.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card">
                  <div className="flex gap-1 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-[#00bcd4] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#5f5f5f] text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-[#e5e5e5] pt-4 mt-auto">
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[#5f5f5f] text-xs">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING FORM ────────────────────────────────────────────── */}
        <section id="booking" className="reveal py-24" aria-labelledby="booking-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="badge">Book Now</span>
              <h2 id="booking-heading" className="text-4xl font-bold mt-4 tracking-tight">Get Your Free Quote</h2>
              <p className="text-[#5f5f5f] mt-3">We respond within 1 hour during business hours (Mon-Sat, 7 AM - 7 PM). No credit card required, no obligation.</p>
            </div>

            {submitted ? (
              <div className="card text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
                <p className="text-[#5f5f5f]">We will call you within the hour to confirm details and schedule your cleaning.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm cursor-pointer">Submit Another Request</button>
              </div>
            ) : (
              <form
                className="card space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  window.scrollTo({ top: document.getElementById('booking')?.offsetTop ?? 0, behavior: 'smooth' });
                }}
                aria-label="Quote request form"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input id="name" type="text" placeholder="Jane Smith" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input id="email" type="email" placeholder="jane@email.com" required className="w-full" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input id="phone" type="tel" placeholder="(555) 000-0000" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium mb-2">ZIP Code *</label>
                    <input id="zip" type="text" placeholder="80202" required className="w-full" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed *</label>
                  <select id="service" required className="w-full">
                    <option value="">Select a service...</option>
                    {SERVICES.map((s, i) => (
                      <option key={i} value={s.name}>{s.name} — {s.price}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium mb-2">Frequency</label>
                  <select id="frequency" className="w-full">
                    <option value="one-time">One-Time Clean</option>
                    <option value="weekly">Weekly (Save 17%)</option>
                    <option value="bi-weekly">Bi-Weekly (Save 9%)</option>
                    <option value="monthly">Monthly (Save 4%)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-2">Home Details & Special Requests</label>
                  <textarea id="details" rows={4} placeholder="Number of bedrooms / bathrooms, square footage, pets, areas of concern, access instructions..." className="w-full resize-none" />
                </div>
                <button type="submit" className="btn w-full text-base py-4 font-bold">
                  Get My Free Quote
                </button>
                <p className="text-xs text-[#5f5f5f] text-center">No credit card required. No obligation. We will never share your information.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ================================================================= */}
      {/* FOOTER                                                            */}
      {/* ================================================================= */}
      <footer className="bg-[#0d2137] text-[#999] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Sparkle<span className="text-[#00bcd4]">Clean</span></h3>
              <p className="text-sm leading-relaxed">Professional residential and commercial cleaning in the Denver metro area. Insured, bonded, and committed to your complete satisfaction since 2014. We have proudly served over 10,000 homes and businesses across Colorado.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollTo('services')} className="hover:text-[#00bcd4] transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-[#00bcd4] transition-colors cursor-pointer">How It Works</button></li>
                <li><button onClick={() => scrollTo('pricing')} className="hover:text-[#00bcd4] transition-colors cursor-pointer">Pricing</button></li>
                <li><button onClick={() => scrollTo('testimonials')} className="hover:text-[#00bcd4] transition-colors cursor-pointer">Reviews</button></li>
                <li><button onClick={() => scrollTo('booking')} className="hover:text-[#00bcd4] transition-colors cursor-pointer">Get a Quote</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>(720) 555-CLEAN</li>
                <li>hello@sparkleclean.com</li>
                <li>Denver, CO</li>
                <li>Mon-Sat, 7 AM - 7 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
            <p>Denver, CO - Insured & Bonded - 100% Satisfaction Guaranteed</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
