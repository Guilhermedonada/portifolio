import React from 'react'
import Photo from './Photo'
import Bike from './Bike'
import BikeBlue from './BikeBlue'
import Arrow from '../assets/svg/arrow.svg'
import '../assets/css/home.css'

const Home = () => {
  return(
    <article className="css-home">
      <section>
        <div className="css-photo-area">
          <Photo/>
        </div>
        <div className="css-text-area">
          <h1>Hey!</h1>
          <h1>I'm Guilherme Donada</h1>
          <h5>
          I am Brazilian, I love to participate in the creation and development of new projects. 
          In recent years I have been working with software development focused on Front-End and 
          process usability.
          </h5>
          <a href="#section-2">
            <img src={Arrow} alt="arrow" />
          </a>
        </div>
        <div className="css-bike-area">
          <Bike/>
        </div>
        <div className="css-rede-yellow">
          <div>
          <svg preserveAspectRatio="none" viewBox="0 0 629 232" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 1">
          <path id="Vector" d="M361.41 230.64C662.72 92.58 397.1 16.64 0 62.12" stroke="#725E15" stroke-width="2" stroke-miterlimit="10"/>
          <path id="Vector_2" d="M414.79 230.64C1028.17 56.66 132 -12 0 3.09002" stroke="#725E15" stroke-width="2" stroke-miterlimit="10"/>
          <path id="Vector_3" d="M256.77 229C393.68 173.32 376.56 78.92 0 131.31" stroke="#725E15" stroke-width="2" stroke-miterlimit="10"/>
          </g>
          </svg>
          </div>
        </div>
      </section>

      <section id="section-2">
        <div className="css-rede-green">
          <svg preserveAspectRatio="none" viewBox="0 0 738 211" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="rede">
            <path id="Vector" d="M352.67 0.959961C241.47 81.43 396.1 98.24 737 70.44" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path id="Vector_2" d="M214.67 0.959961C-91.25 132.05 713.84 140.07 736.34 120.45" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            <path id="Vector_3" d="M96.4101 0.959961C-293 163.48 635.69 224.66 737 207.09" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
            </g>
          </svg>
        </div>
        <div className="css-stack-area">
          <div>
            <h2>Stacks</h2>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
              <ul>
                <li>REACTJS</li>
                <li>BOOTSTRAP</li>
                <li>JQUERY</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Contact me</h2>
            <ul>
              <li>LINKEDIN</li>
              <li>GITHUB</li>
            </ul>
          </div>
        </div>
        <div className="css-project-area">
          <h2>Projects</h2>
          <ul>
            <li>ÍNUMERA</li>
            <li>TECH4PLANT</li>
            <li>MAPA DA LEITURA</li>
          </ul>
        </div>
        <div className="css-bike-area">
          <BikeBlue/>
        </div>
        <div className="css-rede_2-green">
          <div>
            <svg preserveAspectRatio="none" viewBox="0 0 468 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="rede">
                <path d="M358.51 243.844C461.95 48.6644 318.11 7.84461 1 75.3246" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M411.92 243.844C652.48 -5.78551 19.31 -21.0353 1.60999 16.3047" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
              </g>
            </svg>
          </div>
         </div>
      </section>
    </article>
  )
}

export default Home