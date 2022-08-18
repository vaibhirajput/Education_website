import React from 'react'
import '../stylesheets/Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
    <div id='header'>
      
      <div id="logo">
      <Link id="logo1" to="/Home">  <h1>पाठशाला</h1></Link>
      </div>
        <nav id='navbar'>
        <ul>
            <li>
            <Link  className='navlink' to="/"> Home</Link>
            </li>

            <li>
            <Link  className='navlink' to="/coures">Courses</Link>
            </li>
             
            <li>
            <Link  className='navlink' to="/articals">Articles</Link>
            </li>

            <li>
            <Link  className='navlink' to="/about"> About</Link>
            </li>


            <li>
            <Link className='navlink' to="/contact"> Contact</Link>
            </li>

        </ul>
        </nav>
    </div>
    </>
  )
}
export default Navbar;
