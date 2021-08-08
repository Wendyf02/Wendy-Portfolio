import React, { Component } from "react";
import Card from "../Card";
import data from "./data.js";

class Project extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects:data.project
    
  };

  render() {

    return (

        <div>

        <h2 className="display-3 text-center font-weight-bold" id="project">Project</h2>

          {this.state.projects.map(project => (
          <Card
            id={project.id}
            key={project.id}
           title={project.title}
            imageSRC={project.imageSRC}
            service={project.service}
            url={project.url}
          />

         ))}
         
        </div>
    );
  }
}

export default Project;
