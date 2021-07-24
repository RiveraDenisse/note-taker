const fs = require('fs');
const path = require('path');
//require npm express
const express = require('express');
//to instantiate the server
const app = express();
//parse incoming string or array data (takes incoming POST data and converts it to value pairings accessed in req.body)
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());
//to make files available
app.use(express.static('public'));
//use environmental variale if not use 3001 port
const PORT = process.env.PORT || 3001;
//to require note-data JSON format
const {notes} = require('./Develop/db/db.json');



//function to handle new note
function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    console.log(body);
    //return finish code to post route for response
    return note;
}
//to request data from db.json and return saved notes
app.get('/api/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

//for client to add notes 
app.post('/api/notes', (req,res) => {
    //set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    
    //add note to json file and note array in this function
    const note = createNewNote(req.body,notes);
    //req.body is where our incoming content will be
    console.log(req.body);
    res.json(note);
});

//route to get index.html to be served from Express.js server ('/' is the route used to create a homepage for a server)
app.get('/', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
//route to get notes.html to be served from Express.js server ('/notes' will take you to the notes page)
app.get('/notes', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});
//route to get index.html to be served from Express.js server ('*' acts as a wildcard so any address not specified above will take you to homepage)
app.get('*', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
//to make our server to listen 
//TODO: CHANGE PORT 3001 TO PORT ONCE DEPLOYED TO HEROKU
app.listen(PORT,() => { 
    console.log(`API server now on port ${PORT}`);
});