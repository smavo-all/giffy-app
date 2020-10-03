import React, { useEffect, useState } from 'react';
import getGifs from '../../services/getGifs';
import ListGifs from '../../Components/ListGifs';
import Spinner from '../../Components/Spinner';

function SearchResults({ params }) {

    const { search } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])


    useEffect(function () {
        setLoading(true)

        getGifs({ search })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [search])

    return <>
        {
            loading
                ? <Spinner />
                : <ListGifs gifs={gifs} />
        }
    </>
}

export default SearchResults;
