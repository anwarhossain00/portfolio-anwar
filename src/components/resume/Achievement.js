import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/*<p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>*/}
          <h2 className="text-3xl md:text-4xl font-bold">Honors & Awards</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Fully Funded PhD Scholarship"
            subTitle="King Fahd University of Petroleum & Minerals (QS #67, Middle East #1), Saudi Arabia"
            result="Success"
            des="Got a Fully Funded PhD Scholarship in Computer Engineering-Digital System Design & Automation at KFUPM."
          />
          <ResumeCard
            title="Brilliant Academic Result Scholarship"
            subTitle="Daffodil International University, Bangladesh"
            result="Success"
            des="Got Brilliant Academic Result scholarship from Daffodil International University in different semesters. This scholarship
waived my tuition fee up to 50%."
          />
          <ResumeCard
            title="Campus Ambassador"
            subTitle="Human Resource Development Institute, Bangladesh"
            result="Success"
            des="Joined Human Resource Development Institute at Daffodil International University as a Campus Ambassador. Attended
plethora of conferences, seminars and competitions organized by HRDI."
          />
          <ResumeCard
            title="
Vice President -DIU Computer and Programming Club"
            subTitle="Daffodil International University, Bangladesh"
            result="Success"
            des="Responsible for the research and journal wing, organized courses, workshops, seminars, webinars."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/*<p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>*/}
          <h2 className="text-3xl md:text-4xl font-bold">Licenses & Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard
            title="Global Mathematician (Worldwide #435)"
            subTitle="Institute for Scholastic Evalution, New Jersey, USA"
            result="Success"
            
            des="Participated in the Global Mathematical Talent Probe for grade 12, and secured rank 435 all over the world."
            
          />
          <ResumeCard
            title="Champions Team | Team Leader | Best Presenter"
            subTitle="Daffodil International University, Bangladesh"
            result="Success"
            des="Got the best presenter award & my team got the champions trophy among 70 teams of DIU Battle of Minds 1.0, the most prestigious business idea competition."
          />
          <ResumeCard
            title="Inter-College Science & Technology Fair (3rd Position)"
            subTitle="Engineering University School and College, Bangladesh"
            result="Success"
            des="Presented Non-mechanical science project at Inter-College Science & Technology Fair & got 3rd place among all other colleges."
          />
          <ResumeCard
            title="Inter-Class Football Tournament (Runner-up)"
            subTitle="St. Gregory's Hight School & College, Bangladesh"
            result="Success"
            des="Participated in Inter-Class Football Tournament in college section and achieved Runner-up position with my team."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
