import React from 'react';
import "./books.css"; 
import PIEG from "../../assets/PIE.jpg";
import Flag from "../../assets/Ecua.png";
// import Page1 from "../../assets/TQPP1.jpg";
// import Page2 from "../../assets/TQPP2.jpg";

export default function PIE() {
    return (
        <div className="parent">
            <div className='port__containerb containerb'>
                <article className='port_itemb'>
                    <div className="port-item-imageb"> {/* Corrected class name */}
                        <img src={PIEG} alt="The Quinceanera Party" />
                    </div>
                </article>
                <article>
                    <div className="port-item-content"> {/* You might need an additional container for content */}
                        <h2>Panic in Ecuador</h2>
                        <p className='book-sub'>BOOK 2 OF 14 IN THE MIRANDA'S TRAVEL ADVENTURE'S SERIES</p>
                        <p className='para'>
                    Miranda’s dream transports her to a classroom in Ecuador, South America. The students in the class are giving lively presentations on different aspects of their country. 

Miranda learns a lot about life and science on the equator where there are twelve hours of daylight and twelve hours of darkness. Students talk about the different foods and cultures in the Amazon, the mountain regions, the coast and on the Galápagos Islands. She learns that Ecuador is a diverse country.

Miranda finds that the students there are nice and kind to her, so she makes friends easily and feels at home with them. Part of her wants to get to know them better, but the other part wants to escape the classroom before the teacher calls on her to speak. She hears him call her name and she panics! What can she really say about a country she knows nothing about? 

Join Miranda in this STEM book adventure that takes you to Ecuador!

                        </p>
                        <img className = "flag-pic" src={Flag} alt="The Quinceanera Party" />
                        <a className='buy_button' href = 'https://a.co/d/5GLu9wF'>Purchase On Amazon</a>
                        {/* <a className='next-book' href = '/MyBooks/SIP'> See Book 3: Salsa in Puerto Rico</a> */}
                    </div>
                </article>
            </div>
            {/* <div className='excerpt'>
                <h2 className='sneak'>Sneak Peak</h2>
                <div className='pages'> 
                    <img className = "page" src={Page1} alt="The Quinceanera Party" />
                    <img className = "page" src={Page2} alt="The Quinceanera Party" />
                </div>
            </div> */}
        </div>
    );
}