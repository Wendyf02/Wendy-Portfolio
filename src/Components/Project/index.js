import React, { Component } from "react";
import Card from "../Card";
import data from "./data.js";
import { Col, Row } from "react-bootstrap";

class Project extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects:data.project
    
  };

  render() {

    return (

        <div>

        <h2 className="display-3 text-center font-weight-bold" id="projects">Project</h2>
       <Row className="justify-content-md-center"> 
          {this.state.projects.map(project => (
          <Col md="4" className="justify-content-md-center" key={project.id} >   
          <Card 
            id={project.id} 
           title={project.title}
            imageSRC={project.imageSRC}
            service={project.service}
            url={project.url}
          />
        </Col> 
         ))}
      </Row>

        </div>
    );
  }
}

export default Project;
