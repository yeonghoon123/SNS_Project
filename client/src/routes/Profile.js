import React from "react";
import style from "../css/profile/userInfo.module.css";
import ProfileInfoDesktop from "../components/profile/ProfileInfoDesktop";
import ProfileInfoMobile from "../components/profile/ProfileInfoMobile";
import ProfilePost from "../components/profile/ProfilePost";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
    let navigate = useNavigate();
    let getUrlParams = useParams();

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
                <ProfileInfoDesktop
                    props={{ userInfoTest, navigate, getUrlParams }}
                />
                <ProfileInfoMobile
                    props={{ userInfoTest, navigate, getUrlParams }}
                />
                <ProfilePost />
            </div>
        </section>
    );
};

export default ProfilePage;
