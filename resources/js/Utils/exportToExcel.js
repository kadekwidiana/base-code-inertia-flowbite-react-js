import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

// Fungsi untuk mengubah nama header menjadi huruf besar
const transformHeadersToUpperCase = (data) => {
    if (data.length === 0) return data;

    // Ambil header dari kunci pertama data
    const headers = Object.keys(data[0]);

    // Ubah header menjadi huruf besar
    const upperCaseHeaders = headers.reduce((acc, header) => {
        acc[header] = header.toUpperCase();
        return acc;
    }, {});

    // Ubah header pada data
    return data.map(item => {
        const transformedItem = {};
        Object.keys(item).forEach(key => {
            transformedItem[upperCaseHeaders[key] || key] = item[key];
        });
        return transformedItem;
    });
};

export const handleExportExcel = (title, data) => {
    // Prompt the user to enter a file name using SweetAlert
    Swal.fire({
        title: 'Masukkan nama file',
        input: 'text',
        inputLabel: 'Nama File',
        inputPlaceholder: 'Masukkan nama file tanpa ekstensi',
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Export',
        cancelButtonText: 'Batal',
        inputValidator: (value) => {
            if (!value) {
                return 'Nama file tidak boleh kosong!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Get the file name from user input
            const fileName = result.value || title;

            // Ubah header menjadi huruf besar
            const transformedData = transformHeadersToUpperCase(data);

            // Create a new workbook
            const wb = XLSX.utils.book_new();

            // Convert table data to worksheet
            const ws = XLSX.utils.json_to_sheet(transformedData);

            // Add worksheet to workbook
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

            // Write workbook to file with the provided name
            XLSX.writeFile(wb, `${fileName}.xlsx`);

            Swal.fire('Berhasil', `File diekspor sebagai ${fileName}.xlsx`, 'success');
        }
    });
};
