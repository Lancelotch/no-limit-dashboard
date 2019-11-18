import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    width: "1200px",
    position: "fixed",
    margin: "auto"
  },
  header: {
    position: "fixed",
    height: "15%",
    width: "100%",
    top: 0,
    left: 0
  },
  content: {
    position: "fixed",
    height: "70%",
    width: "100%",
    top: "124px",
    left: 0
  },
  bottom: {
    position: "fixed",
    height: "15%",
    width: "100%",
    bottom: "0",
    left: 0
  }
}));

export default function FullLayout(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.header}></div>
        <div className={classes.content}>{props.children}</div>
        <div className={classes.bottom}></div>
      </div>
    </React.Fragment>
  );
}
