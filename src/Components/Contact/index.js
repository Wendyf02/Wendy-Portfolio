import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import data from '../Project/data';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import "./style.css"
init("user_fkf7rlYJJ67b6fsbLeCPP");


class Contact extends Component {

  state = {}
   sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_en93n5e', 'template_u7hd848', e.target, 'user_fkf7rlYJJ67b6fsbLeCPP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  render() {

    return (
      <div className="contactcontainer"> 

      <div className="contactcard">

        <h2 className="display-3 text-center font-weight-bold" id="contact">Contact</h2>
        
        <form className="contact-form" onSubmit={this.sendEmail}>

          {/* <input className="text-input" type="hidden" name="contact_number" /> */}
          {/* <label className="contactlabel"></label> */}
          {/* <br/> */}
          <input placeholder="Name" type="text" name="user_name" />
          <br/>
          {/* <label className="contactlabel"></label> */}
          <input placeholder="Email" type="email" name="user_email"/>
          <br/>
          {/* <label className="contactlabel">Message</label> */}
          <textarea className="textarea-message" placeholder="Message" name="message" />
          <br/>

          <input className="button" type="submit" value="Send"/>

        </form>

        <div className='contact-content'>
          <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>

          <ul>

            {data.social.map((link, index) => (

              <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
            ))}

          </ul>
        </div>
     

        <span className='Footer text-center'>Alternate website design<a href="https://github.com/Wendyf02"> Wendy's original website</a></span>
      </div>
    
      </div>
    
    );
  }
}

export default Contact;