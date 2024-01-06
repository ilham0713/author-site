import React from 'react'
import "./home.css"
import mta from "../../assets/mta.png"
export default function Home() {
    return (
        <div>
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
                    <img src = {mta} alt=""/>
                </div>
            </div>

            <section className='home-des'>
                <h2 className='welcome'>
                    Welcome!
                </h2>
                <p className='greeting'>
                This is an exciting place. So, please continue to explore the pages to learn more about me and my series. Or scroll further down to find links to contact me. I look forward to hearing from you.



Thank you for visiting my website!
                </p>

            </section>
        </div>
    )
}