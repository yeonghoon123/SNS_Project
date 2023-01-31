import React, { useEffect } from "react";
import style from "../css/main/mainPost.module.css";
import MainPost from "../components/main/MainPost";

const MainPage = () => {
    return (
        <section>
            <div className={style.container}>
                <MainPost />
            </div>
        </section>
    );
};

export default MainPage;
