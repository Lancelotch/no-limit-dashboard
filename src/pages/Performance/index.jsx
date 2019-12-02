import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardAnalytics from "../../components/CardAnalytics";
import MoneyIcon from "@material-ui/icons/Money";
import DifferentAnalytics from "../../components/DifferentAnalytics";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  card: {}
}));

export default function Performance() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <CardAnalytics
            icon={<MoneyIcon />}
            mainValues="20%"
            title="Total Folowers"
          >
            <DifferentAnalytics
              progress="up"
              differenceValues="30%"
              text="Naik bulan ini"
            />
          </CardAnalytics>
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <CardAnalytics
            icon={<MoneyIcon />}
            mainValues="20%"
            title="Total Folowers"
          >
            <DifferentAnalytics
              progress="up"
              differenceValues="30%"
              text="Naik bulan ini"
            />
          </CardAnalytics>
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <CardAnalytics
            icon={<MoneyIcon />}
            mainValues="20%"
            title="Total Folowers"
          >
            <DifferentAnalytics
              progress="up"
              differenceValues="30%"
              text="Naik bulan ini"
            />
          </CardAnalytics>
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <CardAnalytics
            icon={<MoneyIcon />}
            mainValues="20%"
            title="Total Folowers"
          >
            <DifferentAnalytics
              progress="up"
              differenceValues="30%"
              text="Naik bulan ini"
            />
          </CardAnalytics>
        </Grid>
      </Grid>
    </div>
  );
}
