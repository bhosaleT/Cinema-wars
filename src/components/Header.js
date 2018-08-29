import React from 'react';

function Header (props){
    return(
        <div className = "header">
        <p>{props.heading}</p>
        </div>
    )
}

export default Header;