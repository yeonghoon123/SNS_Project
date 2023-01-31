import React from "react";
import style from "../css/profile/userInfo.module.css";
import { Settings } from "@mui/icons-material";

const ProfilePage = () => {
    const userInfoTest = {
        userName: "김영훈",
        tagName: "y_u_5_me",
        userContent: "안녕하신지용",
        userEmail: "",
        userPhone: "010-2721-1059",
        count: {
            post: 8,
            follower: 9,
            following: 7,
        },
    };
    return (
        <section>
            <div className={style.container}>
                <div className={style.userInfo_container}>
                    <div className={style.profile_img_area}>
                        <img src="/img/tes.jpeg" />
                    </div>
                    <div className={style.profile_text_area}>
                        <div className={style.profile_text_content_row}>
                            <div className={style.profile_text_content}>
                                <h2>{userInfoTest.tagName}</h2>
                            </div>
                            <div className={style.profile_text_content}>
                                <button>프로필 편집</button>
                            </div>
                            <div className={style.profile_text_content}>
                                <Settings />
                            </div>
                        </div>
                        <div className={style.profile_text_content_row}>
                            <div className={style.profile_text_content2}>
                                게시물
                                <span className={style.profile_text_bold}>
                                    {userInfoTest.count.post}
                                </span>
                            </div>
                            <div className={style.profile_text_content2}>
                                팔로워
                                <span className={style.profile_text_bold}>
                                    {userInfoTest.count.follower}
                                </span>
                            </div>
                            <div className={style.profile_text_content2}>
                                팔로잉
                                <span className={style.profile_text_bold}>
                                    {userInfoTest.count.following}
                                </span>
                            </div>
                        </div>
                        <div className={style.profile_text_content_column}>
                            <div className={style.profile_text_content}>
                                <span>{userInfoTest.userName}</span>
                            </div>
                            <div className={style.profile_text_content}>
                                <span>{userInfoTest.userContent}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.userMoreInfo_navbar_container}>
                    <div className={`${style.userMoreInfo_navbar} navbar_text`}>
                        게시물
                    </div>
                    <div className={`${style.userMoreInfo_navbar} navbar_text`}>
                        저장됨
                    </div>
                    <div className={`${style.userMoreInfo_navbar} navbar_text`}>
                        태그됨
                    </div>
                </div>
                <div className={style.userMoreInfo_container}></div>
            </div>
        </section>
    );
};

export default ProfilePage;
