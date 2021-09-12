import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      
      <div className="img-container">
        <img alt={props.name} src={props.imageSRC} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Service:</strong> {props.occupation}
          </li>
          <li>
            <strong>Url:</strong> {props.location}
          </li>
         
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Card;