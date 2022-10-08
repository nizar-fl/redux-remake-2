import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

export default function Details() {
    console.log("dddddddddddddddddd")
    const movies = useSelector((state) => state.MovieReducer.Data);
    
    const {id} = useParams()
    const ownmovie = movies.find((mo) => mo.id == id)
  return (
    <div>
        <h1>{ownmovie.title}</h1>
        <iframe width="560" height="315" src={ownmovie.traileriframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h4>{ownmovie.description}</h4>
        <Link to='/' ><button>go to the movie list</button></Link>
        </div>
  )
}
