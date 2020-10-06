import React from 'react'
import { Link } from 'wouter';
import '../CSS/Categoria.css';

function Categoria({name, options = [], ...props}) {
    return <div className={props.className}>
        <h3 className="Category-title">{name}</h3>
        <ul className="Category-list">
            {options.map((singleOption) => (
                <li key={singleOption}>
                    <Link
                        className="Category-link"
                        to={`/search/${singleOption}`}
                    >
                        {singleOption}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}

export default Categoria;
