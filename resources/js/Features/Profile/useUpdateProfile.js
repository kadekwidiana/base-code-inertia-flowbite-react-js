import { ToastTopEnd } from "@/Utils/alert";
import { useForm, usePage } from "@inertiajs/react";

export default function useUpdateProfile() {
    const {
        props: {
            auth: { user },
        },
    } = usePage();

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            role: user.role,
            phone_number: user.customer?.phone_number,
            province_code: user.customer?.province_code,
            province_name: user.customer?.province_name,
            city_code: user.customer?.city_code,
            city_name: user.customer?.city_name,
            sub_district: user.customer?.sub_district,
            village: user.customer?.village,
            address: user.customer?.address,
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmitUpdateProfile = (e) => {
        e.preventDefault();

        post(route("profile.update", { userId: user.id }), {
            onSuccess: () => {
                ToastTopEnd.fire({
                    icon: "success",
                    title: "Profil anda berhasil diupdate.",
                });
            },
        });
    };

    return {
        data,
        errors,
        processing,
        handleChange,
        handleSubmitUpdateProfile,
        setData
    };
}
