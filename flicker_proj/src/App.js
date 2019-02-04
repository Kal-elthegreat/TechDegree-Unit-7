import React, { Component } from 'react';
import axios from 'axios'
import '../src/project.css';


import apiKey from './config';
import Header from './components/Header';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';

const api = apiKey;

class App extends Component {

  state ={
    imgs: [],
    query: {/* search input */}
  };

  
  componentDidMount (){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          imgs: response.data.photos.photo
        });
      })
  }

  render() {
    console.log(this.state.imgs)
    return (
      <div className="container">

        <Header 
        title= "React Flicker App"
        />

        <MainNav />

        <PhotoContainer />
      </div>
      
    );
  }
}

export default App;
