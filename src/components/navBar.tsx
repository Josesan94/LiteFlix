import React, { useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
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
  Button,
  IconButton,
} from "@mui/material";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Image from '../assets/vite.svg'
import HeroIcon from "./heroIcon";


const navItems = ["Home", "About", "Contact"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
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

  const SideBar = () => {
    return (
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
        variant="persistent"
        anchor="right"
        open={openBar}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{paddingLeft:"0px !important"}}>
          <Typography
            fontSize={"34px"}
            letterSpacing={"4px"}
            lineHeight={"34px"}
            color="secondary"
            sx={{ display: { xs: "none", sm: "block" }, paddingRight: 10 }}
          >
            <strong>Lite</strong>Flix
          </Typography>
          <AddOutlinedIcon color="primary" />
          <Typography
            fontSize={"18px"}
            letterSpacing={"4px"}
            lineHeight={"18px"}
            color="primary"
            sx={{ paddingLeft: 1, display: { xs: "none", sm: "block" } }}
          >
            Agregar pelicula
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" }, gap:1 }}>
            <IconButton
              size="large"
              edge="end"
              color="primary"
              onClick={handleDrawerOpen}
              sx={{ mr: 1 }}
            >
              <SegmentOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="primary"
            >
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                variant="dot"
              >
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{borderRadius:'50%'}} size="large" edge="end" color="primary">
              <HeroIcon  />
            </IconButton>
          </Box>
        </Toolbar>
        <SideBar />
      </AppBar>
    </Box>
  );
};

export default NavBar;
