let NoteFragment = require('./NoteFragment.js').NoteFragment

class BaseNotesFragment {
    constructor() {
        this._elems = $$('.grid-container .grid-item');
    }

    count() {
        return new NoteFragment(this._elems.count())
    }

    get(index) {
        return new NoteFragment(this._elems.get(index))
    }

    first() {
        let first = this._elems.get(0)
        return new NoteFragment(first)
    }

}

module.exports.BaseNotesFragment = BaseNotesFragment