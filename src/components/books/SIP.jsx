import React from 'react'
import "./books.css"
import CS from "../../assets/CS.png";

export default function SIP() {
    return (
        <div className='port__containerb containerb'>
            <article className='port_itemb'>
                <div className="port-item-imageb"> {/* Corrected class name */}
                    <img src={CS} alt="Salsa in Puerto Rico" />
                </div>
            </article>
            <article>
                <div className="port-item-content"> {/* You might need an additional container for content */}
                
                    <h2>Salsa in Puerto Rico</h2>
                    {/* <a className='buy_button' href = 'https://a.co/d/809VqWc'>Purchase On Amazon</a> */}
                    <p className='book-sub'>BOOK 3 OF 14 IN THE MIRANDA'S TRAVEL ADVENTURE'S SERIES</p>
                    <p className='para'>
                    Miranda is in the Caribbean on the island of Puerto Rico. Just as she starts to get comfortable making friends, she is faced with a direct challenge. She is attacked by a bully. Miranda is forced to look for help from people she doesn’t know, in a language that is foreign to her. Although the bully leaves her, he returns later to torment her and her friends! How can she save herself? Can her friends even save themselves?

But wait, that’s not the only bully Miranda meets. In Puerto Rico, Miranda learns about nature’s bully when her friends describe the force of hurricanes that frequently attack that island. 

In the pages of this book, she has fun learning about the flavors of salsa, the sauce and the origins of Salsa, the dance. She gets excited about the history of the island and its diversity. She doesn’t want to ever leave Puerto Rico!

Join Miranda as she experiences her first Caribbean adventure on the island of Puerto Rico! Look for this book on Amazon.


                    </p>
                </div>
            </article>
        </div>
    )
}