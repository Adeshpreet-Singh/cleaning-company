'use client';

import { useState, useEffect, useRef } from 'react';

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
  {
    name: 'Carpet & Upholstery',
    price: 'From $99 / room',
    icon: '🛋️',
    desc: 'Professional hot-water extraction and steam cleaning for carpets, rugs, sofas, chairs, and mattresses. Removes allergens, stains, and odours — restoring fibres to like-new condition.',
    includes: ['Hot-water extraction', 'Stain pre-treatment', 'Deodorising treatment', 'Allergy-safe rinse', 'Quick-dry technology', 'Furniture repositioning'],
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

const RECURRING_PLANS = [
  { name: 'Weekly', price: '$99', save: '17', desc: 'Best value for busy households that want a consistently spotless home.' },
  { name: 'Bi-Weekly', price: '$109', save: '9', desc: 'Our most popular plan — a thorough clean every two weeks.' },
  { name: 'Monthly', price: '$115', save: '4', desc: 'Ideal maintenance schedule for well-kept homes.' },
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
    text: 'We used the Move-In package when we bought our new house. They cleaned things I didn\'t even think about — inside the medicine cabinet, the tops of door frames, the tracks on every window. It felt like moving into a brand-new home. Highly recommend.',
  },
  {
    name: 'Dr. Angela Torres',
    location: 'Baker, Denver',
    stars: 5,
    text: 'As a veterinarian, I needed a cleaning service that could handle pet hair and odours without harsh chemicals. SparkleClean\'s green cleaning option is perfect. My office smells fresh without any chemical residue, and my patients\' owners always comment on how clean it is.',
  },
];

const FAQS = [
  {
    q: 'What is included in a standard cleaning?',
    a: 'Our standard clean covers all living areas: dusting surfaces, vacuuming carpets and rugs, mopping hard floors, wiping kitchen counters and appliances (exterior), sanitising bathrooms (toilet, shower, sink, mirror), emptying trash cans, and general tidying. We also make beds and straighten common areas.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all. Many of our clients provide a key or garage code. All team members are background-checked, insured, and bonded. We\'ll lock up when we\'re done and send you a photo summary of the completed work.',
  },
  {
    q: 'Are your cleaning products safe for pets and children?',
    a: 'Yes. We offer a full green cleaning option using EPA Safer Choice certified products at no extra charge. These products are non-toxic, biodegradable, and free of harsh chemicals like ammonia, chlorine, and phthalates. Just let us know your preference when booking.',
  },
  {
    q: 'What is your satisfaction guarantee?',
    a: 'If you\'re not completely satisfied with any area we cleaned, contact us within 24 hours and we\'ll send the team back to re-clean those areas at absolutely no charge. We stand behind our work 100%.',
  },
  {
    q: 'How do I reschedule or cancel an appointment?',
    a: 'You can reschedule or cancel up to 24 hours before your appointment with no penalty. Simply call, email, or use the link in your confirmation email. Cancellations made less than 24 hours in advance may incur a $50 fee.',
  },
  {
    q: 'Do you bring your own supplies and equipment?',
    a: 'Yes, our team arrives fully equipped with professional-grade vacuums (HEPA-filtered), mops, microfiber cloths, and all necessary cleaning products. You don\'t need to provide anything. If you prefer we use specific products you already own, just let us know.',
  },
];

