import React, { useEffect, useState } from 'react';
import './moviecards.css'

const MovieCards = ()=>{

    const[movieArr,setMovieArr] = useState([])

    useEffect(() => {
        fetch("https://api.sampleapis.com/movies/mystery")
            .then(response => response.json())
            .then(data => {setMovieArr(data)
                console.log(data)
            }
                
            )
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const createCard = (movieData) => {
        return (
            <div className='card'>
                <img src={movieData.posterURL} alt="image" />
            </div>
            ) 
            
    };

    return(
        <div className='movie-cards' id='movie-cards'>
            <div className='genre-text'>
                <h5 >Mystery</h5>
            </div>
            
            <div className='movie-grid'>
            {movieArr.map((movie, index) => (
                    <React.Fragment key={index}>
                        {createCard(movie)}
                    </React.Fragment>
                ))}
            </div>
        </div>
        
    )
    
}                                          


export default MovieCards