import './loader.css';
import React, { Component } from 'react';

class Loader extends Component {
   
    render() {
        return (
            <div className="loaderContainer">
                            <div className="loader"></div>
                            <div>Loading Data</div>
            </div>
        )
    }
}

export default Loader;
