import SpinnerLoading from "./SpinnerLoading";

export default function DataLoading() {
    return (
        <div className="my-6 flex flex-col items-center justify-center gap-2">
            <SpinnerLoading />
            <span className="text-gray-800">Memuat data...</span>
        </div>
    );
}
