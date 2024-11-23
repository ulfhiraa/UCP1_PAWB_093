import express from "express";
import bodyParser from "body-parser";
import bibitRouter from './routes/bibit.js'; // Import router bibit
import pupukRouter from './routes/pupuk.js'; // Import router pupuk

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());

// Menggunakan router untuk setiap endpoint
app.use("/bibit", bibitRouter);
app.use("/pupuk", pupukRouter);

// Route utama
app.get("/", (req, res) => {
    console.log("GET ROUTE");
    res.send("UCP 1 PAW | BIBIT & PUPUK");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
