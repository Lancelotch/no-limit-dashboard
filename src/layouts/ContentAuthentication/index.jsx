import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(_theme => ({
  root: {
    height: '100%'
  },
  border:{
    borderRight: '1px solid'
  },
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function ContentAuthentication({children, image}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={5} className={classes.border}>
        {children}
      </Grid>
      <Grid item md={7}>
        <Grid item container alignItems="center" justify="center" spacing={2}>
          <img
            src={image}
            alt= {""}
            className={classes.logoDashboard}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
