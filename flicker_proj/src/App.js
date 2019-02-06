import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import axios from 'axios'
import '../src/project.css';


import apiKey from './config';
import Header from './components/Header';
import MainNav from './components/MainNav';
import GalleryContainer from './components/GalleryContainer';

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
      <BrowserRouter>
          
        <div className="container">
          <Route  path='/' render={()=> <Header title= "React Flicker App" searchBar={this.searchBar} />}/>
          <Route  path='/' component={MainNav}/>
          {/*<Route exact path='/search' render={()=> <Header title= "React Flicker App" searchBar={this.searchBar} />}/>*/}
          {
            (this.state.loading) 
            ? <p> Loading..</p>
            :<GalleryContainer 
            data= {this.state.imgs}
            />
          }
          
        </div>  

    </BrowserRouter>  
    );
  }
}

export default App;


/* 
{
            (this.state.loading) 
            ? <p> Loading..</p>
            :<GalleryContainer 
            data= {this.state.imgs}
            />
          }




*/
