import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}!important`,
    },
    borderBottom: `1px solid ${theme.palette.white}`
  },
  textMenu: {
    padding: "10px 0px",
    justifyContent: "flex-start",
    width: "100%",
  },
  icon: {
    color: theme.palette.white,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  menu: {
    color: theme.palette.white
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

export default function SidebarNav({ menus }) {
  const initialOpen = menus.map((_, i) => (i === 0 ? true : false));
  const [opens, setOpens] = useState(initialOpen);
  const [selectedIndex, setSelectedIndex] = useState([0, 0]);
  const classes = useStyles();

  const updateOpens = function(index) {
    return opens.map((open, idx) => (index === idx ? !open : open));
  };

  const handleOpen = function(index) {
    const tempOpens = updateOpens(index);
    setOpens(tempOpens);
  };

  const handleListItemClick = function(event, selected){
    let tempSelectedIndex = selectedIndex;
    tempSelectedIndex = selected;
    setSelectedIndex(tempSelectedIndex);
  }

  return (
    <List className={classes.root}>
      {menus.map(({ id, icon, text, subMenus }, menuIndex) => (
        <div key={id}>
          <ListItem
            className={classes.item}
            button
            onClick={() => handleOpen(menuIndex)}
          >
            <div className={classes.icon}>{icon}</div>
            <ListItemText
              className={classes.textMenu}
              children={<Typography className={classes.menu} variant="h6">{text}</Typography>}
            />
            {opens[menuIndex] ? <ExpandLess className={classes.menu} /> : <ExpandMore className={classes.menu}/>}
          </ListItem>
          <Collapse in={opens[menuIndex]} timeout="auto" unmountOnExit>
            <List>
              {subMenus.map(({ id, text }, subMenuIndex) => (
                <ListItem
                  selected={
                    selectedIndex[0] === menuIndex &&
                    selectedIndex[1] === subMenuIndex
                  }
                  className={classes.active}
                  onClick={event => handleListItemClick(event, [menuIndex, subMenuIndex])}
                  button
                  key={id}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}
