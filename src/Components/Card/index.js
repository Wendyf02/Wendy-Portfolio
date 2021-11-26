import React from "react";
import Button from "react-bootstrap/Button"
import "./style.css";

function Card(props) {
  return (
    <div className="card d-flex justify-content-around">
      
      <div className="img-container">
        <img alt={props.name} src={props.imageSRC} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Service:</strong> {props.service}
          </li>
          <div  className="d-flex justify-content-center">
            {/* <strong>Url:</strong>  */}
            <a target="blank" href={props.url}> <Button className="link1"  variant="outline-danger">Link</Button>{' '}</a>
          </div>
         
        </ul>
      </div>

    </div>
  );
}

export default Card;