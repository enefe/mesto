export default class FormValidator {
    constructor(configParam, formElement) {
        this._config = configParam;
        this._form = formElement;
        this._button = formElement.querySelector(configParam.submitButtonSelector);
        this._inputList = formElement.querySelectorAll(configParam.inputSelector);
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
    
    _setButtonState(isActive) {
        if (isActive) {
            this._button.classList.remove(this._config.inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._config.inactiveButtonClass);
            this._button.disabled = 'disabled';
        }
    }
    
    _setEventListener() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._setButtonState(this._form.checkValidity());
            });
        })
    }

    resetValidation() {
        this._inputList.forEach((input) => {
          this._hideError(input);
        });
  
        this._setButtonState();
      }
    
    enableValidation() {
        this._setEventListener();
    
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
            
        this._setButtonState(this._form.checkValidity());
    }
}