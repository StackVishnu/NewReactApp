import React, { createContext, useState, useContext } from "react";

const GenreContext = createContext();
export const GenreProvider = ({ children }) => {
  const [genreText, setGenreText] = useState("");

  return (
    <GenreContext.Provider value={{ genreText, setGenreText }}>
      {children}
    </GenreContext.Provider>
  );
};
export const useGenre = () => useContext(GenreContext);
