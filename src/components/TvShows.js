import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function TvShows() {

    const [shows, setShows] = useState([])

    const Api_Key = '5483ab26faad5380dac9b0d32a736b17'
    const Api = `https://api.themoviedb.org/3/tv/popular?api_key=${Api_Key}&language=en-US&page=1`

    useEffect(() => {
        tvShowsData();
    }, [])

    const tvShowsData = () =>{
        axios.get(Api)
            .then(res => {
                console.log(res.data.results);
                setShows([...res.data.results])

            })
            .catch(err => {
                console.log('Error' + err);
            })
    }
    return (
        <div>
            <div className="row m-1">
                {shows.map((ele, index) => {
                    return (
                        <div className="col-md-2 m-3">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/ShowPage">
                            <div key={index} className="card">
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} alt="" />
                            </div>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TvShows;