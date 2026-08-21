import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Cine<span className="text-violet-500">Verse</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2 ">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Movies
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <span>❤️</span>

            <span>Favorites</span>

            {favorites.length > 0 && (
              <span className="rounded-full bg-violet-600 px-2 py-0.5 text-xs font-bold text-white">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
