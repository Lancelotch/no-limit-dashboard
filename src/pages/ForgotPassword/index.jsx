import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import Form from "./Form";
import logoNoLimit from "../../assets/image/image2.png";
import Text from "../../components/Text";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 80px"
  },
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function ForgotPassword() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={5}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <Text>Forgot Password</Text>
          <Form />
        </div>
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
