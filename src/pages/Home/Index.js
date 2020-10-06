import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ListGifs from '../../Components/ListGifs';
import useGifs from '../../hooks/useGifs';

const POPULAR_GIFS = ['Luna', 'stich', 'osos']

function Home() {

    const [search, setSeacrh] = useState([])
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()


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
                <input placeholder='Search a gif here'
                    onChange={handlerChange} type='text' value={search} />
                <button>Buscar</button>
            </form>
            <h3 className='App-title'>Ultima Busqueda</h3>
            <ListGifs gifs={gifs} />

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
