import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import logoNoLimit from "../../assets/image/image2.png";
import Text from "../../components/Text";
import { useRootContext } from "../../contexts/Root";
import Button from "../../components/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 80px"
  },
  logoDashboard: {
    width: "464px",
    height: "464px"
  }
}));

export default function ConnectSocialMedia() {
  const classes = useStyles();
  const { history } = useRootContext();
  return (
    <Grid container>
      <Grid item md={6}>
        <div className={classes.root}>
          <img src={logoNoLimit} alt="logo_no_limit" />
          <Text>Connect Social Media</Text>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            aria-label="add"
            onClick={() => history.push("/dashboard")}
          >
            Finish
          </Button>
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
