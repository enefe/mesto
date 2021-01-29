export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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

        this._cardImage = this._element.querySelector('.place__image');

        this._element.querySelector('.place__name').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._link;
    
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => {
            this._handleLikeCard();
        })
        this._element.querySelector('.place__delete').addEventListener('click', () => {
            this._handleDeleteCard();
        })
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }

    _handleLikeCard() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _handleDeleteCard() {
        this._element.querySelector('.place__delete').closest('.place').remove();
    }
}