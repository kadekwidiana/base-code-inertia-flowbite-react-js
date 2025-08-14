import { usePage } from "@inertiajs/react";
import { Sidebar } from "flowbite-react";
import { HiOutlineChartPie } from "react-icons/hi";

export default function BackpageSidebar({ isVisible }) {
    const { auth } = usePage().props;

    return (
        <aside
            className={`fixed bottom-0 left-0 top-[57px] z-40 flex w-[224px] transform flex-col border-r shadow-md transition-transform ease-in-out ${
                isVisible
                    ? "-translate-x-full sm:translate-x-0"
                    : "translate-x-0 sm:-translate-x-full"
            }`}
        >
            <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="w-auto"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <SidebarMenu
                            href="/dashboard"
                            label="Dashboard"
                            icon={HiOutlineChartPie}
                        />
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </aside>
    );
}

const SidebarMenu = ({ href, label, icon: Icon }) => {
    const pathname = usePage().url;

    return (
        <Sidebar.Item
            href={href}
            icon={Icon}
            className={pathname.startsWith(href) ? "bg-gray-100" : ""}
        >
            {label}
        </Sidebar.Item>
    );
};
