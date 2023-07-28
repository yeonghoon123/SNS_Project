import style from "../../css/layout/footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.create_year_area}>
                <div className={style.create_year_box}>
                    <h6 className={style.create_year_value}>
                        CreateAt - 2023 V0.3
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;
