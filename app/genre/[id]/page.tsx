import React from 'react';

type GenreProps = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

const Genre = ({params: {id}, searchParams: {genre}}: GenreProps) => {

    console.log(id)

    return (
        <div>
            Welcome to the genre with ID: {id} and name {genre}
        </div>
    );
};

export default Genre;