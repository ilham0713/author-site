import React from 'react'
import CS from "../../assets/CS.png"
import TQP from "../../assets/TQPF.jpg"
import PIE from "../../assets/PIE.jpg"
import "./mybooks.css"

export default function MyBooks() {
    return (
        <article>
            <h2 className='h2e'>Miranda's Travel Adventures: The Series</h2>
            <p className='par'>This series is written for school-age readers who wish to learn about different countries. Miranda visits several Spanish-speaking countries in her dreams where she meets young people who teach her actual facts about their history, way of life, traditions, and culture.  In each book Miranda uses humor and her imagination to overcome her fears of the unknown.
The series can be read in any order since each country presents a different experience and travel adventure. All the books in the series end with fun activities that help to connect the reader with the culture explored in the story.
</p>
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
                <a href = "/SIP" className='port_item'>
                    <div className="port-item-image">
                        <img src = {CS} alt=""/>
                    </div>
                    <h3>Coming Soon</h3>
                </a>
               
            </div>
        </article>
    )
}