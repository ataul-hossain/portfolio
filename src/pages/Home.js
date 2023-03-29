import React from "react";
import Ataul from "../images/Ataul.jpeg";
import "./Home.css";
import PremeirePro from "../images/Skills/adobe-premiere-pro-logo-1-1.png";
import AfterEffects from "../images/Skills/Adobe_After_Effects_CC_icon.svg.png";
import Photoshop from "../images/Skills/adobe-photoshop-logo-3.png";
import Illustrator from "../images/Skills/Adobe_Illustrator_CC_icon.svg.png";
import MediaEncoder from "../images/Skills/Adobe_Media_Encoder_Icon.svg.png";

const Home = () => {
  return (
    <div className="main-div">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-left">
            <div className="img-container">
              <img src={Ataul} alt="Ataul Hossain - Digital Nomad" />
            </div>
            <div className="contact">
              <p>Email: ataul.business@gmail.com</p>
              <p>Phone: +88 01679373645</p>
            </div>
          </div>
          <div className="right">
            <div className="section">
              <h3>CAREER OBJECTIVE</h3>
              <p>
                Versatile Video Editor with experience in marketing and coding
                seeking a challenging role to create high-quality videos that
                meet the strategic objectives of clients and brands. Skilled in
                Adobe Creative Suite, JavaScript Programming, SEO, and SEM, I am
                eager to work with a dynamic team to create compelling video
                content optimized for web and social media platforms.
              </p>
            </div>
            <div className="section">
              <h3>SKILLS</h3>
              <p>Video Editing</p>
              <p>Softwares I use:</p>
              <div className="icons">
                <img src={PremeirePro} alt="" />
                <img src={AfterEffects} alt="" />
                <img src={Photoshop} alt="" />
                <img src={Illustrator} alt="" />
                <img src={MediaEncoder} alt="" />
              </div>
            </div>
            <div className="section">
              <h3>MY PORTFOLIO</h3>
              <div className="video-items">
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/0CFOT0_CSAw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/7tEpQmVOOkQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/lZQhuCPujVQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/M7YYClvHBEw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/5FP4xHfQCoQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/0yfsGgn1k5Y"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/qknYjJYu1vM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="videogrid">
                  <div className="video-container">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube-nocookie.com/embed/ZBKXJWTp61Q"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
