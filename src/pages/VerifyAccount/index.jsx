import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import logoDashboard from "../../assets/image/image3.png";
import logoNoLimit from "../../assets/image/image2.png";
import Text from "../../components/Text";
import { useRootContext } from "../../contexts/Root";
import FormVerifyConfirm from "../../components/FormVerifyConfirm";
import FormVerifyEmail from "../../components/FormVerifyEmail";
import FormVerifySuccess from "../../components/FormVerifySuccess";
import { useMachine } from "@xstate/react";
import verifyAccountMachine from "./machine";
const machine = verifyAccountMachine();

const useStyles = makeStyles(_theme => ({
  root: {
    margin: "0 96px"
  },
  logoDashboard: {
    width: "480px",
    height: "400px"
  }
}));

export default function VerifyAccount() {
  const [current, send] = useMachine(machine);
  const classes = useStyles();
  const { history } = useRootContext();
  return (
    <Grid container>
      <Grid item md={6}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <Text>Verify Account</Text>
          {(current.value === "verifyEmail" ||
            current.value === "loadingVerify") && (
            <FormVerifyEmail
              onSubmit={() => send("SUBMIT")}
              loading={current.matches("loadingVerify")}
            />
          )}
          {(current.value === "confirmEmail" ||
            current.value === "loadingConfirm") && (
            <FormVerifyConfirm
              onSubmit={value => {
                send("SUBMIT");
              }}
              loading={current.matches("loadingConfirm")}
            />
          )}
          {current.value === "next" && (
            <FormVerifySuccess onClick={() => history.push("/connect-social-media")} />
          )}
        </div>
      </Grid>
      <Grid item md={6}>
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
