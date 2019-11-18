import React from "react";
import TextField from '@material-ui/core/TextField';
//import TextField from "../../components/TextField";
import Button from "../../components/Button";
import logoNoLimit from "../../assets/image/image2.png";
import TextButton from "../../components/TextButton";
import { Grid } from "@material-ui/core";
import { useFormik } from "formik";
import validationSchema from "./validationShema";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });
  const { handleSubmit, handleChange, values, errors, touched } = formik;
  return (
    <React.Fragment>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid item md>
          <img src={logoNoLimit} alt="logo_no_limit" />
        </Grid>
        <Grid item md>
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
            <TextField
              name="password"
              type="password"
              label="Password"
              margin="normal"
              onChange={handleChange}
              value={values.password}
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
              Log In
            </Button>
          </form>
        </Grid>
        <Grid item md>
          <TextButton onClick={() => console.log("action")}>
            forgot Password
          </TextButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
