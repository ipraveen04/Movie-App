import React from 'react'
import Movies from '../components/Movies'
import TvShows from '../components/TvShows'
import MoviePage from '../components/MoviePage'
import Showpage from '../components/Showpage'
import { Route, Link, Switch } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav className="navbar-fixed">
                <div className="d-flex flex-col navBar">
                    <div className=" offset-md-1 mt-1"><strong className="text-warning">Movieflix</strong></div>
                    <div className="offset-md-1 mt-1"><Link style={{ textDecoration: 'none', color: 'white'}} to='/'><strong className="text-white mr-4">Movies</strong></Link></div>
                    <div className="offset-md-1 mt-1"><Link style={{ textDecoration: 'none', color: 'white' }} to='/tvShows'><strong className="text-white">TV Shows</strong></Link></div>
                    <input className="ml-3 p-2 searchInp" type="search" placeholder="Search here..." />
                    <button className="px-4 searchBtn"><i className="fa fa-search"></i></button>
                </div>
            </nav>

            <Switch>
                <Route path="/" exact>
                    <h5 className="text-warning m-4">Popular Movies:</h5>
                    <Movies />
                </Route>
                <Route path='/tvShows' exact>
                <h5 className="text-warning m-4">Popular TvShows:</h5>
                    <TvShows />
                </Route>
                <Route path="/moviepage" exact>
                    <MoviePage />
                </Route>
                <Route path='/ShowPage' exact>
                    <Showpage />
                </Route>
            </Switch>
        </div>
    )
}
export default Home;