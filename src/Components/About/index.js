import React, { Component } from 'react';
import image2  from "../../image/image2.jpg"
import { Col, Row } from "react-bootstrap";
import "./style.css";

class About extends Component {

  state = { }
  render() {

        return (
            <div className='about'>
               
                <h2 className="display-3 text-center font-weight-bold"id="aboutme">About Me</h2> 

                <img className="image2 mx-auto d-block" id="image2" src={image2} /> 
            
                 
                  <Row className="justify-content-md-center"> 
       
                        <Col xs sm="12" lg="5" className="pl-4">
                          <p className="aboutme">
                             <br/>
                             <br/>
                             I could not be happier on where my life journey has taken me.
                             I am well organized and people person who is focus  excellent client support, 
                             program development, and complex problem solving. Passionate about helping others.
                             Cultivate positive morale by coaching and encouraging others.
                      
                             <br/>
                             <br/>
           
                         
                          </p>
                       </Col>
                  </Row>
                
                
            </div>
        );

  }

}

export default About;