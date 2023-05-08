import React, { useState } from "react";
import { useFormik } from "formik";
import { PopularMovie } from "../types/movies";
import useAddMovie from "../hooks/useAddMovie";
import HeroIcon from "./shared/heroIcon";
import {
  Slide,
  TextField,
  Box,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  useMediaQuery,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransitionProps } from "@mui/material/transitions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import LinearWithValueLabel from "./shared/LinearProgressBar";

type Props = {
  isOpen: boolean;
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

interface FormikConfig {
  title: string;
  image: File | null;
}

const textFieldStyle = {
  width: 248,
  fontSize: 16,
  lineHeight: 19,
  letterSpacing: 4,
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& fieldset": {
      display: "none",
    },
    "&:hover fieldset": {
      display: "none",
    },
    "&.Mui-focused fieldset": {
      display: "none",
    },
  },
  "& .MuiInputBase-input": {
    borderBottom: "1px solid #FFFF",
    color: "primary.main",
  },
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MovieModal: React.FC<Props> = ({ isOpen, handleClose }) => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { addMovie } = useAddMovie();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const formik = useFormik<FormikConfig>({
    initialValues: {
      title: "",
      image: null,
    },
    onSubmit: (values) => {
      const newMovie: PopularMovie = {
        id: Date.now(),
        title: values.title,
        backdrop_path: values.image?.name,
      };
      addMovie(newMovie);
      setSuccess(true);
    },
  });

  const handleFileUpload = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    formik.setFieldValue("image", file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadstart = () => {
      setLoading(true);
    };

    reader.onprogress = (event: any) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(progress);
      }
    };

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        formik.setFieldError("image", reader.result);
      } else {
        console.error("file reader result is not a string");
      }
    };
  };

  const isButtonDisabled = !formik.values.image || !formik.values.title;

  return (
    <>
      <Dialog
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth="md"
        TransitionComponent={Transition}
        fullScreen={true}
        sx={{
          "& .MuiDialog-paper": {
            margin: { xs: 0, sm: "auto" },
            borderRadius: 0,
            width: {
              xs: "100%",
              md: 730,
            },
            height: {
              xs: "100%",
              md: "auto",
            },
            minHeight: 440,
          },
        }}
      >
        <DialogContent
          sx={{
            background: "#242424",
            paddingX: { xs: 2, sm: 8 },
            paddingY: { xs: 0, sm: 2 },
          }}
        >
          <Box height={{ xs: "100%", md: "auto" }}>
            {isSmallScreen ? (
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                paddingX={2}
              >
                <IconButton onClick={(event) => handleClose(event)}>
                  <SegmentOutlinedIcon color="primary" />
                </IconButton>
                <Typography
                  fontSize={"28px"}
                  letterSpacing={"4px"}
                  lineHeight={"28px"}
                  color={"secondary"}
                  sx={{
                    flexGrow: 1,
                    display: { xs: "block", md: "none" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <strong>Lite</strong>Flix
                </Typography>
                <IconButton>
                  <HeroIcon />
                </IconButton>
              </Stack>
            ) : (
              <DialogActions
                sx={{ position: "absolute", top: 0, right: 0, width: 20 }}
              >
                <IconButton
                  color="primary"
                  onClick={(event) => handleClose(event)}
                >
                  <CloseIcon />
                </IconButton>
              </DialogActions>
            )}

            <Stack
              my={{ md: 5 }}
              direction={"column"}
              gap={{ xs: 0, md: 10 }}
              alignItems={"center"}
              justifyContent={{ xs: "space-around", md: "center" }}
              width={"100%"}
              height={{ xs: "80%", md: "auto" }}
            >
              <Typography
                color="secondary"
                fontWeight={success ? 400 : 700}
                fontSize={success ? "34px" : "20px"}
                lineHeight={success ? "34px" : "20px"}
                letterSpacing={"4px"}
              >
                {success ? (
                  <>
                    <Box component="span" fontWeight="bold">
                      lite
                    </Box>
                    flix
                  </>
                ) : (
                  "Agregar pelicula"
                )}
              </Typography>
              <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <Stack alignItems={"center"} justifyContent={"center"} gap={5}>
                  {success ? (
                    <Stack
                      direction={"column"}
                      gap={3}
                      alignItems={"center"}
                      textAlign={"center"}
                    >
                      <Typography
                        fontWeight={700}
                        fontSize={"24px"}
                        lineHeight={"26px"}
                        letterSpacing={"4px"}
                        color="primary.main"
                      >
                        ¡Felicitaciones!
                      </Typography>
                      <Typography
                        fontSize={"20px"}
                        lineHeight={"24px"}
                        letterSpacing={"4px"}
                        color="primary.main"
                      >
                        {formik.values.title} fue correctamente subida.
                      </Typography>
                    </Stack>
                  ) : loading ? (
                    <LinearWithValueLabel progress={uploadProgress} />
                  ) : (
                    <Button
                      sx={{
                        width: "100%",
                        height: "100px",
                        border: "1px dashed #FFFFFF",
                      }}
                      variant="outlined"
                      component="label"
                    >
                      <input
                        hidden
                        type="file"
                        name="image"
                        onChange={(e) => handleFileUpload(e)}
                      />
                      <IconButton
                        sx={{
                          transform: "rotate(-45deg)",
                        }}
                      >
                        <AttachFileIcon color="primary" />
                      </IconButton>
                      <Typography
                        fontSize={"16px"}
                        lineHeight={"16px"}
                        letterSpacing={"4px"}
                      >
                        {isSmallScreen
                          ? "Agregá un archivo"
                          : "Agregá un archivo o arrastralo y soltalo aquí"}
                      </Typography>
                    </Button>
                  )}

                  <Stack
                    direction={"column"}
                    gap={success ? 10 : 5}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {!success && (
                      <TextField
                        type="text"
                        sx={textFieldStyle}
                        name="title"
                        id="title"
                        placeholder="Titulo"
                        variant="outlined"
                        InputLabelProps={{
                          style: { textAlign: "center", color: "white" },
                          shrink: true,
                        }}
                        inputProps={{
                          style: { textAlign: "center", padding: 0 },
                        }}
                        onChange={formik.handleChange}
                        value={formik.values.title}
                      />
                    )}
                    <Button
                      variant="contained"
                      sx={{
                        background: isButtonDisabled
                          ? "rgba(128, 128, 128, 1) !important" // Change this to the desired background color when disabled
                          : "rgba(255, 255, 255, 1)",
                        color: "#242424 !important",
                        width: 248,
                        height: 56,
                      }}
                      type="submit"
                      disabled={isButtonDisabled}
                    >
                      <Typography
                        fontSize={"18px"}
                        lineHeight={"22px"}
                        letterSpacing={"4px"}
                      >
                        {!success ? "subir película" : "Ir al home"}
                      </Typography>
                    </Button>
                    {isSmallScreen && (
                      <Button
                        variant="outlined"
                        sx={{
                          color: "primary",
                          width: 248,
                          height: 56,
                        }}
                        onClick={(event) => handleClose(event)}
                      >
                        <Typography
                          fontSize={"18px"}
                          lineHeight={"22px"}
                          letterSpacing={"4px"}
                        >
                          Salir
                        </Typography>
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieModal;
