import Swal from "sweetalert2";

export const errMessage = (errMsg) => {
    Swal.fire({
        title: "Error!",
        text: errMsg,
        icon: "error",
    });

    return false;
};
