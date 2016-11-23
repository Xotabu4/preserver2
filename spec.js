//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage
let EC = protractor.ExpectedConditions

//Просто наш базовый URL для работы
let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests', function () {
    let notesPage = new NotesPage()

    beforeEach(function () {
      browser.get(URL)
      browser.wait(EC.visibilityOf(notesPage.navbar.navBarElem), 10000, 'Header should be visible after page open')
    })

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
      // Wiping cookie files ONLY for current domain
      browser.manage().deleteAllCookies()
      // Wiping local and session storage
      browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
          })
      //Wiping indexedDB     
      browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
          function (err) {
            // Errors will be thrown when browser is on default data URL.
            // indexedDB storage is disabled for data URLs
        })
    })

    it('should be created when title and body provided', function () {
        let title = 'TestTitle'
        let body = 'TestBody'
        notesPage.noteEditor.createNote(title, body)

        let notesOnPage = notesPage.notes

        expect(notesOnPage.count()).toBe(1, 'Notes count should be 1 after created')
        expect(notesOnPage.first().getTitle()).toContain(title, `Should have title and body that was used for tests: ${title}/${body}`)
        expect(notesOnPage.first().getBody()).toContain(body, `Should have title and body that was used for tests: ${title}/${body}`)
    })

    it('should be created when only title provided', function () {
        let title = 'TestTitle'
        let body = ''
        notesPage.noteEditor.createNote(title, body)

        let notesOnPage = notesPage.notes
        expect(notesOnPage.count()).toBe(1, 'Notes count should be 1 after created')
        expect(notesOnPage.first().getTitle()).toContain(title, `Should have title and body that was used for tests: ${title}/${body}`)
        expect(notesOnPage.first().getBody()).toContain(body, `Should have title and body that was used for tests: ${title}/${body}`)
    })

    it('should be created when only body provided', function () {
        let title = ''
        let body = 'TestBody'
        notesPage.noteEditor.createNote(title, body)
        let notesOnPage = notesPage.notes
        expect(notesOnPage.count()).toBe(1, 'Notes count should be 1 after created')
        expect(notesOnPage.first().getTitle()).toContain(title, `Should have title and body that was used for tests: ${title}/${body}`)
        expect(notesOnPage.first().getBody()).toContain(body, `Should have title and body that was used for tests: ${title}/${body}`)
    })

    it('should NOT be created when nothing provided', function () {
        let title = ''
        let body = ''
        notesPage.noteEditor.createNote(title, body)
        expect(notesPage.getNotes().count()).toBe(0, 'Notes count should be 0')
    })

})