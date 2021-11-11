import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    const { favoriteMovies } = props;
    const { push } = useHistory();

    const handleClickFavorite = id => {
        push(`/movies/${id}`);
    };
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favoriteMovies.map(movie=>{
                return <Link onClick={handleClickFavorite(movie.id)} key={movie.id} className="btn btn-light savedButton" to={`/movies/${movie.id}`}>{movie.title}</Link>
            })
        }
    </div>);
}

export default FavoriteMovieList;