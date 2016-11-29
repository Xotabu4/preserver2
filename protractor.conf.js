module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: ['specs/*_spec.js'],
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
    onPrepare: function () {
        
        //jasmine.getEnv().addReporter({})
        beforeEach(function () {
            browser.get('/')
            browser.sleep(200)
            browser.wait(EC.visibilityOf(notesPage.navbar.navBarElem), 10000, 'Header should be visible after page open')
        })
    }
}