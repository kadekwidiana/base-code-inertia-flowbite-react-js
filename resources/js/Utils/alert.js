import Swal from "sweetalert2";

// Helper untuk membuat Toast dengan posisi dinamis
const createToast = (position) =>
    Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });

// Preset Toast untuk berbagai posisi yang diperbolehkan
export const ToastTop = createToast("top");
export const ToastTopStart = createToast("top-start");
export const ToastTopEnd = createToast("top-end");
export const ToastCenter = createToast("center");
export const ToastCenterStart = createToast("center-start");
export const ToastCenterEnd = createToast("center-end");
export const ToastBottom = createToast("bottom");
export const ToastBottomStart = createToast("bottom-start");
export const ToastBottomEnd = createToast("bottom-end");

// Toast khusus untuk loading
export const ToastLoading = (position = "center") =>
    Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: undefined, // Hilangkan timer untuk loading
        timerProgressBar: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        didOpen: (toast) => {
            Swal.showLoading(); // Tampilkan loading spinner
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
