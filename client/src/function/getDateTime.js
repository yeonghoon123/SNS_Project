// datetime반환하는 함수 ex) 2021-03-30 17:04:31
export const getDateTime = () => {
    let nowTime = new Date(); // ex) Thu Apr 21 2022 10:36:59 GMT+0900 (한국 표준시)
    let nowYear = nowTime.getFullYear(); // ex) 2022
    let nowMonth = nowTime.getMonth(); // ex) 3
    let nowDate = nowTime.getDate(); // ex) 21
    let nowHours = nowTime.getHours(); // ex) 10
    let nowMinutes = nowTime.getMinutes(); // ex) 38
    let nowSeconds = nowTime.getSeconds(); // ex) 30

    let date_value = `${nowYear}-${("00" + (nowMonth + 1)).slice(-2)}-${(
        "00" + nowDate
    ).slice(-2)}`;
    // 시간 데이터 구하기 ex) 10:03:01
    let time_value = `${("00" + nowHours).slice(-2)}:${(
        "00" + nowMinutes
    ).slice(-2)}:${("00" + nowSeconds).slice(-2)}`;
    return `${date_value} ${time_value}`;
};
