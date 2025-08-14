export function getTransactionStatusColor(status) {
    switch (status?.toUpperCase()) {
        case 'PENDING':
            return 'bg-yellow-100 text-yellow-700';
        case 'PAID':
            return 'bg-blue-100 text-blue-700';
        case 'PROCESSING':
            return 'bg-purple-100 text-purple-700';
        case 'SHIPPED':
            return 'bg-indigo-100 text-indigo-700';
        case 'DELIVERED':
            return 'bg-green-100 text-green-700';
        case 'CANCELLED':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
}
