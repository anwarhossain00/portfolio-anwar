import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/*<p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-justify">
          <ResumeCard
            title="Research Assistant"
            subTitle="King Fahd University of Petroleum & Minerals (QS World #67, Middle East #1) (Aug 2025 - Present)"
            result="Dhahran, Saudi Arabia"
            des="Serving as a Research Assistant at the CE - DSDA : Computer Engineering - Digital System Design and Automation Research Lab."
          />
          <ResumeCard
            title="Business Development Executive"
            subTitle="United Commercial Bank PLC (Jan 2024 - Oct 2024)"
            result="Dhaka, Bangladesh"
            des="Joined this position with the intent to gain hands-on experience in marketing, develop professional networking skills, and strengthen my abilities in client handling and relationship management."
          />
          <ResumeCard
            title="Junior Software Engineer"
            subTitle="LEADS Corporation Limited (May 2023 - Oct 2023)"
            result="Dhaka, Bangladesh"
            des="Enhanced my technical skills in a real-world environment, collaborate with experienced professionals, and grow through continuous learning and exposure to new technologies and team dynamics."
          />
          <ResumeCard
            title="Student Prefect"
            subTitle="Daffodil International University (Apr 2022 - Apr 2023)"
            result="Savar, Bangladesh"
            des="This position helped me to develop leadership qualities, improve public speaking, and learn through collaboration with students and faculty."
          />
        </div>
      </div>
      {/* 
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>*/}
    </motion.div>
  );
};

export default Experience;
