import React from "react";
import {HelpFontIcon, HomeFontIcon} from "@react-md/material-icons";

const createRoute = (to, name, icon, parentId = null) => ({
    to,
    itemId: to,
    parentId,
    children: name,
    leftIcon: icon
});

const navItems = {
    "/": createRoute("/", "Home", <HomeFontIcon/>),
    "/about": createRoute("/about", "About", <HelpFontIcon/>)
};

export default navItems;
