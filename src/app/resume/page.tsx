"use client";

import React, { useState } from "react";

import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiUser,
  FiMapPin,
  FiCalendar,
  FiAward,
  FiPhone,
  FiMail,
  FiGlobe,
  FiClock,
  FiFlag,
} from "react-icons/fi";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiJest,
  SiPython,
  SiFastapi,
  SiDjango,
  SiSqlalchemy,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiDocker,
  SiAmazonwebservices,
  SiPytest,
  SiJsonwebtokens,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

// about me
const about = {
  title: "About me",
  decription:
    "I am a Software Engineer with proven experience delivering scalable and user-focused web applications across multiple industries.",
  info: [
    { fieldName: "Name", fieldValue: "Olumide Ilesanmi" },
    { fieldName: "Phone", fieldValue: "09169265887" },
    { fieldName: "Experience", fieldValue: "4+ years" },
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
    "Software Engineer with a strong track record of delivering scalable, user-focused web applications across HR, identity services, e-commerce, and smart-building domains. Experienced across the full stack — building polished frontends with React, Next.js, and TypeScript, alongside backend integrations and CMS-driven content workflows.",
  items: [
    {
      company: "Soft Solutions Limited",
      location: "Nigeria",
      position: "Frontend Engineer",
      duration: "May 2025 – Present",
      bullets: [
        "Develop React and TypeScript interfaces for a multi-tenant HR platform adopted by 8 companies and serving 400+ employees.",
        "Build interfaces for onboarding, attendance, leave, task tracking, compensation, and performance evaluations.",
        "Collaborate with designers, backend engineers, and stakeholders to streamline HR workflows, reducing manual HR processing time by 60%.",
      ],
    },
    {
      company: "NXLO Technology",
      location: "United Arab Emirates",
      position: "Software Engineer (Freelance)",
      duration: "February 2026 – July 2026",
      bullets: [
        "Built and shipped the marketing website for a building intelligence and ESG software company.",
        "Implemented English and Arabic localization with right-to-left (RTL) layout support.",
        "Integrated Sanity CMS so the team could publish blog posts and update website content without developer involvement.",
      ],
    },
    {
      company: "Global Plug Services",
      location: "United Kingdom",
      position: "Frontend Engineer (Contract)",
      duration: "February 2025 – January 2026",
      bullets: [
        "Built a responsive web application using React, Next.js, and TypeScript with a cross-functional team for identity, visa, and passport processing services.",
        "Developed an internal CRM interface for managing applications, documents, customer communications, and service workflows.",
      ],
    },
    {
      company: "TheGoldScarf",
      location: "United Kingdom",
      position: "Frontend Engineer",
      duration: "November 2022 – May 2025",
      bullets: [
        "Delivered web and mobile applications for TheGoldScarf, a software services and e-commerce company.",
        "Worked on its fashion platform and client projects including VowThread and ScrumSage, using React, Next.js, and TypeScript.",
        "Wrote frontend tests with Vitest, achieving 80% code coverage.",
      ],
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
    "I work across the full stack, building polished, responsive interfaces on the frontend and secure, scalable APIs on the backend with the following technologies:",
  categories: [
    {
      label: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-4xl" /> },
        { name: "CSS3", icon: <FaCss3 className="text-4xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
        { name: "React", icon: <SiReact className="text-4xl" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-4xl" /> },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="text-4xl" />,
        },
        { name: "Redux Toolkit", icon: <SiRedux className="text-4xl" /> },
        { name: "React Query", icon: <SiReactquery className="text-4xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" /> },
        { name: "SASS", icon: <SiSass className="text-4xl" /> },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Python", icon: <SiPython className="text-4xl" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-4xl" /> },
        { name: "Django & DRF", icon: <SiDjango className="text-4xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-4xl" /> },
        { name: "Express.js", icon: <SiExpress className="text-4xl" /> },
        { name: "SQLAlchemy", icon: <SiSqlalchemy className="text-4xl" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl" /> },
        { name: "Redis", icon: <SiRedis className="text-4xl" /> },
        { name: "Celery", icon: <SiCelery className="text-4xl" /> },
        { name: "Prisma", icon: <SiPrisma className="text-4xl" /> },
        {
          name: "JWT & OAuth2",
          icon: <SiJsonwebtokens className="text-4xl" />,
        },
      ],
    },
    {
      label: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", icon: <SiGit className="text-4xl" /> },
        { name: "Docker", icon: <SiDocker className="text-4xl" /> },
        { name: "AWS", icon: <SiAmazonwebservices className="text-4xl" /> },
        { name: "Jest", icon: <SiJest className="text-4xl" /> },
        { name: "pytest", icon: <SiPytest className="text-4xl" /> },
      ],
    },
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
            <TabsTrigger value="experience" className="gap-2">
              <FiBriefcase className="text-xl" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <FiBookOpen className="text-xl" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="gap-2">
              <FiCode className="text-xl" />
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="gap-2">
              <FiUser className="text-xl" />
              <span>About me</span>
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full pb-6">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[430px] pr-2">
                  <ul className="relative flex flex-col gap-0 border-l border-white/10 ml-3">
                    {experience.items.map((item, index) => (
                      <li key={index} className="relative pl-8 pb-10 last:pb-0">
                        {/* Timeline dot */}
                        <span className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full border-2 border-accent bg-[#1c1c22] flex items-center justify-center">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                        </span>
                        {/* Duration badge */}
                        <span className="inline-block text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-0.5 mb-2">
                          {item.duration}
                        </span>
                        {/* Role */}
                        <h4 className="text-lg font-semibold leading-snug text-white">
                          {item.position}
                        </h4>
                        {/* Company · Location */}
                        <p className="text-sm text-white/50 mt-0.5">
                          {item.company} &mdash; {item.location}
                        </p>
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
                <div className="flex flex-col gap-5">
                  {education.items.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-[#232329] rounded-2xl px-8 py-7 overflow-hidden group"
                    >
                      {/* Accent bar on the left */}
                      <span className="absolute left-0 top-0 h-full w-1 bg-accent rounded-l-2xl" />

                      {/* Degree badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <FiAward className="text-accent text-base shrink-0" />
                        <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                          {item.degree}
                        </span>
                      </div>

                      {/* Institution name */}
                      <h4 className="text-xl font-bold text-white leading-snug mb-4">
                        {item.institution}
                      </h4>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/50">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="text-accent/70 text-sm" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="text-accent/70 text-sm" />
                          Akure, Ondo State, Nigeria
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px] pr-2">
                  <div className="flex flex-col gap-8">
                    {skills.categories.map((category) => (
                      <div key={category.label} className="flex flex-col gap-4">
                        {/* Category label */}
                        <div className="flex items-center gap-3">
                          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                            {category.label}
                          </span>
                          <div className="flex-1 h-px bg-white/10" />
                        </div>
                        {/* Skill icons */}
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                          {category.items.map((skill, index) => (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent className="z-[9999]">
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold mb-3">{about.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                    {about.decription}
                  </p>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <FiUser />,
                      label: "Name",
                      value: "Olumide Ilesanmi",
                    },
                    { icon: <FiPhone />, label: "Phone", value: "09169265887" },
                    {
                      icon: <FiClock />,
                      label: "Experience",
                      value: "4+ years",
                    },
                    {
                      icon: <FiFlag />,
                      label: "Nationality",
                      value: "Nigerian",
                    },
                    {
                      icon: <FiBriefcase />,
                      label: "Freelance",
                      value: "Available",
                    },
                    {
                      icon: <FiMail />,
                      label: "Email",
                      value: "Olumideilesanmi10@gmail.com",
                    },
                    { icon: <FiGlobe />, label: "Languages", value: "English" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 group hover:border hover:border-accent/30 border border-transparent transition-all duration-300"
                    >
                      <div className="text-accent text-lg shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-white/40 text-xs uppercase tracking-widest mb-0.5">
                          {item.label}
                        </span>
                        <span className="text-white text-sm font-medium truncate">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
