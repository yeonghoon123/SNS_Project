import React from "react";
import {
    MoreHoriz,
    FavoriteBorder,
    BookmarkBorder,
    ChatBubbleOutline,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import style from "../../css/main/mainPost.module.css";

import { useSelector, useDispatch } from "react-redux";

const MainPost = () => {
    /** 항목의 개수를 간략하게 포맷팅 하는 함수, Input : number */
    const numberIntl = (number) => {
        const formmater = new Intl.NumberFormat("ko", {
            notation: "compact",
        });

        return formmater.format(number);
    };

    return (
        <>
            {Array(10)
                .fill(1)
                .map((value, index) => {
                    return (
                        <div className={style.post_container} key={index}>
                            <div className={style.post_area}>
                                <div className={style.post_profile_area}>
                                    <div
                                        className={style.post_profile_img_area}
                                    >
                                        <Avatar />
                                    </div>
                                    <div
                                        className={style.post_profile_text_area}
                                    >
                                        <div className={style.post_profile_id}>
                                            asdda11d
                                        </div>
                                        <div className={style.post_upload_date}>
                                            <span
                                                className={
                                                    style.post_id_date_division
                                                }
                                            >
                                                •
                                            </span>
                                            1일전
                                        </div>
                                    </div>
                                    <div className={style.post_more_area}>
                                        <MoreHoriz />
                                    </div>
                                </div>
                                <div className={style.post_img_area}>
                                    <img
                                        src="img/tes.jpeg"
                                        className={style.post_img}
                                    ></img>
                                </div>
                                <div className={style.post_content_area}>
                                    <div
                                        className={
                                            style.post_content_reaction_area
                                        }
                                    >
                                        <div
                                            className={
                                                style.post_reaction_like_area
                                            }
                                        >
                                            <FavoriteBorder />
                                        </div>
                                        <div
                                            className={
                                                style.post_reaction_comment_area
                                            }
                                        >
                                            <ChatBubbleOutline fontSize="small" />
                                        </div>
                                        <div
                                            className={
                                                style.post_reaction_interest_area
                                            }
                                        >
                                            <BookmarkBorder />
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            style.post_content_comment_area
                                        }
                                    >
                                        <div
                                            className={
                                                style.post_reaction_like_text_area
                                            }
                                        >
                                            좋아요
                                            <span>{numberIntl(index)}개</span>
                                        </div>
                                        <div
                                            className={
                                                style.post_conetnt_comment
                                            }
                                        >
                                            MYDL입니다.
                                        </div>
                                        <div
                                            className={
                                                style.post_conetnt_total_comment
                                            }
                                        >
                                            댓글 1452개 모두 보기
                                        </div>
                                        <div
                                            className={
                                                style.post_content_upload_comment_area
                                            }
                                        >
                                            <textarea
                                                placeholder="댓글 달기..."
                                                className={
                                                    style.post_content_upload_comment
                                                }
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default MainPost;
