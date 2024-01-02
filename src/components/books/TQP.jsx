import React from 'react';
import "./books.css"; // Ensure the correct path to your CSS file
import TQPF from "../../assets/TQPF.jpg";

export default function TQP() {
    return (
        <div className='port__containerb containerb'>
            <article className='port_itemb'>
                <div className="port-item-imageb"> {/* Corrected class name */}
                    <img src={TQPF} alt="The Quinceanera Party" />
                </div>
            </article>
            <article>
                <div className="port-item-content"> {/* You might need an additional container for content */}
                    <h2>The Quinceanera Party</h2>
                    <a className='buy_button' href = 'https://a.co/d/5GLu9wF'>Purchase On Amazon</a>
                    <p className='book-sub'>BOOK 1 OF 14 IN THE MIRANDA'S TRAVEL ADVENTURE'S SERIES</p>
                    <p>
                    Miranda finds herself dreaming about Colombia, a country in South America. In her dream she is mistaken for one of the guests and is led into a Quinceañera party which is a fifteenth birthday celebration. As she starts to make new friends, she realizes that one of them is a mischievous trouble-maker who almost ruins the party. 

Things get more complicated when a valuable piece of jewelry mysteriously disappears and Miranda becomes a suspect. Her limited Spanish increases her fear of not being able to prove that she is innocent. She tries to defend herself, but everything seems to work against her. 

In spite of all the drama, Miranda is able to learn about the city of Cartagena, the Gold Museum in Bogotá, and about some of the festivals and traditions in that country. She learns about Colombia’s diversity and the contributions of their indigenous people, and black population, as well as the country’s role in freeing most of Latin America from Spain.
Join Miranda as she makes friends, and experiences mystery and adventure in Colombia! 

                    </p>
                    <a className='next-book' href = '/PIE'> See Book 2: Panic in Ecuador</a>
                </div>
            </article>
        </div>
    );
}
