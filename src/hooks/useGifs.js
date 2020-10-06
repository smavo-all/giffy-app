import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

function useGifs({ search } = { search: null}) {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(function () {
        setLoading(true)
        // recuperamos la search del localStorage
        const searchToUse = search || localStorage.getItem('lastSearch') || 'random'

        getGifs({ search: searchToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // guardamos la search en el localStorage
                localStorage.setItem('lastSearch', search)
            })
    }, [search, setGifs])

    return { loading, gifs }
}

export default useGifs;
