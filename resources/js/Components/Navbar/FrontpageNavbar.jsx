import { Link, usePage } from "@inertiajs/react";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

export default function FrontpageNavbar() {
    const { auth } = usePage().props;

    const menuRef = React.useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <header ref={menuRef}>
            <nav className="bg-white fixed w-full border-gray-200 px-4 lg:px-6 py-4 z-20">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
                    <a href="/" className="flex items-center">
                        <img
                            src="/assets/images/logo.png"
                            className="h-6 mr-3 sm:h-9 rounded-full"
                            alt="Nos.Project Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">
                            Nos.Project
                        </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {auth.user ? (
                            <div className="flex justify-start items-center gap-2">
                                {auth.user.role === "CUSTOMER" && (
                                    <Button
                                        size="xs"
                                        as={Link}
                                        href="/customer/carts"
                                        color="none"
                                        className="bg-primary/80 hover:bg-primary/100 text-white"
                                    >
                                        <HiShoppingCart className="size-4 mr-1" />
                                        0
                                    </Button>
                                )}
                                <div className="ms-3 flex items-center">
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
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg"
                                                    alt="user photo"
                                                />
                                            </button>
                                        )}
                                    >
                                        {auth.user.role === "CUSTOMER" ? (
                                            <>
                                                <DropdownItem>
                                                    <Link
                                                        href={
                                                            "/customer/profile"
                                                        }
                                                    >
                                                        <i className="fa-solid fa-user mr-2"></i>
                                                        Profile
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <Link
                                                        href={
                                                            "/customer/transactions"
                                                        }
                                                    >
                                                        <i className="fa-solid fa-user mr-2"></i>
                                                        Daftar Transaksi
                                                    </Link>
                                                </DropdownItem>
                                            </>
                                        ) : (
                                            <>
                                                <DropdownItem>
                                                    <Link href={"/profile"}>
                                                        <i className="fa-solid fa-user mr-2"></i>
                                                        Profile
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <Link href={"/dashboard"}>
                                                        <i className="fa-solid fa-user mr-2"></i>
                                                        Dashboard
                                                    </Link>
                                                </DropdownItem>
                                            </>
                                        )}
                                        <DropdownItem>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                <i className="fa-solid fa-arrow-left mr-2"></i>
                                                Log Out
                                            </Link>
                                        </DropdownItem>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <Button
                                size="xs"
                                as={Link}
                                href="/login"
                                color="none"
                                className="bg-primary/80 hover:bg-primary/100 text-white"
                            >
                                Login
                                <HiOutlineArrowRight className="ml-2 size-4" />
                            </Button>
                        )}
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                            showMenu ? "block" : "hidden"
                        }`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="/"
                                    className={`block py-2 pl-3 pr-4 rounded-sm lg:p-0 ${
                                        route().current("frontpage.home")
                                            ? "text-white bg-primary/80 lg:bg-transparent lg:text-primary/80"
                                            : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 lg:hover:bg-transparent lg:hover:text-primary/80"
                                    }`}
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
