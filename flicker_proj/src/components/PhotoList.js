import React from 'react';

const PhotoList = (props) => {
    return(
            <li>
                <img src={props.url} alt="" />
            </li>  
    )
}
export default PhotoList;

