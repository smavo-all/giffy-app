import React from 'react'
import Spinner from '../../Components/Spinner'
import ListGifs from '../../Components/ListGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
  const { search } = params
  const { loading, gifs } = useGifs({ search })

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3 className="App-title">Busqueda: {search}</h3>
        <ListGifs gifs={gifs} />
      </>
    }
  </>
}