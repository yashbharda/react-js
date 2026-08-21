import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

        if (!response.ok) {
          throw new Error("Show not found");
        }

        const data = await response.json();

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500" />

          <p className="text-lg text-slate-300">Loading details...</p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="text-center">
          <p className="mb-5 text-xl font-semibold text-red-400">{error}</p>

          <Link
            to="/"
            className="rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
        >
          ← Back to Shows
        </Link>
      </div>

      {/* Main Details */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            {/* Poster */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-violet-500/5">
                <img
                  src={
                    movie.image?.original ||
                    movie.image?.medium ||
                    "https://via.placeholder.com/500x750?text=No+Image"
                  }
                  alt={movie.name}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col justify-center">
              {/* Type */}
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
                {movie.type || "TV Show"}
              </p>

              {/* Title */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                {movie.name}
              </h1>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-sm font-semibold text-yellow-400">
                  ⭐ {movie.rating?.average || "N/A"}
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                  📅 {movie.premiered?.split("-")[0] || "N/A"}
                </span>

                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                  🎭 {movie.genres?.join(", ") || "N/A"}
                </span>
              </div>

              {/* Summary */}
              <div className="mt-8">
                <h2 className="mb-3 text-xl font-bold text-white">
                  About the Show
                </h2>

                <div
                  className="leading-7 text-slate-400"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary || "No description available.",
                  }}
                />
              </div>

              {/* Extra Information */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Language
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {movie.language || "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Status
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {movie.status || "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Runtime
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Network
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {movie.network?.name || movie.webChannel?.name || "N/A"}
                  </p>
                </div>
              </div>

              {/* Official Website */}
              {movie.officialSite && (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:from-violet-500 hover:to-pink-400"
                >
                  Visit Official Website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
