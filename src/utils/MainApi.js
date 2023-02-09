// movies.movies.nomoredomains.club
class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        // this._headers = options.headers
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    register(password, email, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password, email, name })
        })
            .then(this._checkRes)
    }

    login(password, email) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password, email })
        })
            .then(this._checkRes)
    }

    profile(email, name) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, name })
        })
            .then(this._checkRes)
    }

    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then(this._checkRes)
    }

    saveMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
    ) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country, director, duration, year, description, image, trailerLink, thumbnail,
                movieId, nameRU, nameEN
            })
        })
            .then(this._checkRes)
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then(this._checkRes)
    }

    deliteMovies(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
            .then(this._checkRes)
    }

    checkToken(JWT) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${JWT}`
            },
        })
            .then(this._checkRes)
    }

}

const mainApi = new MainApi({
    baseUrl: 'https://movies.movies.nomoredomains.club'
})

export default mainApi;