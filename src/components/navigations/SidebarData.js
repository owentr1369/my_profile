import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <PersonIcon />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AccountTreeIcon />,
    cName: "nav-text",
  },
  {
    title: "Pictures",
    path: "/pictures",
    icon: <InsertPhotoIcon />,
    cName: "nav-text",
  },
];
