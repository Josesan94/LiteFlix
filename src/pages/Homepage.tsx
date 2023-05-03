import React from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  ButtonProps,
  TypographyProps,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import MoviesList from "../components/Movies/MoviesList";
import useFetchMovies from "../hooks/useFetchMovies";
import { IMAGE_URL } from "../constants/api";
import NavBar from "../components/navBar";
import MoviesMenu from "../components/moviesMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";


const Homepage = () => {
  const { outstandingMovie } = useFetchMovies();

  const outStandingImage = `${IMAGE_URL}/w500${outstandingMovie?.poster_path}`;

  const CustomButtonReproduce = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: theme.palette.neutral.main,
    marginRight: 5,
  }));

  const CustomButtonMovies = styled(Button)<ButtonProps>(({ theme }) => ({
    marginRight: 5,
  }));

  const ButtonTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: "18px",
    lineHeight: "22px",
    letterSpacing: "4px",
  }));

  const BackgroundImage = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  const GradientBox = styled(Box)(({ theme }) => ({
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-200px", // Increase the height of the pseudo-element
      left: 0,
      width: "100%",
      height: "200px", // Match the height adjustment
      background: "linear-gradient(to bottom, rgba(36, 36, 36, 0) 0%, rgba(36, 36, 36, 1) 100%)",
      zIndex: 1,
    },
  }));

  return (
    <>
      <BackgroundImage
        style={{
          backgroundImage: `url(${outStandingImage})`,
        }}
      />
      <NavBar />
      <Stack
        mt={{ xs: 25, md: 2 }}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "center", md: "flex-end" }}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Stack
          mb={10}
          gap={2}
          flexDirection={"column"}
          alignItems={{ xs: "center", md: "baseline" }}
          justifyContent={{ xs: "center", md: "baseline" }}
          minWidth={{ sx: "342px" }}
        >
          <Typography
            color="primary"
            fontSize={"20px"}
            lineHeight={"20px"}
            letterSpacing={"4px"}
          >
            ORIGINAL DE <strong>LITEFLIX</strong>
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={{ xs: "76px", md: "120px" }}
            lineHeight={{ xs: "78px", md: "100px" }}
            letterSpacing={{ xs: "16px", md: "12px" }}
            textAlign={{ xs: "center", md: "inherit" }}
            color="secondary"
          >
            {outstandingMovie?.title}
          </Typography>
          <Stack
            gap={"24px"}
            mt={3}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <CustomButtonReproduce variant="contained">
              <Stack gap={1} mx={5} flexDirection={"row"} alignItems={"center"}>
                <PlayArrowOutlinedIcon color="primary" />
                <ButtonTypography my={1}>REPRODUCIR</ButtonTypography>
              </Stack>
            </CustomButtonReproduce>

            <CustomButtonMovies variant="outlined">
              <Stack
                gap={1}
                mx={6.5}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <AddOutlinedIcon />
                <ButtonTypography my={1}>MI LISTA</ButtonTypography>
              </Stack>
            </CustomButtonMovies>
          </Stack>
        </Stack>
        <Stack
          mt={5}
          flexDirection={"column"}
          alignItems={"center"}
          spacing={2}
        >
          <GradientBox
            sx={{
              position: { xs: "absolute", md: "static" },
              zIndex: { xs: -1, md: "auto" },
              width: "100%",
              backgroundColor: { xs: "#242424", md: "transparent" },
              padding: { xs: 15, md: 0 },
              marginTop: { xs: -20, md: 0 },
              
            }}
          >
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
            >
              <MoviesMenu/>
              <MoviesList listType="popularMovies" />
              <MoviesList listType="myMovies" />
            </Stack>
          </GradientBox>
        </Stack>
      </Stack>
    </>
  );
};

export default Homepage;
