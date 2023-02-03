import React from "react";
import style from "../../css/layout/header.module.css";
import HeaderDesktop from "./header/HeaderDesktop";
import HeaderMobile from "./header/HeaderMobile";

const Header = () => {
    return (
        <div className={style.container}>
            <HeaderDesktop />
            <HeaderMobile />
        </div>
    );
};

export default Header;
