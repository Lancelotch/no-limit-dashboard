import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import { useFormik } from "formik";
import validationSchema from "./validationShema";
import { useRootContext } from "../../contexts/Root";

export default function FormSignup() {
  const { history } = useRootContext();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      history.push("/verify-account");
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
      >
        <TextField
          name="email"
          label="Email / Phone Number"
          margin="normal"
          onChange={handleChange}
          value={values.email}
          autoComplete={""}
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email ? errors.email : ""}
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          margin="normal"
          onChange={handleChange}
          value={values.password}
          autoComplete={""}
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
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </React.Fragment>
  );
}
