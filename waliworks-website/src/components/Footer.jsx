function Footer() {
  return (
    <footer className="bg-[#08072b] py-12 text-white">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1120px] gap-8 lg:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
        <div>
          <div className="grid h-12 w-12 place-items-center rounded-md bg-blue-500 text-lg font-black text-white shadow-[0_16px_40px_rgba(59,130,246,0.28)]">
            W
          </div>
          <div>
            <h2 className="mt-5 text-2xl font-black">Waliworks</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-blue-100/80">
              Premium basic maintenance and custom motorcycle workshop service by Joshua Acosta and
              Lian Reyes.
            </p>
            <div className="mt-6 grid max-w-sm gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/5 p-3">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-200">Owners</p>
                <p className="mt-1 text-sm text-blue-50">Joshua / Lian</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/5 p-3">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-200">Focus</p>
                <p className="mt-1 text-sm text-blue-50">Repair + custom care</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/75">
            <li>About</li>
            <li>Owners</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/75">
            <li>Repair</li>
            <li>Maintenance</li>
            <li>Restoration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Resources</h3>
          <ul className="mt-4 space-y-3 text-sm text-blue-100/75">
            <li>Bookings</li>
            <li>Workshop notes</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[calc(100%_-_2rem)] max-w-[1120px] flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Waliworks. All rights reserved.</p>
        <p>Privacy Notice / Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
