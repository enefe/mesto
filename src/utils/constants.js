// Поиск переменных для попапа профиля:
export const profileEditPopup = document.querySelector('.profile__edit');

export const formProfileElement = document.querySelector('.popup__form_profile');
export const nameProfile = document.querySelector('.profile__name');
export const captionProfile = document.querySelector('.profile__caption');
export const nameInput = formProfileElement.querySelector('.popup__input_name');
export const captionInput = formProfileElement.querySelector('.popup__input_caption');
export const formAvatarElement = document.querySelector('.popup__form_avatar');
export const avatarInput = formAvatarElement.querySelector('.popup__input_avatar');
export const avatarPopup = document.querySelector('.profile__avatar-button');
export const avatarProfile = document.querySelector('.profile__avatar');

// Поиск переменных для попапа карточек:
export const profileAddPopup = document.querySelector('.profile__add');

export const formCardsElement = document.querySelector('.popup__form_cards');
export const titleInput = document.querySelector('.popup__input_title');
export const linkInput = document.querySelector('.popup__input_link');

import oneImage from '../images/arkhyz.jpg';
import twoImage from '../images/chelyabinsk-oblast.jpg';
import threeImage from '../images/ivanovo.jpg';
import fourImage from '../images/kamchatka.jpg';
import fiveImage from '../images/kholmogorsky-rayon.jpg';
import sixImage from '../images/baikal.jpg';


export const data = [
    {
        name: 'Архыз',
        link: oneImage,
    },
    {
        name: 'Челябинская область',
        link: twoImage,
    },
    {
        name: 'Иваново',
        link: threeImage,
    },
    {
        name: 'Камчатка',
        link: fourImage,
    },
    {
        name: 'Холмогорский район',
        link: fiveImage,
    },
    {
        name: 'Байкал',
        link: sixImage,
    }
];