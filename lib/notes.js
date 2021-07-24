const fs = require('fs');
const path = require('path');

//function to handle new note
function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    console.log(body);
    //return finish code to post route for response
    return note;
}

module.exports = createNewNote;