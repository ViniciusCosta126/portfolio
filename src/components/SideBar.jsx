import React from 'react'
import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const SideBar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="foto de rosto" />
      <p className="title">Dev FrontEnd</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/uc?export=download&id=1sA-LsAHoejdyn-DRPYu3X8PZXnQxfiM1" className="btn">
        Download Curriculo
      </a>
    </aside>
  )
}

export default SideBar