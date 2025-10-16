import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  const link =
    "text-sm hover:opacity-80 data-[active=true]:font-semibold data-[active=true]:underline underline-offset-8";
  return (
    <div className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/70 backdrop-blur">
        <nav className="container flex items-center gap-4 py-3">
          <NavLink to="/" className="font-semibold">BetterShip</NavLink>
          <div className="ms-auto flex items-center gap-4">
            <NavLink to="/uslugi">
              {({ isActive }: { isActive: boolean }) => (
                <span data-active={isActive} className={link}>Usługi</span>
              )}
            </NavLink>
            <NavLink to="/portfolio">
              {({ isActive }: { isActive: boolean }) => (
                <span data-active={isActive} className={link}>Portfolio</span>
              )}
            </NavLink>
            <NavLink to="/o-nas">
              {({ isActive }: { isActive: boolean }) => (
                <span data-active={isActive} className={link}>O nas</span>
              )}
            </NavLink>
            <NavLink to="/kontakt" className="rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1.5 text-sm">Kontakt</NavLink>
          </div>
        </nav>
      </header>

      <main className="container py-6">
        <Outlet />
      </main>

      <footer className="container py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} BetterShip
      </footer>
    </div>
  );
}
