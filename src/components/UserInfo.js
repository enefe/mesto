export default class UserInfo {
    constructor(nameProfile, captionProfile) {
        this._nameProfile = nameProfile;
        this._captionProfile = captionProfile;
        this._name = '';
        this._caption = '';
    }

    updateUserInfo() {
        this._nameProfile.textContent = this._name;
        this._captionProfile.textContent = this._caption;
    }

    setUserInfo(newName, newCaption) {
        this._name = newName;
        this._caption = newCaption;
    }

    getUserInfo() {
        return {
            name: this._nameProfile,
            caption: this._captionProfile
        }
    }
}