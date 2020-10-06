import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

function useGifs({ search } = { search: null }) {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);
        const searchToUse = search || localStorage.getItem('lastSearch') || 'random'  // recuperamos la busqueda en el localStorage
        // const searchToUse = search ? search : localStorage.getItem('lastSearch')
        getGifs({ search: searchToUse })
        .then((gifs) => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem('lastSearch', search) //guardamos la busqueda  en el localStorage
        });
    },
        [search]
    );

    return { loading, gifs };
}

export default useGifs;
