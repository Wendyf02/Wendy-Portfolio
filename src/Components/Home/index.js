import React from "react";
import "./style.css"
import { Link, animateScroll as scroll } from 'react-scroll';

import Container from 'react-bootstrap/Container';

function Home() {


  return (
         <Container fluid>
            <div className="container-fluid" id="hero">
     
               {/* <div className="heading-content text-center">
                    <h5>Hello, I'm</h5>
                    <h1>Wendy Figueroa</h1>
               </div> */}

               <h3 className="diplay-3 text-center font-weight-bold" id="quote1"> "Hello I am Wendy Figueroa" </h3> 
           
            </div>

      </Container>

   );

}

export default Home;