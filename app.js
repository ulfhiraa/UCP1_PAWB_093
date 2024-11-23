import express from 'express';
import bodyParser from 'body-parser';
import bibitRouter from './routes/bibit.js';
import pupukRouter from './routes/pupuk.js';

const app = express();
const PORT = 8000;

// Middleware untuk parsing JSON body
app.use(bodyParser.json());

// Menggunakan route bibit
app.use('/bibit', bibitRouter);

// Menggunakan route pupuk
app.use('/pupuk', pupukRouter);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
