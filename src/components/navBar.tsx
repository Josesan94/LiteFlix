import { useEffect, useState } from "react";
import NavDrawer from "./Drawer";
import HeroIcon from "./shared/heroIcon";
import AddMovieButton from "./shared/AddMovieButton";
import { motion } from "framer-motion";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from "@mui/material";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NavBar = () => {
  const [openBar, setOpenbar] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
  }, []);

  const handleDrawerOpen = () => {
    setOpenbar(true);
  };

  const handleDrawerClose = () => {
    setOpenbar(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenModal(false);
  };

  const MotionAppBar = motion(AppBar);

  return (
    <>
      <MotionAppBar
        initial={
          initialRender ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
        }
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        position="static"
        sx={{ background: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            <SegmentOutlinedIcon />
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
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "flex-start",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              fontSize={"34px"}
              letterSpacing={"4px"}
              lineHeight={"34px"}
              color={"secondary"}
            >
              <strong>Lite</strong>Flix
            </Typography>
            <AddMovieButton
              isOpenModal={isOpenModal}
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              color="primary"
              onClick={handleDrawerOpen}
              sx={{ display: { xs: "none", md: "block" }, mr: 2, mt: 1 }}
            >
              <SegmentOutlinedIcon />
            </IconButton>
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
          </Box>
        </Toolbar>
        <NavDrawer
          isOpenModal={isOpenModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          openBar={openBar}
          handleDrawerClose={handleDrawerClose}
        />
      </MotionAppBar>
    </>
  );
};

export default NavBar;
