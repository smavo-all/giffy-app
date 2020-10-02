import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

function ListGifs({ params }) {

    const { search } = params
    //console.log(search)
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        getGifs({ search }).then(gifs => setGifs(gifs))
    }, [search])

    return (
        <>
            {
                gifs.map(simplegifs =>
                    <Gif
                        key={simplegifs.id}
                        title={simplegifs.title}
                        url={simplegifs.url}
                        id={simplegifs.id} />
                )
            }
        </>
    )
}

export default ListGifs;
