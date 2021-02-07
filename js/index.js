import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';


const popups = document.querySelectorAll('.popup');

// Поиск переменных для попапа профиля:
const profileEditPopup = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup_profile');

const formProfileElement = document.querySelector('.popup__form_profile');
const nameProfile = document.querySelector('.profile__name');
const captionProfile = document.querySelector('.profile__caption');
const nameInput = formProfileElement.querySelector('.popup__input_name');
const captionInput = formProfileElement.querySelector('.popup__input_caption');


// Поиск переменных для попапа карточек:
const profileAddPopup = document.querySelector('.profile__add');
const popupCards = document.querySelector('.popup_cards');

const formCardsElement = document.querySelector('.popup__form_cards');
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');

const imagePopup = document.querySelector('.popup_image');
const imagePopupPicture = document.querySelector('.popup__image');
const imagePopupCaption = document.querySelector('.popup__img-title');



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

const cardList = new Section({
        items: data,
        renderer: createCard
    },
    '.places',
);

// Отрисовка карточек:
cardList.renderItems();


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


// Функция события Закрытие попапа через Esc:
function closeByEscape(e) {
    if (e.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Функция открытия попапа:
function openPopup(modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

// Закрытие попапа через оверлэй и кнопку "крестик":
popups.forEach((popup) => {
    popup.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup_opened')) {
            closePopup(popup);
        };
        if (e.target.classList.contains('popup__close')) {
            closePopup(popup);
        };
    });
});

// Функция закрытия попапа:
function closePopup(node) {
    node.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function handleCardClick(name, link) {
    imagePopupPicture.src = link;
    imagePopupCaption.textContent = name;
    openPopup(imagePopup);
}

// Функция работы кнопки "Сохранить" в форме профиля:
function formProfileSubmitHandler(event) {
    event.preventDefault();

    nameProfile.textContent = nameInput.value;
    captionProfile.textContent = captionInput.value;

    closePopup(popupProfile);
}

// Функция работы кнопки "Сохранить" в форме карточек:
 function formCardsSubmitHandler(event) {
    event.preventDefault();

    const nameCards = titleInput.value; 
    const imageCards = linkInput.value;

    createCard({ name: nameCards, link: imageCards });

    closePopup(popupCards);
} 

// Обработчик события Открытие попапа профиля:
profileEditPopup.addEventListener('click', function () {
    openPopup(popupProfile);

    formProfile.resetValidation();

    nameInput.value = nameProfile.textContent;
    captionInput.value = captionProfile.textContent;
});

// Обработчик события Открытие попапа карточек:
profileAddPopup.addEventListener('click', function () {
    openPopup(popupCards);

    formCards.resetValidation();

    titleInput.value = '';
    linkInput.value = '';
});

// Обработчик события "Сохранить" в формах:
formProfileElement.addEventListener('submit', formProfileSubmitHandler);
formCardsElement.addEventListener('submit', formCardsSubmitHandler);