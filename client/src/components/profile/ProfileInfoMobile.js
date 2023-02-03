import React from "react";
import style from "../../css/profile/profileInfoMobile.module.css";
import {
    BookmarkBorder,
    Bookmark,
    Photo,
    PhotoOutlined,
    LocalOffer,
    LocalOfferOutlined,
} from "@mui/icons-material";

const ProfileInfoMobile = ({ props }) => {
    const { userInfoTest, navigate, getUrlParams } = props;

    return (
        <>
            <div className={style.userInfo_container}>
                <div className={style.profile_img_area}>
                    <img src="/img/tes.jpeg" />
                </div>
                <div className={style.profile_text_area}>
                    <div className={style.profile_tag_content_column}>
                        <div className={style.profile_text_content}>
                            <h2>{userInfoTest.tagName}</h2>
                        </div>
                        <div className={style.profile_setting_text}>
                            <button>프로필 편집</button>
                        </div>
                    </div>
                </div>
                <div className={style.profile_text_content_column}>
                    <div className={style.profile_text_content}>
                        <span>{userInfoTest.userName}</span>
                        <div>
                            <span>{userInfoTest.userContent}</span>
                        </div>
                    </div>
                </div>
                <div className={style.profile_activity_list}>
                    <div className={style.profile_activity_text}>
                        게시물
                        <div className={style.profile_text_bold}>
                            {userInfoTest.count.post}
                        </div>
                    </div>
                    <div className={style.profile_activity_text}>
                        팔로워
                        <div className={style.profile_text_bold}>
                            {userInfoTest.count.follower}
                        </div>
                    </div>
                    <div className={style.profile_activity_text}>
                        팔로잉
                        <div className={style.profile_text_bold}>
                            {userInfoTest.count.following}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.userMoreInfo_navbar_container}>
                <div
                    onClick={() => navigate(`/profile/${userInfoTest.tagName}`)}
                    className={style.userMoreInfo_navbar}
                >
                    {!getUrlParams.postKind ? <Photo /> : <PhotoOutlined />}
                </div>

                <div
                    onClick={() =>
                        navigate(`/profile/${userInfoTest.tagName}/saved`)
                    }
                    className={style.userMoreInfo_navbar}
                >
                    {getUrlParams.postKind === "saved" ? (
                        <Bookmark />
                    ) : (
                        <BookmarkBorder />
                    )}
                </div>
                <div
                    onClick={() =>
                        navigate(`/profile/${userInfoTest.tagName}/tagged`)
                    }
                    className={style.userMoreInfo_navbar}
                >
                    {getUrlParams.postKind === "tagged" ? (
                        <LocalOffer />
                    ) : (
                        <LocalOfferOutlined />
                    )}
                </div>
            </div>
        </>
    );
};

export default ProfileInfoMobile;
