export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const newItem = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.place')
          .cloneNode(true);
      
        return newItem;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._element.querySelector('.place__name').textContent = this._name;
        this._element.querySelector('.place__image').src = this._link;
    
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => {
            this._handleLikeCard();
        })
        this._element.querySelector('.place__delete').addEventListener('click', () => {
            this._handleDeleteCard();
        })
        this._element.querySelector('.place__image').addEventListener('click', () => {
            this._handleOpenPopupImage();
        })
    }

    _handleLikeCard() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _handleDeleteCard() {
        this._element.querySelector('.place__delete').closest('.place').remove();
    }

    _handleOpenPopupImage() {
        document.querySelector('.popup_image').classList.add('popup_opened');
        document.querySelector('.popup__image').src = this._element.querySelector('.place__image').src;
        document.querySelector('.popup__img-title').textContent = this._element.querySelector('.place__name').textContent;
    }

}