//to declare routes in any file
const router = require('express').Router();
//to require note-data JSON format
const {notes} = require('../../db/db.json');
const {createNewNote,removeNote} = require('../../lib/notes');
//npm package (shortid) to generate ids
const shortid = require('shortid');


//to request data from db.json and return saved notes
router.get('/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

//for client to add notes 
router.post('/notes', (req,res) => {
    //set id based on what the next index of the array will be
    req.body.id = shortid.generate();
    
    //add note to json file and note array in this function
    const note = createNewNote(req.body,notes);
    //req.body is where our incoming content will be
    res.json(note);
});

//to delete
router.delete('/notes/:id', (req,res) => {
    const id = req.params.id;
    const deleteNote = removeNote(id,notes);
    res.json(deleteNote);
});

module.exports = router;