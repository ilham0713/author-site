import React from 'react'
import CS from "../../assets/CS.png"
import TQP from "../../assets/TQPF.jpg"
import PIE from "../../assets/PIE.jpg"
import "./mybooks.css"

export default function MyBooks() {
    return (
        <>
            <h2>Miranda's Travel Adventures: The Series</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className = 'port__container container'>
                <a href = "/TQP" className='port_item'>
                    <div className="port-item-image">
                        <img src = {TQP} alt=""/>
                    </div>
                    <h3>The Quinceanera Party</h3>
                    {/* <div className='port-img-cta'>
                        <a href = "https://github.com/ilham0713/Curbside-Processor" className='btn' target = '_blank'>Learn More</a>
                    </div> */}
                </a>
                <a href = "/PIE" className='port_item'>
                    <div className="port-item-image">
                        <img src = {PIE} alt=""/>
                    </div>
                    <h3>Panic In Ecuador</h3>
                </a>
                <a className='port_item'>
                    <div className="port-item-image">
                        <img src = {CS} alt=""/>
                    </div>
                    <h3>Coming Soon</h3>
                </a>
               
            </div>
        </>
    )
}