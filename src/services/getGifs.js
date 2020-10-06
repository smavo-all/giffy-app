const api_key = 'FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP';

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}


export default function getGifs({limit = 25, search = 'morty'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${limit}&offset=0&rating=G&lang=en`

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}