import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Luna', 'stich', 'osos']

function Home() {

    const [search, setSeacrh] = useState([])
    const [path, pushLocation ] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        // Navegar a otra ruta
        pushLocation(`/search/${search}`)
        // console.log(search)
    }

    const handlerChange = evt => {
        setSeacrh(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  placeholder='Search a gif here'
                    onChange={handlerChange} type='text' value={search} />
                <button>Buscar</button>
            </form>
            <h3 className='App-title'>Los Gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home;
