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
