import React from "react";
import {withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {lightBlue} from '@material-ui/core/colors';
const primary = lightBlue['A200'];
const primaryHover = lightBlue['A700'];

const CustomeTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: primaryHover
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: primary
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: primaryHover
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: primaryHover
    }
  }
})(TextField);

export default function CustomizedInputs(props) {
  return <CustomeTextField {...props} />;
}
