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
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </article>
        </div>
    );
}
