import React, {useEffect} from 'react';
import logo_bw from '../asset/dbslogo_bw.png';
import '../styles/navbar.css';
import '../styles/hamburger.css'
import { SiInstagram, SiNaver,SiYoutube } from "react-icons/si";
export default function NavBar() {
  
  useEffect(() => {
    const handleMenuToggle = () => {
      const menuToggle = document.querySelector("#menu-toggle");
      const activeElements = document.querySelectorAll(".active-element");
      if (menuToggle) {
        menuToggle.addEventListener("click", function () {
          // forEach is not supported in IE11
          activeElements.forEach(function (e) {
            e.classList.toggle("active");
          });
        });
      }
    };

    handleMenuToggle(); // Call the function after the DOM is loaded

    return () => {
      // Clean up the event listener when the component unmounts
      const menuToggle = document.querySelector("#menu-toggle");
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleMenuToggle);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <div className='navbar-panel'>
      <nav>
        <div className="masthead">
          {/* DBS LOGO*/}
          <a className='figure' href='/'>
            <img src={logo_bw} alt="intro" />
          </a>
          <div className='slogan-container'>
            <p>건강하고 매너있는 농구</p>
          </div>
          {/* header socials */}
          <div className='header__socials '>
            <a className='icons' href="https://www.instagram.com/d.b.s__official/"><SiInstagram/></a>
            <a className='icons' href="https://www.youtube.com/@D.B.S__official"><SiYoutube/></a>
            <a className='icons' href="https://band.us/band/92571964"><SiNaver/></a>
          </div>
          
          {/* hamburger menu */}
          <div id="menu-toggle" className="menu-toggle active-element">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </div>
        <div className="main-nav-list active-element">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}