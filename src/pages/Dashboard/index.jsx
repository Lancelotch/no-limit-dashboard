import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import TextField from '../../components/TextField';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField />
      </div>
    </div>
  );
}