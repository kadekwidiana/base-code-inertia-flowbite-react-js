import BackpageNavbar from "@/Components/Navbar/BackpageNavbar";
import BackpageSidebar from "@/Components/Sidebar/BackpageSidebar";
import { useSidebarStore } from "@/Store/useSidebarStore";
import { Head, usePage } from "@inertiajs/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";

const queryClient = new QueryClient();

export default function BackpageLayout({ children }) {
    const { title } = usePage().props;

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
