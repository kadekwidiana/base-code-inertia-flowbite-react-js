import { Head } from "@inertiajs/react";
import { Button } from "flowbite-react";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function ErrorPage({ status }) {
    const statusResponses = {
        503: "503",
        500: "500",
        404: "404",
        403: "403",
    };

    const titles = {
        503: "Layanan Tidak Tersedia",
        500: "Kesalahan Server",
        404: "Halaman Tidak Ditemukan",
        403: "Terlarang",
    };

    const descriptions = {
        503: "Maaf, kami sedang melakukan pemeliharaan. Silakan kembali lagi nanti. Terima kasih atas kesabaran Anda!",
        500: "Whoops, terjadi kesalahan pada server kami. Silakan coba lagi nanti atau hubungi dukungan kami jika masalah berlanjut.",
        404: "Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.",
        403: "Maaf, Anda tidak diizinkan untuk mengakses halaman ini. Jika Anda merasa ini adalah kesalahan, hubungi administrator.",
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
            <Head title={titles[status]} />
            <div className="mx-auto max-w-xl rounded-lg bg-white bg-opacity-90 p-8 text-center shadow-lg">
                <div className="mb-4 text-9xl font-bold text-gray-600">
                    {statusResponses[status]}
                </div>
                <h1 className="mb-6 text-4xl font-bold text-gray-800">
                    {titles[status]}
                </h1>
                <p className="mb-8 text-lg text-gray-600">
                    {descriptions[status]}
                </p>
                <a href="/" className="flex w-full items-center justify-center">
                    <Button
                        color="none"
                        className="bg-primary/80 hover:bg-primary/100 text-white"
                    >
                        <FaHome className="mr-2 h-5 w-5" />
                        Kembali
                    </Button>
                </a>
            </div>
        </div>
    );
}
