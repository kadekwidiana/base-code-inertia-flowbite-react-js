import SearchSelectInputV2 from "@/Components/Input/SearchSelectInputV2";
import { useSearchDestination } from "@/Features/Komerces/useSearchDestination";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";

export default function SearchDestinationInput({
    setData,
    setCheckCostResponse,
}) {
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
                shipment_cost: 0,
                destination_json: selected,
                cost_json: null,
            }));
            setCheckCostResponse(null);
        }
    }, [selectedId]);

    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor="product_ids" value="Destinasi Pengiriman" />
            </div>
            <SearchSelectInputV2
                entities={options}
                otherEntity={"code"}
                selectedEntityId={selectedId}
                setSelectedEntityId={(id) => {
                    setSelectedId(id);
                }}
                label={"-- Pilih destinasi pengiriman --"}
                placeholder={"Cari destinasi pengiriman..."}
                onChange={(e) => handleSearchDestination(e)}
                searchDataToServerIsLoading={isLoading}
                withSearhDataOptions={false}
            />
        </div>
    );
}
