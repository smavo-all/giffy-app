import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

function useGifs({ search }) {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(
        function () {
            setLoading(true);

            getGifs({ search }).then((gifs) => {
                setGifs(gifs);
                setLoading(false);
            });
        },
        [search]
    );

    return { loading, gifs };
}

export default useGifs;
