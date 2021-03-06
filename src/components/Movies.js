import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie =>{
          return <div>
            Name: {movie.title}<br></br>
            <br></br>
            Time:{movie.time}
            <ul>
              {movie.genres.map(g =>{
                return <li>{g}</li>
              })}
            </ul>
            </div>
        })}
    </div>
  );
};

export default Movies;
