import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

function MovieCard({ id, title, image, rating, year, genre }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        name: title,
        image: {
          medium: image,
        },
        rating: {
          average: rating,
        },
        premiered: `${year}-01-01`,
        genres: [genre],
      });
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-violet-500/20">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 rounded-lg bg-black/70 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
          ⭐ {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-white">{title}</h2>

        <div className="mt-2 flex items-center gap-3 text-sm text-slate-400">
          <span>{year}</span>
          <span>•</span>
          <span>{genre}</span>
        </div>

        {/* View Details */}
        <Link
          to={`/movies/${id}`}
          className="mt-5 block w-full rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-3 text-center font-semibold text-white transition hover:from-violet-500 hover:to-pink-400"
        >
          View Details
        </Link>

        {/* Favorite */}
        <button
          onClick={handleFavorite}
          className={`mt-3 w-full rounded-xl border px-4 py-3 font-semibold transition ${
            favorite
              ? "border-pink-500/30 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20"
              : "border-white/10 bg-white/5 text-slate-300 hover:border-pink-500/30 hover:bg-pink-500/10 hover:text-pink-400"
          }`}
        >
          {favorite ? "❤️ Remove Favorite" : "♡ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
