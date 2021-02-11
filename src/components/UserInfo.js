export default class UserInfo {
    constructor(nameProfile, captionProfile) {
        this._nameProfile = nameProfile;
        this._captionProfile = captionProfile;
        this._name = '';
        this._caption = '';
    }

    setUserInfo(newName, newCaption) {
        this._nameProfile.textContent = newName;
        this._captionProfile.textContent = newCaption;
    }

    getUserInfo() {
        return {
            name: this._nameProfile,
            caption: this._captionProfile
        }
    }
}