function sortMovies(movies, shouldBeSorted) {

    if (shouldBeSorted) {
        movies.sort((objA, objB) => {
            return ((objA['Title'].toLowerCase() > objB['Title'].toLowerCase()) ? 1 : -1)
    })
}

return [...movies];

}

export default sortMovies;