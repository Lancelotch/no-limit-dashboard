import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MuiDivider from "@material-ui/core/Divider";

const theme = createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        borderTop: "5px solid rgba(0, 0, 0, 0.12)"
      }
    }
  }
});

export default function Divider(props) {
  return (
    <ThemeProvider theme={theme}>
      <MuiDivider {...props} />
    </ThemeProvider>
  );
}
