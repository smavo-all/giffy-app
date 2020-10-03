import React, { useState } from 'react';
import { Link } from 'wouter';

const POPULAR_GIFS = ['Luna', 'stich', 'osos']

function Home() {

    const [search, setSeacrh] = useState([])

    const handleSubmit = evt => {
        evt.preventDefault()
        // Navegar a otra ruta
        console.log(search)
    }

    const handlerChange = evt => {
        setSeacrh(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handlerChange} type='text' value={search} />
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
