import { createContext, useContext } from "react";

export const FavoritesContext = createContext({
  favorites: [],

  addFavorite: (movie) => {},

  removeFavorite: (id) => {},

  isFavorite: (id) => {},
});

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = FavoritesContext.Provider;
