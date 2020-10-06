import React, { useState } from "react";
import { useLocation } from "wouter";
import ListGifs from '../../Components/ListGifs';
import useGifs from '../../hooks/useGifs';
import Categoria from '../../Components/Categoria';

const POPULAR_GIFS = ["Stich", "Cat", "dog"]

export default function Home() {
  const [search, setSearch] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

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
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListGifs gifs={gifs} />
        </div >
        <div className="App-categoria">
        <Categoria
          name="Categorias populares"
          options={POPULAR_GIFS}
        />
        <Categoria
          name="Mascotas"
          options={['Perros', 'Gatos', 'Hamster']}
        />
        </div>
      </div>
    </>
  )
}