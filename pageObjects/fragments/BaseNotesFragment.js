let NoteFragment = require('./NoteFragment.js').NoteFragment

class BaseNotesFragment {
    constructor() {
        this._elements = $$('.grid-container .grid-item')
    }

    count() {
        return new NoteFragment(this._elements.count())
    }

    get(index) {
        return new NoteFragment(this._elements.get(index))
    }

    first() {
        return new NoteFragment(this._elements.get(0))
    }

}

module.exports.BaseNotesFragment = BaseNotesFragment