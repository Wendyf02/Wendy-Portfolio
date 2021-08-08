import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import data from '../Project/data';


class Contact extends  Component {

  state = { }

  render() {

    return (
        <div>
         <h2 className="display-3 text-center font-weight-bold" id="contact">Contact</h2>

    
      <div className='contact-content'>
        <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>

        <ul>

        {data.social.map((link,index)=>(

        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
        ))}  

        </ul>
      </div>

   
       <span  className='Footer'>Alternate website design<a href="https://github.com/Wendyf02"> Wendy's original website</a></span>
        </div>
    );
  }
}

export default Contact;