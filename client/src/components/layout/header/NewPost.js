import React, { useEffect, useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import styles from "../../../css/layout/newPost.module.css";
import "../../../css/layout/newPost.css";
import { Carousel } from "react-bootstrap";
import { ArrowBack, AddBox } from "@mui/icons-material";

const postStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 600,
    maxHeight: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
};

const exitStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    textAlign: "center",
    p: 2,
    boxShadow: 24,
};

const NewPost = ({ props }) => {
    const { modalOpen, setModalOpen } = props;
    const [exitStatus, setExitStatus] = useState(false);
    const [postStair, setPostStair] = useState(0);
    const [uploadImgBase64, setUploadImgBase64] = useState([]);

    const exitModalClose = (event) => {
        setExitStatus(false);
    };

    // 업로드 사진 변환
    const readFile = (event) => {
        const fileList = event.target.files;

        for (let key of Object.keys(fileList)) {
            const reader = new FileReader();

            reader.onload = (file) => {
                console.log(file);
                setUploadImgBase64((originData) => [
                    ...originData,
                    file.target.result,
                ]);
            };
            reader.readAsDataURL(fileList[key]);
        }

        setPostStair(1);
    };

    const moveBackPage = (event) =>
        postStair === 1 ? setExitStatus(true) : setPostStair(1);

    const moveNextPage = (event) => {
        postStair === 1 ? setPostStair(2) : <test />;
    };

    return (
        <>
            <AddBox fontSize="large" />
            <span>추가</span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Box sx={postStyle}>
                    {uploadImgBase64.length !== 0 ? (
                        <>
                            <div className={styles.newPost_header}>
                                <div
                                    className={styles.newPost_header_back_page}
                                    onClick={moveBackPage}
                                >
                                    <ArrowBack />
                                    {postStair === 1 && (
                                        <Modal
                                            open={exitStatus}
                                            onClose={exitModalClose}
                                        >
                                            <Box
                                                sx={{
                                                    ...exitStyle,
                                                    width: 400,
                                                }}
                                            >
                                                <h4 id="child-modal-title">
                                                    게시물을 삭제하시겠습니까?
                                                </h4>
                                                <p id="child-modal-description">
                                                    나가면 수정이 불가합니다
                                                </p>
                                                <Button
                                                    onClick={() =>
                                                        setModalOpen(false)
                                                    }
                                                    color="error"
                                                >
                                                    삭제
                                                </Button>
                                                <Button
                                                    onClick={exitModalClose}
                                                >
                                                    닫기
                                                </Button>
                                            </Box>
                                        </Modal>
                                    )}
                                </div>
                                <div className={styles.newPost_header_title}>
                                    {postStair === 1 && "이미지 올리기"}
                                    {postStair === 2 && "게시물 작성"}
                                </div>
                                <div
                                    className={styles.newPost_header_next_page}
                                    onClick={moveNextPage}
                                >
                                    {postStair === 1 && "다음"}
                                    {postStair === 2 && "게시"}
                                </div>
                            </div>
                            <div className={styles.newPost_body_container}>
                                <Carousel data-bs-theme="dark">
                                    {uploadImgBase64.map((value, index) => {
                                        return (
                                            <Carousel.Item
                                                key={`upload_img${index}`}
                                            >
                                                <img
                                                    className="w-100"
                                                    src={`${value}`}
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                        );
                                    })}
                                </Carousel>
                                {postStair === 2 && <div>test</div>}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="">
                                <div>이미지 올리기</div>
                            </div>
                            <div>
                                <p>
                                    컴퓨터나 핸드폰에 저장된 사진을 업로드
                                    해보세요
                                </p>

                                <button>
                                    <label htmlFor="imageUpload">
                                        사진 업로드하기
                                    </label>
                                </button>
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*,audio/*,video/*"
                                    onChange={readFile}
                                    multiple
                                    style={{ display: "none" }}
                                />
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default NewPost;
