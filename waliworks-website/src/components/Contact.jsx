import { useState } from 'react';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // The form is front-end only, so React shows a confirmation without refreshing the page.
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="bg-neutral-900 py-16 sm:py-20" id="contact">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Book a service</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
            Tell us what your motorcycle needs
          </h2>
          <p className="mt-4 text-zinc-300">
            Send the bike details, requested service, and a short description of the issue. Waliworks
            can review the request and recommend the next workshop step.
          </p>

          <address className="mt-8 space-y-3 not-italic text-zinc-300">
            <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <strong className="text-white">Phone:</strong> 09XX XXX XXXX
            </p>
            <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <strong className="text-white">Workshop:</strong> Your workshop address here
            </p>
            <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <strong className="text-white">Social:</strong> Facebook / Instagram @waliworks
            </p>
          </address>
        </div>

        <form
          className="grid gap-4 rounded-lg border border-white/10 bg-neutral-950/75 p-5 shadow-2xl shadow-black/30 sm:p-6"
          onSubmit={handleSubmit}
        >
          <label className="grid gap-2 font-bold text-white">
            Name
            <input
              className="rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label className="grid gap-2 font-bold text-white">
            Phone number
            <input
              className="rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
              type="tel"
              name="phone"
              placeholder="09XX XXX XXXX"
              required
            />
          </label>

          <label className="grid gap-2 font-bold text-white">
            Motorcycle model
            <input
              className="rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
              type="text"
              name="model"
              placeholder="Example: Yamaha NMAX"
              required
            />
          </label>

          <label className="grid gap-2 font-bold text-white">
            Requested service
            <select
              className="rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
              name="service"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>General Motorcycle Repair</option>
              <option>Preventive Maintenance</option>
              <option>Restoration Work</option>
              <option>Customization</option>
              <option>Detailing and Cleaning</option>
              <option>Parts Installation</option>
            </select>
          </label>

          <label className="grid gap-2 font-bold text-white">
            Message
            <textarea
              className="min-h-32 resize-y rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/15"
              name="message"
              rows="5"
              placeholder="Describe the issue or service request"
            ></textarea>
          </label>

          <button
            className="min-h-12 rounded-md bg-gradient-to-r from-orange-500 to-amber-300 px-6 font-black uppercase text-neutral-950 transition hover:-translate-y-1 hover:from-orange-400 hover:to-amber-200"
            type="submit"
          >
            Send Service Request
          </button>

          {isSubmitted && (
            <p
              className="rounded-md border border-amber-300/40 bg-amber-300/10 p-3 font-bold text-amber-200"
              role="status"
            >
              Thank you. Your request was noted, and Waliworks will contact you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
