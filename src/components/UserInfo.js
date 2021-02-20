export default class UserInfo {
    constructor(name, about) {
        this._name = name; 
        this._about = about; 
    }

    setUserInfo(newName, newAbout) {
        this._newName = newName;
        this._newAbout = newAbout;
        this._name.textContent = this._newName;
        this._about.textContent = this._newAbout;
    }

    getUserInfo() {
        return {
            name: this._newName, 
            about: this._newAbout 
        }
    }

    setUserId(id) {
        this._userId = id;
    }

    returnUserId() {
        return this._userId;
    }
}

/* setUserInfo(newName, newAbout) {
    this._name.textContent = newName; 
    this._about.textContent = newAbout; 
}

getUserInfo() {
    return {
        name: this._name, 
        about: this._about 
    }
} */