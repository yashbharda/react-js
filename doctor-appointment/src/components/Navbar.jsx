import { NavLink } from "react-router-dom";
import { HeartPulse, Bell } from "lucide-react";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "Appointments", path: "/appointments" },
  ];

  return (
    <header className="px-5 pt-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <HeartPulse size={25} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Medi<span className="text-teal-500">Care</span>
            </h1>

            <p className="text-[9px] font-medium tracking-[0.2em] text-slate-400">
              HEALTH • CARE • TRUST
            </p>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center rounded-xl bg-slate-50 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-teal-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-teal-600"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-500/20 transition hover:bg-teal-600"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
