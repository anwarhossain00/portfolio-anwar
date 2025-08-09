import React from 'react'
import bannerImg  from "../../assets/images/2.png";
// import bannerImg  from "../../assets/images/1.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[430px] h-[400px] lgl:w-[450px] lgl:h-[600px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[450px] h-[350px] lgl:w-[520px] lgl:h-[510px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
    


  );
}

export default RightBanner