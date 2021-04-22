const express = require('express');
const router = express.Router();
const note = require('../db/note')

// router.get("/notes", (req, res) => {
//     note.read().then((notes) => {
//         res.json(JSON.parse(notes))
//         // console.log(notes)
//     });
    
// })

router.get('/', (req, res) => {
    note.allNotes().then((notes) => {
        res.json(notes);
        console.log(notes)
    });
})

// router.post('/api/notes', (req, res) => {

// })


module.exports = router