import React from 'react';
import { Link } from 'wouter';
import '../CSS/Gif.css';

function Gifs({ id, title, url }) {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h3>{title}</h3>
                <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>
    )
}

export default Gifs;
