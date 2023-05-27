import React from 'react'
import "./Header.css"

const Header = (props) =>{
    return (<div className='Header'>
            <h1 className="header">{props.titulo}</h1>
        </div>)
}

export default Header;