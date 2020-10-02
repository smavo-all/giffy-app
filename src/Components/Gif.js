import React from 'react';
import '../CSS/Gif.css';

function Gifs({id, title, url}) {
    return (
        <a href={`#${id}`} className='Gif'>
            <h3>{title}</h3>
            {/*<small>{id}</small>*/}
            <img src={url} alt={title} />
        </a>
    )
}

export default Gifs;
