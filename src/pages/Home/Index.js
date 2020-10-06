import React, {useState} from "react"
import { Link, useLocation } from "wouter"
import ListGifs from '../../Components/ListGifs'
import useGifs from '../../hooks/useGifs'

const POPULAR_GIFS = ["Stich","Cat","dog"]

export default function Home() {
  const [search, setSearch] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${search}`)
  }

  const handleChange = evt => {
    setSearch(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={search} />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}