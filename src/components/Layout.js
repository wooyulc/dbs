/* Layout.js */
import React from 'react'
import NavBar from './NavBar'
import ScrollTopButton from './scrollTopButton';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({children}) {
  return (
      <div className='layout'>
        <NavBar/>
        <div className='content'>
          {children}
        </div>
        <div className='container'>
          <footer>
            <div className='footer-top'>
              <div className='row'>
                <div className='col'>
                  <h4>ABOUT US</h4>
                  <p>
                    Our club offers opportunity men, women, boys and girls of anyge of skill level to play basketball for the fun and enjoyment of the game.
                  </p>
                </div>
                <div className='col'>
                  <h4>CONTACT US</h4>
                  <p>
                    Our club offers opportunity men, women, boys and girls of anyge of skill level to play basketball for the fun and enjoyment of the game.
                  </p>
                </div>
                <div className='col-lg-4'>
                  <h4>SIGN UP FOR UPDATES</h4>
                  <p>
                    Our club offers opportunity men, women, boys and girls of anyge of skill level to play basketball for the fun and enjoyment of the game.
                  </p>
                </div>
              </div>
            </div>
            <div className='footer-bottom'>
              <p>Copyright © 2024 - 여리는개발중. All rights reserved</p>
              <ScrollTopButton/>
            </div>
          </footer>
        </div>
      </div>
  )
}
