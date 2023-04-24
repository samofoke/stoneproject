import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import pngImage from "../../assets/images/SVGLogo.png";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    "@media all": {
      minHeight: 128,
    },
  }));

  const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#e5e5e5",
      color: "#fff",
    },
  }));

  const LogoImage = styled("img")({
    height: "60px",
  });

  const LinkBox = styled(Box)(({ theme, color }) => ({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1rem",
    mx: "auto",
    "& a": {
      textDecoration: "none",
      color: color || "inherit",
      padding: "0.5rem",
      transition: "all 0.3s ease-in-out",
      borderRadius: "0.25rem",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      },
    },
    "@media all and (max-width: 960px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "0 1rem",
      "& a": {
        margin: 0,
        flexGrow: 1,
      },
    },
  }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#e5e5e5" }}>
          <StyledToolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={isMenuOpen ? document.body : null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={isMenuOpen}
              onClose={handleMenuClick}
            >
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/celebrity-news"
                  style={{ color: "#111111", textDecoration: "none" }}
                >
                  Celebrity News
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/fashion"
                  style={{
                    color: "#111111",
                    textDecoration: "none",
                  }}
                >
                  Fashion
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/music"
                  style={{ color: "#111111", textDecoration: "none" }}
                >
                  Music
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/tv"
                  style={{ color: "#111111", textDecoration: "none" }}
                >
                  TV
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/international"
                  style={{ color: "#111111", textDecoration: "none" }}
                >
                  International
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClick}>
                <a
                  href="/podcast"
                  style={{ color: "#111111", textDecoration: "none" }}
                >
                  Podcast
                </a>
              </MenuItem>
            </StyledMenu>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a href="/">
                    <LogoImage src={pngImage} alt="Logo" />
                  </a>
                </Typography>

                <LinkBox sx={{ mt: 2 }} color="#1b1b1b">
                  <Link variant="body1" sx={{ mx: 2 }} to="/celebrity-news">
                    Celebrity News
                  </Link>
                  <Link variant="body1" sx={{ mx: 2 }} to="/fashion">
                    Fashion
                  </Link>
                  <Link variant="body1" sx={{ mx: 2 }} to="/music">
                    Music
                  </Link>
                  <Link variant="body1" sx={{ mx: 2 }} to="/tv">
                    TV
                  </Link>
                </LinkBox>
              </Box>
            </Box>
          </StyledToolbar>
        </AppBar>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
