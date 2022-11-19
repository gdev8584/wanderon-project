import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className='d-flex justify-content-center mt-5 foot-top'>
        <div><i class="fab fa-facebook-f"></i></div>
        <div><i class="fab fa-instagram"></i></div>
        <div><i class="fab fa-linkedin-in"></i></div>
        <div><i class="fab fa-youtube"></i></div>
        <div><i class="fab fa-pinterest-p"></i></div>
    </div>
    <div className='text-center mt-3 foot-med1'>Address</div>
    <div className='text-center'>WANDERON EXPERIENCES PVT LTD</div>
    <div className='text-center foot-med3'>3rd Floor, Building No-750, Phase V, Udyog Vihar, Sector-19, Gurugram, Haryana-122022</div>
    <div className='d-flex justify-content-center text-nowrap mt-3 mb-5 foot-last'>
        <div>hello@wanderon.in</div>
        <div>+91-9870301533</div>
        <div>www.wanderon.in</div>
    </div>
    </>
  )
}

export default Footer