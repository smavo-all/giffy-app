import React from 'react';
import ListGifs from '../../Components/ListGifs';
import Spinner from '../../Components/Spinner';
import useGifs from '../../hooks/useGifs';

function SearchResults({ params }) {

    const { search } = params
    const { loading, gifs } = useGifs({ search })
    /*
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)

        getGifs({ search })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [search])
    */

    return <>
        {
            loading
                ? <Spinner />
                : <ListGifs gifs={gifs} />
        }
    </>
}

export default SearchResults;
