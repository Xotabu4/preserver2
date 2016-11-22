let NotesFragment = require('./fragments/NotesFragment.js').NotesFragment
let NavbarFragment = require('./fragments/NavbarFragment.js').NavbarFragment

class NotesPage  {

    constructor() {
        this.noteEditor = new NoteEditorFragment()
        this.navbar = new NavbarFragment()
        //Получим коллекцию всех заметок которые есть на этой странице
        this.notes = new NotesFragment()
    }

}

class NoteEditorFragment {
    constructor() {
        this.noteEditorElement = $('.note-editor')
        this.newNoteTitleField = this.noteEditorElement.$('input[placeholder="Title"]')
        this.newNoteBodyField = this.noteEditorElement.$('textarea')
    }

    //Создаст заметку на странице
    createNote(title, body) {
        this.activate()
        this.newNoteBodyField.clear()
        this.newNoteBodyField.sendKeys(body)

        this.newNoteTitleField.clear()
        this.newNoteTitleField.sendKeys(title)
        
        element(by.buttonText('Save')).click()
    }

    activate() {
        this.noteEditorElement.click()
        this.noteEditorElement.click()
        

        let EC = protractor.ExpectedConditions
        

        browser.wait(EC.and(EC.elementToBeClickable(this.newNoteTitleField), EC.elementToBeClickable(this.newNoteBodyField)), 2000, 'Title and Body field should be ready to type after activation')
    }
}

// Экспортим объект чтобы он был доступен в других файлах
module.exports.NotesPage = NotesPage