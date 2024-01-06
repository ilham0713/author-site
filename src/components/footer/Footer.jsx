import React from 'react';
import './footer.css';
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
       <div className='footer-cols'>
          <section>
            <h2 className='title'>Pages</h2>
            <ul className='colys'>
              <li>
                <a className = 'footer-nav' href='/Home'>Home</a>
              </li>
              <li>
                <a className = 'footer-nav' href='/MyBooks'>Books</a>
              </li>
              <li>
                <a className = 'footer-nav' href='/Activities'>Activities</a>
              </li>
              <li>
                <a className = 'footer-nav' href='/Traveling'>Traveling</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className='title'>Socials</h2>
            <ul className='colys footer-socials'>
              <a href="https://www.amazon.com/s?i=digital-text&rh=p_27%3AJaneth+Bell&_encoding=UTF8&qid=1704207929&sr=8-1&ref=dbs_m_mng_rwt_byln"><FaAmazon/></a>
              <a href="https://www.facebook.com/profile.php?id=61553619797126&mibextid=LQQJ4d"><FaFacebook /></a>
            </ul>
            
          </section>

          <section>
            <h2 className='title'>Contact</h2>
            <ul className='colys'>
              <li>
                <a href = "mailto:mukatilham@gmail.com" className = 'footer-nav'>Contact Us</a>
              </li>
              <li className = 'footer-nav'>Review</li>
              {/* <li className = 'footer-nav'>FAQs</li> */}
              <li className = 'footer-nav'>Terms of Service</li>
            </ul>
          </section>
      </div>
    </footer>
   
  );
};

export default Footer;
