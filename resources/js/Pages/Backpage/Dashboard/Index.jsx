import BackpageLayout from "@/Layouts/BackpageLayout";
import { usePage } from "@inertiajs/react";
import { Banner } from "flowbite-react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

export default function DashboardPage() {
    const { auth } = usePage().props;

    return (
        <BackpageLayout>
            <Banner className="mb-4">
                <div className="flex w-full items-center gap-2 border-l-4 border-primary/70 bg-primary/10 bg-opacity-[15%] px-4 py-6 shadow-md">
                    <FaCircleCheck className="size-10 text-primary/70" />
                    <div className="w-full">
                        <h5 className="mb-1 text-lg text-black">
                            Selamat datang,{" "}
                            <span className="font-semibold">
                                {auth.user.name}
                            </span>
                            . Anda login sebagai{" "}
                            <span className="font-semibold">
                                {auth.user.role === "ADMIN"
                                    ? "ADMIN"
                                    : "CUSTOMER"}
                            </span>
                            .
                        </h5>
                        <p className="text-body text-base leading-relaxed">
                            Pastikan untuk menjaga kerahasiaan Email dan
                            Password Anda.
                        </p>
                    </div>
                    <Banner.CollapseButton
                        color="gray"
                        className="items-center border-0 bg-transparent text-gray-500"
                    >
                        <IoCloseOutline className="size-6" />
                    </Banner.CollapseButton>
                </div>
            </Banner>
        </BackpageLayout>
    );
}
