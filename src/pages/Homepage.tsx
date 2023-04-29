import React from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  ButtonProps,
  TypographyProps
} from "@mui/material";
import { styled } from "@mui/system";
import MoviesList from "../components/Movies/MoviesList";
import useFetchMovies from "../hooks/useFetchMovies";
import { IMAGE_URL } from "../constants/api";
import NavBar from "../components/navBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



const Homepage = () => {

  const { outstandingMovie } = useFetchMovies();

  const outStandingImage = `${IMAGE_URL}/w500${outstandingMovie?.poster_path}`;

  const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: theme.palette.neutral.main,
    marginRight: 5,
  }));


  const ButtonTypography = styled(Typography)<TypographyProps>(({theme}) => ({
    color: theme.palette.primary.main,
    fontSize:'18px',
    lineHeight:'22px',
    letterSpacing:'4px',
  }))
  return (
    <>
    <img
          src={outStandingImage}
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
          }}
        />
        <NavBar />
        <Stack
          mt={{xs:25,md:2}}
          flexDirection={{xs: "column",md:"row"}}
          alignItems={{xs: "center",md:"flex-end"}}
          justifyContent={{xs: "center",md:"space-between"}}
        >
          <Stack
            mb={10}
            gap={2}
            flexDirection={"column"}
            alignItems={{xs: "center",md:"baseline"}}
            justifyContent={{xs: "center",md:"baseline"}}
            minWidth={{sx:'342px'}}
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
              fontSize={{xs:'76px',md:"120px"}}
              lineHeight={{xs:"78px",md:"100px"}}
              letterSpacing={{xs:"16px",md:"12px"}}
              textAlign={{xs:'center', md:'inherit'}}
              color="secondary"
            >
              {/* {outstandingMovie?.title} */}
              LA CASA DE PAPEL
            </Typography>
            <Stack
              gap={"24px"}
              mt={3}
              flexDirection={{xs:"column",md:"row"}}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <CustomButton variant="contained">
                <Stack
                  gap={1}
                  mx={5}
                  flexDirection={"row"}
                  alignItems={"center"}
                >
                  <PlayArrowOutlinedIcon color="primary" />
                  <ButtonTypography
                    my={1}
                  >
                    REPRODUCIR
                  </ButtonTypography>
                </Stack>
              </CustomButton>

              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "rgba(36, 36, 36, 0.5);",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <Stack
                gap={1}
                mx={5}
                flexDirection={"row"}
                alignItems={"center"}
                >
                  <AddOutlinedIcon/>
                  <ButtonTypography
                    my={1}
                  >
                    MI LISTA
                  </ButtonTypography>
                </Stack>
              </Button>
            </Stack>
          </Stack>
          <Stack
            mt={5}
            flexDirection={"column"}
            alignItems={"center"}
            spacing={2}
          >
            <Stack flexDirection={"row"} alignItems={"center"}>
              <Typography
                color="primary"
                fontSize={"18px"}
                lineHeight={"18px"}
                letterSpacing={"4px"}
                variant="h6"
              >
                Ver: <strong>populares</strong>{" "}
              </Typography>
              <KeyboardArrowDownIcon color="primary" />
            </Stack>
            <MoviesList listType="popularMovies" />
            <MoviesList listType="myMovies" />
          </Stack>
        </Stack>
    
    </>
  )
}

export default Homepage