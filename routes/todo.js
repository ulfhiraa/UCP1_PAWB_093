// Import modul yang diperlukan
const express = require('express');
const router = express.Router();

// Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Endpoint untuk menambah tugas baru
router.post('/', (req, res) => {
    const newPupuk = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});