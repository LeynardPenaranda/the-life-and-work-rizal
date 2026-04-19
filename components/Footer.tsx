export function Footer() {
  return (
    <footer className="border-t border-sky-950/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>Created as a tribute to the life and works of Dr. Jose Rizal</p>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="transition hover:text-sky-900">
            Home
          </a>
          <a href="#works" className="transition hover:text-sky-900">
            Works
          </a>
          <a href="#legacy" className="transition hover:text-sky-900">
            Legacy
          </a>
          <a href="/developers" className="transition hover:text-sky-900">
            Developers
          </a>
        </div>
      </div>
    </footer>
  );
}
