import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme=>({
  root: {},
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  textMenu: {
    padding: '10px 0px',
    justifyContent: 'flex-start',
    width: '100%',
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
}));

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
            <div className={classes.icon}>{icon}</div>
            <ListItemText className={classes.textMenu} children={<Typography variant="h6">{text}</Typography>} />
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
