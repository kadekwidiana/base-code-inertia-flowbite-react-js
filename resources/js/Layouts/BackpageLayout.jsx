import BackpageNavbar from "@/Components/Navbar/BackpageNavbar";
import BackpageSidebar from "@/Components/Sidebar/BackpageSidebar";
import { useInputMapStore } from "@/Store/useInputMapStore";
import { useSidebarStore } from "@/Store/useSidebarStore";
import { Head, usePage } from "@inertiajs/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

// ini untuk yg menggunakan global state
const includesUrl = [
    "/maps",
    "/edit",
    "/create",
    "/create-step-one",
    "/create-step-two",
    "/edit-step-one",
    "/edit-step-two",
];

const queryClient = new QueryClient();

export default function BackpageLayout({ children }) {
    const pathname = usePage().url;
    const { title } = usePage().props;
    const { clearStore } = useInputMapStore(
        useShallow((state) => ({
            clearStore: state.clearStore,
        }))
    );

    // hapus store jika tidak di halaman includesUrl
    useEffect(() => {
        const pathsToCheck = includesUrl;
        if (!pathsToCheck.some((path) => pathname.includes(path))) {
            clearStore();
        }
    }, [pathname]);

    const { isVisible, toggle } = useSidebarStore(
        useShallow((state) => ({
            isVisible: state.isVisible,
            toggle: state.toggle,
        }))
    );

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen flex-col">
                <Head title={title} />
                <BackpageNavbar handleBackpageSidebarToggle={toggle} />

                <div className="flex-1">
                    <BackpageSidebar isVisible={isVisible} />
                    <div
                        className={`mt-[57px] min-h-[calc(100vh-57px)] p-4 transition-all ${
                            isVisible ? "sm:ml-[224px]" : ""
                        }`}
                    >
                        <div className="mb-4">
                            <h3 className="text-gray-700 text-lg font-semibold">
                                {title}
                            </h3>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </QueryClientProvider>
    );
}
