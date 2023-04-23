import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    "@media all": {
      minHeight: 128,
    },
  }));

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <StyledToobar>
            <MenuIcon />
          </StyledToobar>
        </AppBar>
      </Box>
      <Box>
        <AppBar></AppBar>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
