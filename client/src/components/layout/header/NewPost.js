import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
const NewPost = ({ props }) => {
    const { modalOpen, setModalOpen } = props;
    const { uploadImgBase64, setUploadImgBase64 } = useState([]);

    // 업로드 사진 변환
    const readFile = (event) => {
        const fileList = event.target.files;

        for (let key of Object.keys(fileList)) {
            const reader = new FileReader();

            reader.onload((result) => {
                setUploadImgBase64((originData) => [
                    ...originData,
                    reader.result,
                ]);
            });

            reader.readAsDataURL(fileList[key]);
        }
    };
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {uploadImgBase64 ? (
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    ) : (
                        <>
                            <p>
                                컴퓨터나 핸드폰에 저장된 사진을 업로드 해보세요
                            </p>

                            <button>
                                <label htmlFor="imageUpload">
                                    사진 업로드하기
                                </label>
                            </button>
                        </>
                    )}

                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*,audio/*,video/*"
                        onChange={readFile}
                        multiple
                        style={{ display: "none" }}
                    />
                </Box>
            </Modal>
        </>
    );
};

export default NewPost;
