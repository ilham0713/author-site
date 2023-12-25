import React, {useState} from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className = 'nav'>
            <a href = "/" className = "site-title">
                Janeth Bell
            </a>
            <ul>
                <li>
                    <a href = "/Home">Home</a>
                </li>
                <li>
                    <a href = "/MyBooks">Books</a>
                </li>
                <li>
                    <a href = "/Activities">Activities</a>
                </li>
                <li>
                    <a href = "/Traveling">Traveling</a>
                </li>
            </ul>
        </nav>
    )
}



export default Navbar
