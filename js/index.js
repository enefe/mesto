// ПР 4. Попап profile :
const editPopup = document.querySelector('.profile__edit');
const closeProfilePopup = document.querySelector('.popup__close_profile');
const popupProfile = document.querySelector('.popup_profile');

const formProfileElement = document.querySelector('.popup__form_profile');
const nameProfile = document.querySelector('.profile__name');
const captionProfile = document.querySelector('.profile__caption');
const nameInput = document.querySelector('.popup__input_name'); 
const captionInput = document.querySelector('.popup__input_caption');

editPopup.addEventListener('click', openPopupProfile);

function openPopupProfile() {
    popupProfile.classList.add('popup_opened');

    nameInput.value = nameProfile.textContent;
    captionInput.value = captionProfile.textContent;
}

closeProfilePopup.addEventListener('click', removePopupProfile);

function removePopupProfile() {
    popupProfile.classList.remove('popup_opened');
}

formProfileElement.addEventListener('submit', formProfileSubmitHandler);

function formProfileSubmitHandler(event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    captionProfile.textContent = captionInput.value;

    removePopupProfile();
}

// ПР 5
// Задание 1 :
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];

const templateElement = document.querySelector('.template');
const placesContainer = document.querySelector('.places');

function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true);

    const imageElement = newItem.querySelector('.place__image');
    imageElement.src = item.link;

    const altElement = newItem.querySelector('.place__image');
    altElement.alt = item.alt;

    const nameElement = newItem.querySelector('.place__name');
    nameElement.textContent = item.name;

    return newItem;
}

function renderList() {
    const listItems = initialCards.map(composeItem);
    placesContainer.append(...listItems);
}

renderList();

// Задание 2:
const addPopup = document.querySelector('.profile__add');
const closeCardsPopup = document.querySelector('.popup__close_cards');
const popupCards = document.querySelector('.popup_cards');

addPopup.addEventListener('click', openPopupCards);

function openPopupCards() {
    popupCards.classList.add('popup_opened');
}

closeCardsPopup.addEventListener('click', removePopupCards);

function removePopupCards() {
    popupCards.classList.remove('popup_opened');
}