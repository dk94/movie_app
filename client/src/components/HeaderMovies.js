import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMovies = (props) => {
    return (
        <header>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <div className='container'>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/"><img height='70px' src='./assets/logo.png'/></a>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>
                                    <i className="icon fa fa-home" aria-hidden="true"></i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item  active">
                                <a className="nav-link" href="#">
                                    <i className="icon fa fa-film" aria-hidden="true"></i>
                                    <span>Movies</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    <i className="icon fa fa-envelope-o" aria-hidden="true"></i>
                                    <span>Contact us</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={props.toggleAddMovieModal} className="nav-link" href="#">
                                    <i className="icon fa fa-plus-square-o" aria-hidden="true"></i>
                                    <span>Add movie</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={props.sortMovies}>
                                    <i className="icon fa fa-sort" aria-hidden="true"></i>
                                    <span>Sort by name</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={props.loadSampleMovies}>
                                    <i className="icon fa fa-download" aria-hidden="true"></i>
                                    <span>Load sample</span>
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input onChange={props.searchByActorName} className="form-control mr-sm-2" type="text" placeholder="Search by actor name..." />
                        </form>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default HeaderMovies;