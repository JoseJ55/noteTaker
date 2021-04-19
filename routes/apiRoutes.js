const express = require('express');
const router = express.Router();
const note = require('../db/note')

router.get("/notes", (req, res) => {
    const notes = note.read()
    return res.json(notes);
})

module.exports = router