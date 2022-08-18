import React from "react";
import "../stylesheets/Coures.css";
import Data from "../couresdata/CouresData";
import {Link} from "react-router-dom";
import { useState } from "react";




function Service() {
  const[couress , setcouress] = useState("");
  console.log(couress);
  


  let id;
  return (
    <>
     <div id="courseheader">
      <li onClick={()=>setcouress("java")} >Java</li>
      <li onClick={()=>setcouress("JavaScript")} >JavaScript</li>
      <li onClick={()=>setcouress("C++")} >C++</li>
      <li onClick={()=>setcouress("Html")} >Html</li>
      <li onClick={()=>setcouress("Css")}>Css</li>
      <li onClick={()=>setcouress("Python")}>Python</li>
      <li onClick={()=>setcouress("Node js")} >Node js</li>
      <li onClick={()=>setcouress("React")}>React</li>
      <li onClick={()=>setcouress("DSA")} >DSA</li>
     </div>

      <div id="courescontent">
        <div id="couresheadline">
          <h1>Best Coding Concepts And Coding Coures On Internet</h1>
        </div>
        <div id="allcoures">
         
          {

     Data.map((data)=>{
      id= data.id;
      if(couress == data.category || couress == ""){

      
      return(
        <>
      <div className="videos">
      <iframe className="radius"
      width="500"
      height="350"
      
      src={data.video_link}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>  
      </iframe>
      
       <div id="videotext">
      <h2>{data.titile}</h2>
      <br />
      <p> <span className='text' >Auther</span> -  {data.auther}</p>
      <br />
        <p>
        <span className='text' >Discription</span> - {data.discription}
        </p>
         
        <br />
        <div id="bold">
        <Link  to={"/coursevideo/"+id} > Click Here</Link> <span>to See With Big Screen</span> 
        </div>

        </div>
        
        </div>
        </>
      )}

     })
    
      
}

</div>
 </div>
  </>
  );
}

export default Service;
