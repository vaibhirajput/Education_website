import React from 'react'
import "../stylesheets/Contact.css"
import contactimg from "../Imges/contact-img.jpg"

function Contact() {
  return (
    <>
    <div id="contactcontent">
        <div id="contactussection">
          <h1>Contact Us For Anyquery...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            placeat obcaecati eaque tempora incidunt explicabo odio,
            perferendis, cum nisi similique ea cumque doloribus, quisquam saepe
            quibusdam quis labore deserunt nihil.
          </p>
          <p className='blue'>
           Contact us on truemusclescience@gmail.com 
          </p>
        </div>

        <div id="contactimg">
          <img src={contactimg} alt="" />
        </div>
      </div>
    
    </>
  )
}

export default Contact;