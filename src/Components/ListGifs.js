import React from 'react';
import Gif from './Gif';
import '../CSS/ListGifs.css';

function ListGifs({ gifs }) {

    return <div className='ListGifs'>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id} />
            )
        }
    </div>
}

export default ListGifs;
