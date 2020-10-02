import React from 'react'

function Gifs({id, title, url}) {
    return (
        <>
            <h1>{title}</h1>
            <small>{id}</small>
            <img src={url} alt={title} />
        </>
    )
}

export default Gifs;
