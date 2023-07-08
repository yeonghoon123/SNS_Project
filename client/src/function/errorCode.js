export const errorCodeList = (errCode) => {
    switch (errCode) {
        case "auth/email-already-in-use":
            return { message: "이미 사용중인 이메일 입니다." };
    }
};
