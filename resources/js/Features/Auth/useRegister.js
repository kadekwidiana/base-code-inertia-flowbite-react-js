import { ToastTop } from '@/Utils/alert';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function useRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        address: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        post(route("register"), {
            onSuccess: () => {
                ToastTop.fire({
                    icon: "success",
                    title: "Register Berhasil! Silakan login untuk melanjutkan.",
                });
            },
            onError: () => {
                ToastTop.fire({
                    icon: "error",
                    title: "Register Gagal! Silakan cek kembali data Anda.",
                });
            },
        });
    };

    return {
        data,
        setData,
        processing,
        errors,
        reset,
        handleSubmitRegister,
    };
}
