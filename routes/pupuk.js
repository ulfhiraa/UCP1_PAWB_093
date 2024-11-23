import express from "express";
const router = express.Router();

// Data pupuk
let pupuks = [
    { id: "1", namaPupuk: "Pupuk Tablet", jenisPupuk: "Padat", jumlahPupuk: "2kg" },
    { id: "2", namaPupuk: "Pupuk Granul", jenisPupuk: "Padat", jumlahPupuk: "1kg" },
    { id: "3", namaPupuk: "Pupuk Kandang", jenisPupuk: "Cair", jumlahPupuk: "4kg" },
    { id: "4", namaPupuk: "Pupuk Briket", jenisPupuk: "Padat", jumlahPupuk: "3kg" },
    { id: "5", namaPupuk: "Pupuk NPK Cair", jenisPupuk: "Cair", jumlahPupuk: "1kg" }
];

// Endpoint untuk mendapatkan semua pupuk
router.get('/', (req, res) => {
    res.json(pupuks);
});

// Endpoint untuk menambah pupuk baru
router.post('/', (req, res) => {
    const { namaPupuk, jenisPupuk, jumlah } = req.body;
    const newPupuk = {
        id: (pupuks.length + 1).toString(), // Membuat ID baru
        namaPupuk,
        jenisPupuk,
        jumlahPupuk
    };
    pupuks.push(newPupuk);
    res.status(201).json(newPupuk);
});

// Endpoint untuk menghapus pupuk berdasarkan ID
router.delete('/:id', (req, res) => {
    const pupukIndex = pupuks.findIndex(p => p.id === req.params.id);
    if (pupukIndex === -1) return res.status(404).json({ message: 'Pupuk tidak ditemukan' });

    const deletedPupuk = pupuks.splice(pupukIndex, 1)[0];
    res.status(200).json({ message: `Pupuk dengan ID ${deletedPupuk.id} telah dihapus` });
});

// Endpoint untuk memperbarui pupuk berdasarkan ID
router.put('/:id', (req, res) => {
    const pupuk = pupuks.find(p => p.id === req.params.id);
    if (!pupuk) return res.status(404).json({ message: 'Pupuk tidak ditemukan' });

    const { namaPupuk, jenisPupuk, jumlah } = req.body;
    pupuk.namaPupuk = namaPupuk || pupuk.namaPupuk;
    pupuk.jenisPupuk = jenisPupuk || pupuk.jenisPupuk;
    pupuk.jumlah = jumlah || pupuk.jumlah;

    res.status(200).json({
        message: `Pupuk dengan ID ${pupuk.id} telah diperbarui`,
        updatedPupuk: pupuk
    });
});

export default router;
