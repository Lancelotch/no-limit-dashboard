import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  }
}));

export default function CardAnalytics({
  title,
  mainValues,
  icon,
  children,
  className,
  ...rest
}) {
  const classes = useStyles();
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
            <Typography variant="h3">{mainValues}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>{icon}</Avatar>
          </Grid>
        </Grid>
        {children}
      </CardContent>
    </Card>
  );
}

CardAnalytics.propTypes = {
  title: PropTypes.string,
  mainValues: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
};
