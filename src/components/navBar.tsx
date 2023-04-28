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
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';import MoreIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            
            fontSize={"34px"}
            letterSpacing={"4px"}
            lineHeight={"34px"}
            color='secondary'
            sx={{ display: { xs: "none", sm: "block" }, paddingRight:10 }}
          >
            <strong>Lite</strong>Flix
          </Typography>
          <AddOutlinedIcon/>
          <Typography
            
            fontSize={"18px"}
            letterSpacing={"4px"}
            lineHeight={"18px"}
            sx={{paddingLeft:1 ,display: { xs: "none", sm: "block" } }}
          >
             Agregar pelicula
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <SegmentOutlinedIcon />
          </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                <NotificationsOutlinedIcon  />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
        <SideBar/>
      </AppBar>
    </Box>
  );
};

export default NavBar;
