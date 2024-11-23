import express, { Route } from "express";

const router = express.Router();

const pupuk = [
    {
        id: "1",
        namaPupuk: "Pupuk Tablet",
        jenisPupuk: "Padat",
        jumlah: "2kg"
    },
    {
        id: "2",
        namaPupuk: "Pupuk Granul",
        jenisPupuk: "Padat",
        jumlah: "1kg"
    },
    {
        id: "3",
        namaPupuk: "Pupuk Kandang",
        jenisPupuk: "Cair",
        jumlah: "4kg"
    },
    {
        id: "4",
        namaPupuk: "Pupuk Briket",
        jenisPupuk: "Padat",
        jumlah: "3kg"
    },
    {
        id: "5",
        namaPupuk: "Pupuk NPK Cair",
        jenisPupuk: "Cair",
        jumlah: "1kg"
    }
];
router.get("/", (req, res) => {
    res.send(pupuk); // menampilkan data
});
export default router;