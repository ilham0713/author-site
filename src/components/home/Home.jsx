import React from 'react'
import "./home.css"
import mta from "../../assets/mta.png"
export default function Home() {
    return (
        <div className='par'>
            <div className='home-intro'>
                <div className='name-side'>
                    <div className='words'>
                        <h2 className='front-name'>
                            Janeth Bell
                        </h2>
                        <h3 className='front-des'>
                            Preteen Author
                        </h3>
                    </div>
                </div>
                <div className='pic-side'>
                    <img className ="image" src = {mta} alt=""/>
                </div>
            </div>

            <section className='home-des'>
                <h2 className='welcome'>
                    Welcome!
                </h2>
                <p className='greeting'>
                This is an exciting place.  Imagine being on an adventurous roller coaster ride where the scenes change right before your eye! In this series, you be exposed to mysteries, family secrets, life in the tropics and in the mountain regions. Volcanoes will seem to follow you. Readers  will learn about sugar skeletons, life in the Equator, shark’s swimming in lakes, and chasing what look like diamonds in the sea. You will learn the techniques for surfing and even dancing salsa. The heroes of history will want you to join them on a walk to discover their truths. This exciting series shares the fun reality of a racially diverse life in Latin America. There are fun activities at the back of every book in  the Miranda’s Travel Adventures series. Join her. Get your books from Amazon. 
                </p>

            </section>
        </div>
    )
}