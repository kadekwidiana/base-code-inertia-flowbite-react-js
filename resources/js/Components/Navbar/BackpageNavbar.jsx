import { appName } from "@/Constants/appName";
import { Link, usePage } from "@inertiajs/react";
import { Dropdown, DropdownItem } from "flowbite-react";
import React from "react";
import { IoMenu } from "react-icons/io5";

export default function BackpageNavbar({ handleBackpageSidebarToggle }) {
    const { auth, navName } = usePage().props;

    return (
        <nav className="fixed z-10 flex h-[57px] w-full items-center justify-between border-b bg-white px-2 shadow-sm sm:px-4">
            <div className="flex items-center justify-start gap-2">
                <button onClick={handleBackpageSidebarToggle}>
                    <IoMenu className="size-7 text-gray-700" />
                </button>
                <div className="flex items-center justify-start gap-2">
                    <Link href="/" className="flex justify-center">
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            className="size-9 rounded-full"
                        />
                    </Link>
                    <h1 className="text-xl font-semibold text-gray-700">
                        {appName}
                    </h1>
                </div>
            </div>
            <div className="ms-3 flex items-center">
                <span className="hidden px-2 text-sm font-medium text-gray-700 lg:block">
                    {auth.user.name}
                </span>
                <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                        <button
                            type="button"
                            className=":focus:ring-gray-600 flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-gray-300"
                            aria-expanded="false"
                            data-dropdown-toggle="dropdown-user"
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg"
                                alt="user photo"
                            />
                        </button>
                    )}
                >
                    <DropdownItem>
                        <Link href={"/profile"}>
                            <i className="fa-solid fa-user mr-2"></i>
                            Profile
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href={route("logout")} method="post" as="button">
                            <i className="fa-solid fa-arrow-left mr-2"></i>
                            Log Out
                        </Link>
                    </DropdownItem>
                </Dropdown>
            </div>
        </nav>
    );
}
