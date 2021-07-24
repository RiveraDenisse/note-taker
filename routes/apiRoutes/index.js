//to require note-data JSON format
const {notes} = require('../../Develop/db/db.json');
const {createNewNote} = require('../../lib/notes');
//to declare routes in any file
const router = require('express').Router();

//to request data from db.json and return saved notes
router.get('/api/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

//for client to add notes 
router.post('/api/notes', (req,res) => {
    //set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    
    //add note to json file and note array in this function
    const note = createNewNote(req.body,notes);
    //req.body is where our incoming content will be
    console.log(req.body);
    res.json(note);
});

module.exports = router;