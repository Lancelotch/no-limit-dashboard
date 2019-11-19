import React from "react";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import FormLogin from "../../components/FormLogin";
import logoNoLimit from "../../assets/image/image2.png";
import TextButton from "../../components/TextButton";
import Text from "../../components/Text";
import { useRootContext } from "../../contexts/Root";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 80px"
  },
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function Login() {
  const classes = useStyles();
  const {history} = useRootContext();
  return (
    <Grid container>
      <Grid item md={5}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <FormLogin />
          <TextButton onClick={() => history.push('/forgot-password')}>
            Forgot Password ?
          </TextButton>
          <Divider />
          <Text>
            Don't have an account?{" "}
            <TextButton onClick={() => console.log("action")}>
              Sign Up
            </TextButton>
          </Text>
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
