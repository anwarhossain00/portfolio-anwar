import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/*<p className="text-sm text-designColor tracking-[4px]"></p>*/}
          <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="(PhD)Doctor of Philosophy in Computer Engineering - Digital System Design & Automation"
            subTitle="King Fahd University of Petroleum & Minerals (QS World #67, Middle East #1) (2025 - Present)"
            result="Running"
            des="The highest academic degree award by universities and it signifies a high level of achievement in a specific academic discipline, requiring original research and the completion of a dissertation or thesis."
          />
          <ResumeCard
            title="(BSc)Bachelor of Science in Computer Science & Engineering"
            subTitle="Daffodil International University (2019 - 2023)"
            result="3.82/4.00"
            des="The education & training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School Education - Science"
            subTitle="St. Gregory's High School and College (2016 - 2018)"
            result="5.00/5.00"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education - Science"
            subTitle="Dhaka Collegiate School (2014 - 2016)"
            result="4.72/5.00"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two 

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>*/}
    </motion.div>
  );
};

export default Education;
