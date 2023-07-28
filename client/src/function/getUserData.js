// 사용자에 db 정보 전달
export const getUserData = async (firebaseMethod, userId) => {
    let userData;

    await firebaseMethod.dbService
        .collection("user_account")
        .where("user_uid", "==", userId)
        .get()
        .then((querySnapshot) =>
            querySnapshot.forEach(
                (doc) =>
                    (userData = {
                        userFbId: doc.id,
                        data: doc.data(),
                    })
            )
        );

    return userData;
};
