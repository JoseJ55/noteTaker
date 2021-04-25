const express = require('express');
const router = express.Router();
const note = require('../db/note')

// router that gets notes in the JSON file
router.get("/", (req, res) => {
    note.read().then((note) => {
        res.json(JSON.parse(note))
    });
    
})

// router that gets all the notes in the JSON file
router.get('/api/notes', (req, res) => {
    note.allNotes().then((notes) => {
        res.json(notes);
    });
})

// need to work on this so when a title it click it get that note's text.
// router.get('/api/notes', (req, res) => {
//     console.log('Hi')
// })

// reouter for adding to the JSON file.
router.post('/api/notes', (req, res) => {
    let title = req.body.title;
    let text = req.body.text;

    note.write(title, text)
    res.status(200).send({result: "OK"})
})

// router for deleting from the JSON file.
// still need to work on this.
router.delete('/api/notes/:id', (req, res) => {
    const {id} = req.params;
    console.log(req.params)
})


module.exports = router