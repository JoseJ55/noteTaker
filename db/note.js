const fs = require('fs').promises;

class Note {
    // function to get a single not in json file. 
    read(){
        return fs.readFile('db/db.json', "utf-8")
    }

    // function to get all the notes in the json file. 
    allNotes() {
        return this.read().then((notes) => {
            const parseNotes = JSON.parse(notes).map(((note) => note));
            return parseNotes;
        })
    }

    // A function to search for a certain note and returns the title and text.
    oneNote(title) {
        fs.readFile('db/db.json').then((fileData) => {

            const obj = JSON.parse(fileData);
            console.log(obj)
        })
    }

    // Thisi fucntion wirtes new data in to the json file. 
    write(title, text) {
        let obj = []
        let data = {
            title: title,
            text: text
        }
        fs.readFile('db/db.json').then((fileData) => {

            obj = JSON.parse(fileData);
            obj.push(data)

            let json = JSON.stringify(obj)

            fs.writeFile('db/db.json', json, 'utf-8');
        })
    }

    // still need to work on this part.
    // delete()
}

module.exports = new Note();