import React from 'react'
import Data from "../couresdata/CouresData"; 
import {  useParams } from 'react-router-dom';
import "../stylesheets/Coursevideo.css"

function CourseVideo() {

  let { id } = useParams();
  return (
  <>
  {
 Data.map((data)=>{
 if(id === data.id){
  return(
    
  <div id='coursevideo' >
    <div id="video">
  <iframe className='radius1'
  width="80%"
  height="540px"
  
  src={data.video_link}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay;
  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>  
  </iframe>
  </div>
   <div id='coursedetails' >
  <h2>{data.titile}</h2>
  <br />
  <p> <span className='text' >Auther</span> - {data.auther}</p>
  <br />
    <p>
    <span className='text' >Discription</span> -  {data.discription}
    </p>
     
    </div>
    
    </div>
  
  
  )}

 })



  }
  
  </>

  )}

export default CourseVideo;