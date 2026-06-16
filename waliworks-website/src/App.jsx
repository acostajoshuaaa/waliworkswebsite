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
    icon: 'WR',
    title: 'Workshop Repair',
    description: 'Diagnosis and repair for engine, electrical, brake, and rideability issues.',
  },
  {
    icon: 'PM',
    title: 'Preventive Maintenance',
    description: 'Oil service, tune-ups, chain care, fluid checks, and pre-ride inspections.',
  },
  {
    icon: 'RS',
    title: 'Restoration Work',
    description: 'Careful revival of tired motorcycles, from body panels to key mechanical parts.',
  },
  {
    icon: 'CU',
    title: 'Customization',
    description: 'Practical style, comfort, light, bar, trim, seat, and accessory upgrades.',
  },
  {
    icon: 'DT',
    title: 'Detailing and Cleaning',
    description: 'Deep cleaning, degreasing, polishing, and finishing for a workshop-fresh look.',
  },
  {
    icon: 'PI',
    title: 'Parts Installation',
    description: 'Clean installation of replacement parts, upgrades, accessories, and supplied items.',
  },
];

const projects = [
  {
    title: 'Intake and Inspection',
    description: 'Bike details, rider concerns, and initial checks are logged before the first tool is lifted.',
    badge: 'Step 01',
  },
  {
    title: 'Repair Plan',
    description: 'The team identifies parts, labor, and the cleanest path from issue to road-ready.',
    badge: 'Step 02',
  },
  {
    title: 'Workshop Execution',
    description: 'Repairs, restoration, detailing, and upgrades move through focused bench work.',
    badge: 'Step 03',
  },
  {
    title: 'Quality Check',
    description: 'Fasteners, fluids, brakes, electricals, and fitment get a final practical inspection.',
    badge: 'Step 04',
  },
  {
    title: 'Rider Handover',
    description: 'Customers leave with clear notes on what was fixed and what to monitor next.',
    badge: 'Step 05',
  },
  {
    title: 'Follow-Up Ready',
    description: 'Maintenance reminders and next-service recommendations keep the ride dependable.',
    badge: 'Step 06',
  },
];

const transformations = [
  {
    title: 'Upload the concern',
    caption: 'Send the model, photos, issue details, and preferred schedule.',
  },
  {
    title: 'Route the job',
    caption: 'Waliworks separates repair, maintenance, restoration, custom, and detailing tasks.',
  },
  {
    title: 'Complete the ride',
    caption: 'The bike moves through service, quality check, and practical handover notes.',
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
    <section className="bg-[#eef6ff] py-16 sm:py-24" id="about" aria-labelledby="about-title">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">About the owners</p>
          <h2 id="about-title" className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            Built by the hands behind Waliworks
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            A focused two-owner workshop for riders who want clear advice, clean work, and practical
            maintenance decisions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-[0_18px_50px_rgba(20,54,105,0.09)] transition hover:-translate-y-1 hover:border-blue-300">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Mechanic / Owner</p>
            <h3 className="mt-3 text-2xl font-black text-[#071f45]">Joshua Acosta</h3>
            <p className="mt-3 text-slate-600">
              Focused on reliable service, practical motorcycle repairs, and clear inspection work
              riders can understand.
            </p>
          </article>

          <article className="rounded-lg border border-amber-100 bg-white p-6 shadow-[0_18px_50px_rgba(20,54,105,0.09)] transition hover:-translate-y-1 hover:border-amber-300">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">Mechanic / Owner</p>
            <h3 className="mt-3 text-2xl font-black text-[#071f45]">Lian Reyes</h3>
            <p className="mt-3 text-slate-600">
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
