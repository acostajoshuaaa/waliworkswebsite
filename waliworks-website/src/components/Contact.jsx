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
    <section className="bg-[#eef6ff] py-16 sm:py-24" id="contact">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Get in touch with Waliworks</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#071f45] sm:text-5xl">
            Route your motorcycle request to the right service lane
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Send the bike details, requested service, and a short description of the issue. Waliworks
            can review the request and recommend the next workshop step.
          </p>

          <address className="mt-8 grid gap-4 not-italic text-slate-600">
            <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-[0_18px_48px_rgba(20,54,105,0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-500">Direct line</p>
              <p className="mt-2 font-black text-[#071f45]">09XX XXX XXXX</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-[0_18px_48px_rgba(20,54,105,0.08)]">
              <div className="relative h-40 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(16,185,129,0.12)),linear-gradient(rgba(7,31,69,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(7,31,69,0.08)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]">
                <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue-600 text-sm font-black text-white shadow-[0_18px_38px_rgba(37,99,235,0.3)]">
                  W
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-500">Workshop address</p>
                <p className="mt-2 font-black text-[#071f45]">Your workshop address here</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">Facebook / Instagram @waliworks</p>
              </div>
            </div>
          </address>
        </div>

        <form
          className="grid gap-4 rounded-lg border border-blue-100 bg-white p-5 shadow-[0_28px_70px_rgba(20,54,105,0.12)] sm:p-6"
          onSubmit={handleSubmit}
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Request form</p>
          <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 font-bold text-[#071f45]">
            Name
            <input
              className="rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 text-[#071f45] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label className="grid gap-2 font-bold text-[#071f45]">
            Phone number
            <input
              className="rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 text-[#071f45] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15"
              type="tel"
              name="phone"
              placeholder="09XX XXX XXXX"
              required
            />
          </label>
          </div>

          <label className="grid gap-2 font-bold text-[#071f45]">
            Motorcycle model
            <input
              className="rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 text-[#071f45] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15"
              type="text"
              name="model"
              placeholder="Example: Yamaha NMAX"
              required
            />
          </label>

          <fieldset className="grid gap-3 rounded-md border border-blue-100 bg-[#f8fbff] p-4">
            <legend className="px-1 text-sm font-black text-[#071f45]">Request type</legend>
            {['Inspection', 'Repair', 'Custom / Restoration'].map((item) => (
              <label className="flex items-center gap-3 text-sm font-bold text-slate-600" key={item}>
                <input className="h-4 w-4 accent-blue-600" type="radio" name="requestType" value={item} />
                {item}
              </label>
            ))}
          </fieldset>

          <label className="grid gap-2 font-bold text-[#071f45]">
            Requested service
            <select
              className="rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 text-[#071f45] outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15"
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

          <label className="grid gap-2 font-bold text-[#071f45]">
            Message
            <textarea
              className="min-h-32 resize-y rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 text-[#071f45] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/15"
              name="message"
              rows="5"
              placeholder="Describe the issue or service request"
            ></textarea>
          </label>

          <button
            className="min-h-12 rounded-md bg-blue-600 px-6 font-black text-white shadow-[0_14px_32px_rgba(37,99,235,0.24)] transition hover:-translate-y-1 hover:bg-blue-500"
            type="submit"
          >
            Send Service Request
          </button>

          {isSubmitted && (
            <p
              className="rounded-md border border-emerald-200 bg-emerald-50 p-3 font-bold text-emerald-700"
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
