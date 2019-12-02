import red from '@material-ui/core/colors/red';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';


const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: lightBlue[900],
    main: lightBlue[600],
    light: lightBlue[100]
  },
  secondary: {
    contrastText: white,
    dark: blue[900],
    main: blue['A400'],
    light: blue['A400']
  },
  success: {
    contrastText: white,
    dark: green[900],
    main: green[600],
    light: green[400]
  },
  info: {
    contrastText: white,
    dark: blue[900],
    main: blue[600],
    light: blue[400]
  },
  warning: {
    contrastText: white,
    dark: orange[900],
    main: orange[600],
    light: orange[400]
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400]
  },
  text: {
    primary: blueGrey[800],
    secondary: blueGrey[600],
    link: blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: blueGrey[600],
  divider: grey[200]
};
