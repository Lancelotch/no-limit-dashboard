import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  }
}));

export default function MainLayout(props) {
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = function() {
    setOpenSidebar(true);
  };
  const handleSidebarClose = function() {
    setOpenSidebar(false);
  };
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      {props.children}
    </div>
  );
}
