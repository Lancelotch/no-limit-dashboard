import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import FormLogin from "../../components/FormLogin";
import logoNoLimit from "../../assets/image/image2.png";
import TextButton from "../../components/TextButton";
import { useRootContext } from "../../contexts/Root";
import ContentAuthentication from "../../layouts/ContentAuthentication";

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(0, 10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Login() {
  const classes = useStyles();
  const { history } = useRootContext();

  const handleSubmit = function(value){
    console.log(value);
    history.push('/dashboard');
  }

  return (
    <ContentAuthentication image={logoDashboard}>
      <div className={classes.form}>
        <img src={logoNoLimit} alt="logo_no_limit" />
        <FormLogin onSubmit={handleSubmit}/>
        <TextButton onClick={() => history.push("/forgot-password")}>
          Forgot Password ?
        </TextButton>
        <Typography>
          Don't have an account?{" "}
          <TextButton onClick={() => history.push("/signup")}>
            Sign Up
          </TextButton>
        </Typography>
      </div>
    </ContentAuthentication>
  );
}
