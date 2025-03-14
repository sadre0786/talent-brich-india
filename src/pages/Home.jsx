import React, { useEffect, useState } from "react";
import video from '../assets/background.mp4'
import rating from '../assets/rating.webp'
import Card from "../components/Card";

const Home = () => {
  const [text, setText] = useState("Best workers");

    // heading change
    useEffect(() => {
      const texts = [
        "hardworking people",
        "Every time every day",
        "Right workers",
        "for the right job",
        "Building success",
      ];
  
      let index = 0;
  
      const interval = setInterval(() => {
        index = (index + 1) % texts.length;
        setText(texts[index]);
      }, 2000); // Change text every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <>
      <section className="">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient-overlay"></div>
        </div>
      </section>

      <section className="p-8 lg:mt-0 mt-20">
        <div className="flex justify-between">
          <div>
            <div>
              <img src={rating} className="w-[50vw] sm:w-[20vw]" alt="" />
            </div>
            <h1 className="text-5xl sm:text-8xl mt-2 font-[Catamaran] font-extrabold text-white">
            Skilled hands expert craftsmanship
            </h1>
            <div>
              {" "}
              <p
                id="change"
                className=" text-4xl sm:text-5xl mt-2 font-[Satisfy] text-white"
              >
                {text}
              </p>
            </div>

            <p className="text-white font-sans  text-wrap max-w-[400px]">
            At Talent Brich India, we combine expert craftsmanship with
             a dedicated workforce to bring your construction dreams to life
            </p>
          </div>

          
        </div>

        <div className="wrap mt-14">
          <button className="button">Contact Us</button>
        </div>
      </section>

      <section id="card" className="bg-gradient-to-r pt-6 from-yellow-400 to-yellow-100">
        <h2 className="text-center text-4xl sm:text-5xl text-gray-800 font-[Catamaran] font-semibold lg:mt-10 sm:mt-[45px] mt-36">
          Benifits Of Veda Pro
        </h2>
       <div className="hidden-element" >
        <Card /> </div>
      </section>
    </>
  )
}

export default Home