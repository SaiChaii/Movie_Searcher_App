import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//108fa6b2
// const movie1={
//     "Title": "Spiderman",
//     "Year": "2010",
//     "imdbID": "tt1785572",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const API_URL='http://www.omdbapi.com?apikey=108fa6b2';
const App = () =>{
    const [movies,setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);
    const searchMovies = async(title) =>
    {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    }
    console.log(movies.length);
    useEffect(()=>{
        searchMovies('superman');
    },[]);  

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input  
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=> setsearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {

                movies.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))} 
                    </div>
                ) : (
                    <div className="empty">
                        <h3> No movie found</h3>
                    </div>
                )
                
            }

        </div>
    );
}

export default App;