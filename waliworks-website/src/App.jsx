import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import WorkGallery from './components/WorkGallery.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Reusable page data keeps the repeated sections simple and easy to update later.
const services = [
  {
    icon: '01',
    title: 'General Motorcycle Repair',
    description: 'Diagnosis and repair for everyday engine, electrical, brake, and rideability problems.',
  },
  {
    icon: '02',
    title: 'Preventive Maintenance',
    description: 'Oil service, tune-ups, chain care, fluid checks, and inspections to keep bikes reliable.',
  },
  {
    icon: '03',
    title: 'Restoration Work',
    description: 'Careful revival of tired motorcycles, from body panels and finishes to key mechanical parts.',
  },
  {
    icon: '04',
    title: 'Customization',
    description: 'Practical style and comfort upgrades including seats, lights, bars, trims, and accessories.',
  },
  {
    icon: '05',
    title: 'Detailing and Cleaning',
    description: 'Deep cleaning, degreasing, polishing, and finishing for a sharper workshop-fresh look.',
  },
  {
    icon: '06',
    title: 'Parts Installation',
    description: 'Clean installation of replacement parts, upgrades, accessories, and customer-supplied items.',
  },
];

const projects = [
  {
    title: 'Engine Tune-Up',
    description: 'Improved idle, throttle response, and starting reliability after a full basic tune-up.',
    badge: 'Maintenance',
  },
  {
    title: 'Brake System Service',
    description: 'Brake pads, fluid check, lever feel adjustment, and road-safe stopping performance.',
    badge: 'Repair',
  },
  {
    title: 'Full Body Restoration',
    description: 'Body panel repair, refreshed finish, and detail work for a cleaner complete build.',
    badge: 'Restoration',
  },
  {
    title: 'Custom Seat Installation',
    description: 'Comfort-focused seat upgrade fitted neatly to match the motorcycle profile.',
    badge: 'Custom',
  },
  {
    title: 'Deep Cleaning and Detailing',
    description: 'Degreased engine area, polished panels, and detailed hard-to-reach workshop spots.',
    badge: 'Detailing',
  },
  {
    title: 'Lighting Upgrade',
    description: 'Visibility-focused lighting installation with tidy routing and secure mounting.',
    badge: 'Installation',
  },
];

const transformations = [
  {
    title: 'Daily Rider Refresh',
    caption: 'A worn commuter bike received deep cleaning, basic repairs, and a sharper road-ready finish.',
  },
  {
    title: 'Body Panel Revival',
    caption: 'Faded and scuffed panels were restored with cleaner alignment, finishing, and detail work.',
  },
  {
    title: 'Custom Comfort Upgrade',
    caption: 'Seat and accessory upgrades improved comfort while keeping the motorcycle practical for daily use.',
  },
];

const sellingPoints = [
  'Reliable workshop service',
  'Clean and detailed work',
  'Honest motorcycle inspection',
  'Practical repair recommendations',
  'Motorcycle-focused craftsmanship',
];

function AboutOwners() {
  return (
    <section className="bg-neutral-950 py-16 sm:py-20" aria-labelledby="about-title">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">About the owners</p>
          <h2 id="about-title" className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Built by the hands behind Waliworks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/70">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">Mechanic / Owner</p>
            <h3 className="mt-3 text-2xl font-black text-white">Joshua Acosta</h3>
            <p className="mt-3 text-zinc-300">
              Focused on reliable service, practical motorcycle repairs, and clear inspection work
              riders can understand.
            </p>
          </article>

          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-400/70">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-300">Mechanic / Owner</p>
            <h3 className="mt-3 text-2xl font-black text-white">Lian Reyes</h3>
            <p className="mt-3 text-zinc-300">
              Brings detailed workmanship to maintenance, restoration, cleaning, customization, and
              parts installation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services services={services} />
        <WorkGallery projects={projects} />
        <BeforeAfter transformations={transformations} />
        <AboutOwners />
        <WhyChoose sellingPoints={sellingPoints} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
