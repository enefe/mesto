import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';


// Поиск переменных для попапа профиля:
const profileEditPopup = document.querySelector('.profile__edit');

const formProfileElement = document.querySelector('.popup__form_profile');
const nameProfile = document.querySelector('.profile__name');
const captionProfile = document.querySelector('.profile__caption');
const nameInput = formProfileElement.querySelector('.popup__input_name');
const captionInput = formProfileElement.querySelector('.popup__input_caption');

// Поиск переменных для попапа карточек:
const profileAddPopup = document.querySelector('.profile__add');

const formCardsElement = document.querySelector('.popup__form_cards');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

const data = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    }
];

function createCard(data) {
    const card = new Card(data, '.template', handleCardClick);
    const cardElement = card.generateCard();
        
    cardList.addItem(cardElement);
}

const newCardsPopup = new PopupWithForm({
    popupSelector: '.popup',
    handleFormSubmit: (data) => {
        createCard(data);
    }
});



const cardList = new Section({
        items: data,
        renderer: createCard
    },
    '.places',
);

// Отрисовка карточек:
cardList.renderItems();

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

//Экземпляр класса Popup для открытия попапа профиля:
const popupProfile = new Popup('.popup_profile');
popupProfile.setEventListeners();

//Экземпляр класса Popup для открытия попапа карточек:
const popupCards = new Popup('.popup_cards');
popupCards.setEventListeners();

// Функция открытия попапа с картинкой при клике на карточку:
function handleCardClick(name, link) {
    const popupImage = new PopupWithImage('.popup_image');
    popupImage.setEventListeners();
    popupImage.open(name, link);
} 

// Функция работы кнопки "Сохранить" в форме профиля:
function formProfileSubmitHandler(event) {
    event.preventDefault();

    nameProfile.textContent = nameInput.value;
    captionProfile.textContent = captionInput.value;

    popupProfile.close();
}

// Функция работы кнопки "Сохранить" в форме карточек:
 function formCardsSubmitHandler(event) {
    event.preventDefault();

    const nameCards = titleInput.value; 
    const imageCards = linkInput.value;

    createCard({ name: nameCards, link: imageCards });

    popupCards.close();
} 

// Обработчик события Открытие попапа профиля:
profileEditPopup.addEventListener('click', function () {
    popupProfile.open();

    formProfile.resetValidation();

    nameInput.value = nameProfile.textContent;
    captionInput.value = captionProfile.textContent;
});

// Обработчик события Открытие попапа карточек:
profileAddPopup.addEventListener('click', function () {
    popupCards.open();

    formCards.resetValidation();

    titleInput.value = '';
    linkInput.value = '';
});

// Обработчик события "Сохранить" в формах:
formProfileElement.addEventListener('submit', formProfileSubmitHandler);
formCardsElement.addEventListener('submit', formCardsSubmitHandler);