import express, { Route } from "express";

const router = express.Router();

const pupuk = [
    {
        id: "1",
        namaBibit: "Bibit Cabai",
        jenisBibit: "Cabai Merah Keriting",
        jumlah: "2kg"
    },
    {
        id: "2",
        namaBibit: "Bibit Tomat",
        jenisBibit: "Tomat Ceri",
        jumlah: "1kg"
    },
    {
        id: "3",
        namaBibit: "Bibit Padi",
        jenisBibit: "Padi Gogo",
        jumlah: "4kg"
    },
    {
        id: "4",
        namaBibit: "Bibit Jagung",
        jenisBibit: " Jagung Manis",
        jumlah: "3kg"
    },
    {
        id: "5",
        namaBibit: "Bibit Kacang Panjang",
        jenisBibit: "Kacang Panjang Hijau",
        jumlah: "1kg"
    }
];
router.get("/", (req, res) => {
    res.send(pupuk); // menampilkan data
});
export default router;