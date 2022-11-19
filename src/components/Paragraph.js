import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";

const Paragraph = () => {
  return (
    <>
    <ReactReadMoreReadLess
                charLimit={320}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
            >
                {`It’s time to turn the fun quotient up a notch for your New Year celebration in India this year! Dive into a sea of enthralling experiences and taste new adventures amid surreal landscapes as you wait for a new year, a new beginning to unfurl! We bring you some super exciting destinations to welcome 2023 and bid farewell to the worries of the past. Whether you plan to party till you drop, indulge in dauntless adventures, or simply relax in the midst of untampered nature, these places offer it all. All you have to do is scroll down and take your pick! `}
            </ReactReadMoreReadLess>
    </>
  )
}

export default Paragraph