import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import { useFormik } from "formik";
import validationSchema from "../FormLogin/validationShema";
//import { useRootContext } from "../../contexts/Root";

export default function FormChangePassword() {
  //const { history } = useRootContext();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
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
          name="newPassword"
          type="password"
          label="New Password"
          margin="normal"
          onChange={handleChange}
          value={values.newPassword}
          autoComplete={""}
          error={touched.newPassword && errors.newPassword ? true : false}
          helperText={
            touched.newPassword && errors.newPassword ? errors.newPassword : ""
          }
          fullWidth
        />
        <TextField
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          margin="normal"
          onChange={handleChange}
          value={values.confirmPassword}
          autoComplete={""}
          error={
            touched.confirmPassword && errors.confirmPassword ? true : false
          }
          helperText={
            touched.confirmPassword && errors.confirmPassword
              ? errors.confirmPassword
              : ""
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
          Log In
        </Button>
      </form>
    </React.Fragment>
  );
}
