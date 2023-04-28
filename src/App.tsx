import { Container, Typography } from "@mui/material";
import MoviesList from "./components/Movies/MoviesList";
import useFetchMovies from "./hooks/useFetchMovies";
import { IMAGE_URL } from "./constants/api";
import NavBar from "./components/navBar";

function App() {
  const { outstandingMovie } = useFetchMovies();

  const outStandingImage = `${IMAGE_URL}/w500${outstandingMovie?.poster_path}`;

  return (
    <>
      <Container
        maxWidth='xl'
        style={{paddingLeft:'50px', paddingRight:'50px'}}
      >
        <img
        src={outStandingImage}
        alt="background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          objectFit: 'cover',
        }}
        />
        <NavBar/>
        <Typography variant="h6">Ver: populares</Typography>
        <MoviesList listType="popularMovies" />
        <MoviesList listType="myMovies" />
      </Container>
    </>
  );
}

export default App;
