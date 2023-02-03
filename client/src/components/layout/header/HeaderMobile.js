import React from "react";
import style from "../../../css/layout/header.module.css";
import { SearchIcon, HomeIcon } from "./IconTagList";
import { AddBox, NotificationsNone } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const HeaderMobile = () => {
    return (
        <div className={style.container}>
            <div className={style.mobile_top}>
                <div className={style.mobile_menu_content}>
                    <HomeIcon fontSize={"medium"} />
                </div>
                <div className={style.menu_alarm}>
                    <NotificationsNone />
                </div>
            </div>
            <div className={style.mobile_bottom}>
                <div className={style.mobile_menu_content}>
                    <HomeIcon />
                </div>
                <div className={style.mobile_menu_content}>
                    <SearchIcon fontSize={"medium"} />
                </div>
                <div className={style.mobile_menu_content}>
                    <AddBox />
                </div>
                <div className={style.mobile_menu_content}>
                    <a href={`/profile/Y_U_5_ME`}>
                        <Avatar src="/static/images/avatar/1.jpg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;
