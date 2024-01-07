import React from 'react';
import './footer.css';
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='foot'>
       <div className='footer-cols'>
          <ul className='footer-nav-line'>
            <li>
              <a className = 'footer-nav' href='/Home'>Home</a>
            </li>
            <li>
              <a className = 'footer-nav' href='/About'>About</a>
            </li>
            <li>
              <a className = 'footer-nav' href='/MyBooks'>Books</a>
            </li>
            <li>
              <a className = 'footer-nav' href='/Activities'>Activities</a>
            </li>
            
          </ul>
          <ul className='others'>
            <ul className='colys footer-socials'>
                <a className = "socials" href="https://www.amazon.com/s?i=digital-text&rh=p_27%3AJaneth+Bell&_encoding=UTF8&qid=1704207929&sr=8-1&ref=dbs_m_mng_rwt_byln"><FaAmazon/></a>
                <a className = "socials" href="https://www.facebook.com/profile.php?id=61553619797126&mibextid=LQQJ4d"><FaFacebook /></a>
              </ul>
              <ul className='colys'>
              <li>
                <a href = "mailto:MirandasTravelAdventures@gmail.com" className = 'footer-nav'>Contact Us</a>
              </li>
              {/* <li className = 'footer-nav'>FAQs</li> */}
            </ul>
          </ul>
              
          
      </div>
    </footer>
   
  );
};

export default Footer;
