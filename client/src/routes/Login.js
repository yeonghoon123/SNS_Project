import React from "react";
import style from "../css/account/loginForm.module.css";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
    return (
        <section>
            <div className={style.container}>
                <div className={style.img_area}>
                    <img src="img/login/loginBG.jpg" />
                </div>
                <LoginForm />
            </div>
        </section>
    );
};

export default LoginPage;
