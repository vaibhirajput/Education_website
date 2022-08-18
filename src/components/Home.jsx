import React from 'react'
import "../stylesheets/Home.css";
import homeheaderimage from "../Imges/home-img.jpg";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
    <div id="homecontent">
     <div id="headImg">
      <div id='headlines'>
        <h1>Education...</h1>
        <h2>is the Key to unlock </h2>
        <h2>the golden door of the <span id='freedom'>freedom</span> </h2>
        <br />
        <Link to="/coures" >  <button id='btnhome'>    Get Start Now</button> </Link> 

      </div>
      <img src={homeheaderimage} alt="" />
     </div>
     
    </div>
    
    </>
  )
}

export default Home;