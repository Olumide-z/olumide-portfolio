"use client";

import React, { useState } from "react";

import { FaHtml5, FaCss3, FaVuejs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiGit,
  SiBootstrap,
} from "react-icons/si";

// about me
const about = {
  title: "About me",
  decription:
    "I am a Frontend Developer with proven experience delivering scalable and user-focused web applications across multiple industries.",
  info: [
    { fieldName: "Name", fieldValue: "Olumide Ilesanmi" },
    { fieldName: "Phone", fieldValue: "091 692 658 87" },
    { fieldName: "Experience", fieldValue: "3+ years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Freelance", fieldValue: "Avaliable" },
    { fieldName: "Email", fieldValue: "Olumideilesanmi10@gmail.com" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const experience = {
  icon: "💼",
  title: "My Experience",
  description:
    "Front-End Developer with a strong track record of creating impactful digital products that blend functionality with exceptional user experience. Skilled in HTML, CSS, JavaScript, and TypeScript, with hands-on expertise in modern frameworks for building sleek, responsive, and interactive interfaces. Passionate about sharing knowledge through teaching, and dedicated to continuous growth by staying ahead of evolving technology trends.",
  items: [
    {
      company: "Tech Solutions",
      position: "Frontend Developer",
      duration: "Jan 2020 - Present",
    },
    {
      company: "Tech Solutions",
      position: "Frontend Developer",
      duration: "Jan 2020 - Present",
    },
    {
      company: "Tech Solutions",
      position: "Frontend Developer",
      duration: "Jan 2020 - Present",
    },
  ],
};

const education = {
  icon: "🎓",
  title: "My Education",
  description: "",
  items: [
    {
      institution: "Federal University of Technology, Akure, Ondo State",
      degree: "Btech",
      duration: "Feb 2014 - Dec 2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a strong foundation in frontend development, with expertise in the following technologies:",
  skillList: [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl" /> },
    { name: "CSS3", icon: <FaCss3 className="text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
    { name: "React", icon: <SiReact className="text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-4xl" /> },
    { name: "Git and Github", icon: <SiGit className="text-4xl" /> },
    { name: "SASS", icon: <SiSass className="text-4xl" /> },
    { name: "Boostrap", icon: <SiBootstrap className="text-4xl" /> },
    { name: "Redux and Redux Toolkit", icon: <SiRedux className="text-4xl" /> },
    
  ],
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  const [tab, setTab] = useState("experience");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto z-[100]">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
          value={tab}
          onValueChange={setTab}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3 mt-7">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.decription}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
