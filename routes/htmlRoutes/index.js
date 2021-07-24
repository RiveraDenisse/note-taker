const router = require('express').Router();
const path = require('path');
const noteroutes = require('../apiRoutes/index')

//route to get index.html to be served from Express.js server ('/' is the route used to create a homepage for a server)
router.get('/', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});
//route to get notes.html to be served from Express.js server ('/notes' will take you to the notes page)
router.get('/notes', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});
//route to get index.html to be served from Express.js server ('*' acts as a wildcard so any address not specified above will take you to homepage)
router.get('*', (req, res) => {
    //to tell where to find the file we want to send back to client
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = router;