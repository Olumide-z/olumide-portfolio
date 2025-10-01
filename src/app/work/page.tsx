"use client"

import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
{
  num: '01',
  category: 'Frontend',
  title: 'Global Plug Services',
  description:
    'A UK-based company specializing in NIN, visas, ETC, and passport applications. We built their customer-facing website to simplify the application process and showcase their services.',
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, {name: 'TypeScript'}, { name: 'Redux Toolkit' }, 
  ],
  image: '/images/gps.png',
  live: 'https://www.globalplugservices.com/',
  github: 'https://github.com/global-plug-services/gps-webapp'
},
{
  num: '02',
  category: 'Frontend',
  title: 'Global Plug Services CRM',
  description:
    'A custom CRM solution for managing client applications. Features include application tracking, pricing and discount management, and appointment scheduling for NIN services.',
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, {name: 'TypeScript'}, { name: 'Redux Toolkit' }
  ],
  image: '/images/gps2.png',
  live: 'https://crm.globalplugservices.com',
  github: 'https://github.com/global-plug-services/admin'
},

{
  num: '03',
  category: 'Frontend',
  title: 'TheGoldScarf Web App',
  description:
    'A UK-based platform connecting African fashion brands with customers in Nigeria and beyond. The web app enables seamless browsing and purchasing of authentic fashion pieces.',
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, {name: 'TypeScript'}, {name: 'CSS'}, { name: 'Redux Toolkit' }
  ],
  image: '/images/gold.png',
  live: 'https://www.thegoldscarf.com/',
  github: 'https://github.com/thegoldscarf/user-webapp'
},
{
  num: '04',
  category: 'Frontend',
  title: "TheGoldScarf Brand's Dashboard",
  description:
    'A dedicated dashboard for partner brands to manage their business. Features include product uploads, order management, a wallet system, and tools to track sales performance.',
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, {name: 'TypeScript'}, { name: 'Redux Toolkit' }
  ],
  image: '/images/brand.png',
  live: 'https://brand.thegoldscarf.com/',
  github: 'https://github.com/thegoldscarf/brand-dashboard'
},

{
  num: '05',
  category: 'Frontend',
  title: "ScrumSage Web App",
  description:
    "An AI-powered companion for managing scrum activities, tracking team progress, and generating insightful weekly summaries to boost productivity.",
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, {name: 'TypeScript'}, { name: 'Redux Toolkit' }
  ],
  image: '/images/scrum.png',
  live: 'https://www.globalplugservices.com/',
  github: 'https://github.com/Scrum-Sage/web-app'
},
{
  num: '06',
  category: 'Frontend',
  title: "WorkWave HR",
  description:
    "A comprehensive HR platform that helps companies manage employees with ease — including leave tracking, attendance, payroll, compensation, and more.",
  stack: [
    { name: 'React.Js' }, { name: 'CSS' }, { name: 'Redux' }, { name: 'Ant-Design'}
  ],
  image: '/images/work.png',
  live: 'https://workwavehr.net/',
  github: 'https://gitlab.com/enterprisessl-group/workwavehr-frontend'
},
{
  num: '07',
  category: 'Frontend',
  title: "WorkWave Super Admin",
  description:
    "An advanced admin dashboard for Soft Solution Limited to manage WorkWave HR subscriptions, assign customer modules, and monitor key business statistics.",
  stack: [
    { name: 'React.Js' }, { name: 'CSS' }, { name: 'Redux' }, { name: 'Ant-Design'}
  ],
  image: '',
  live: '',
  github: 'https://gitlab.com/enterprisessl-group/workwavehr-adim'
},
{
  num: '08',
  category: 'Frontend',
  title: "Happy Homes",
  description:
    "A modern dating app designed for Nigeria, making it easy for users to find love, friendships, and meaningful connections through a seamless experience.",
  stack: [
    { name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Redux Toolkit' }
  ],
  image: '/images/happy.png',
  live: 'https://happyhomecreators.com/',
  github: 'https://gitlab.com/enterprisessl-group/happy-homes-frontend'
},

]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div initial={{opacity: 0}} 
    animate={{ opacity: 1, transition: { duration: 0.4, delay: 1.5, ease: 'easeIn'} }} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto z-[100]">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[40px] font-bold leading-14 text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} 
              </h2>
              {/* desc */}
              <p className="text-white/60">{project.description}</p>
              {/* stock */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-base text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex gap-4 items-center mt-2">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] lg:h-[350px] relative group flex justify-center items-center bg-pink-50/20 rounded-2xl ">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-[1000]"></div>
                    {/* image */}
                    <div className="relative w-full h-full lg:h-[350px]">
                      <Image src={item.image} alt={item.title} fill className="object-cover rounded-2xl"/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[3rem] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[44px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
