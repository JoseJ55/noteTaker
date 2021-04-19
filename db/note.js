const fs = require('fs').promises;

class Note {
    read(){
        fs.readFile("db/db.json", "utf-8").then((data) => {
            const notes = data;
            return notes;
        });
    }
}

module.exports = new Note();