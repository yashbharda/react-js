import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch all shows
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch shows");
        }

        const data = await response.json();

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const searchShows = async () => {
        try {
          setError("");

          if (!search.trim()) {
            const response = await fetch(
              "https://api.tvmaze.com/shows"
            );

            if (!response.ok) {
              throw new Error("Failed to fetch shows");
            }

            const data = await response.json();

            setMovies(data);
            return;
          }

          const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
              search
            )}`
          );

          if (!response.ok) {
            throw new Error("Failed to search shows");
          }

          const data = await response.json();

          const searchResults = data.map((item) => item.show);

          setMovies(searchResults);
        } catch (error) {
          setError(error.message);
        }
      };

      searchShows();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // Initial loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500" />

          <p className="text-lg font-medium text-slate-300">
            Loading shows...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-8 py-6 text-center">
          <p className="text-lg font-semibold text-red-400">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-400">
            Welcome to CineVerse
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Discover Your Next
            <span className="block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Favorite Show
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Explore amazing TV shows, discover new stories,
            and find something worth watching tonight.
          </p>

        </div>
      </section>

      {/* Search Section */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl">

          <div className="group relative">

            {/* Search icon */}
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-500">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for TV shows..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-4 pl-14 pr-5 text-white shadow-xl outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
            />

          </div>

          <p className="mt-3 text-center text-xs text-slate-600">
            Search results update automatically
          </p>

        </div>
      </section>

      {/* Shows Section */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-7 flex items-end justify-between">

            <div>
              <p className="mb-1 text-sm font-medium text-violet-400">
                Explore
              </p>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {search ? "Search Results" : "Popular TV Shows"}
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {movies.length} shows
            </p>

          </div>

          {/* Empty search */}
          {movies.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-16 text-center">
              <div className="mb-4 text-5xl">
                🎬
              </div>

              <h3 className="text-xl font-bold text-white">
                No shows found
              </h3>

              <p className="mt-2 text-slate-400">
                Try searching with a different name.
              </p>
            </div>
          ) : (

            /* Cards */
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">

              {movies.map((movie) => (
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
                    movie.premiered?.split("-")[0] || "N/A"
                  }
                  genre={
                    movie.genres?.[0] || "Drama"
                  }
                />
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Home;