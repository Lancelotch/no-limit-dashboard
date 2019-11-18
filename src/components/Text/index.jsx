import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import { blue } from "@material-ui/core/colors";
//import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

export default function Text(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" display="inline">
        {props.children}
      </Typography>
    </div>
  );
}
