import React from "react";
import style from "../../css/account/loginForm.module.css";
import { TextField, Button } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
                    <form>
                        <div className={style.form_input_area}>
                            <TextField
                                type="text"
                                placeholder="사용자 이메일 또는 아이디"
                                size="small"
                                margin="dense"
                                className={style.form_input_box}
                            />
                            <TextField
                                type="password"
                                placeholder="비밀번호"
                                size="small"
                                margin="dense"
                                className={style.form_input_box}
                            />
                            <Button
                                variant="contained"
                                disabled={false}
                                type="submit"
                                className={style.form_input_submit}
                            >
                                로그인
                            </Button>
                        </div>
                    </form>
                    <div className={style.form_divison_area}>
                        <div className={style.form_division_line}>
                            <hr />
                        </div>
                        <div className={style.form_division_text}>또는</div>
                        <div className={style.form_division_line}>
                            <hr />
                        </div>
                    </div>
                    <div className={style.social_login_form}>
                        <div className={style.social_login_content}>
                            <div className={style.social_login_logo}>
                                <GitHub />
                            </div>
                            <div className={style.social_login_text}>
                                GitHub로 로그인
                            </div>
                        </div>
                        <div className={style.social_login_content}>
                            <div className={style.social_login_logo}>
                                <Google />
                            </div>
                            <div className={style.social_login_text}>
                                Google로 로그인
                            </div>
                        </div>
                    </div>
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
