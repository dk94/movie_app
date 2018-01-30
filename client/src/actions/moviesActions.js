import parseSampleMovies from '../parseSampleMovies'

function getMovies() {

    return function (dispatch) {
        dispatch(fetchMoviesRequest())
        fetch('http://localhost:8080/movies')
            .then((response) =>
                response.json()
            , {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((movies) => {
                dispatch(fetchMoviesSuccess(movies))
            })
            .catch((e) => {
                console.log(e, 'error');
                dispatch(fetchMoviesError(e))
            })
    }
}

function deleteMovie(id) {
    return function (dispatch) {
        fetch(`http://localhost:8080/movies/${id}`, {
            method: 'DELETE'
        })
            .then((message) => {
                dispatch(deleteMovieSuccess(id, message))
            })
            .catch((e) => {
                dispatch(deleteMovieSuccess())
            })
    }
}

function addMovie(newMovie) {
    return function (dispatch) {
        fetch(`http://localhost:8080/movies/`, {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(() => {
                dispatch(getMovies())
            })
    }
}

function loadSampleMovies() {
    return function (dispatch) {
        fetch(`assets/sample_movies.txt`)
            .then((response) =>
                response.text()
            )
            .then((movies) => {
                return parseSampleMovies(movies)
            })
            .then((moviesArr) => {
                return fetch(`http://localhost:8080/samplePush/`, {
                    method: 'POST',
                    body: JSON.stringify(moviesArr),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
            })
            .then((res) => {
                dispatch(getMovies())
            })

    }
}

const deleteMovieSuccess = (id, message) => {
    return {
        type: 'DELETE_MOVIE_SUCCESS',
        id,
        message
    }
}

const deleteMovieFailure = () => {
    return {
        type: 'DELETE_MOVIE_FAILURE',
    }
}


const fetchMoviesRequest = () => {
    return {
        type: 'FETCH_MOVIES'
    }
}


const fetchMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_MOVIES_SUCCESS',
        movies
    }
}


const fetchMoviesError = () => {
    return {
        type: 'FETCH_MOVIES_ERROR'
    }
}

const sortMovies = () => {
    return {
        type: 'SORT_MOVIES'
    }
}

const setSearchByActor = (value) => {
    return {
        type: 'SET_SEARCH_BY_ACTOR',
        value
    }
}

const clearSearchByActor = () =>{
    return {
        type: 'CLEAR_SEARCH_BY_ACTOR',
    }
}

export {
    getMovies,
    deleteMovie,
    sortMovies,
    addMovie,
    setSearchByActor,
    loadSampleMovies,
    clearSearchByActor
}
