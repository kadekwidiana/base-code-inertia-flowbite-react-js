export function formatNumberID(value) {
    return value.toLocaleString("id-ID");
}

export function formatRupiah(value) {
    const number = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(number)) return "Rp. 0";

    return "Rp. " + number.toLocaleString("id-ID", { maximumFractionDigits: 0 });
}
