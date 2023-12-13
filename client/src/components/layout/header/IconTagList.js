import React, { useState } from "react";
import { Home, Search, Reorder } from "@mui/icons-material";
import {
    Popover,
    ListItemButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logoutAccount } from "../../../function/store";
import style from "../../../css/layout/header.module.css";

export const SearchIcon = ({ fontSize }) => {
    return (
        <>
            <Search fontSize={fontSize} />
        </>
    );
};

export const HomeIcon = ({ fontSize }) => {
    return (
        <>
            <a href={"/"}>
                <Home fontSize={fontSize} />
            </a>
        </>
    );
};

export const ReorderIcon = ({ fontSize }) => {
    const [anchorEl, setAnchorEl] = useState(null); // popOver할 대상 변수
    const firebaseMethod = useSelector((store) => store.firebaseMethod); // Redux store에 저장된 firebase 가져오기
    const dispatch = useDispatch();

    const signOut = async () => {
        await firebaseMethod.authService.signOut();
        dispatch(logoutAccount());
        document.location.href = "/";
    };

    /** 이벤트가 실행되면 Popover띄우는 함수, Input: event */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    /** 이벤트가 실행되면 Popover내리는 함수, */
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl); // Popover 띄우는 스위치
    const id = open ? "simple-popover" : undefined; // Popover에 적용되는 대싱에 id
    return (
        <>
            <div
                onClick={handleClick}
                className={`${style.menu_content} ${style.menu_content_more}`}
            >
                <Reorder fontSize={fontSize} />
                <span>더보기</span>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/profile/fixed">
                            <ListItemText primary="프로필 수정" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={signOut}>
                        <ListItemButton>
                            <ListItemText primary="로그아웃" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Popover>
        </>
    );
};
