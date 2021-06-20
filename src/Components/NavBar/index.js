import React from "react";
import "./style.css"
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {

 return (

   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
       <a className="navbar-brand" href="#">Wendy Figueroa</a> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
         <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="#navbarResponsive">
         <ul className="navbar-nav ml-auto mt-2">
            <li className="nav-item ">
               <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
         </ul>
      </div>
   </nav>


  );

   }


export default Navbar;