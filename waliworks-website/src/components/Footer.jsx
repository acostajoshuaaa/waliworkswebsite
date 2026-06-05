function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-24 rounded-md border border-white/10 bg-black object-cover"
            src="/logo.svg"
            alt=""
          />
          <div>
          <h2 className="text-2xl font-black uppercase text-white">Waliworks</h2>
          <p className="mt-1 text-zinc-400">Premium basic maintenance and custom motorcycle workshop service.</p>
          <p className="mt-1 text-sm text-zinc-500">Owners: Joshua Acosta and Lian Reyes</p>
          </div>
        </div>
        <p className="text-sm text-zinc-500 sm:text-right">&copy; 2026 Waliworks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
