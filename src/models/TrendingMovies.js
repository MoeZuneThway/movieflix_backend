const mongoose = require('mongoose');
const trendingMovieSchema = new mongoose.Schema(
    {
        movieId: { type: Number, required: true },
        name:{
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        posterUrl:{
            type : String,
            required : true,
        },
        count:{
            type : Number,
            default: 1,
        }
    },{
        timestamps: true,
    }
);
const TrendingMovies = mongoose.model('TrendingMovies',trendingMovieSchema);
module.exports = TrendingMovies;