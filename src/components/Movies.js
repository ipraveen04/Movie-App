import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect, NavLink } from 'react-router-dom'
function Movies() {

    const [movies, setMovies] = useState([]);

    const Api_Key = '5483ab26faad5380dac9b0d32a736b17'
    const api = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US&page=1`

    useEffect(() => {
        movieData();
    }, [])

    const movieData = () => {
        axios.get(api)
            .then(res => {
                console.log(res.data.results)
                setMovies([...res.data.results])
                // console.log("error" + res.data.results[0].poster_path);
            })
            .catch(err => {
                console.log('error' + err)
            })
    }

    return (
        <div>
            <div className="row m-1">
                {movies.map((ele, index) => {
                    return (
                        <div className="col-md-2 m-3">
                        <Link to={{pathname:"/moviepage", state:JSON.stringify(ele)}}>
                            <div key={index} className="card" >
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} alt=" " />
                            </div>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Movies;
