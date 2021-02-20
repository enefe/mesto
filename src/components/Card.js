export default class Card {
    constructor({name, link, likes, owner, _id, userId }, cardSelector, handleCardClick, handlerDeleteClick, addLike, removeLike) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._ownerId = owner._id;
        this._imageId = _id;
        this._likes = likes;
        this._userId = userId;
        this._handlerDeleteClick = handlerDeleteClick;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._handleLikeCard = this._handleLikeCard.bind(this);
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
        
        this._element.querySelector('.place__likes-card').textContent = this._likes.length;
        this._likes.forEach(item => {
            if (item._id === this._userId) {
                this._element.querySelector('.place__like').classList.add('place__like_active');
            }
        });
        
        this._cardImage = this._element.querySelector('.place__image');

        this._element.querySelector('.place__name').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._link;

        this._setEventListeners();
        this._checkId();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', this._handleLikeCard); 

        this._element.querySelector('.place__delete').addEventListener('click', this._handlerDeleteClick);

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        })
    }



    _handleLikeCard(evt) {
        if (!evt.target.classList.contains('place__like_active')) {
            this._element.querySelector('.place__like').classList.add('place__like_active');
            this._addLike();
        } else {
            this._element.querySelector('.place__like').classList.remove('place__like_active');
            this._removeLike();
        }
        // this._element.querySelector('.place__like').classList.toggle('place__like_active');
    } 

    _handleDeleteCard() {
        this._element.querySelector('.place__delete').closest('.place').remove();
    }

    _checkId() {
        if (this._ownerId !== this._userId) {
            this._element.querySelector('.place__delete').remove();
        }
    }

    returnCardId() {
        return this._imageId;
    }

    removeCard() {
        this._element.remove();
        this._element = null;
    }

    changeLikes(item) {
        this._element.querySelector('.place__likes-card').textContent = item;
    }
}