function parseSampleMovies(movies) {

    const arrayMovies = movies.split('\n\n');

    const handledMoviesArray = arrayMovies.map((movie) => {
        const movieObject = {};

        movie.split('\n').forEach((property) => {

            const propertyArray = property.split(':');
            if (propertyArray[1]) {
                movieObject[propertyArray[0]] = propertyArray[1].trim();
            }

        })
        return movieObject;
    })
        .filter((movie) => movie['Title']);


    return handledMoviesArray;

}

export default parseSampleMovies;