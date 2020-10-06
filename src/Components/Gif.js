import React from 'react';
import {Link} from 'wouter';
import '../CSS/Gif.css';

function Gifs({ id, title, url }) {
    return (
        <div className='Gif' >
            <Link href={`/gif/${id}`} className='Gif-link'> {/*Tener cuidado con las rutas */}
                <h3>{title}</h3>
                <img loading='lazy' src={url} alt={title} />
            </Link>
        </div>
    )
}

export default Gifs;
