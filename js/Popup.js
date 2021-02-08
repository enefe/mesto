export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        
    }

    close() {
        this._popup.classList.remove('popup_opened');
        
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        };
    }    

    setEventListeners() {
        this._popup.addEventListener('click', (e) => {
            if (e.target.classList.contains('popup_opened')) {
                this.close();
            };
            if (e.target.classList.contains('popup__close')) {
                this.close();
            };
        });
        document.addEventListener('keydown', (e) => {this._handleEscClose(e)});
        document.removeEventListener('keydown', (e) => {this._handleEscClose(e)});
        
    }
}