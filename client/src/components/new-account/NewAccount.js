import React from "react";
import style from "../../css/account/newAccount.module.css";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NewAccount = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={style.container}>
            <div className={style.form_area}>
                <div className={style.new_account_form_area}>
                    <div className={style.form_logo_area}>
                        <img
                            className={style.form_logo}
                            src={"img/login/loginBG.jpg"}
                        />
                    </div>
                    <div className={style.login_form}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={style.form_input_area}>
                                <TextField
                                    type="text"
                                    placeholder="사용자 이메일 또는 아이디"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userId", { required: true })}
                                />
                                <TextField
                                    type="text"
                                    placeholder="성명"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userName", {
                                        required: true,
                                    })}
                                />
                                <TextField
                                    type="text"
                                    placeholder="사용자 이름"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userNickname", {
                                        required: true,
                                    })}
                                />
                                <TextField
                                    type="password"
                                    placeholder="비밀번호"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userPw", {
                                        required: {
                                            value: true,
                                            message: "required",
                                        },
                                    })}
                                />
                                {errors.userPw && (
                                    <span role="alert">
                                        This field is required
                                    </span>
                                )}
                                <Button
                                    variant="contained"
                                    disabled={false}
                                    type="submit"
                                    className={style.form_input_submit}
                                >
                                    가입
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
                        <div className={style.social_new_account_form}>
                            <div className={style.social_new_account_content}>
                                <div className={style.social_new_account_logo}>
                                    <GitHub />
                                </div>
                                <div className={style.social_new_account_text}>
                                    GitHub로 회원 가입
                                </div>
                            </div>
                            <div className={style.social_new_account_content}>
                                <div className={style.social_new_account_logo}>
                                    <Google />
                                </div>
                                <div className={style.social_new_account_text}>
                                    Google로 회원 가입
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.form_new_account_area}>
                    <h6>
                        계정이 있으신가요?
                        <Link to="/login">
                            <span>로그인</span>
                        </Link>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default NewAccount;
