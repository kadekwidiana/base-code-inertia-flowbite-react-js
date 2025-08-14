import useUpdatePassword from "@/Features/Profile/useUpdatePassword";
import { Button, Label, TextInput } from "flowbite-react";

export default function UpdatePasswordForm({ className = "" }) {
    const { data, errors, processing, handleChange, handleUpdatePassword } =
        useUpdatePassword();

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-gray-900">
                    Ubah kata sandi
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Pastikan akun Anda menggunakan kata sandi yang panjang dan
                    acak agar tetap aman.
                </p>
            </header>

            <form onSubmit={handleUpdatePassword} className="mt-4 space-y-2">
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="current_password"
                            value="Password Saat Ini*"
                            color={errors.current_password ? "failure" : "gray"}
                        />
                    </div>
                    <TextInput
                        id="current_password"
                        name="current_password"
                        type="text"
                        placeholder="Masukan password saat ini..."
                        required
                        value={data.current_password}
                        // isFocused={true}
                        color={errors.current_password ? "failure" : "gray"}
                        onChange={handleChange}
                        helperText={errors.current_password}
                    />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Password Baru*"
                            color={errors.password ? "failure" : "gray"}
                        />
                    </div>
                    <TextInput
                        id="password"
                        name="password"
                        type="text"
                        placeholder="Masukan password baru..."
                        required
                        value={data.password}
                        // isFocused={true}
                        color={errors.password ? "failure" : "gray"}
                        onChange={handleChange}
                        helperText={errors.password}
                    />
                </div>
                <div className="">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password_confirmation"
                            value="Konfirmasi Password Baru*"
                            color={
                                errors.password_confirmation
                                    ? "failure"
                                    : "gray"
                            }
                        />
                    </div>
                    <TextInput
                        id="password_confirmation"
                        name="password_confirmation"
                        type="text"
                        placeholder="Masukan konfirmasi password..."
                        required
                        value={data.password_confirmation}
                        // isFocused={true}
                        color={
                            errors.password_confirmation ? "failure" : "gray"
                        }
                        onChange={handleChange}
                        helperText={errors.password_confirmation}
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
