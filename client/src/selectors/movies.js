import { createSelector } from 'reselect';
import  sortMovies from '../sortMovies.js';

const moviesSelector = state => state.movies;
const shouldBeSorted = state => state.shouldBeSorted;
const sortMoviesSelector = createSelector(
    moviesSelector,
    shouldBeSorted,
    (movies, shouldBeSorted) =>
        sortMovies(movies, shouldBeSorted)

);
export default sortMoviesSelector;
