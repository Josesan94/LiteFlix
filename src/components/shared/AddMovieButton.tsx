import React from "react";
import MovieModal from "../addMovieModal";
import { Button, IconButton, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

type Props = {
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const AddMovieButton: React.FC<Props> = ({
  isOpenModal,
  handleCloseModal,
  handleOpenModal,
}) => {
  return (
    <>
      <Button
        onClick={handleOpenModal}
        sx={{
          "&:hover": {
            backgroundColor: "inherit",
          },
        }}
      >
        <IconButton sx={{ marginLeft: 5 }}>
          <AddOutlinedIcon color={"primary"} />
        </IconButton>
        <Typography
          fontSize={"18px"}
          letterSpacing={"4px"}
          lineHeight={"18px"}
          color="primary"
        >
          Agregar pelicula
        </Typography>
        {isOpenModal ? (
          <MovieModal isOpen={isOpenModal} handleClose={handleCloseModal} />
        ) : (
          ""
        )}
      </Button>
    </>
  );
};

export default AddMovieButton;
