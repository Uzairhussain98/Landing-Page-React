import React from 'react'
import './header.css'
// import logo from './logo.jpeg'
// import { Link} from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
       <div className="header__logo">
       {/* <Link to="/">
  <img className="logo__image" src={} alt="logo"/>
  </Link> */}

           <h1>Alpha Motors</h1>

       </div>
       
       <div className="header__links">
      <a href="google.com" className="link hvr-sweep-to-left">Home</a>
      <a href="google.com" className="link hvr-sweep-to-left">About</a>
      <a href="google.com" className="link hvr-sweep-to-left">Contact</a>


    
      
      


       </div>

      

    </div>
  )
}

export default Header