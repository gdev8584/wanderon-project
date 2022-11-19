import React, { useContext } from 'react'
import { dcontext } from '../App'
import Groupx1 from './asserts/Groupx1.png'
import './styles/Page1.css'

const Page1 = () => {
    const data = useContext(dcontext)
    const {data1,loading} = data;
    const d = data1
    

    if (loading) {
        return (
          <span>Loading...</span>
        )
      }
      
      return (
        <div className='page1'>
        <div className='pmain-logo'> <img src={Groupx1} className="main-logo" alt='main-logo'/></div>
        <div className='img-container'>
        <img src={d}  className="img mimg" alt="main" />
        <div className='phead'>
            <h2>Let's Take a look as to what the coolest travel<br /> community says about the upcoming travel trends</h2>
        </div>
        <div className='search-pannel'>
        <i className="fas fa-search picon"></i>
        <input id="icons-search" name="icons-search" type="text" placeholder="Search" className="rounded pinput" />
        <button className='pbtn'>Search</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#259d57" fillOpacity="1" d="M0,256L80,229.3C160,203,320,128,480,144C640,160,800,224,960,234.7C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
        <div className='mb-5'>
        <div className='pbutton d-lg-flex justify-content-center'>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Trips</button>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Food</button>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Hotel</button>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Places</button>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Adventure</button>
            <button type="button" className="btn btn-light btn-outline-success mx-3 px-4">Workcation</button>
            <button type="button" className="btn btn-success px-4">More</button>
        </div>
        </div>
        
        </div>
      )
}

export default Page1