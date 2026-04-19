const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#childhood", label: "Childhood" },
  { href: "#education", label: "Education" },
  { href: "#works", label: "Works" },
  { href: "#dapitan", label: "Dapitan" },
  { href: "#trial", label: "Trial" },
  { href: "#legacy", label: "Legacy" },
  { href: "/developers", label: "Developers" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-950/10 bg-white/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="font-display text-xl font-semibold tracking-tight text-sky-950">
          Jose Rizal
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-sky-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#read"
          className="button-transition inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
        >
          Read Rizal's Works Online
        </a>
      </nav>

      <div className="overflow-x-auto border-t border-sky-950/8 lg:hidden">
        <div className="flex min-w-max gap-5 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap text-slate-700 transition hover:text-sky-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
