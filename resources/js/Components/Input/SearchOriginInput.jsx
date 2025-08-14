import SearchSelectInputV2 from "@/Components/Input/SearchSelectInputV2";
import { useSearchDestination } from "@/Features/Komerces/useSearchDestination";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";

export default function SearchOriginInput({ data, setData }) {
    const [selectedId, setSelectedId] = useState([]);
    const [options, setOptions] = useState([]);

    const { response, isLoading, handleSearchDestination } =
        useSearchDestination(setData);

    useEffect(() => {
        if (response && response.data?.data) {
            const mapped = response.data.data.map((item) => ({
                id: item.id,
                name: item.label,
            }));
            setOptions(mapped);
        }
    }, [response]);

    useEffect(() => {
        if (selectedId) {
            const selected = response?.data?.data?.find(
                (item) => item.id === selectedId
            );
            setData((prev) => ({
                ...prev,
                origin_default: selected?.id ?? data?.origin_default,
                origin_description: selected?.label
                    ? `ID Origin: ${selected?.label}`
                    : data?.origin_description,
            }));
        }
    }, [selectedId]);

    return (
        <div>
            <div className="mb-2 block">
                <Label
                    htmlFor="product_ids"
                    value="Origin Pengiriman (masukan manual jika mengalami limit)"
                />
            </div>
            <SearchSelectInputV2
                entities={options}
                otherEntity={"code"}
                selectedEntityId={selectedId}
                setSelectedEntityId={(id) => {
                    setSelectedId(id);
                }}
                label={"-- Pilih origin pengiriman --"}
                placeholder={"Cari origin pengiriman..."}
                onChange={(e) => handleSearchDestination(e)}
                searchDataToServerIsLoading={isLoading}
                withSearhDataOptions={false}
            />
        </div>
    );
}
