import express from "express";
const router = express.Router();

// Data bibit
let bibits = [
    { id: "1", namaBibit: "Bibit Cabai", jenisBibit: "Cabai Merah Keriting", jumlahBibit: "2kg" },
    { id: "2", namaBibit: "Bibit Tomat", jenisBibit: "Tomat Ceri", jumlahBibit: "1kg" },
    { id: "3", namaBibit: "Bibit Padi", jenisBibit: "Padi Gogo", jumlahBibit: "4kg" },
    { id: "4", namaBibit: "Bibit Jagung", jenisBibit: "Jagung Manis", jumlahBibit: "3kg" },
    { id: "5", namaBibit: "Bibit Kacang Panjang", jenisBibit: "Kacang Panjang Hijau", jumlahBibit: "1kg" }
];

// Endpoint untuk mendapatkan semua bibit
router.get('/', (req, res) => {
    res.json(bibits);
});

// Endpoint untuk menambah bibit baru
router.post('/', (req, res) => {
    const { namaBibit, jenisBibit, jumlah } = req.body;
    const newBibit = {
        id: (bibits.length + 1).toString(), // Membuat ID baru
        namaBibit,
        jenisBibit,
        jumlahBibit
    };
    bibits.push(newBibit);
    res.status(201).json(newBibit);
});

// Endpoint untuk menghapus bibit berdasarkan ID
router.delete('/:id', (req, res) => {
    const bibitIndex = bibits.findIndex(b => b.id === req.params.id);
    if (bibitIndex === -1) return res.status(404).json({ message: 'Bibit tidak ditemukan' });

    const deletedBibit = bibits.splice(bibitIndex, 1)[0];
    res.status(200).json({ message: `Bibit dengan ID ${deletedBibit.id} telah dihapus` });
});

// Endpoint untuk memperbarui bibit berdasarkan ID
router.put('/:id', (req, res) => {
    const bibit = bibits.find(b => b.id === req.params.id);
    if (!bibit) return res.status(404).json({ message: 'Bibit tidak ditemukan' });

    const { namaBibit, jenisBibit, jumlah } = req.body;
    bibit.namaBibit = namaBibit || bibit.namaBibit;
    bibit.jenisBibit = jenisBibit || bibit.jenisBibit;
    bibit.jumlah = jumlah || bibit.jumlah;

    res.status(200).json({
        message: `Bibit dengan ID ${bibit.id} telah diperbarui`,
        updatedBibit: bibit
    });
});

export default router;
