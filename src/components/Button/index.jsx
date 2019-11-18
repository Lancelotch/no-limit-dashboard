import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ButtonMaterial from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

export default function Button(props) {
  //const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <ButtonMaterial {...props}>
        {props.children}
      </ButtonMaterial>
    </ThemeProvider>
  );
}
