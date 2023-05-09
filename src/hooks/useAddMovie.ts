import { useState, useEffect } from "react";
import { PopularMovie } from "../types/movies";

function useAddMovie() {
  const [storedMovies, setStoredMovies] = useState<PopularMovie[]>([]);

  const addMovie = (movie: PopularMovie) => {
    const newList = [...storedMovies, movie];

    setStoredMovies(newList);
    localStorage.setItem("createdMovies", JSON.stringify(newList));
  };

  useEffect(() => {
    const createdMovies = localStorage.getItem("createdMovies");

    if (createdMovies !== null) {
      const parsedMovies = JSON.parse(createdMovies);

      setStoredMovies(parsedMovies);
    }
  }, []);

  return { storedMovies, addMovie };
}

export default useAddMovie;
