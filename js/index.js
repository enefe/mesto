import Card from './Card.js';


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


const placesContainer = document.querySelector('.places');

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

data.forEach((data) => {
    const card = new Card(data, '.template');
    const cardElement = card.generateCard();

    placesContainer.append(cardElement);
})

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

    let nameCards = titleInput.value; 
    let imageCards = linkInput.value;
    // const newCard = composeItem({ name: nameCards, link: imageCards, alt: nameCards });
    const newCard = new Card({ name: nameCards, link: imageCards }, '.template');
    const newCardElement = newCard.generateCard();
    placesContainer.prepend(newCardElement);

    closePopup(popupCards);
} 

// Обработчик события Открытие попапа профиля:
profileEditPopup.addEventListener('click', function () {
    openPopup(popupProfile);

    nameInput.value = nameProfile.textContent;
    captionInput.value = captionProfile.textContent;
});

// Обработчик события Открытие попапа карточек:
profileAddPopup.addEventListener('click', function () {
    openPopup(popupCards);

    titleInput.value = '';
    linkInput.value = '';
});

// Обработчик события "Сохранить" в формах:
formProfileElement.addEventListener('submit', formProfileSubmitHandler);
formCardsElement.addEventListener('submit', formCardsSubmitHandler);