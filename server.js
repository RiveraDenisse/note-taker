//require npm express
const express = require('express');
//to instantiate the server
const app = express();
//use port or if not 3001
const PORT = process.env.PORT || 3001;
//to require note-data
const {notes} = require('./Develop/db/db.json');


//to request data from db.json 
app.get('/api/notes', (req,res) => {
    res.json(notes);
});
//to make our server to listen 
//TODO: CHANGE PORT 3001 TO PORT ONCE DEPLOYED TO HEROKU
app.listen(PORT,() => { 
    console.log(`API server now on port 3001`);
});