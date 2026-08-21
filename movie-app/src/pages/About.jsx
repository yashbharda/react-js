function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">
            About CineVerse
          </p>

          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Discover. Explore. Enjoy.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            CineVerse is a movie and TV show discovery application
            where you can explore shows, search for your favorites,
            view detailed information, and save shows to your
            personal collection.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🎬</div>

            <h2 className="text-xl font-bold text-white">
              Discover Shows
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Explore a large collection of TV shows and discover
              something new to watch.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">🔍</div>

            <h2 className="text-xl font-bold text-white">
              Search Easily
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Search for your favorite shows and get results
              instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-3xl">❤️</div>

            <h2 className="text-xl font-bold text-white">
              Save Favorites
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Save shows to your favorites and access them
              whenever you want.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

export default About;