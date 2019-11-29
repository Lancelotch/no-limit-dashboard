import React from 'react';
import uuid from "uuid/v4";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsIcon from "@material-ui/icons/Settings";

export const menus = [
  {
    id: uuid(),
    icon: <DashboardIcon />,
    text: "Report",
    subMenus: [
      { id: uuid(), text: "Content Performance" },
      { id: uuid(), text: "Compare" },
      { id: uuid(), text: "Campaign" },
      { id: uuid(), text: "Competitor" }
    ]
  },{
    id: uuid(),
    icon: <LiveTvIcon />,
    text: "Stream",
    subMenus: [
      { id: uuid(), text: "Content Performance" },
      { id: uuid(), text: "Compare" },
      { id: uuid(), text: "Campaign" },
      { id: uuid(), text: "Competitor" }
    ]
  },{
    id: uuid(),
    icon: <SettingsIcon />,
    text: "Setting",
    subMenus: [
      { id: uuid(), text: "Content Performance" },
      { id: uuid(), text: "Compare" },
      { id: uuid(), text: "Campaign" },
      { id: uuid(), text: "Competitor" }
    ]
  }
];

export const initialOpen = function(){
    return menus.map(()=>false);
}
