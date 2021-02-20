import './index.css';

import { profileEditPopup, formProfileElement, nameProfile, captionProfile, nameInput, captionInput, profileAddPopup, formCardsElement, titleInput, linkInput } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { Api } from '../components/Api';
import ConfirmDelete from '../components/ConfirmDelete.js';

const userInfo = new UserInfo(nameProfile, captionProfile);

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
        'Content-type': 'application/json',
        'authorization': 'cbea6eca-cb5a-416c-8e34-74206e0ddc96'
    }
});

api.getUserInfo()
    .then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        userInfo.setUserId(res._id);
    })
    .catch((err) => {
        console.log(err);
    });

const cardList = new Section({
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
}, '.places');
    
api.getCards()
    .then((res) => {
        cardList.renderItems(res);
    })
    .catch((err) => {
        console.log(err);
    });

const confirmDelete = new ConfirmDelete('.popup_confirm-delete');

const removeCard = (card) => {
    return() => {
        api.deleteCard(card.returnCardId())
        .then((res) => {
            confirmDelete.close();
            card.removeCard();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

function createCard({name, link, likes, owner, _id}) {
    const card = new Card({name, link, likes, owner, _id, userId: userInfo.returnUserId()}, '.template', handleCardClick,
        () => {
            confirmDelete.setEventListeners(removeCard(card));
            confirmDelete.open();
        },
        () => {
            api.setLikeCard(card.returnCardId())
                .then((res) => {
                    card.changeLikes(res.likes.length);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        () => {
            api.removeLikeCard(card.returnCardId())
                .then((res) => {
                    card.changeLikes(res.likes.length);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    );
    return card.generateCard();
}

const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListeners();

const newCardsPopup = new PopupWithForm({
    popupSelector: '.popup_cards',
    handleFormSubmit: () => {
        api.addCards(titleInput.value, linkInput.value)
        .then((res) => {
            cardList.addItem(createCard(res));
        })
        .catch((err) => {
            console.log(err);
        });
        newCardsPopup.close();
    }
});

newCardsPopup.setEventListeners();

const newProfilePopup = new PopupWithForm({
    popupSelector: '.popup_profile',
    handleFormSubmit: () => {
        const newUserInfo = userInfo.getUserInfo();
        api.setUserInfo(nameInput.value, captionInput.value)
        .then(data => userInfo.setUserInfo(data.name, data.about))
            .catch((err) => {
                console.log(err);
            });
        userInfo.setUserInfo(nameInput.value, captionInput.value);
        newProfilePopup.close();
    }
});

newProfilePopup.setEventListeners();

// Конфиг для валидации форм:
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_invalid',
    inputErrorClass: 'popup__input_invalid',
};

const formProfile = new FormValidator(validationConfig, formProfileElement);
formProfile.enableValidation();

const formCards = new FormValidator(validationConfig, formCardsElement);
formCards.enableValidation();

// Функция открытия попапа с картинкой при клике на карточку:
function handleCardClick(name, link) {
    popupImage.open(name, link);
} 

// Обработчик события Открытие попапа профиля:
profileEditPopup.addEventListener('click', function () {
    formProfile.resetValidation();

    const getUserInfo = userInfo.getUserInfo();
    nameInput.value = getUserInfo.name;
    captionInput.value = getUserInfo.about;

    newProfilePopup.open();
});

// Обработчик события Открытие попапа карточек:
profileAddPopup.addEventListener('click', function () {
    formCards.resetValidation();

    newCardsPopup.open();
});