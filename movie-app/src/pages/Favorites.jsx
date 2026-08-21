import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useFavorites } from "../contexts/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-400">
          Your Collection
        </p>

        <h1 className="text-4xl font-bold text-white">
          ❤️ Favorite Shows
        </h1>

        <p className="mt-3 text-slate-400">
          Shows you saved to your favorite collection.
        </p>
      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          
          <div className="mb-4 text-5xl">
            🎬
          </div>

          <h2 className="text-2xl font-bold text-white">
            No Favorites Yet
          </h2>

          <p className="mt-3 text-slate-400">
            You haven't added any shows to your favorites.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:from-violet-500 hover:to-pink-400"
          >
            Explore Shows
          </Link>
        </div>
      ) : (
        <>
          {/* Count */}
          <div className="mx-auto mb-6 max-w-7xl">
            <p className="text-sm text-slate-400">
              {favorites.length}{" "}
              {favorites.length === 1 ? "show" : "shows"} saved
            </p>
          </div>

          {/* Favorites */}
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.name}
                image={
                  movie.image?.medium ||
                  "https://via.placeholder.com/210x295?text=No+Image"
                }
                rating={movie.rating?.average || "N/A"}
                year={
                  movie.premiered?.split("-")[0] ||
                  "N/A"
                }
                genre={
                  movie.genres?.[0] ||
                  "Drama"
                }
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Favorites;