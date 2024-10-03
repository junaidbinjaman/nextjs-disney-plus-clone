import {Movie} from '@/typings';
import React from 'react';
import MovieCard from './Moviecard';

type props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
};

const MoviesCarousel = ({title, movies, isVertical}: props) => {
    return <div className='z-50'>
        {
            movies?.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))
        }
    </div>;
};

export default MoviesCarousel;
