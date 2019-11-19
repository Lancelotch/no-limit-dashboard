import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../Button";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";

export default function FormConfirmEmail({onSuccess}) {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      onSuccess();
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
          error={touched.email && errors.email ? true : false}
          helperText={touched.email && errors.email ? errors.email : ""}
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
          Sent
        </Button>
      </form>
    </React.Fragment>
  );
}
