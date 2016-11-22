
//Этот класс описывает одну единственную созданную, но не архивированную или не удаленную заметку.
class NoteFragment {

    constructor(elem) {
        //Здесь мы сохраняем переданный элемент, чтобы отталкиватся от него при поиске остальных элементов этого фрагмента
        this.innerElement = elem
        this.titleElement = this.innerElement.$$('.my-note p').first()
        this.bodyElement = this.innerElement.$$('.my-note p').get(1)
    }

    /**
     * Метод вернет заглавную строку у текущей заметки
     */
    getTitle() {
        return this.titleElement.getText()
    }

    /**
     * Метод вернет тело у текущей заметки
     */
    getBody() {
        return this.bodyElement.getText()
    }

}

module.exports.NoteFragment = NoteFragment