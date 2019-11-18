import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import FormLogin from "./Form";

const useStyles = makeStyles(theme => ({
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={5}>
        <FormLogin />
      </Grid>
      <Grid item md={7}>
        <Grid item container alignItems="center" justify="center" spacing={2}>
          <img
            src={logoDashboard}
            alt="logo_no_limit"
            className={classes.logoDashboard}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
