import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  },
  text: {
    color: blue[200],
  }
});

export default function TypographyAction(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="button"
        display="block"
        gutterBottom
        className={classes.text}
        onClick={props.onClick}
      >
        {props.children}
      </Typography>
    </div>
  );
}

TypographyAction.propTypes = {
    onClick: PropTypes.func
}

TypographyAction.defaultProps = {
    onClick : ()=>{}
}

