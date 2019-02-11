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

  
  componentDidMount (){
   this.searchBar();
  }

  searchBar = (tag = 'nature') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        //searchTag: tag,
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
      <BrowserRouter>
          
        <div className="container">
          {/* Render Header, Search, & MainNav components */}
          <Header title= "React Flicker App"/>
          <Search searchBar={this.searchBar} />
          <MainNav/>
          
          {/* Default images */}
          <Route exact path='/' render={() => (this.state.loading) ? <p> Loading..</p> :<GalleryContainer data= {this.state.imgs}/>}/> 
          
          {/* MainNav & Search images */}
          <Route path='/beach' render={() => <GalleryContainer  searchBar={this.searchBar('beach')} data={this.state.imgs}/>}/>
          <Route path='/dogs' render={() => <GalleryContainer searchBar={this.searchBar('dogs')} data={this.state.imgs}/>}/>
          <Route path='/food' render={() => <GalleryContainer searchBar={this.searchBar('food')} data={this.state.imgs}/>}/>
        </div>  

    </BrowserRouter>  
    );
  }
}

export default App;

