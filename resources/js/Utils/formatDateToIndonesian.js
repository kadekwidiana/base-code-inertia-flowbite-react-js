/**
 * Fungsi untuk memformat tanggal ke dalam format "dd MMMM yyyy" dengan opsi jam
 * @param {string | Date} dateInput - Tanggal dalam format string atau objek Date
 * @param {boolean} isDisplayTime - Menentukan apakah jam harus ditampilkan atau tidak
 * @returns {string} Tanggal yang telah diformat dalam format "dd MMMM yyyy" dan opsional jam dalam format "HH:mm:ss"
 */
export function formatDateToIndonesian(dateInput, isDisplayTime = false) {
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    // Jika dateInput adalah string, pastikan parsing dalam zona waktu lokal
    const date = typeof dateInput === 'string' ? new Date(dateInput.replace('Z', '')) : new Date(dateInput);

    // Pastikan waktu diubah ke lokal tanpa pergeseran tanggal
    const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

    const day = localDate.getDate();
    const month = monthNames[localDate.getMonth()];
    const year = localDate.getFullYear();

    let formattedDate = `${day} ${month} ${year}`;

    if (isDisplayTime) {
        const hours = String(localDate.getHours()).padStart(2, '0');
        const minutes = String(localDate.getMinutes()).padStart(2, '0');
        const seconds = String(localDate.getSeconds()).padStart(2, '0');
        formattedDate += ` ${hours}:${minutes}:${seconds}`;
    }

    return formattedDate;
}
