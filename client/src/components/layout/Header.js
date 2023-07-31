import React from "react";
import style from "../../css/layout/header.module.css";
import HeaderDesktop from "./header/HeaderDesktop";

const Header = () => {
    return (
        <div className={style.container}>
            <HeaderDesktop />
        </div>
    );
};

export default Header;
