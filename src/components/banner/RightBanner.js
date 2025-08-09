import React from 'react'
import bannerImg  from "../../assets/images/Anwar Profile1.jpg";
// import bannerImg  from "../../assets/images/1.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[450px] h-[400px] rounded-full lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[450px] h-[350px] lgl:w-[580px] lgl:h-[550px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
    


  );
}

export default RightBanner