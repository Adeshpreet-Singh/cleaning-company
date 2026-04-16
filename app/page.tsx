'use client';
import { useState, useEffect, useRef } from 'react';

const services = [
  { icon: '🏠', title: 'Residential Cleaning', desc: 'From cozy apartments to sprawling estates, our residential cleaning team transforms every room into a pristine sanctuary. We dust, mop, sanitize, and polish so you can come home to pure comfort.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
  { icon: '🏢', title: 'Commercial Office Cleaning', desc: 'First impressions matter. Our commercial cleaning keeps lobbies, conference rooms, and open offices spotless. We work after hours so your team walks into a gleaming workspace every morning.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
  { icon: '🧹', title: 'Deep Cleaning', desc: 'When standard cleaning is not enough, our deep cleaning service tackles hidden grime behind appliances, inside cabinets, baseboards, ceiling fans, and every forgotten corner.', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop' },
  { icon: '🪟', title: 'Window & Glass Care', desc: 'Crystal-clear windows inside and out. We remove hard-water stains, streak mirrors, and polish glass surfaces to let maximum natural light flood your space.', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop' },
  { icon: '🛋️', title: 'Upholstery & Carpet', desc: 'Steam-cleaned carpets and refreshed upholstery bring color and life back. We remove stains, odors, and allergens from sofas, rugs, chairs, and mattresses.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
  { icon: '🏗️', title: 'Post-Construction Cleanup', desc: 'Renovation dust and debris are no match for our post-construction crew. We remove adhesive, sweep concrete dust, wipe every surface, and hand over your project move-in ready.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop' },
];

const pricing = [
  { name: 'Essential Clean', price: '$89', period: 'per visit', features: ['3-hour clean session', 'Kitchen & bathrooms', 'Vacuum & mop floors', 'Dusting all surfaces', 'Trash removal'], highlight: false },
  { name: 'Premium Clean', price: '$149', period: 'per visit', features: ['5-hour deep clean', 'Inside appliance clean', 'Window interior wipe', 'Baseboard detailing', 'Laundry folding', 'Organize closets'], highlight: true, badge: 'Most Popular' },
  { name: 'Elite Clean', price: '$249', period: 'per visit', features: ['Full-day dedicated team', 'Move-in / move-out ready', 'Carpet steam cleaning', 'Exterior window wash', 'Garage & attic tidy', 'Same-day availability'], highlight: false },
];

const gallery = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Homeowner', text: 'Sparkle Clean transformed our home after our renovation. They removed every trace of dust and left the place smelling amazing. I cannot recommend them enough.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face' },
  { name: 'David Park', role: 'Office Manager', text: 'We switched to Sparkle Clean for our 20,000 sqft office. The difference was night and day. Our employees actually comment on how fresh the building feels now.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { name: 'Maria Rodriguez', role: 'Property Manager', text: 'Managing 15 rental units means constant turnover cleaning. Sparkle Clean handles every move-out with speed and thoroughness. They are my secret weapon.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face' },
];

const stats = [
  { number: '12K+', label: 'Homes Cleaned' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '250+', label: 'Team Members' },
  { number: '15', label: 'Years Experience' },
];

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 48 hours in advance for regular cleanings. However, we do offer same-day service for our Elite package when availability allows. Weekend slots fill up fastest, so a week ahead is ideal.' },
  { q: 'Are your cleaning products safe for pets?', a: 'Absolutely. We use eco-friendly, non-toxic cleaning solutions that are completely safe for children and pets. If you have specific allergies or preferences, we are happy to use your supplied products.' },
  { q: 'Do I need to be home during the cleaning?', a: 'Not at all. Many clients provide a key or access code. Our team is fully bonded and insured, so you can trust us in your space. We send a completion photo report when finished.' },
  { q: 'What if I am not satisfied with the cleaning?', a: 'Your satisfaction is guaranteed. If anything does not meet your expectations, contact us within 24 hours and we will re-clean the affected areas at no additional cost.' },
];

export default function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e0f2f1]" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="font-bold text-lg" style={{ color: 'var(--teal)' }}>Sparkle Clean</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Pricing', 'Gallery', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href={'#${item.toLowerCase()}'} className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--teal)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>{item}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: 'var(--teal)' }}>Book Now</a>
          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-2xl" style={{ color: 'var(--text-dark)' }}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-[#e0f2f1] px-6 py-4 flex flex-col gap-3">
            {['Services', 'Pricing', 'Gallery', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href={'#${item.toLowerCase()}'} onClick={() => setMobileMenu(false)} className="text-sm font-medium py-2" style={{ color: 'var(--text-dark)' }}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24" style={{ background: 'linear-gradient(135deg, #f8fffe 0%, #e0f2f1 50%, white 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Trusted by 12,000+ Families</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal mb-6" style={{ color: 'var(--text-dark)', fontFamily: "'Poppins', sans-serif" }}>
              A Cleaner Home,<br />
              <span style={{ color: 'var(--teal)' }}>A Brighter Life</span>
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: 500 }}>
              Sparkle Clean delivers professional residential and commercial cleaning services across the metro area. Our vetted, insured team uses eco-friendly products and proven techniques to make every surface shine. Whether it is a weekly touch-up or a full post-construction deep clean, we arrive on time, work meticulously, and leave your space healthier than we found it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform hover:-translate-y-1" style={{ background: 'var(--teal)' }}>Get Free Estimate</a>
              <a href="#services" className="px-8 py-3 rounded-lg font-semibold border-2 transition-transform hover:-translate-y-1" style={{ borderColor: 'var(--teal)', color: 'var(--teal)' }}>Our Services</a>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=500&fit=crop" alt="Professional cleaning team at work" className="rounded-2xl shadow-2xl w-full object-cover" style={{ maxHeight: 480 }} />
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="py-8" style={{ background: 'var(--teal)', color: 'white' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="reveal">
              <div className="text-3xl md:text-4xl font-bold">{s.number}</div>
              <div className="text-sm mt-1 opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Professional Cleaning Services</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>From routine maintenance to specialized deep cleans, our service menu covers every need. Each service is customizable, and our friendly staff will tailor the plan to fit your schedule and budget perfectly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="reveal rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1" style={{ borderColor: '#e0f2f1', background: 'white' }}>
                <img src={svc.img} alt={svc.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-3xl mb-3 block">{svc.icon}</span>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28" style={{ background: 'var(--bg-tint)' }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop" alt="Our dedicated cleaning professionals" className="rounded-2xl shadow-xl w-full object-cover" style={{ maxHeight: 500 }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Why Sparkle Clean</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Built on Trust, Driven by Detail</h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>We are not just another cleaning company. Sparkle Clean was founded on the belief that everyone deserves a healthy, beautiful living environment. Every team member undergoes 80 hours of training, background checks, and ongoing quality audits. Our eco-conscious products are tough on dirt but gentle on the planet and safe for your family.</p>
            <div className="space-y-4">
              {['Bonded & insured professionals', 'Eco-friendly green-certified products', '100% satisfaction guarantee', 'Flexible scheduling including weekends', 'Same-day service available'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: 'var(--teal)' }}>✓</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Simple, Honest Packages</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>No hidden fees, no surprise charges. Choose the package that fits your needs and enjoy premium cleaning at competitive rates. Custom quotes available for larger properties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div key={i} className={'reveal rounded-2xl p-8 border-2 relative ${plan.highlight ? 'shadow-xl scale-[1.03]' : ''}'} style={{  borderColor: plan.highlight ? 'var(--teal)' : '#e0f2f1', background: 'white', transitionDelay: '${i * 0.1 }}s' }}>
                {plan.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'var(--teal)' }}>{plan.badge}</span>}
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>{plan.name}</h3>
                <div className="mb-1"><span className="text-4xl font-bold" style={{ color: 'var(--teal)' }}>{plan.price}</span></div>
                <div className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{plan.period}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-dark)' }}>
                      <span style={{ color: 'var(--teal)' }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={'block text-center py-3 rounded-lg font-semibold transition-all ${plan.highlight ? 'text-white' : ''}'} style={{ background: plan.highlight ? 'var(--teal)' : 'transparent', border: plan.highlight ? 'none' : '2px solid var(--teal)', color: plan.highlight ? 'white' : 'var(--teal)' }}>
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28" style={{ background: 'var(--bg-tint)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Spotless Results, Every Time</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>Browse through our gallery of completed projects. From gleaming kitchens to sparkling bathrooms, these before-and-after transformations showcase the meticulous attention to detail our team brings to every job.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="reveal overflow-hidden rounded-xl group cursor-pointer" style={{  transitionDelay: '${i * 0.08 }}s' }}>
                <img src={src} alt={'Cleaning gallery ${i + 1}'} className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Book in 4 Easy Steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request a Quote', desc: 'Fill out our simple form or call us. Tell us about your space, preferred services, and schedule.' },
              { step: '02', title: 'Custom Plan', desc: 'We create a tailored cleaning plan with transparent pricing. No surprises, just straightforward rates.' },
              { step: '03', title: 'We Clean', desc: 'Our vetted team arrives on time with all supplies. We work efficiently and respect your property.' },
              { step: '04', title: 'You Relax', desc: 'Walk through your sparkling clean space. Not happy? We re-clean within 24 hours, guaranteed.' },
            ].map((s, i) => (
              <div key={i} className="reveal text-center" style={{  transitionDelay: '${i * 0.1 }}s' }}>
                <div className="text-5xl font-bold mb-3" style={{ color: 'rgba(0,150,136,0.15)', fontFamily: "'Poppins', sans-serif" }}>{s.step}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-dark)', fontFamily: "'Poppins', sans-serif" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 md:py-28" style={{ background: 'var(--bg-tint)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>Do not just take our word for it. Here is what families and businesses across the city have to say about their Sparkle Clean experience. Our reputation is built on thousands of happy clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal rounded-2xl p-8 bg-white border" style={{  borderColor: '#e0f2f1', transitionDelay: '${i * 0.1 }}s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--text-dark)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: 'var(--text-muted)' }}>&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 text-sm" style={{ color: 'var(--teal)' }}>★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal rounded-xl border overflow-hidden" style={{  borderColor: '#e0f2f1', transitionDelay: '${i * 0.08 }}s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-sm" style={{ color: 'var(--text-dark)', background: openFaq === i ? 'var(--bg-tint)' : 'white' }}>
                  {faq.q}
                  <span className="text-xl" style={{ color: 'var(--teal)' }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=300&fit=crop" alt="Sparkling clean environment" className="w-full h-48 object-cover rounded-2xl mb-8 opacity-92" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready for a Spotless Space?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Join over 12,000 satisfied customers who trust Sparkle Clean for their homes and offices. Book your first cleaning today and receive 20% off.</p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-lg font-semibold bg-white transition-transform hover:-translate-y-1" style={{ color: 'var(--teal)' }}>Schedule Your Clean</a>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(0,150,136,0.1)', color: 'var(--teal)' }}>Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--text-dark)' }}>Book Your Cleaning Today</h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>Fill out the form and our team will get back to you within the hour during business hours. For immediate assistance, give us a call. We proudly serve residential and commercial clients across the greater metro area.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3"><span className="text-xl">📍</span><span className="text-sm" style={{ color: 'var(--text-dark)' }}>742 Evergreen Terrace, Suite 200</span></div>
              <div className="flex items-center gap-3"><span className="text-xl">📞</span><span className="text-sm" style={{ color: 'var(--text-dark)' }}>(555) 012-3456</span></div>
              <div className="flex items-center gap-3"><span className="text-xl">✉️</span><span className="text-sm" style={{ color: 'var(--text-dark)' }}>hello@sparkleclean.com</span></div>
              <div className="flex items-center gap-3"><span className="text-xl">🕐</span><span className="text-sm" style={{ color: 'var(--text-dark)' }}>Mon-Sat 7AM - 8PM</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop" alt="Our friendly support team" className="rounded-2xl shadow-lg w-full object-cover" style={{ maxHeight: 280 }} />
          </div>
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="rounded-2xl p-12 text-center border" style={{ borderColor: '#e0f2f1', background: 'var(--bg-tint)' }}>
                <span className="text-5xl block mb-4">🎉</span>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--teal)', fontFamily: "'Poppins', sans-serif" }}>Booking Received!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We will contact you shortly to confirm your appointment. Thank you for choosing Sparkle Clean.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-8 border" style={{ borderColor: '#e0f2f1', background: 'white' }}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: '#e0f2f1' }} />
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: '#e0f2f1' }} />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: '#e0f2f1' }} />
                  <select value={service} onChange={(e) => setService(e.target.value)} className="px-4 py-3 rounded-lg border text-sm" style={{ borderColor: '#e0f2f1' }}>
                    <option value="">Select Service</option>
                    {services.map((s, i) => <option key={i} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-lg border text-sm mb-4" style={{ borderColor: '#e0f2f1' }} />
                <textarea placeholder="Tell us about your space and any special requests..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-3 rounded-lg border text-sm mb-6 resize-none" style={{ borderColor: '#e0f2f1' }} />
                <button type="submit" className="w-full py-3 rounded-lg text-white font-semibold transition-transform hover:-translate-y-1" style={{ background: 'var(--teal)' }}>Book My Cleaning</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12" style={{ background: 'var(--text-dark)', color: '#b0d0d0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4"><span className="text-2xl">✨</span><span className="font-bold text-white">Sparkle Clean</span></div>
              <p className="text-sm leading-relaxed">Professional cleaning services for homes and businesses. Eco-friendly, reliable, and thorough since 2011.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2 text-sm">
                {['Residential', 'Commercial', 'Deep Cleaning', 'Windows', 'Post-Construction'].map((l) => <li key={l}><a href="#services" className="hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'].map((l) => <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm" style={{ borderColor: '#2A4A4A' }}>
            &copy; 2024 Sparkle Clean. All rights reserved. Licensed, bonded, and insured.
          </div>
        </div>
      </footer>
    </div>
  );
}
