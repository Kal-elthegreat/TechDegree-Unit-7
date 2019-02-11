import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import axios from 'axios'
import '../src/project.css';
import apiKey from './config';

// App Components
import Header from './components/Header';
import MainNav from './components/MainNav';
import GalleryContainer from './components/GalleryContainer';
import Search from './components/Search';

const api = apiKey;

class App extends Component {

  state ={
    imgs: [],
    loading: true
  };

  
  apiDefault = (tag = 'nature') => {
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
 
  apiBeach = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=beach&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgBeach: response.data.photos.photo,
        loading: false
      });
    })
    .catch(function(error){
      console.log(error)
    })    
  }
  apiDogs = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgDogs: response.data.photos.photo,
        loading: false
      });
    })
    .catch(function(error){
      console.log(error)
    })    
  }
  apiFood = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=food&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        imgFood: response.data.photos.photo,
        loading: false
      });
    })
    .catch(function(error){
      console.log(error)
    })    
  }

  componentDidMount (){
    this.apiDefault()
    this.apiBeach();
    this.apiDogs();
    this.apiFood();
  }



  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Render Header, Search, & MainNav components */}
          <Header title= "React Flicker App"/>
          <Search searchBar={this.apiDefault} />
          <MainNav/>
          
          {/* Default images */}
          <Route exact path='/' render={() => (this.state.loading) ? <p> Loading..</p> :<GalleryContainer data= {this.state.imgs}/>}/> 
          
          {/* MainNav & Search images */}
          <Route path='/beach' render={() => <GalleryContainer data={this.state.imgBeach}/>}/>
          <Route path='/dogs' render={() => <GalleryContainer data={this.state.imgDogs}/>}/>
          <Route path='/food' render={() => <GalleryContainer data={this.state.imgFood}/>}/>
        </div>  
    </BrowserRouter>  
    );
  }
}

export default App;

