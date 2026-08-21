import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/shows"
        );

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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-xl font-semibold text-white">
          Loading shows...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-xl font-semibold text-red-400">
          {error}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12">

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl">

        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
          Explore
        </p>

        <h1 className="text-4xl font-bold text-white">
          All TV Shows
        </h1>

        <p className="mt-3 text-slate-400">
          Browse through our collection of TV shows.
        </p>

      </div>

      {/* Shows */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

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

    </main>
  );
}

export default Movies;