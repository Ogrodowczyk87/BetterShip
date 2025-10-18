import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const link =
    "text-sm hover:opacity-80 data-[active=true]:font-semibold data-[active=true]:underline underline-offset-8";
  return (
    <div className="min-h-dvh bg-black  text-white  dark:text-slate-50">
      <header className="sticky  top-0 z-30  dark:border-slate-800/70  backdrop-blur">
        <nav className="container flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 py-3">
          <NavLink to="/" className="font-semibold">BetterShip</NavLink>
          <button
            type="button"
            className="ms-auto inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-sm sm:hidden"
            aria-controls="site-nav"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col items-center justify-center gap-1.5">
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </span>
          </button>
          <div
            id="site-nav"
            className={`${open ? "flex" : "hidden"} w-full sm:w-auto sm:ms-auto sm:flex flex-col sm:flex-row items-start sm:items-center gap-2 xs:gap-3 sm:gap-4 mt-2 sm:mt-0`}
          >
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
            <NavLink to="/kontakt" className="w-full xs:w-auto rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1.5 text-sm text-center">Kontakt</NavLink>
          </div>
        </nav>
      </header>

      <main className="container py-6 mx-auto">
        <Outlet />       
      </main>

      <footer className="container py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} BetterShip
      </footer>
    </div>
  );
}
