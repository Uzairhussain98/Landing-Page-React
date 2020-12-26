import React from 'react'
import './Home.css'
import image from "../assets/car.gif"
// import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <div className="home">
        <img className="home__image" src={image} alt="ipad"/>

        <div className="home__text">
            <h1>Alpha Motors
            </h1>
            <h4>
                Keeping You Informed About the automotive industry !
                </h4>
            <div className="buttons">
            <button className="home__btn">Subscribe</button>
            <button className="home__btn_two">Know More</button>

            </div>
           

        </div>
           
      
    </div>
  )
}

export default Home