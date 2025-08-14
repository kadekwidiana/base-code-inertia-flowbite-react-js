import React, { useState, useEffect, useRef } from "react";
import { TiDelete } from "react-icons/ti";

const MultiSelectInput = ({
    title,
    options,
    value,
    onChange,
    error,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
    const ref = useRef(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => {
                ref.current.querySelector("input").focus();
            }, 0);
        }
    };

    const handleOptionClick = (selectedValue) => {
        const newSelectedValues = value.includes(selectedValue)
            ? value.filter((v) => v !== selectedValue)
            : [...value, selectedValue];
        onChange(newSelectedValues);
    };

    const handleRemoveOption = (selectedValue) => {
        const newSelectedValues = value.filter((v) => v !== selectedValue);
        onChange(newSelectedValues);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setFocusedOptionIndex(0); // Reset focus when search term changes
    };

    const handleKeyDown = (e) => {
        const filteredOptions = options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) =>
                prevIndex === filteredOptions.length - 1 ? 0 : prevIndex + 1
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) =>
                prevIndex === 0 ? filteredOptions.length - 1 : prevIndex - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            handleOptionClick(filteredOptions[focusedOptionIndex].value);
        }
    };

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div ref={ref} className="relative w-full">
            <button
                type="button"
                ref={toggleButtonRef}
                className={`flex items-center justify-between w-full appearance-none rounded-md bg-transparent py-2 px-2 bg-white border cursor-pointer ${
                    error ? "border-red-500" : "border-gray-400"
                } ${className}`}
                onClick={toggleDropdown}
                tabIndex={0}
            >
                <div className="flex justify-start items-center gap-2 overflow-auto">
                    {value.length > 0 ? (
                        value.map((val) => (
                            <span
                                key={val}
                                className="flex items-center gap-1 px-2 py-0.5 text-sm capitalize bg-white rounded border"
                            >
                                {
                                    options.find(
                                        (option) => option.value === val
                                    )?.label
                                }
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveOption(val);
                                    }}
                                >
                                    <TiDelete className="text-gray-500 size-5 cursor-pointer hover:text-red-700" />
                                </button>
                            </span>
                        ))
                    ) : (
                        <span className="text-gray-900">
                            {title ?? "Select options..."}
                        </span>
                    )}
                </div>
                <span className="ml-2">
                    {isOpen ? (
                        <i className="fa-solid fa-chevron-up text-gray-500"></i>
                    ) : (
                        <i className="fa-solid fa-chevron-down text-gray-500"></i>
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="absolute left-0 right-0 z-10 overflow-y-auto bg-white border rounded shadow max-h-60 border-gray-300">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full p-2 border-b border-gray-300 rounded-t-sm focus:ring-blue-500 focus:border-blue-400 focus:outline-none focus-visible:outline-none"
                        placeholder="Search..."
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    />
                    <div className="max-h-48 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <div
                                    key={option.value}
                                    className={`p-2 cursor-pointer capitalize ${
                                        value.includes(option.value)
                                            ? "bg-gray-200"
                                            : "hover:bg-gray-100"
                                    } ${
                                        index === focusedOptionIndex
                                            ? "bg-blue-100"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionClick(option.value)
                                    }
                                    tabIndex={0}
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">
                                Data tidak ditemukan.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelectInput;
