import React, { Component } from "react";
import Card from "../Card";
import data from "./data.js";

class Project extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects:data.project
    
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div>
          {this.state.projects.map(project => (
          <Card
            id={project.id}
            key={project.id}
           title={project.title}
            imageSRC={project.imageSRC}
            // occupation={project.occupation}
            // location={project.location}
          />
         ))}
        </div>
    );
  }
}

export default Project;
