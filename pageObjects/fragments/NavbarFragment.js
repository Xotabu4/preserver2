class NavbarFragment {

    constructor() {
        this.navBarElem = $('.navbar')

        this.openMenuButton = this.navBarElem.$('.navbar-right a.dropdown-toggle')

        this.menu = new MenuFragment(this.navBarElem)   
    }

    _openMenu() {
        this.openMenuButton.click()
        let visibility = protractor.ExpectedConditions.visibilityOf
        browser.wait(visibility(this.menu.menuElem), 2000 , 'Menu should became visible after open')

        return this.menu
    }

    openArchiveNotesPage() {
        this._openMenu().clickArchiveNoteLink()    
    }
}

class MenuFragment {
    constructor(navBarElem) {
        this.navBarElem = navBarElem
        this.menuElem = this.navBarElem.$('.dropdown.open .dropdown-menu')

        this.achiveNoteLink = this.menuElem.$(`a[href*='archive-notes']`)
        // let EC = protractor.ExpectedConditions
        // let isVisible = EC.visibilityOf($('blabla')) () 
    }

    clickArchiveNoteLink() {
        this.achiveNoteLink.click()
        browser.sleep(2000)
    }

}

module.exports.NavbarFragment = NavbarFragment