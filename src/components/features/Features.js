import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Research"
          des="Computer Vision, Automation, Object Detection, Deep Learning, Image Segmentation,
          Data Science,."
         
        />
        <Card
          title="Software Development"
          des="AI Assistants, Programming Languages, Design, Tools, System Life Cycle, 
          Testing, Documentation."
          icon={<AiFillAppstore />}
        />
        
        <Card
          title="Digital System Design"
          des="System-Level Specification, Architectural Design, Logic Design, Implementation,
          Verification."
          icon={<FaMobile />}
        />
        <Card
          title="Automation"
          des="Reduce Human Intervention, Programmable System, Diverse Application, Improve Accuracy,
          Evolution and Integration."
          icon={<SiAntdesign />}
        />
        <Card
          title="Videography"
          des="Recording, Production, Electronic Media, Streaming, Vlogging ."
          icon={<FaGlobe />}
        />
        <Card
          title="SEO Optimisation"
          des="Organic Traffic, Keywords, Content Optimization, Technical SEO, Off-Page SEO."
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features