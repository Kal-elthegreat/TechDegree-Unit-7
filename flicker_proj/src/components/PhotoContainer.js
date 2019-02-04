import React from 'react';

import NotFound from './NotFound'
import PhotoList from './PhotoList';

const GalleryContainer = (props) => {

    const photosList = props.data;
    let  photos= photosList.map(photo => 
        <PhotoList 
        id= {photo.id}
        serverID= {photo.server}
        farmID= {photo.farm}
        secret= {photo.secret}
        url= {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        key= {photo.id.toString()}
        /> 
        );

    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {/* If results equals true, render PhotoList */}
          {photos}
          {/* Else render NotFound */}
          <NotFound />
        </ul>  
      </div>
    )
}

export default GalleryContainer;