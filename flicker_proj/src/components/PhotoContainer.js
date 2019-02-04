import React from 'react';

import NotFound from './NotFound'
import PhotoList from './PhotoList';

const PhotoContainer = () => {
    return (
        <div className="photo-container">
        <h2>Results</h2>
        {/* If results equals true, render PhotoList */}
          <PhotoList />
          {/* Else render NotFound */}
          <NotFound />
      </div>
    )
}

export default PhotoContainer;