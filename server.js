const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
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
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//use environmental variale if not use 3001 port
const PORT = process.env.PORT || 3001;


//to make our server to listen 
//TODO: CHANGE PORT 3001 TO PORT ONCE DEPLOYED TO HEROKU
app.listen(PORT,() => { 
    console.log(`API server now on port ${PORT}`);
});