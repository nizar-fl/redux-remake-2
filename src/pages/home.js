import React from 'react'
import AddMovie from '../components2/AddMovie'
import Filter from '../components2/Filter'
import MovieList from '../components2/MovieList'

export default function Home() {
  return (
    <div>
        <Filter/>
        <MovieList/>
        <AddMovie/>
    </div>
  )
}
