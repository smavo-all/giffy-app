import React, { useContext } from 'react'

import StaticContext from '../../context/StaticContex'


function Detail({ params }) {
    const context = useContext(StaticContext)
    console.log(context)
    console.log('hola............')

    return <h1> Gif con id {params.id} </h1>


}

export default Detail;

