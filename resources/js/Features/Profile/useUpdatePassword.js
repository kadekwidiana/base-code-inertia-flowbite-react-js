import { ToastTopEnd } from "@/Utils/alert";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function useUpdatePassword() {
    const passwordInput = useRef(null);
    const currentPasswordInput = useRef(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleUpdatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                ToastTopEnd.fire({
                    icon: "success",
                    title: "Kata sandi berhasil di ubah.",
                });
            },
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return {
        data,
        errors,
        processing,
        handleChange,
        handleUpdatePassword,
    };
}
