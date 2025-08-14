import useRegister from "@/Features/Auth/useRegister";
import { Head, Link } from "@inertiajs/react";
import { Button, Label, TextInput } from "flowbite-react";

export default function RegisterPage() {
    const { data, setData, processing, errors, reset, handleSubmitRegister } =
        useRegister();

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="flex h-full w-screen items-center justify-center overflow-auto sm:h-screen">
                <div className="mx-4 flex w-full flex-col items-center justify-center gap-4">
                    <form
                        onSubmit={handleSubmitRegister}
                        className="mx-4 flex w-full flex-col gap-3 rounded-xl border p-4 shadow-lg sm:w-1/2 sm:p-8"
                    >
                        <div className="flex flex-col gap-1">
                            <Link href="/" className="flex justify-center">
                                <img
                                    src="/assets/images/logo.png"
                                    alt="Logo"
                                    className="size-28 rounded-full"
                                />
                            </Link>
                            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                                Register
                            </h2>
                        </div>
                        <div className="grid-col-1 grid gap-3 sm:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="name"
                                        value="Nama"
                                        color={errors.name ? "failure" : "gray"}
                                    />
                                </div>
                                <TextInput
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Masukan nama..."
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    color={errors.name ? "failure" : "gray"}
                                    helperText={errors.name}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email"
                                        value="Email"
                                        color={
                                            errors.email ? "failure" : "gray"
                                        }
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Masukan email..."
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    color={errors.email ? "failure" : "gray"}
                                    helperText={errors.email}
                                />
                            </div>
                        </div>
                        <div className="grid-col-1 grid gap-3 sm:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="phone_number"
                                        value="Nomor Telepon"
                                        color={
                                            errors.phone_number
                                                ? "failure"
                                                : "gray"
                                        }
                                    />
                                </div>
                                <TextInput
                                    id="phone_number"
                                    name="phone_number"
                                    type="number"
                                    placeholder="Masukan nomor telepon..."
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                    color={
                                        errors.phone_number ? "failure" : "gray"
                                    }
                                    helperText={errors.phone_number}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="address"
                                        value="Alamat"
                                        color={
                                            errors.address ? "failure" : "gray"
                                        }
                                    />
                                </div>
                                <TextInput
                                    id="address"
                                    name="address"
                                    type="text"
                                    placeholder="Masukan alamat..."
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    color={errors.address ? "failure" : "gray"}
                                    helperText={errors.address}
                                />
                            </div>
                        </div>
                        <div className="grid-col-1 grid gap-3 sm:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password"
                                        value="Password"
                                        color={
                                            errors.password ? "failure" : "gray"
                                        }
                                    />
                                </div>
                                <TextInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Masukan password..."
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    color={errors.password ? "failure" : "gray"}
                                    helperText={errors.password}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password_confirmation"
                                        value="Konfirmasi Password"
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
                                    type="password"
                                    placeholder="Masukan konfirmasi password..."
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    color={
                                        errors.password_confirmation
                                            ? "failure"
                                            : "gray"
                                    }
                                    helperText={errors.password_confirmation}
                                />
                            </div>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <Button
                                type="submit"
                                disabled={processing}
                                color="none"
                                className="bg-primary/80 hover:bg-primary/100 text-white w-full sm:w-1/2"
                            >
                                Register
                            </Button>
                        </div>
                        <div className="mt-2 text-center">
                            <p>
                                Sudah Punya Akun?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                    <div className="mt-2 flex w-full justify-center">
                        <a href="#" target="_blank">
                            <p className="text-blue-600">©2025 Nos.Project</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
