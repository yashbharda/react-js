import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { useEffect, useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    if (favorites && favorites.length > 0) {
      setFavorites(favorites);
    }
  }, []);
  useEffect(() => {
    (localStorage.setItem("favorites", JSON.stringify(favorites)));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((movie) => movie.id === id);
  };

  return (
    <BrowserRouter>
      <FavoritesProvider
        value={{ favorites, addFavorite, removeFavorite, isFavorite }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
