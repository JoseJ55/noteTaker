const express = require('express');
const router = express.Router();
const note = require('../db/note')

router.get("/", (req, res) => {
    note.read().then((notes) => res.json(JSON.parse(notes)));
})

router.get('/api/notes', (req, res) => {
    note.allNotes().then((notes) => res.json(notes));
})


module.exports = router