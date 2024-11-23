// Import modul yang diperlukan
const express = require('express');
const router = express.Router();

// Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => {
    res.json(todos);
});
