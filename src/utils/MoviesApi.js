class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        })
            .then(this._checkRes)
    }

}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co'
})

export default moviesApi;