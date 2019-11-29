import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import { useFormik } from "formik";
import validationSchema from "./validationShema";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 3)
  }
}));

export default function FormLogin({onSubmit}) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      onSubmit(values)
    }
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className={classes.form}
      >
        <TextField
          name="email"
          label="Email / Phone Number"
          onChange={handleChange}
          value={values.email}
          autoComplete="email"
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email ? errors.email : ""}
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
          value={values.password}
          autoComplete="current-password"
          error={touched.password && errors.password ? true : false}
          helperText={
            touched.password && errors.password ? errors.password : ""
          }
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          aria-label="add"
          type="submit"
          className={classes.submit}
          fullWidth
        >
          Log In
        </Button>
      </form>
    </React.Fragment>
  );
}
