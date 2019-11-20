import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },text: {
    color: 'red'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <span className={classes.text}>Candra Darmawan</span>
      </div>
    </div>
  );
}