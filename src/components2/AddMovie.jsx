import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from '../JS/Actions/MovieAction';


export default function AddMovie() {
    const [movie, setMovie] = useState({})
    const handleChange = ( e ) =>{ 
        setMovie ({...movie,[e.target.name]: e.target.value})
    }
    
    const dispatch = useDispatch();
  return (
    <div>
        <h3>Add your movie down here</h3>
        <input 
        name='title'
        type="text"
        placeholder="movie title"
        onChange={handleChange}
        required
        />
        <input 
        name='posterUrl'
        type="text"
        placeholder="movie posterUrl"
        onChange={handleChange}
        required
        />
        <input 
        name='description'
        type="text"
        placeholder="movie description"
        onChange={handleChange}
        required
        />
        <input 
        name='rate'
        type="number"
        placeholder="movie rate"
        onChange={handleChange}
        required
        min="0" max="5"
        />
        <button type='submit'  onClick={()=>dispatch(addMovie({...movie,id:Math.random()}))}>add </button>
    </div>
  )
}
