import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id, genre, title) => {
    setFavorites((prevFavorites) => [...prevFavorites, { id, genre, title }]);
    console.log(favorites);
  };

  const removeFavorite = (title) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.title !== title)
    );
  };
  const isInFavorites = (title) => {
    return favorites.some((movie) => movie.title === title);
  };
  {
    console.log(favorites);
  }
  return (
    <FavoritesContext.Provider
      value={{ isInFavorites, addFavorite, removeFavorite, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
