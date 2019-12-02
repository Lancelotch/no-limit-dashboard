import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

export default function DifferentAnalytics({
  progress,
  differenceValues,
  text
}) {
  const classes = useStyles();
  return (
    <div className={classes.difference}>
      {progress === "up" ? (
        <ArrowUpwardIcon className={classes.differenceIcon} />
      ) : (
        <ArrowDownwardIcon className={classes.differenceIcon} />
      )}
      <Typography className={classes.differenceValue} variant="body2">
        {differenceValues}
      </Typography>
      <Typography className={classes.caption} variant="caption">
        {text}
      </Typography>
    </div>
  );
}

DifferentAnalytics.propTypes = {
  progress: PropTypes.string,
  differenceValues: PropTypes.string,
  text: PropTypes.string
};
