import React from 'react';
import Search from './Search';

const Header = (props) => {
    return (
        <header>
            <h1> {props.title}</h1>
            <Search />
        </header>
    )
}


export default Header;