import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { Typography, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    left: {
      textAlign: "center"
    },
    landingText: {
      textDecoration: "none",
      fontWeight: 700,
      color: "#404040",
      letterSpacing: "0.35rem",
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    right: {
      textAlign: "center"
    },
    navButton: {
      textDecoration: "none",
      fontWeight: 700,
      color: "#404040",
      "&:hover": {
        color: theme.palette.primary.main,
        height: "100%"
      }
    },
    appBar: {
      background: theme.palette.background.default,
      boxShadow: "none",
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "rgba(0,0,0,.2)"
    },
    toolBar: {},
    menuItem: {
      fontWeight: "bold"
    }
  })
);

function MobileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          className={classes.menuItem}
          component={Link}
          onClick={handleClose}
          to="/skills"
        >
          SKILLS
        </MenuItem>
        <Divider />
        <MenuItem
          className={classes.menuItem}
          component={Link}
          onClick={handleClose}
          to="/experience"
        >
          EXPERIENCE
        </MenuItem>
        <Divider />
        <MenuItem
          className={classes.menuItem}
          component={Link}
          onClick={handleClose}
          to="/portfolio"
        >
          PORTFOLIO
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Grid item className={classes.left} md={2} xs={6}>
              <Typography variant="h5">
                <Link className={classes.landingText} to="/">
                  henrybyhee
                </Link>
              </Typography>
            </Grid>

            <Grid
              container
              item
              className={classes.right}
              direction="row"
              justify="space-evenly"
              xs={4}
              md={3}
            >
              <Hidden smDown>
                <Grid item>
                  <Link className={classes.navButton} to="/skills">
                    SKILLS
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.navButton} to="/experience">
                    EXPERIENCE
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.navButton} to="/portfolio">
                    PORTFOLIO
                  </Link>
                </Grid>
              </Hidden>

              <Hidden mdUp>
                {/** Mobile View */}
                <MobileMenu />
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
