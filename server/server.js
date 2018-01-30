import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { getMovies, addMovie, deleteMovie, addSampleMovies } from './routes/movies'

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost/admin');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/movies', getMovies)

app.post('/movies', addMovie)

app.post('/samplePush', addSampleMovies)

app.delete('/movies/:id', deleteMovie)

app.route("*").get((req, res) => {
    res.sendFile('client/public/index.html', { root: __dirname });
  });


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})