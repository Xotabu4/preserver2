

class NoteFragment {

    constructor(elem) {
        this._elem = elem
        this.titleElement = this._elem.$$('.my-note p').first()
        this.bodyElement = this._elem.$$('.my-note p').get(1)
    }

    getTitle() {
        this.titleElement.getText()
    }

    getBody() {
        this.bodyElement.getText()
    }

}

module.exports.NoteFragment = NoteFragment