// movies.movies.nomoredomains.club

// import { json } from "body-parser"

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(this._checkRes)
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
})

export default mainApi;