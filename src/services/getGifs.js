const api_Key = 'FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP';

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

export default function getGifs({ limit = 30, search = 'Luna' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_Key}&q=${search}&limit=${limit}&offset=0&rating=G&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}