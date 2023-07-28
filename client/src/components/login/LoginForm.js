import React, { useState } from "react";
import style from "../../css/account/loginForm.module.css";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { errMessage } from "../../function/errorMessage";
import { loginAccount } from "../../function/store";
import { getUserData } from "../../function/getUserData";

const LoginForm = () => {
    // 사용자가 입력한 데이터
    const [loginForm, setLoginForm] = useState({
        userEmail: "",
        userPw: "",
    });
    const [isLoading, setIsLoading] = useState(false); // 로그인 실행 스위치

    const dispatch = useDispatch();
    const firebaseMethod = useSelector((store) => store.firebaseMethod); // Redux store에 저장된 firebase 가져오기

    // 사용자 입력칸 데이터 가져오기
    const changeInputData = (event) => {
        const {
            target: { name, value },
        } = event;

        setLoginForm({ ...loginForm, [name]: value });
    };

    // 사용자 로그인 시도
    const userSignIn = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (loginForm.userEmail === "")
            return errMessage("Please enter a email.");

        if (loginForm.userPw === "")
            return errMessage("Please enter a password.");

        // 로그인 시도
        const loginResponse = await firebaseMethod.authService
            .signInWithEmailAndPassword(loginForm.userEmail, loginForm.userPw)
            .catch((err) => errMessage(err.message));

        if (!loginResponse) return;

        const userInfo = loginResponse.user;
        const userData = await getUserData(firebaseMethod, userInfo.uid);

        if (
            userInfo.emailVerified === true &&
            userData.data.user_status === 1
        ) {
            await firebaseMethod.dbService
                .doc(`user_account/${userData.userFbId}`)
                .update({
                    user_status: 2,
                });
        }

        dispatch(loginAccount(userData));
    };

    return (
        <div className={style.form_area}>
            <div className={style.login_form_area}>
                <div className={style.form_logo_area}>
                    <img
                        className={style.form_logo}
                        src={"img/login/loginBG.jpg"}
                    />
                </div>
                <div className={style.login_form}>
                    <form onSubmit={userSignIn}>
                        <div className={style.form_input_area}>
                            <TextField
                                type="text"
                                placeholder="사용자 이메일 또는 아이디"
                                size="small"
                                margin="dense"
                                name="userEmail"
                                className={style.form_input_box}
                                onChange={changeInputData}
                            />
                            <TextField
                                type="password"
                                placeholder="비밀번호"
                                size="small"
                                margin="dense"
                                name="userPw"
                                className={style.form_input_box}
                                onChange={changeInputData}
                            />
                            <Button
                                variant="contained"
                                disabled={false}
                                type="submit"
                                className={style.form_input_submit}
                            >
                                {isLoading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : (
                                    "로그인"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={style.form_new_account_area}>
                <h6>
                    계정이 없으신가요?{" "}
                    <Link to="/new-account">
                        <span>가입하기</span>
                    </Link>
                </h6>
            </div>
        </div>
    );
};

export default LoginForm;
