import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    'Title': String,
    'Release Year': Number,
    'Format': String,
    'Stars': String,
    picture: {
        type: String,
        default: 'http://via.placeholder.com/200x200'
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    genre: {
        type: String,
        default: 'Not defined'
    }
})

export default mongoose.model('Movie', movieSchema);