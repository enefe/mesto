const removePopupList = document.querySelectorAll('.popup__close');

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



const initialCards = [
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

// Поиск переменных для добавления карточек:
const templateElement = document.querySelector('.template');
const placesContainer = document.querySelector('.places');

// Поиск переменных для попапа картинок:
const popupImage = document.querySelector('.popup_image');

const popupImageItem = document.querySelector('.popup__image');
const popupImageTitleItem = document.querySelector('.popup__img-title');



// Функция открытия попапа:
function openPopup(modal) {
    modal.classList.add('popup_opened');

    // Слушатель закрытия попапа через оверлэй:
    modal.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__container_close-overlay')) {
            closePopup(e.target.closest('.popup'));
        }
    })
}

// Функция закрытия попапа:
function closePopup(node) {
    node.classList.remove('popup_opened');
}

removePopupList.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const currentPopup = e.target.closest('.popup');
        closePopup(currentPopup);
    })
});

// Функция работы кнопки "Сохранить" в форме профиля:
function formProfileSubmitHandler(event) {
    event.preventDefault(); 

    nameProfile.textContent = nameInput.value;
    captionProfile.textContent = captionInput.value;

    closePopup(popupProfile);
}

// Функция для добавления карточек на страницу и работа с ними:
function composeItem(item) {
    const newItem = templateElement.content.cloneNode(true);

    const imageElement = newItem.querySelector('.place__image');
    imageElement.src = item.link;
    imageElement.alt = item.alt;    

    const nameElement = newItem.querySelector('.place__name');
    nameElement.textContent = item.name;

    // Лайк:
    const likeCard = newItem.querySelector('.place__like')

    likeCard.addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like_active');
    });

    // Удаление карточки:
    const deleteCard = newItem.querySelector('.place__delete');

    deleteCard.addEventListener('click', function () {
        const deleteItem = deleteCard.closest('.place');
        deleteItem.remove();
    });

    // Попап с картинкой:
    imageElement.addEventListener('click', function () {
        openPopup(popupImage);
    
        popupImageItem.src = imageElement.src;
        popupImageItem.alt = imageElement.alt;
        popupImageTitleItem.textContent = nameElement.textContent;
    });

    return newItem;
}

function renderList() {
    const listItems = initialCards.map(composeItem);
    placesContainer.append(...listItems);
}

// Функция работы кнопки "Сохранить" в форме карточек:
function formCardsSubmitHandler(event) {
    event.preventDefault();

    nameCards = titleInput.value;
    imageCards = linkInput.value;
    const newCard = composeItem({name: nameCards, link: imageCards, alt: nameCards});
    placesContainer.prepend(newCard);

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

// Обработчик события Закрытие попапа через Esc:
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
})

renderList();