import React from "react";
import { makeStyles, Divider } from "@material-ui/core";
import logoDashboard from "../../assets/image/image1.png";
import logoNoLimit from "../../assets/image/image2.png";
import TextButton from "../../components/TextButton";
import Text from "../../components/Text";
import { useRootContext } from "../../contexts/Root";
import FormSignup from "../../components/FormSignup";
import ContentAuthentication from "../../layouts/ContentAuthentication";

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(0, 10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function Signup() {
  const classes = useStyles();
  const { history } = useRootContext();
  const handleSubmit = function(values){
    console.log(values)
  }
  return (
    <ContentAuthentication image={logoDashboard}>
      <div className={classes.form}>
        <img src={logoNoLimit} alt="logo_no_limit" />
        <FormSignup onSubmit={handleSubmit} />
        <Divider />
        <Text>
          Already have account?{" "}
          <TextButton onClick={() => history.push("/login")}>Log In</TextButton>
        </Text>
      </div>
    </ContentAuthentication>
  );
}
