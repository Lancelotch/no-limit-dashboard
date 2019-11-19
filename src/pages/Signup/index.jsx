import React from "react";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import logoNoLimit from "../../assets/image/image2.png";
import TextButton from "../../components/TextButton";
import Text from "../../components/Text";
import { useRootContext } from "../../contexts/Root";
import FormSignup from "../../components/FormSignup";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 80px"
  },
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function Signup() {
  const classes = useStyles();
  const {history} = useRootContext();
  return (
    <Grid container>
      <Grid item md={5}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <FormSignup />
          <Divider />
          <Text>
            Already have account?{" "}
            <TextButton onClick={() => history.push('/login')}>
              Log In
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
