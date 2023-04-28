import { useState, useEffect } from "react";
import axios from "axios";
import { Movie, PopularMovie } from "../types/movies";
import {
  API_KEY,
  OUTSTANDING_MOVIE_API,
  MOST_POPULAR_API,
} from "../constants/api";

function useFetchMovies() {
  const [outstandingMovie, setOutstadingMovie] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>([]);

  const getMovies = async () => {
    try {
      const outstadingResponse = await axios.get(
        `${OUTSTANDING_MOVIE_API}?api_key=${API_KEY}`
      );
      const outstandingMoviesData = outstadingResponse.data.results[6];

      const popularResponse = await axios.get(
        `${MOST_POPULAR_API}?api_key=${API_KEY}`
      )
      const popularMoviesData = popularResponse.data.results.slice(5, 9);

      setOutstadingMovie(outstandingMoviesData);
      setPopularMovies(popularMoviesData);
    } catch (err) {
      console.log("An error has ocurred", err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { outstandingMovie, popularMovies };
}

export default useFetchMovies;
