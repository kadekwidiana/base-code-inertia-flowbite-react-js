export const TRANSACTION_STATUSES = [
    'PENDING',
    'PAID',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED'
];

export const BASE_URL_MIDTRANS = import.meta.env.VITE_MIDTRANS_BASE_URL;
export const CLIENT_KEY_MIDTRANS = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
export const CITY_CODE_DEFAULT = import.meta.env.VITE_CITY_CODE_DEFAULT;
export const ORIGIN_DEFAULT = 26288;