let NotesFragment = require('./fragments/NotesFragment.js').NotesFragment
let NavbarFragment = require('./fragments/NavbarFragment.js').NavbarFragment

class NotesPage  {

    constructor() {
        this.newNoteBodyField = $('.note-editor textarea')
        this.newNoteTitleField = $('.note-editor input[placeholder="Title"]')

        this.navbar = new NavbarFragment()

        //Получим коллекцию всех заметок которые есть на этой странице
        this.notes = new NotesFragment()
    }

    //Создаст заметку на странице
    createNote(title, body) {
        this.newNoteBodyField.click()
        this.newNoteBodyField.sendKeys(body)
        this.newNoteTitleField.click()
        this.newNoteTitleField.sendKeys(title)
        element(by.buttonText('Save')).click()
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.NotesPage = NotesPage