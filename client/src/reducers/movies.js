const movies = (
    state = {
        movies: [],
        isFetching: false,
        error: '',
        deleteMessage: '',
        shouldBeSorted: false,
        searchValueByActorName: ''
    }, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES': {
            return Object.assign(
                {},
                state,
                { isFetching: true }
            );
            break;
        }
        case 'FETCH_MOVIES_SUCCESS': {
            return Object.assign(
                {},
                state,
                { isFetching: false, movies: action.movies }
            );
            break;
        }
        case 'FETCH_MOVIES_ERROR': {
            return Object.assign(
                {},
                state,
                { isFetching: false, error: action.error }
            );
            break;
        }
        case 'DELETE_MOVIE_SUCCESS': {
            return Object.assign(
                {},
                state,
                {
                    movies: state.movies.filter(
                        (movie) => action.id !== movie._id
                    )
                }
            );
            break;
        }

        case 'SORT_MOVIES': {
            return Object.assign(
                {},
                state,
                {
                    shouldBeSorted: true
                }
            );
            break;
        }

        case 'SET_SEARCH_BY_ACTOR': {
            return Object.assign(
                {},
                state,
                {
                    searchValueByActorName: action.value
                }
            );
            break;
        }

        case 'CLEAR_SEARCH_BY_ACTOR': {
            return Object.assign(
                {},
                state,
                {
                    searchValueByActorName: ''
                }
            );
            break;
        }

    }
    return state;
}

export default movies;