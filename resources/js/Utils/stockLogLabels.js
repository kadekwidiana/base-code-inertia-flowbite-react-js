const SOURCE_LABELS_ID = {
    PURCHASE: "Pembelian",
    INTERNAL_PROCUREMENT: "Pengadaan Internal",
    CUSTOMER_RETURN: "Retur Pelanggan",
    ADJUSTMENT_IN: "Koreksi Tambah",
};

const DESTINATION_LABELS_ID = {
    SALES: "Penjualan",
    INTERNAL_USE: "Pemakaian Internal",
    DAMAGED: "Rusak",
    ADJUSTMENT_OUT: "Koreksi Kurang",
};

export function getSourceLabel(value) {
    return value && SOURCE_LABELS_ID[value] ? SOURCE_LABELS_ID[value] : "-";
}

export function getDestinationLabel(value) {
    return value && DESTINATION_LABELS_ID[value] ? DESTINATION_LABELS_ID[value] : "-";
}

