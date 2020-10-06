import React from 'react';

function Gifs({ id, title, url }) {
    return (
        <div >
            <a href={id} >
                <h3>{title}</h3>
                <img src={url} alt={title} />
            </a>
        </div>
    )
}

export default Gifs;
