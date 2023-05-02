import  { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton, 
} from "@mui/material";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import HeroIcon from "./heroIcon";
import NavDrawer from "./Movies/Drawer";

const navItems = ["Home", "About", "Contact"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const NavBar = () => {
  const [openBar, setOpenbar] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpenbar(true);
  };

  const handleDrawerClose = () => {
    setOpenbar(false);
  };


  return (
    <>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
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
              sx={{ display: { xs: "none", md: "block" }, mr: 2, mt:1 }}
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
        <NavDrawer openBar={openBar} handleDrawerClose={handleDrawerClose}/>
      </AppBar>
    </>
  );
};

export default NavBar;
