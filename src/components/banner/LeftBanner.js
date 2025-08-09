import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
  FaViacoin,
  FaTiktok,
  FaResearchgate,
  FaOrcid,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Doctoral Student.", "Researcher.", "Software Engineer.", "Data Analyst."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Anwar Hossain</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
          Anwar Hossain is a Doctoral Student in Computer Engineering - Digital System Design & Automation at King Fahd University of Petroleum and Minerals, currently serving as a Research Assistant at the DSDA: Digital System Design and Automation Research Lab. His research focuses on developing innovative artificial intelligence and computer vision solutions for particular real-life applications. He specializes in advanced deep learning techniques including semantic segmentation, object detection, and tracking systems that address real-world challenges.
          <br></br>
          <br></br>
          
          Furthermore, he has a strong passion for technologies. His strength is his knowledge and he likes to take challenges that he can do. In his way of thinking, he takes both success and failure in a balanced manner.
          
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me In
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/anwarhossain00/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/anwarhossain00" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
          
            </a>
            <a href="https://www.researchgate.net/profile/Anwar-Hossain-44?ev=hdr_xprf" target="blank">
              <span className="bannerIcon">
                <FaResearchgate />
              </span>
            </a>
            <a href="https://scholar.google.com/citations?hl=en&authuser=6&user=Icy4IG0AAAAJ" target="blank">
              <span className="bannerIcon">
                <FaGraduationCap />
              </span>
              
            </a>
            <a href="https://orcid.org/my-orcid?orcid=0009-0004-1885-9953" target="blank">
              <span className="bannerIcon">
                <FaOrcid />
              </span>
            </a>
            <a href="https://www.youtube.com/@anwar_hossain_chowdhury0" target="blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a href="https://www.facebook.com/hossain.anwar00/" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/anwar_hossain_chowdhury0/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            
            
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            
          </div>
        </div>
        {/*
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
