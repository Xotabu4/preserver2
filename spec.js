//Импорт пейдж обджекта из другого файла
let NotesPage = require('./pageObjects/NotesPage.js').NotesPage

//Просто наш базовый URL для работы
let URL = 'http://www.hiteshbalar.com/preserver/notes'

describe('Preserver tests', function () {
    beforeEach(function () {
      browser.get(URL)
      browser.sleep(5000)

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

    xit('should be created when title and body provided', function () {
        let notesPage = new NotesPage()

        let title = 'TestTitle'
        let body = 'TestBody'
        notesPage.createNote(title, body)
        browser.sleep(2000)

        //notesPage.navbar.openArchiveNotesPage()

        let notesOnPage = notesPage.notes

        expect(notesOnPage.count()).toBe(1,
            'Notes count should be 1 after created')
        expect(notesOnPage.first().getTitle()).toContain(title)
        expect(notesOnPage.first().getBody()).toContain(body)
    })

    it('should be created when only title provided', function () {
        
        notesPage.createNote('Test', '')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })

    it('should be created when only body provided', function () {

        notesPage.createNote('', 'Test')
        expect(notesPage.getNotes().count()).toBe(1,
            'Notes count should be 1 after created')
    })

    it('should NOT be created when nothing provided', function () {

        notesPage.createNote('', '')
        expect(notesPage.getNotes().count()).toBe(0,
            'Notes count should be 0')
    })
    

})