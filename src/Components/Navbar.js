import React from 'react'
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {

    return (
        <>
        <IconContext.Provider value={{ color: '#39ff14' }}>
            <div className="navbar">

                 <h1 className="navbar-logo">Cadenza<i className="fas fa-play"></i></h1>


            </div>

            </IconContext.Provider>

        </>
    )
}

export default Navbar;
