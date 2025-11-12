import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"


const Main = () => {
  return (
    <>
        <div className="hero">
            <img src={image1} alt="" width="500px"/>
            <img src={image2} alt="" width="500px"/>
            <img src={image3} alt="" width="500px"/>
        </div>
    </>
  )
}

export default Main