import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  }
});

export default function SidebarNav({menus}) {
  const initialOpen = menus.map(()=>false);
  const [opens, setOpens] = useState(initialOpen);
  const classes = useStyles();

  const updateOpens = function(index) {
    return opens.map((open, idx) => (index === idx ? !open : open));
  };

  const handleOpen = function(index) {
    const tempOpens = updateOpens(index);
    setOpens(tempOpens);
  };

  return (
    <List className={classes.root}>
      {menus.map(({ id, icon, text, subMenus }, index) => (
        <div key={id}>
          <ListItem
            className={classes.item}
            button
            onClick={() => handleOpen(index)}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
            {opens[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={opens[index]} timeout="auto" unmountOnExit>
            <List>
              {subMenus.map(({ id, text }) => (
                <ListItem button key={id}>
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
