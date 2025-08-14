import { useEffect, useRef, useState } from "react";

const useDropdown = ({
    initialState = false,
    closeOnOutsideClick = true,
} = {}) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const openDropdown = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (!closeOnOutsideClick) return;

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeOnOutsideClick]);

    return {
        isOpen,
        dropdownRef,
        toggleDropdown,
        closeDropdown,
        openDropdown,
    };
};

export default useDropdown;
