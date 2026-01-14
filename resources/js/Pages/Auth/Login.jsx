import InputError from "@/Components/Error/InputError";
import useLogin from "@/Features/Auth/useLogin";
import { Head, Link } from "@inertiajs/react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
    const { data, setData, processing, errors, reset, handleSubmitLogin } =
        useLogin();

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="flex h-screen w-screen items-center justify-center px-4">
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <form
                        onSubmit={handleSubmitLogin}
                        className="mx-4 flex w-full flex-col gap-3 rounded-xl border p-4 shadow-lg sm:w-1/3 sm:p-8"
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
                                Login ke akun Anda
                            </h2>
                        </div>
                        {errors.email && (
                            <div className="flex justify-center">
                                <InputError
                                    message={"Email atau password salah!"}
                                />
                            </div>
                        )}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Masukan email..."
                                required
                                value={data.email}
                                // isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Masukan password..."
                                required
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Button
                            type="submit"
                            disabled={processing}
                            color="none"
                            className="bg-primary/80 hover:bg-primary/100 text-white"
                        >
                            Login
                        </Button>
                        <div className="mt-2 text-center">
                            <p>
                                Belum Punya Akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-blue-600 underline"
                                >
                                    Register
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
