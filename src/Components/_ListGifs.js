import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

function ListGifs({ params }) {

    const { search } = params
    //console.log(search)

    const [gifs, setGifs] = useState(
        { loading: false, results: [] }
    );

    useEffect(function () {
        setGifs(
            actualGifs => ({ loading: true, results: actualGifs.results })
        )

        getGifs({ search })
            .then(gifs => {
                setGifs({ loading: false, results: gifs })
            })
    }, [search])

    if (gifs.loading) return <p>Cargando Gifs</p>

    return <div>
        {
            gifs.results.map(simplegifs =>
                <Gif
                    key={simplegifs.id}
                    title={simplegifs.title}
                    url={simplegifs.url}
                    id={simplegifs.id} />
            )
        }
    </div>

}

export default ListGifs;
