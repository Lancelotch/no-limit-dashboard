import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import FormConfirmEmail from "../../components/FormConfirmEmail";
import logoNoLimit from "../../assets/image/image2.png";
import Text from "../../components/Text";
import FormChangePassword from "../../components/FormChangePassword";
import TextButton from "../../components/TextButton";
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

export default function ForgotPassword() {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const {history} = useRootContext();
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={5}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <Text>Forgot Password</Text>
          {isEmailVerified ? <FormChangePassword /> : <FormConfirmEmail onSuccess={()=>setIsEmailVerified(!isEmailVerified)}/>}
          <TextButton onClick={()=>history.push('/login')}>Back To Log In</TextButton>
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
