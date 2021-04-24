const express = require('express');
const router = express.Router();
const note = require('../db/note')

router.get("/", (req, res) => {
    note.read().then((note) => {
        res.json(JSON.parse(note))
        // console.log(note)
    });
    
})

router.get('/api/notes', (req, res) => {
    note.allNotes().then((notes) => {
        res.json(notes);
        // console.log(res.json(notes))
    });
})

router.post('/api/notes', (req, res) => {
    let title = req.body.title;
    let text = req.body.title;

    note.write(title, text)
    res.status(200).send({result: "OK"})
    // note.write(req.body)
})

// router.get('/api/notes', (req, res) => {
//     note.allNotes().then((notes) => {
//         res.json(notes)
//         console.log(notes)
//     });
// })


module.exports = router