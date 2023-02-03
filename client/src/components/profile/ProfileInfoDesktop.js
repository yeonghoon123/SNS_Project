import React from "react";
import style from "../../css/profile/profileInfoDesktop.module.css";

const ProfileInfoDesktop = ({ props }) => {
    const { userInfoTest, navigate, getUrlParams } = props;

    return (
        <>
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
                <div
                    onClick={() => navigate(`/profile/${userInfoTest.tagName}`)}
                    className={`${style.userMoreInfo_navbar} ${
                        !getUrlParams.postKind ? "select_navbar" : "navbar_text"
                    }`}
                >
                    게시물
                </div>

                <div
                    onClick={() =>
                        navigate(`/profile/${userInfoTest.tagName}/saved`)
                    }
                    className={`${style.userMoreInfo_navbar} ${
                        getUrlParams.postKind === "saved"
                            ? "select_navbar"
                            : "navbar_text"
                    }`}
                >
                    저장됨
                </div>
                <div
                    onClick={() =>
                        navigate(`/profile/${userInfoTest.tagName}/tagged`)
                    }
                    className={`${style.userMoreInfo_navbar} 
                ${
                    getUrlParams.postKind === "tagged"
                        ? "select_navbar"
                        : "navbar_text"
                }`}
                >
                    태그됨
                </div>
            </div>
        </>
    );
};

export default ProfileInfoDesktop;
