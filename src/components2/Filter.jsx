import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterMovie } from '../JS/Actions/MovieAction'





export default function Filter() {
    
    
    const dispatch = useDispatch();
    const handleClick = ( e ) =>{
        dispatch(filterMovie(e.target.value))

    }
  return (
    <div>
        <input name='search' type="text" placeholder='search' onChange={handleClick} />
    </div>
  )
  
}
