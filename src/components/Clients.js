import React from 'react'
import './css/LogoSection.css'
import image1 from '../images/1.png'
import image12 from '../images/1-1.png'
import image2 from '../images/2.png'
import image21 from '../images/2-2.png'
import image3 from '../images/3.png'
import image31 from '../images/3-3.png'
import image4 from '../images/4.png'
import image41 from '../images/4-4.png'
import image5 from '../images/5.png'
import image51 from '../images/5-5.png'
import image6 from '../images/6.png'
import image61 from '../images/6-6.png'



export default function Clients() {
  return (
    <div className='container1'>
      <h1  className='heading'> Top Recruiters </h1>
      <div class="our-clients">
        <ul>
          <li> <img src={image1} alt="" /> <img src={image12} alt="" /> </li>
          <li> <img src={image2} alt="" /> <img src={image21} alt="" /> </li>
          <li> <img src={image3} alt="" /> <img src={image31} alt="" /> </li>
          <li> <img src={image4} alt="" /> <img src={image41} alt="" /> </li>
          <br />
          <li> <img src={image5} alt="" /> <img src={image51} alt="" /> </li>
          <li> <img src={image6} alt="" /> <img src={image61} alt="" /> </li>
        </ul>
      </div>
    </div>
  )
}
