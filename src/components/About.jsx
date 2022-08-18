import React from "react";
import "../stylesheets/About.css";
import aboutimg from "../Imges/about-img.jpg";

function About() {
  return (
    <>
      <div id="aboutcontent">
        <div id="aboutwebsite">
          <h1>About Us...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            illum perspiciatis expedita quod sunt assumenda tempora vitae
            perferendis at hic rerum cumque nemo ipsa sequi laborum fugiat
            impedit explicabo placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            placeat obcaecati eaque tempora incidunt explicabo odio,
            perferendis, cum nisi similique ea cumque doloribus, quisquam saepe
            quibusdam quis labore deserunt nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            placeat obcaecati eaque tempora incidunt explicabo odio,
            perferendis, cum nisi similique ea cumque doloribus, quisquam saepe
            quibusdam quis labore deserunt nihil.
          </p>
        </div>

        <div id="aboutimg">
          <img src={aboutimg} alt="" />
        </div>
      </div>
    
    </>
  );
}

export default About;
