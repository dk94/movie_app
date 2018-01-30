import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="menuContainer">
            <nav className="menu">
                <ul>
                    <li>
                        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Movies</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/contact'>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;