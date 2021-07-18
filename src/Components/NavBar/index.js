import React from "react";
import { Link } from "react-scroll";
import "./style.css"
// import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {

 return (

   // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
   //     <a className="navbar-brand" href="#">Wendy Figueroa</a> 
   //    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
   //       <span className="navbar-toggler-icon"></span>
   //    </button>

   //    <div className="collapse navbar-collapse" id="#navbarResponsive">
   //       <ul className="navbar-nav mt-4 mb-4">
   //          <li className="nav-item ">
   //             <a className="nav-link" href="#">Home</a>
   //          </li>
   //          <li className="nav-item">
   //            <a className="nav-link" href="#about">About</a>
   //          </li>
   //          <li className="nav-item">
   //          <a className="nav-link" href="portfolio.html">Portfolio</a>
   //          </li>
   //          <li className="nav-item">
   //            <a className="nav-link" href="contact.html">Contact</a>
   //          </li>
   //       </ul>
   //    </div>
   // </nav>

   <nav className="navbar navbar-expand-md">
   <button
     className="navbar-toggler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarNavMenu"
     aria-controls="navbarNavMenu"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <i class="fas fa-bars fa-lg"></i>
   </button>
   <div
     className="collapse navbar-collapse justify-content-center"
     id="navbarNavMenu"
   >
     <ul className="navbar-nav">
       <li className="nav-item navbar-text">
         <Link
           to="projects"
           className="nav-link"
           activeClass="active"
           spy={true}
           smooth={true}
         >
           PROJECTS
         </Link>
       </li>
       <li className="nav-item navbar-text">
         <Link
           to="about"
           className="nav-link"
           activeClass="active"
           spy={true}
           smooth={true}
         >
           ABOUT
         </Link>
       </li>
       <li className=" nav-item">
         <Link
           to="/"
           className="navbar-brand"
           activeClass="active"
           spy={true}
           smooth={true}
         >
        Wendy Figueroa
         </Link>
       </li>
       <li className="nav-item navbar-text">
         <Link
           to="resume"
           className="nav-link"
           activeClass="active"
           spy={true}
           smooth={true}
         >
           RESUME
         </Link>
       </li>
       <li className="nav-item navbar-text">
         <Link
           to="contact"
           className="nav-link"
           activeClass="active"
           spy={true}
           smooth={true}
         >
           CONTACT
         </Link>
       </li>
     </ul>
   </div>
 </nav>

  );

   }


export default Navbar;