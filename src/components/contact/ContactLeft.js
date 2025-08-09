import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Anwar Hossain</h3>
        <p className="text-lg font-normal text-gray-400">
          PhD Student in CE - DSDA at KFUPM.
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          King Fahd University of Petroleum and Minerals.
          <br></br>
          Academic Belt Road, Dhahran 31261,<br></br> Saudi Arabia.
          
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1941195020</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">anwarhossain.0ah@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
  <h2 className="text-base uppercase font-titleFont mb-4">Contact Me</h2>
  <div className="flex gap-4">
   
    <a
      href="https://Wa.me/+8801941195020"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaWhatsapp />
    </a>
    <a
      href="https://www.linkedin.com/in/anwarhossain00/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaLinkedinIn />
    </a>
     <a
      href="https://www.facebook.com/hossain.anwar00/"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.instagram.com/anwar_hossain_chowdhury0/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      className="bannerIcon"
    >
      <FaInstagram />
    </a>
  </div>
</div>

      {/* <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4"></h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default ContactLeft