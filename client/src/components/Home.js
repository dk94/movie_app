import React from 'react';
import Header from './Header';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }
    }

    handleChange(e) {
        this.setState({searchValue:e.target.value.toLowerCase()})
    }
    handleClick() {
        this.props.history.push(`/movies?searchValueByName=${this.state.searchValue}`);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="form-group search-section">
                        <input onChange={this.handleChange.bind(this)} type="text" className="form-control search-form" aria-describedby="movie" placeholder="Enter movie name..." />
                        <div className="button-section">
                            <button onClick={this.handleClick.bind(this)} type="button" className="btn search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
