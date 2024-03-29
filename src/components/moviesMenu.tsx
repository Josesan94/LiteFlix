import React, { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import { ListType } from "../types/movies";

const options = ["Populares", "mis peliculas"];

interface MoviesMenuProps {
  onChangeListType: (listType: ListType) => void;
  selectedListType: ListType;
}

const MoviesMenu: React.FC<MoviesMenuProps> = ({
  onChangeListType,
  selectedListType,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setSelectedIndex(selectedListType === "popularMovies" ? 0 : 1);
  }, [selectedListType]);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    onChangeListType(index === 0 ? "popularMovies" : "myMovies");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ width: 250 }}
        >
          <ListItemText>
            <Typography
              color="primary"
              fontSize={"18px"}
              lineHeight={"18px"}
              letterSpacing={"4px"}
            >
              Ver:{" "}
              {selectedListType === "popularMovies" ? options[0] : options[1]}
            </Typography>
          </ListItemText>

          <ListItemText>
            <KeyboardArrowDownIcon color="primary" />
          </ListItemText>
        </ListItem>
      </List>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        PaperProps={{
          style: { width: 241, height: 96, backgroundColor: "#242424" },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: 10 }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
            sx={{
              paddingY: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontSize={"16px"}
              lineHeight={"16px"}
              letterSpacing={"4px"}
              color={"primary.main"}
              fontWeight={index === selectedIndex ? 700 : 200}
            >
              {option}
            </Typography>

            {index === selectedIndex ? <CheckIcon color="primary" /> : null}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoviesMenu;
