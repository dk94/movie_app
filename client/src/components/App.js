import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MoviesContainer from '../containers/MoviesContainer';
import Footer from './Footer';
import ContactUs from './ContactUs'


const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/movies' component={MoviesContainer} />
                    <Route path='/contact' component={ContactUs} />
                </div>
            </Router>
            <Footer/>
        </div>
    )

}

export default App;