// ---------------------------------------------------------------------------
// COMPONENT
// ---------------------------------------------------------------------------

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const revealRef = useRef<HTMLDivElement>(null);

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
    <div className="min-h-screen text-[#1a1a1a]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#ff4a00] text-white px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      {/* ================================================================= */}
      {/* NAVIGATION                                                        */}
      {/* ================================================================= */}
      <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Sparkle<span className="text-[#ff4a00]">Clean</span>
            </h1>
            <p className="text-base tracking-[0.2em] text-[#5f5f5f] uppercase">Professional Cleaning — Denver</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button style={{ cursor: "pointer" }} onClick={() => scrollTo('services')} className="btn text-base text-[#5f5f5f] hover:text-[#ff4a00] transition-colors">Services</button>
            <button style={{ cursor: "pointer" }} onClick={() => scrollTo('pricing')} className="btn text-base text-[#5f5f5f] hover:text-[#ff4a00] transition-colors">Pricing</button>
            <button style={{ cursor: "pointer" }} onClick={() => scrollTo('green')} className="btn text-base text-[#5f5f5f] hover:text-[#ff4a00] transition-colors">Green</button>
            <button style={{ cursor: "pointer" }} onClick={() => scrollTo('faq')} className="btn text-base text-[#5f5f5f] hover:text-[#ff4a00] transition-colors">FAQ</button>
            <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="btn bg-[#ff4a00] text-white px-5 py-2.5 rounded-full text-base font-semibold hover:bg-[#e64200] transition-colors">Get Quote</button>
          </div>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* MAIN                                                              */}
      {/* ================================================================= */}
      <main id="main" role="main">

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section className="hero pt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ff4a00] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">Satisfaction Guaranteed — Est. 2014</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6 tracking-tight">
                Come home<br />to a spotless space.
              </h2>
              <p className="text-xl text-[#5f5f5f] max-w-md mb-8 leading-relaxed">
                Professional residential and commercial cleaning in Denver. Eco-friendly products, trained teams, and a 100% satisfaction guarantee — or we come back and re-clean for free.
              </p>
              <div className="flex flex-wrap gap-4">
                <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="btn btn text-base px-8 py-4">Get a Free Quote</button>
                <button style={{ cursor: "pointer" }} onClick={() => scrollTo('services')} className="btn btn-outline text-base px-8 py-4">Explore Services</button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '✓', text: '10,000+ homes cleaned since 2014' },
                { icon: '✓', text: '100% satisfaction guarantee' },
                { icon: '✓', text: 'Insured, bonded & background-checked' },
                { icon: '✓', text: 'Eco-friendly products available at no extra cost' },
                { icon: '✓', text: 'Same-day & next-day availability' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-[#e5e5e5] rounded-xl px-5 py-3.5 hover:border-[#ff4a00] transition-colors">
                  <span className="w-7 h-7 rounded-full bg-[#ff4a00]/10 flex items-center justify-center text-[#ff4a00] font-bold text-sm flex-shrink-0">{item.icon}</span>
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES (7) ────────────────────────────────────────────── */}
        <section id="services" className="reveal section-alt py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="text-4xl font-bold mt-4 tracking-tight">Our Cleaning Services</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">From weekly upkeep to post-construction cleanup, we have a service for every need. All work backed by our satisfaction guarantee.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <div key={i} className="card">
                  <div className="text-4xl mb-4" aria-hidden="true">{svc.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{svc.name}</h3>
                  <div className="text-[#ff4a00] font-bold text-lg mb-3">{svc.price}</div>
                  <p className="text-[#5f5f5f] text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.includes.map((item, j) => (
                      <li key={j} className="text-sm text-[#5f5f5f] flex items-start gap-2">
                        <span className="text-[#ff4a00] mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING — 3 TIERS WITH FEATURE COMPARISON ──────────────── */}
        <section id="pricing" className="reveal py-24" aria-labelledby="pricing-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Transparent Pricing</span>
              <h2 id="pricing-heading" className="text-4xl font-bold mt-4 tracking-tight">Choose Your Plan</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">Straightforward pricing with no hidden fees. Every plan includes our satisfaction guarantee and insured, vetted professionals.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PRICING_TIERS.map((tier, i) => (
                <div
                  key={i}
                  className={`card text-center relative ${tier.highlight ? 'border-[#ff4a00] border-2 shadow-lg' : ''}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4a00] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1 mt-2">{tier.name}</h3>
                  <p className="text-[#5f5f5f] text-sm mb-4">{tier.tagline}</p>
                  <div className="text-4xl font-bold text-[#ff4a00] mb-1">{tier.price}</div>
                  <p className="text-[#5f5f5f] text-sm mb-6">{tier.frequency}</p>
                  <div className="border-t border-[#e5e5e5] pt-5">
                    <ul className="space-y-3 text-left">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${f.included ? 'bg-[#ff4a00]/10 text-[#ff4a00]' : 'bg-[#e5e5e5] text-[#999]'}`}>
                            {f.included ? '✓' : '—'}
                          </span>
                          <span className={f.included ? 'text-[#1a1a1a]' : 'text-[#999]'}>{f.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className={`mt-6 w-full py-3 rounded-lg font-semibold text-sm transition-all ${tier.highlight ? 'btn' : 'btn-outline'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECURRING PLANS ────────────────────────────────────────── */}
        <section className="reveal section-alt py-24" aria-labelledby="recurring-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Save More</span>
              <h2 id="recurring-heading" className="text-4xl font-bold mt-4 tracking-tight">Recurring Service Plans</h2>
              <p className="text-[#5f5f5f] mt-3">Lock in a lower rate when you schedule regular cleanings.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {RECURRING_PLANS.map((plan, i) => (
                <div key={i} className={`card text-center ${i === 1 ? 'border-[#ff4a00] border-2' : ''}`}>
                  {i === 1 && <div className="text-[#ff4a00] text-xs font-bold uppercase tracking-wider mb-2">Most Popular</div>}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#ff4a00] mb-1">{plan.price}<span className="text-base text-[#5f5f5f] font-normal">/visit</span></div>
                  <div className="text-green-500 text-sm font-semibold mb-3">Save {plan.save}%</div>
                  <p className="text-[#5f5f5f] text-sm mb-6">{plan.desc}</p>
                  <button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="btn btn w-full text-sm">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE CHECKLIST ──────────────────────────────────────── */}
        <section className="reveal py-24" aria-labelledby="checklist-heading">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">What's Included</span>
              <h2 id="checklist-heading" className="text-4xl font-bold mt-4 tracking-tight">Standard Clean Checklist</h2>
              <p className="text-[#5f5f5f] mt-3 max-w-2xl mx-auto">Here is exactly what our team tackles during every standard cleaning visit. Deep cleans and specialty services include additional items.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  room: 'Kitchen',
                  items: ['Wipe countertops & backsplash', 'Clean stovetop & range hood', 'Wipe exterior of appliances', 'Clean sink & polish faucet', 'Empty trash & replace liner', 'Sweep & mop floor'],
                },
                {
                  room: 'Bathrooms',
                  items: ['Scrub & disinfect toilet', 'Clean shower / tub & tiles', 'Wipe vanity & mirror', 'Polish fixtures & handles', 'Empty trash & replace liner', 'Sweep & mop floor'],
                },
                {
                  room: 'Bedrooms',
                  items: ['Dust all surfaces', 'Vacuum carpets / rugs', 'Make beds & tidy linens', 'Wipe mirrors & glass', 'Empty trash cans', 'Vacuum under accessible furniture'],
                },
                {
                  room: 'Living Areas',
                  items: ['Dust shelves, tables & décor', 'Vacuum carpets & upholstery', 'Mop hard floors', 'Wipe light switches & handles', 'Clean TV & electronics surfaces', 'Straighten cushions & pillows'],
                },
                {
                  room: 'General / Whole Home',
                  items: ['Vacuum hallways & stairs', 'Dust ceiling fans (reachable)', 'Wipe door frames & knobs', 'Empty all trash cans', 'Spot-clean walls & switches', 'Final quality walkthrough'],
                },
                {
                  room: 'Extras (Upon Request)',
                  items: ['Interior window cleaning', 'Laundry wash, dry & fold', 'Inside oven deep clean', 'Inside refrigerator clean', 'Baseboard detailing', 'Cabinet exterior wipe-down'],
                },
              ].map((section, i) => (
                <div key={i} className="card">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#ff4a00]/10 text-[#ff4a00] flex items-center justify-center text-sm font-bold">{i + 1}</span>
                    {section.room}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#5f5f5f]">
                        <span className="text-[#ff4a00] mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GREEN CLEANING ─────────────────────────────────────────── */}
        <section id="green" className="reveal section-alt py-24" aria-labelledby="green-heading">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge">Eco-Friendly</span>
              <h2 id="green-heading" className="text-4xl font-bold mt-4 mb-6 tracking-tight">Our Green Cleaning Promise</h2>
              <p className="text-[#5f5f5f] leading-relaxed mb-6">
                We believe a clean home should also mean a clean planet. That's why we offer a 100% eco-friendly cleaning option using EPA Safer Choice certified products at absolutely no extra cost. Our green products are non-toxic, biodegradable, and free from harsh chemicals like ammonia, chlorine bleach, and synthetic fragrances.
              </p>
              <p className="text-[#5f5f5f] leading-relaxed mb-8">
                Whether you have young children who play on the floor, pets that lick surfaces, family members with asthma or chemical sensitivities, or simply care about reducing your environmental footprint — our green cleaning option delivers the same sparkling results without compromise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌿', label: 'Plant-based formulas' },
                  { icon: '👶', label: 'Safe for kids & babies' },
                  { icon: '🐾', label: 'Pet-friendly' },
                  { icon: '♻️', label: 'Biodegradable' },
                  { icon: '🚫', label: 'No harsh chemicals' },
                  { icon: '💰', label: 'No extra charge' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg border border-[#e5e5e5] px-4 py-3">
                    <span className="text-xl" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-hover">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&q=80"
                alt="Eco-friendly cleaning products with natural ingredients on a clean kitchen counter"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── WHY SPARKLECLEAN ───────────────────────────────────────── */}
        <section className="reveal py-24" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="img-hover order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80"
                alt="Professional cleaning team member wiping a countertop with a microfiber cloth"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="badge">Why Choose Us</span>
              <h2 id="why-heading" className="text-4xl font-bold mt-4 mb-6 tracking-tight">The SparkleClean Difference</h2>
              <div className="space-y-6">
                {[
                  { title: 'Trained & Vetted Professionals', desc: 'Every cleaner passes a thorough background check and completes our 40-hour training programme covering technique, safety, and customer service.' },
                  { title: 'Same Team Every Visit', desc: 'We send the same trusted cleaners to your home. They learn your preferences, priorities, and pet peeves — so every visit gets better than the last.' },
                  { title: 'Flexible Scheduling', desc: 'Weekly, bi-weekly, monthly, or one-time. Morning or afternoon. We work around your calendar with easy online booking and free rescheduling up to 24 hours in advance.' },
                  { title: '100% Satisfaction Guarantee', desc: "Not happy with any area? Tell us within 24 hours and we'll re-clean it for free. No questions asked. That's our promise." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#ff4a00]/10 flex items-center justify-center text-[#ff4a00] font-bold flex-shrink-0 text-sm">{i + 1}</div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-[#5f5f5f] text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
        <section className="reveal section-alt py-24" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Real Reviews</span>
              <h2 id="testimonials-heading" className="text-4xl font-bold mt-4 tracking-tight">What Our Clients Say</h2>
              <p className="text-[#5f5f5f] mt-3">We're proud of our 4.9-star average across 500+ reviews.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="card">
                  <div className="flex gap-1 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-[#ff4a00] text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#5f5f5f] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="border-t border-[#e5e5e5] pt-4">
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[#5f5f5f] text-xs">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <section id="faq" className="reveal py-24" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="badge">Questions</span>
              <h2 id="faq-heading" className="text-4xl font-bold mt-4 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-[#5f5f5f] mt-3">Everything you need to know before booking.</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="card !p-0 overflow-hidden">
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f9f9f9] transition-colors cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} >
                    <span className="font-semibold text-sm pr-4">{faq.q}</span>
                    <span className={`text-[#ff4a00] text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-5 text-[#5f5f5f] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING FORM ───────────────────────────────────────────── */}
        <section id="contact" className="reveal section-alt py-24" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="badge">Book Now</span>
              <h2 id="contact-heading" className="text-4xl font-bold mt-4 tracking-tight">Get a Free Quote</h2>
              <p className="text-[#5f5f5f] mt-3">We respond within 1 hour during business hours (Mon–Sat, 7 AM – 7 PM).</p>
            </div>

            {submitted ? (
              <div className="card text-center py-16">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
                <p className="text-[#5f5f5f]">We'll call you within the hour to confirm details and schedule your cleaning.</p>
                <button style={{ cursor: "pointer" }} onClick={() => setSubmitted(false)} className="btn btn-outline mt-6 text-sm">Submit Another Request</button>
              </div>
            ) : (
              <form
                className="card space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  window.scrollTo({ top: document.getElementById('contact')?.offsetTop ?? 0, behavior: 'smooth' });
                }}
                aria-label="Quote request form"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input id="name" type="text" placeholder="Jane Smith" required className="w-full border-2 border-gray-300 " />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input id="email" type="email" placeholder="jane@email.com" required className="w-full border-2 border-gray-300 " />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <input id="phone" type="tel" placeholder="(555) 000-0000" className="w-full border-2 border-gray-300 " />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium mb-2">ZIP Code *</label>
                    <input id="zip" type="text" placeholder="80202" required className="w-full border-2 border-gray-300 " />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed *</label>
                  <select id="service" required className="w-full border-2 border-gray-300 ">
                    <option value="">Select a service…</option>
                    {SERVICES.map((s, i) => (
                      <option key={i} value={s.name}>{s.name} — {s.price}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium mb-2">Frequency</label>
                  <select id="frequency" className="w-full border-2 border-gray-300 ">
                    <option value="one-time">One-Time Clean</option>
                    <option value="weekly">Weekly (Save 17%)</option>
                    <option value="bi-weekly">Bi-Weekly (Save 9%)</option>
                    <option value="monthly">Monthly (Save 4%)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium mb-2">Home Details & Special Requests</label>
                  <textarea id="details" rows={4} placeholder="Number of bedrooms / bathrooms, square footage, pets, areas of concern, access instructions…" className="w-full resize-none border-2 border-gray-300 " />
                </div>
                <button style={{ cursor: "pointer" }} type="submit" className="btn w-full text-base py-4 font-bold">
                  Get My Free Quote
                </button>
                <p className="text-xs text-[#5f5f5f] text-center">No credit card required. No obligation. We'll never share your information.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* ================================================================= */}
      {/* FOOTER                                                            */}
      {/* ================================================================= */}
      <footer className="bg-[#1a1a1a] text-[#999] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Sparkle<span className="text-[#ff4a00]">Clean</span></h3>
              <p className="text-sm leading-relaxed">Professional residential and commercial cleaning in the Denver metro area. Insured, bonded, and committed to your satisfaction since 2014.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button style={{ cursor: "pointer" }} onClick={() => scrollTo('services')} className="btn hover:text-[#ff4a00] transition-colors">Services</button></li>
                <li><button style={{ cursor: "pointer" }} onClick={() => scrollTo('pricing')} className="btn hover:text-[#ff4a00] transition-colors">Pricing</button></li>
                <li><button style={{ cursor: "pointer" }} onClick={() => scrollTo('green')} className="btn hover:text-[#ff4a00] transition-colors">Green Cleaning</button></li>
                <li><button style={{ cursor: "pointer" }} onClick={() => scrollTo('faq')} className="btn hover:text-[#ff4a00] transition-colors">FAQ</button></li>
                <li><button style={{ cursor: "pointer" }} onClick={() => scrollTo('contact')} className="btn hover:text-[#ff4a00] transition-colors">Get a Quote</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 (720) 555-CLEAN</li>
                <li>✉️ hello@sparkleclean.com</li>
                <li>📍 Denver, CO</li>
                <li>🕐 Mon–Sat, 7 AM – 7 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} SparkleClean. All rights reserved.</p>
            <p>Denver, CO · Insured & Bonded</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
