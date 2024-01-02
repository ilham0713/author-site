import React from 'react';
import './footer.css';
import { FaAmazon } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-cols'>
      <section>
        <h2 className='title'>Pages</h2>
        <ul>
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
        <h2 className='title'>Social</h2>
        <ul className='footer-socials'>
          <a href="https://www.amazon.com/s?i=digital-text&rh=p_27%3AJaneth+Bell&_encoding=UTF8&qid=1704207929&sr=8-1&ref=dbs_m_mng_rwt_byln"><FaAmazon/></a>
          <a href="https://www.facebook.com/profile.php?id=61553619797126&mibextid=LQQJ4d"><FaFacebook /></a>
          
        </ul>
        <li>Review</li>
      </section>

      <section>
        <h2 className='title'>Contact</h2>
        <ul>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Terms of Service</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
