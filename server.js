//require npm express
const express = require('express');
//to instantiate the server
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());
//use environmental variale if not use 3001 port
const PORT = process.env.PORT || 3001;
//to require note-data JSON format
const {notes} = require('./Develop/db/db.json');


//to request data from db.json 
app.get('/api/notes', (req,res) => {
    res.json(notes);
});

//for client to add notes
app.post('/api/notes', (req,res) => {
    //req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
});

//to make our server to listen 
//TODO: CHANGE PORT 3001 TO PORT ONCE DEPLOYED TO HEROKU
app.listen(PORT,() => { 
    console.log(`API server now on port ${PORT}`);
});