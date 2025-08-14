import useUpdateProfile from "@/Features/Profile/useUpdateProfile";
import { Button, Label, TextInput } from "flowbite-react";

export default function UpdateProfileInformationForm({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const {
        data,
        errors,
        processing,
        handleChange,
        handleSubmitUpdateProfile,
        setData,
    } = useUpdateProfile();

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-gray-900">
                    Informasi Profil
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Perbarui informasi profil Anda, pastikan semua data sudah
                    benar sebelum menyimpannya.
                </p>
            </header>

            <form
                onSubmit={handleSubmitUpdateProfile}
                className="mt-4 space-y-2"
                encType="multipart/form-data"
            >
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Nama*"
                            color={errors.name ? "failure" : "gray"}
                        />
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Masukan nama..."
                        required
                        value={data.name}
                        // isFocused={true}
                        color={errors.name ? "failure" : "gray"}
                        onChange={handleChange}
                        helperText={errors.name}
                    />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email*"
                            color={errors.email ? "failure" : "gray"}
                        />
                    </div>
                    <TextInput
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Masukan email..."
                        required
                        value={data.email}
                        // isFocused={true}
                        color={errors.email ? "failure" : "gray"}
                        onChange={handleChange}
                        helperText={errors.email}
                        readOnly
                    />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="role"
                            value="Role*"
                            color={errors.role ? "failure" : "gray"}
                        />
                    </div>
                    <TextInput
                        id="role"
                        name="role"
                        type="text"
                        placeholder="Masukan role..."
                        required
                        readOnly
                        value={data.role}
                        // isFocused={true}
                        color={errors.role ? "failure" : "gray"}
                        onChange={handleChange}
                        helperText={errors.role}
                    />
                </div>

                <div className="flex items-center justify-end gap-4">
                    <Button
                        disabled={processing}
                        type="submit"
                        color="none"
                        className="bg-primary/80 hover:bg-primary/100 text-white"
                    >
                        Simpan
                    </Button>
                </div>
            </form>
        </section>
    );
}
