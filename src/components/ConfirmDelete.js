import Popup from './Popup.js';

export default class ConfirmDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmDeleteButton = document.querySelector('.popup__save_button-confirm');
    }

    setEventListeners(deleteCard) {
        super.setEventListeners();
        this._handleDeleteCard = deleteCard;
        this._confirmDeleteButton.addEventListener('click', this._handleDeleteCard);
    }

    close() {
        super.close();
        this._confirmDeleteButton.removeEventListener('click', this._handleDeleteCard);
    }
}