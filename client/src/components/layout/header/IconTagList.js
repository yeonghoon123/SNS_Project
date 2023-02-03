import React, { useState } from "react";
import { Home, Search, Reorder } from "@mui/icons-material";
import { Popover, Typography } from "@mui/material";

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
            <Reorder fontSize={fontSize} onClick={handleClick} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                }}
            >
                <Typography sx={{ p: 2 }}>
                    The content of the Popover.
                </Typography>
            </Popover>
        </>
    );
};
