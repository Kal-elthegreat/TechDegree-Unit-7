import React, { Component } from 'react';
import axios from 'axios'
import '../src/project.css';


import apiKey from './config';
import Header from './components/Header';
import MainNav from './components/MainNav';
import GalleryContainer from './components/PhotoContainer';

const api = apiKey;

class App extends Component {

  state ={
    imgs: [],
    loading: true
  };

  
  componentDidMount (){
   this.searchBar();
  }

  searchBar = (tag = 'dogs') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgs: response.data.photos.photo,
        loading: false
      });
    })
    .catch(function(error){
      console.log(error)
    })    
  }

  render() {
    return (
      <div className="container">

        <Header 
        title= "React Flicker App"
        searchBar={this.searchBar}
        />

        <MainNav 
        />
        {
          (this.state.loading) 
          ? <p> Loading..</p>
          :<GalleryContainer 
          data= {this.state.imgs}
          />

        }
        
      </div>
      
    );
  }
}

export default App;
