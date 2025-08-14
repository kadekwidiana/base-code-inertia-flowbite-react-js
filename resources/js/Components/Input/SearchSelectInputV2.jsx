import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SearchSelectInputV2 = ({
    entities,
    selectedEntityId,
    setSelectedEntityId,
    otherEntity,
    placeholder,
    label,
    error,
    onChange,
    searchDataToServerIsLoading = false,
    withSearhDataOptions = true,
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEntities, setFilteredEntities] = useState(entities);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setFilteredEntities(
            entities.filter(
                (entity) =>
                    entity.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    (entity.code &&
                        entity.code
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())) || // Search by code
                    (otherEntity &&
                        entity[otherEntity]
                            ?.toLowerCase()
                            .includes(searchTerm.toLowerCase()))
            )
        );
    }, [searchTerm, entities, otherEntity]);

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
        if (!isDropdownOpen) {
            setTimeout(() => {
                dropdownRef.current.querySelector("input").focus();
            }, 0);
        }
    };

    const handleOptionSelect = (id) => {
        setSelectedEntityId(id);
        setIsDropdownOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    const handleKeyDown = (e) => {
        if (!isDropdownOpen) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) =>
                prevIndex === filteredEntities.length - 1 ? 0 : prevIndex + 1
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setFocusedOptionIndex((prevIndex) =>
                prevIndex === 0 ? filteredEntities.length - 1 : prevIndex - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            handleOptionSelect(filteredEntities[focusedOptionIndex].id);
        }
    };

    const selectedEntity = entities.find(
        (entity) => Number(entity.id) === Number(selectedEntityId)
    );

    const selectedEntityLabel = selectedEntity
        ? `${selectedEntity.name} ${
              otherEntity && selectedEntity[otherEntity]
                  ? `(${selectedEntity[otherEntity]})`
                  : ""
          }`
        : label ?? "-- Select entity --";

    return (
        <div className="relative" ref={dropdownRef} onKeyDown={handleKeyDown}>
            <button
                type="button"
                className={`flex w-full cursor-pointer appearance-none items-center justify-between rounded-md border bg-transparent bg-white px-2 py-2 ${
                    error
                        ? "border-red-500"
                        : isDropdownOpen
                        ? "border-cyan-600"
                        : "border-gray-400"
                }`}
                onClick={handleDropdownToggle}
            >
                {selectedEntityLabel}
                <span className="ml-2">
                    <IoIosArrowDown />
                </span>
            </button>
            {isDropdownOpen && (
                <div className="absolute left-0 right-0 z-10 max-h-60 overflow-y-auto rounded border border-gray-300 bg-white shadow">
                    <input
                        type="text"
                        placeholder={placeholder ?? "Search..."}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            onChange && onChange(e.target.value);
                        }}
                        className="w-full rounded-t-sm border-b border-gray-300 p-2 focus:border-cyan-600 focus:outline-none focus:ring-cyan-600 focus-visible:outline-none"
                    />
                    <div className="max-h-48 overflow-y-auto">
                        {searchDataToServerIsLoading ? (
                            <div className="p-2 text-gray-500">
                                Memuat data...
                            </div>
                        ) : withSearhDataOptions ? (
                            filteredEntities.length === 0
                        ) : entities.length === 0 ? (
                            <div className="p-2 text-gray-500">
                                Data tidak ditemukan.
                            </div>
                        ) : withSearhDataOptions ? (
                            filteredEntities.map((entity, index) => (
                                <div
                                    key={entity.id}
                                    className={`my-0.5 cursor-pointer p-2 ${
                                        Number(entity.id) ===
                                        Number(selectedEntityId)
                                            ? "bg-cyan-200/50 text-cyan-600"
                                            : "hover:bg-cyan-200/50 hover:text-cyan-600"
                                    } ${
                                        index === focusedOptionIndex
                                            ? "bg-cyan-200/50 text-cyan-600"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionSelect(entity.id)
                                    }
                                >
                                    {`${entity.name}${
                                        otherEntity && entity[otherEntity]
                                            ? ` (${entity[otherEntity]})`
                                            : ""
                                    }`}
                                </div>
                            ))
                        ) : (
                            entities.map((entity, index) => (
                                <div
                                    key={entity.id}
                                    className={`my-0.5 cursor-pointer p-2 ${
                                        Number(entity.id) ===
                                        Number(selectedEntityId)
                                            ? "bg-cyan-200/50 text-cyan-600"
                                            : "hover:bg-cyan-200/50 hover:text-cyan-600"
                                    } ${
                                        index === focusedOptionIndex
                                            ? "bg-cyan-200/50 text-cyan-600"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleOptionSelect(entity.id)
                                    }
                                >
                                    {`${entity.name}${
                                        otherEntity && entity[otherEntity]
                                            ? ` (${entity[otherEntity]})`
                                            : ""
                                    }`}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchSelectInputV2;
