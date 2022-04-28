import React from 'react'
import './Footer.scss'

const Footer = () => {
  return <div className='Wrapper'>
    <h5>&copy; {new Date().getFullYear()}
    <span> Piotr Burda</span>
    </h5>
    <h5>All right reserved</h5>
  </div>
}


export default Footer
