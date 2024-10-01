import { tree } from 'next/dist/build/templates/app-page';
import { notFound } from 'next/navigation';
import React from 'react';

type SearchPageProps = {
    params: {
        term: string
    }
}

const SearchPage = ({params} : SearchPageProps) => {
    if (!params.term) notFound();

    const termToUse = decodeURI(params.term);

    // API call to get the searched movies
    // API call to get the popular movies

    return (
        <div>
            Search page {termToUse}
        </div>
    );
};

export default SearchPage;