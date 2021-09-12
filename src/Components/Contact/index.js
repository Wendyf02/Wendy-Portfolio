import React, { Component } from 'react';
// import Fade from 'react-reveal/Fade';
import data from '../Project/data';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

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
      <div>
        <h2 className="display-3 text-center font-weight-bold" id="contact">Contact</h2>
        <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>

        <div className='contact-content'>
          <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>

          <ul>

            {data.social.map((link, index) => (

              <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
            ))}

          </ul>
        </div>


        <span className='Footer'>Alternate website design<a href="https://github.com/Wendyf02"> Wendy's original website</a></span>
      </div>

    );
  }
}

export default Contact;