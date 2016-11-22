

class NoteFragment {

    constructor(elem) {
        this.innerElement = elem
        this.titleElement = this.innerElement.$$('.my-note p').first()
        this.bodyElement = this.innerElement.$$('.my-note p').get(1)
    }

    getTitle() {
        this.titleElement.getText()
    }

    getBody() {
        this.bodyElement.getText()
    }

}

module.exports.NoteFragment = NoteFragment