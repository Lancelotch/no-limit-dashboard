import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyle = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  }
}));

export default function Topbar({ onSidebarOpen }) {
  const classes = useStyle();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
