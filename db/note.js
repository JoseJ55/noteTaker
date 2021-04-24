const fs = require('fs').promises;

class Note {
    read(){
        // fs.readFile("db/db.json", "utf-8").then((data) => {
        //     const notes = data;
        //     return notes;
        // });C:\Users\josej\bootcamp\hw\noteTaker\noteTaker\db\db.json
        return fs.readFile('db/db.json', "utf-8")
    }

    allNotes() {
        return this.read().then((notes) => {
            const parseNotes = JSON.parse(notes).map(((note) => note));
            return parseNotes;
        })
    }

    write(title, text) {
        let data = {
            title: title,
            text: text
        }
        fs.writeFile("'db/db.json", data)
    }
}

module.exports = new Note();