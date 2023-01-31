import style from "../../css/layout/footer.module.css";
import React from "react";

const Footer = () => {
    const textArr = ["김영훈", "깃허브", "블로그", "이메일"]; //footer에 기입할 텍스트 내용 배열
    return (
        <div className={style.container}>
            <div className={style.text_area}>
                {textArr.map((value, index) => {
                    return (
                        <div
                            className={style.text_box}
                            key={`footerText_${index}`}
                        >
                            <h6 className={style.text_value}>{value}</h6>
                        </div>
                    );
                })}
            </div>
            <div className={style.create_year_area}>
                <div className={style.create_year_box}>
                    <h6 className={style.create_year_value}>
                        CreateAt - 2023 V0.1
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;
