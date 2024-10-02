'use client'
import React, { useEffect, useState } from 'react';
import { Genre, Genres } from '@/typings';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const GenreDropdown: React.FC = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchGenres = async () => {
            const url = 'https://api.themoviedb.org/3/genre/movie/list'; // Corrected endpoint

            const options: RequestInit = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGVhNTcyMzljNDhlYWZlODE5Y2Q3NTFkOGM2YWI4ZSIsIm5iZiI6MTcyNzgzMzEzNC45NTY3NDksInN1YiI6IjY2ZmNhMzY2YzZmYmIyZjBjZGYyMmJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDZWjAAdW6YH0eJq9m_9V_U6PqyVGVYEZJJWueFoYJk`, // Prefixed with NEXT_PUBLIC_
                },
            };

            try {
                const response = await fetch(url, options);
                const data = (await response.json()) as Genres;
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <p>Loading...</p>; // Render a loading state while data is being fetched
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='text-white flex justify-center items-center'>
                Genre
                <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {genres.map((genre) => (
                    <DropdownMenuItem key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default GenreDropdown;
