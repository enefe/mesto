import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._popup.querySelectorAll('.popup__input');
      
        // создаём пустой объект
        this._formValues = {};
      
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        // возвращаем объект значений
        return this._formValues;
    } 

    setEventListeners() {
        this._form = this._popup.querySelector('.popup__form');
        this._form.addEventListener('submit', () => {
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    } 

    close() {
        this._form.reset();
        super.close();
    }
}