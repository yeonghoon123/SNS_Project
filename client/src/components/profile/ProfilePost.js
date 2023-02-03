import React from "react";
import style from "../../css/profile/profilePost.module.css";

const ProfilePost = () => {
    return (
        <>
            <div className={style.post_container}>
                <div className={style.post_list_area}>
                    {Array(10)
                        .fill(0)
                        .map((value, index) => (
                            <div className={style.post_list} key={index}>
                                <div className={style.post_list_img}>
                                    <img src="/img/tes.jpeg" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default ProfilePost;
