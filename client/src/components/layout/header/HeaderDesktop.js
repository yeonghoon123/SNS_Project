import React, { useState } from "react";
import style from "../../../css/layout/header.module.css";
import { HomeIcon, ReorderIcon } from "./IconTagList";
import NewPost from "./NewPost";
import { AddBox, NotificationsNone, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const HeaderDesktop = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={style.container}>
            <div className={style.menu_content_container}>
                <div className={style.menu_content_logo}>
                    <HomeIcon fontSize={"large"} />
                </div>
                <div className={style.menu_content_area}>
                    <div className={style.menu_content}>
                        <HomeIcon fontSize={"large"} />
                        <span>홈</span>
                    </div>
                    <div className={style.menu_content}>
                        <Search fontSize="large" />
                        <span>검색</span>
                    </div>
                    <div
                        className={style.menu_content}
                        onClick={() => setModalOpen(true)}
                    >
                        <NewPost props={{ modalOpen, setModalOpen }} />
                    </div>
                    <div className={style.menu_content}>
                        <NotificationsNone fontSize="large" />
                        <span>알림</span>
                    </div>
                    <div className={style.menu_content}>
                        <a href={`/profile/Y_U_5_ME`}>
                            <Avatar src="/static/images/avatar/1.jpg" />
                            <span>프로필</span>
                        </a>
                    </div>
                </div>
                <ReorderIcon fontSize={"large"} />
            </div>
        </div>
    );
};

export default HeaderDesktop;
