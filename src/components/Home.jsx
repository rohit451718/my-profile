import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './Data/Hero.json'
import Typed from 'typed.js'

const Home = () => {
  const typedref=useRef(null);
  useEffect(() => {
    const options={
      strings:["Welcome to my Profile","My name is Rohit Kumar","I'm Full Stack Developer"],
      typeSpeed:50,
      backSpeed:50,
        loop:true,
        }
   const typed=new Typed(typedref.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        >
     <h1 ref={typedref}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, libero!</h1>
     <a href={pdf} download="Rohitresume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
             <div className="img"
             data-aos="fade-up-left"
             data-aos-duration="1000"
             >
              <img src={`/asset/${hero.imgSrc}`} alt="hero" />
             </div>
        </div>
      </div>
    </>
  )
}

export default Home
