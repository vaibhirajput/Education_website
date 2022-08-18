import "./App.css";
import Navbar from "./components/Navbar.jsx"
import  Home from "./components/Home.jsx";
import Articles from "./components/Articles.jsx";
import  About from "./components/About.jsx";
import  Contact from "./components/Contact.jsx";
import  Coures from "./components/Coures.jsx";
import Footer from "./components/Footer.jsx";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {  Routes,  Route,} from "react-router-dom";
import CourseVideo from "./components/CourseVideo";

function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>  
        <Route exact path="/articles" element={<Articles/>}/>  
        <Route exact path="/about" element={<About/>}/> 
        <Route exact path="/coures" element={<Coures/>}/> 
        <Route exact path="/contact" element={<Contact/>}/>  
        <Route exact path="/coursevideo/:id" element={<CourseVideo/>}/>  
        <Route path="*" element={<Home/>} />
      </Routes>
      

      <Footer/>
      </>
  );
}

export default App;
