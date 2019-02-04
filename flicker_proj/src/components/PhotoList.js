import React from 'react';

const PhotoList = (props) => {
    return(
            <li>
                <img src={props.url} />
            </li>  
    )
}
export default PhotoList;

