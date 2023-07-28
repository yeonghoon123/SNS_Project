import React, { useState } from "react";
import style from "../../css/account/newAccount.module.css";
import { useForm } from "react-hook-form";
import { TextField, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { errMessage } from "../../function/errorMessage";
import { getDateTime } from "../../function/getDateTime";

const NewAccount = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const firebaseMethod = useSelector((store) => store.firebaseMethod); // Redux store에 저장된 firebase 가져오기

    // 회원가입 입력 조건이 충족하면 firebase기능들을 실행
    const onSubmit = async (userAccount) => {
        setIsLoading(true);

        // firebase auth에 계정추가
        const createResponse = await firebaseMethod.authService
            .createUserWithEmailAndPassword(
                userAccount.userEmail,
                userAccount.userPw
            )
            .catch((err) => {
                errMessage(err.message);
            });

        if (createResponse) {
            const userInfo = createResponse.user; // 추가한 사용자 정보
            const nowDateTime = getDateTime(); //현재 시간 가져오기

            // 사용자 이메일로 인증 메일 전송
            await userInfo
                .sendEmailVerification()
                .catch((err) => errMessage(err.message));

            // firestore에 저장할 사용자 정보
            const userAccountObj = {
                user_create_date: nowDateTime,
                user_email: userAccount.userEmail,
                user_last_login: "",
                user_name: userAccount.userName,
                user_nickname: userAccount.userNickname,
                user_profile: "",
                user_uid: userInfo.uid,
                user_status: 1,
            };

            // firebase db에 저장
            await firebaseMethod.dbService
                .collection("user_account")
                .add(userAccountObj)
                .catch((err) => errMessage(err.message));

            const SwalResponse = await Swal.fire({
                text: "Congratulations on your subscription.\n We will send you a verification email. Available after authentication",
                icon: "success",
            });

            if (SwalResponse.isConfirmed) {
                return (document.location.href = "/login");
            }
        }
    };

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
                    <div className={style.new_account_input_container}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={style.form_input_area}>
                                <TextField
                                    type="text"
                                    placeholder="사용자 이메일"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userEmail", {
                                        required: "required field",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                                            message: "Please format your email",
                                        },
                                    })}
                                />
                                {errors.userEmail && (
                                    <span className={style.form_error_message}>
                                        {errors.userEmail.message}
                                    </span>
                                )}
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

                                {errors.userName && (
                                    <span className={style.form_error_message}>
                                        This field is required
                                    </span>
                                )}

                                <TextField
                                    type="text"
                                    placeholder="사용자 별명"
                                    size="small"
                                    margin="dense"
                                    className={style.form_input_box}
                                    {...register("userNickname", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]*$/,
                                            message:
                                                "Only English and numbers can be entered",
                                        },
                                    })}
                                />

                                {errors.userNickname && (
                                    <span className={style.form_error_message}>
                                        {errors.userNickname.message}
                                    </span>
                                )}

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
                                    <span className={style.form_error_message}>
                                        This field is required
                                    </span>
                                )}

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
                                        "가입"
                                    )}
                                </Button>
                            </div>
                        </form>
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
