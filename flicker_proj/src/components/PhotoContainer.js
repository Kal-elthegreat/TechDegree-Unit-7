import React from 'react';

import NotFound from './NotFound'
import PhotoList from './PhotoList';

const GalleryContainer = (props) => {

    const photosList = props.data;
    let photos;
    
    if(photosList.length > 0){
        photos= photosList.map(photo => 
            <PhotoList 
            id= {photo.id}
            serverID= {photo.server}
            farmID= {photo.farm}
            secret= {photo.secret}
            url= {`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key= {photo.id.toString()}
            /> 
        );
    } else {
        photos= <NotFound />
    }
    
    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>  
      </div>
    )
}

export default GalleryContainer;