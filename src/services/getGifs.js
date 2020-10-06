const api_key = 'FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP';

export default function getGifs({ search } = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { id, title, images } = image
                const { url } = images.downsized_medium
                return { id, title, url }
            })
            // console.log(gifs)
            return gifs
        })
}