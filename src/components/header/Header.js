/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./HeaderStyles";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // let isLoggedIn = true; // Simulated login status
  const userRole = "admin"; // Simulated user role

  const handleLogout = () => {
    // Perform logout actions if needed
    // For now, we'll just redirect to the login page
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          BookFlow
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        {isLoggedIn ? (
          <>
            {userRole === "admin" ? (
              <Link
                to="/admin"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Admin Panel
              </Link>
            ) : (
              <Link
                to="/student"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Student Panel
              </Link>
            )}
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>
            <Link
              to="/signup" // Add a route for the sign-up page
              style={{
                marginLeft: "16px", // Add some spacing between Login and Sign Up links
                textDecoration: "none",
                color: "inherit"
              }}
            >
              Sign Up
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
