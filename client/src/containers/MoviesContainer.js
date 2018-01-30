import React from 'react';
import { connect } from 'react-redux';
import {
    getMovies,
    deleteMovie,
    sortMovies,
    addMovie,
    setSearchByActor,
    loadSampleMovies,
    clearSearchByActor
} from '../actions/moviesActions';
import { withRouter } from 'react-router-dom';
import ModalDescription from '../components/ModalDescription';
import sortMoviesSelector from '../selectors/movies.js';
import HeaderMovies from '../components/HeaderMovies';
import AddMovieModal from '../components/AddMovieModal';
import queryString from 'query-string';

class MoviesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {}
        }

        this.searchObject = {};
        this.deleteMovie = this.deleteMovie.bind(this);
        this.sortMovies = this.sortMovies.bind(this);
        this.toggleAddMovieModal = this.toggleAddMovieModal.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.searchByActorName = this.searchByActorName.bind(this);
        this.loadSampleMovies = this.loadSampleMovies.bind(this);
    }

    componentDidMount() {
        this.searchObject = queryString.parse(this.props.location.search);
        this.props.clearSearch();
        this.props.getMovies();
    }

    sortMovies() {
        this.props.sortMovies();
    }

    searchByActorName(e) {
        this.props.setSearchByActor(e.target.value.toLowerCase());
    }

    addMovie(newMovie) {
        this.props.addMovie(newMovie);
    }

    loadSampleMovies() {
        this.props.loadSampleMovies();
    }

    toggleAddMovieModal() {
        $('#addMovieModal').modal();
    }

    toggleModal(index, f) {
        this.setState({ selectedMovie: this.movies[index] });
        $('#myModal').modal();
    }
    deleteMovie(id) {
        this.props.deleteMovie(id);
    }
    render() {
        const { movies, searchValueByActorName } = this.props;
        this.movies = movies.filter(
            (movie) =>
                movie['Stars'].toLowerCase().includes(searchValueByActorName)
                &&
                movie['Title'].toLowerCase().includes(this.searchObject.searchValueByName || '')
        )
        return (
            <div className='movies_tab'>
                <HeaderMovies
                    toggleAddMovieModal={this.toggleAddMovieModal}
                    sortMovies={this.sortMovies}
                    searchByActorName={this.searchByActorName}
                    loadSampleMovies={this.loadSampleMovies}
                />
                <div className='container-fluid movies_container'>
                    <div className="offsetBlock"></div>
                    <div className='container'>
                        <div className='title_container'>
                            <span className='movies_title'>Movies</span>
                        </div>
                        <div className='row'>
                            {

                                this.movies.map((movie, index) => {
                                    return (
                                        <div className='col-6 col-md-3 col-lg-2' key={movie['Title']}>
                                            <div className='hovereffect'>
                                                <img className='img-fluid' src={movie.picture} />
                                                <div className='overlay'>
                                                    <h2>{movie['Title']}</h2>
                                                    <p onClick={this.toggleModal.bind(this, index)} className='info nullbutton' data-toggle="modal" data-target="#exampleModal">
                                                        Show more
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            <ModalDescription
                                deleteMovie={this.deleteMovie}
                                {...this.state.selectedMovie}
                            />
                            <AddMovieModal addMovie={this.addMovie} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: sortMoviesSelector(state),
        searchValueByActorName: state.searchValueByActorName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => {
            dispatch(getMovies())
        },

        deleteMovie: (id) => {
            dispatch(deleteMovie(id));
        },

        sortMovies: () => {
            dispatch(sortMovies());
        },

        addMovie: (newMovie) => {
            dispatch(addMovie(newMovie));
        },

        setSearchByActor: (value) => {
            dispatch(setSearchByActor(value))
        },

        loadSampleMovies: () => {
            dispatch(loadSampleMovies())
        },

        clearSearch: () => {
            dispatch(clearSearchByActor())
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesContainer));