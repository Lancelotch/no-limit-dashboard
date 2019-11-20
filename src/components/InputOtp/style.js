import { makeStyles } from "@material-ui/core";
import {lightBlue} from '@material-ui/core/colors';
const primary = lightBlue['A200'];

export const useStyles = makeStyles(_theme => ({
  inputOtp: {
    borderTopStyle: "hidden",
    borderRightStyle: "hidden",
    borderLeftStyle: "hidden",
    borderBottomColor: primary,
    textAlign: "center",
    fontSize: "48px",
    margin: "24px 6px",
    "&:focus": {
      outline: "none"
    }
  }
}));
