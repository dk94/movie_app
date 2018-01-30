import Movie from '../models/movie'


export const getMovies = (req, res) => {

    Movie.find(null, null, (err, projects) => {
        if (err) {
            res.send(err);
        }

        res.json(projects);
    })


};

export const addMovie = (req, res) => {

    let movie = Object.assign(new Movie(), req.body);

    movie.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'movie added' });
    });

}
export const addSampleMovies = (req, res) => {
    

    Promise.all(req.body.map((movie) => {
        return Movie.findOneAndUpdate({'Title':movie['Title']}, movie, {upsert:true}, (err,doc) =>{
            console.log(err,doc);
        })
    }))
    .then(()=>{res.json({ message: 'movie added' })});
    
        // Movie.insertMany(req.body, err => {
        //     if (err) {
        //         res.send(err);
        //     }
        //     res.json({ message: 'movie added' });
        // });
    
    }

export const deleteMovie = (req, res) => {
    Movie.remove(
        { _id: req.params.id },
        err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'successfully deleted' });
        }
    );
};


