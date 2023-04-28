import React from "react";
import useFetchMovies from "../../hooks/useFetchMovies";
import useAddMovie from "../../hooks/useAddMovie";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";
import { PopularMovie } from "../../types/movies";

type ListType = "popularMovies" | "myMovies";

interface MovieListProps {
  listType: ListType;
}

const MoviesList: React.FC<MovieListProps> = ({ listType }) => {
  const { popularMovies } = useFetchMovies();
  const { storedMovies } = useAddMovie();

  const movies:PopularMovie[] = listType === "popularMovies" ? popularMovies : storedMovies;

  return (
    <Grid container spacing={2} maxWidth={'250px'}>
      {movies?.map((movie) => (
        <Grid item key={movie.id} xs={12}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MoviesList;
