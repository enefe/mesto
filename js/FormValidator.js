export default class FormValidator {
    constructor(configParam, formElement) {
       /*  this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass; */
        this._config = configParam;
        this._form = formElement;
        this._button = formElement.querySelector(configParam.submitButtonSelector);
    }

    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputErrorClass);
    }
    
    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = "";
        input.classList.remove(this._config.inputErrorClass);
    }
    
    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }
    
    setButtonState(isActive) {
        if (isActive) {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = 'disabled';
        }
    }
    
    _setEventListener() {
        const inputList = this._form.querySelectorAll(this._config.inputSelector);
    
        inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this.setButtonState(this._form.checkValidity());
            });
        })
    }
    
    enableValidation() {
        this._setEventListener();
    
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
            
        this.setButtonState(this._form.checkValidity());
    }
}