const editPopup = document.querySelector('.profile__edit');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

const formElement = document.querySelector('.popup__form');
const nameProfile = document.querySelector('.profile__name');
const captionProfile = document.querySelector('.profile__caption');
const nameInput = document.querySelector('.popup__input_name'); 
const captionInput = document.querySelector('.popup__input_caption');

editPopup.addEventListener('click', openPopup);

function openPopup() {
    popup.classList.add('popup_opened');

    nameInput.value = nameProfile.textContent;
    captionInput.value = captionProfile.textContent;
}

closePopup.addEventListener('click', removePopup);

function removePopup() {
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    captionProfile.textContent = captionInput.value;

    removePopup();
}

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

const places = document.querySelector('.places');

function renderCards () {
    newHTML = '';
    newHTML = initialCards.map(function (item) {
        return `<div class="place">
                    <img class="place__image" src="${item.link}" alt="${item.alt}">
                    <h2 class="place__name">${item.name}</h2>
                    <button class="place__like" type="button"></button>
                </div>`
    }).join('');

    places.insertAdjacentHTML('afterbegin', newHTML);
}

renderCards();
