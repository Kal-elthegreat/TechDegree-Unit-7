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
    //searchTag:''
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
    //const searchPath = `/${this.searchTag}`
    return (
      <BrowserRouter>
          
        <div className="container">
          {/* Render Header, Search, & MainNav components */}
          {/*<Route path='/' render={()=> <Header title= "React Flicker App"/>}/>*/}
          <Route path='/' render={()=> <Search searchBar={this.searchBar} />}/> 
          <Route path='/' component={MainNav}/>
          
          {/* Default images */}
          <Route exact path='/' render={() => (this.state.loading) ? <p> Loading..</p> :<GalleryContainer data= {this.state.imgs}/>}/> 
          
          {/* MainNav & Search images */}
          <Route exact path='/beach' render={() => <GalleryContainer  searchBar={this.searchBar('beach')} data={this.state.imgs}/>}/>
          <Route exact path='/dogs' render={() => <GalleryContainer searchBar={this.searchBar('dogs')} data={this.state.imgs}/>}/>
          <Route exact path='/food' render={() => <GalleryContainer searchBar={this.searchBar('food')} data={this.state.imgs}/>}/>
          <Route exact path='/:search' render={() => <GalleryContainer data={this.state.imgs}/>}/>
          <Route exact path='/search:input' render={() => <GalleryContainer searchBar={this.searchBar('goat')} />}/>
        </div>  

    </BrowserRouter>  
    );
  }
}

export default App;

