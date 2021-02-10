import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupPicture = document.querySelector('.popup__image');
        this._imagePopupCaption = document.querySelector('.popup__img-title');
    }

    open(name, link) {
        this._imagePopupPicture.src = link;
        this._imagePopupCaption.textContent = name;
        super.open();
    }
}