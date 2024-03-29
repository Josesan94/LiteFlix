import React from "react";
import HeroIcon from "./shared/heroIcon";
import AddMovieButton from "./shared/AddMovieButton";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
  Stack,
  Badge,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

type Props = {
  openBar: boolean;
  handleDrawerClose: () => void;
  isOpenModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const navItems = [
  "Inicio",
  "Series",
  "Peliculas",
  "agregadas recientemente",
  "populares",
  "mis películas",
  "mi lista",
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const MotionDrawer = motion(Drawer);

const NavDrawer: React.FC<Props> = ({
  openBar,
  handleDrawerClose,
  isOpenModal,
  handleCloseModal,
  handleOpenModal,
}) => {
  return (
    <>
      <MotionDrawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "46%",
            backgroundColor: "rgba(36, 36, 36, 0.9)",
            color: "primary",
            paddingX: { xs: 2, md: 8 },
            paddingY: 3,
            "@media (max-width: 900px)": {
              width: "100%",
              backgroundColor: "rgba(36, 36, 36)",
            },
          },
        }}
        anchor="right"
        open={openBar}
        initial={{ x: "100%" }}
        animate={openBar ? { x: "0%" } : { x: "100%" }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <DrawerHeader>
          <Stack
            direction={"row"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon color="primary" />
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
                paddingY: 2,
              }}
            >
              <strong>Lite</strong>Flix
            </Typography>
            <Stack direction={"row"} paddingRight={3}>
              <IconButton
                size="large"
                color="primary"
                sx={{ display: { xs: "none", md: "block" }, marginRight: 1 }}
              >
                <Badge
                  color="secondary"
                  overlap="circular"
                  aria-label="notifications"
                  badgeContent=" "
                  variant="dot"
                >
                  <NotificationsOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton sx={{ borderRadius: "50%" }} color="inherit">
                <HeroIcon />
              </IconButton>
            </Stack>
          </Stack>
        </DrawerHeader>
        <Stack
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item} sx={{ paddingLeft: 0 }}>
                <ListItemButton
                  sx={{ textAlign: "justify", textTransform: "uppercase" }}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      fontSize: 22,
                      lineHeight: 22,
                      letterSpacing: 4,
                      color: "primary.main",
                      fontWeight: 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ paddingLeft: 0, marginTop: 2 }}>
              <ListItemButton>
                <AddMovieButton
                  isOpenModal={isOpenModal}
                  handleCloseModal={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemText
                sx={{
                  fontSize: 22,
                  lineHeight: 22,
                  letterSpacing: 4,
                  color: "primary.main",
                  marginTop: 3,
                  paddingLeft: 1,
                }}
              >
                Cerrar sesión
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </MotionDrawer>
    </>
  );
};

export default NavDrawer;
