"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  FiLock,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiTerminal,
  FiServer,
  FiDatabase,
  FiCpu,
} from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type Project = {
  num: string;
  type: "frontend" | "backend";
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  liveLabel?: string;
  github: string;
  apiHighlights?: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "TASK";
    endpoint: string;
    tag: string;
    status: string;
  }[];
};

const projects: Project[] = [
  {
    num: "01",
    type: "backend",
    category: "Backend & Distributed Systems",
    title: "Food Delivery Backend API",
    description:
      "A production-grade REST API serving Customers, Vendors, and Riders on a food delivery platform. Features role-based JWT auth, order lifecycle state-machines with Paystack HMAC webhooks, atomic coupon transactions, Redis read-through caching, Celery async workers, and AWS S3 storage.",
    stack: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Celery" },
      { name: "Docker" },
      { name: "AWS S3" },
      { name: "Paystack" },
    ],
    image: "", // Custom interactive API terminal preview rendered automatically
    live: "https://food-delivery-backend-m7gu.onrender.com/docs",
    liveLabel: "Live API Docs",
    github: "https://github.com/Olumide-z/food-delivery-backend",
    apiHighlights: [
      {
        method: "POST",
        endpoint: "/api/v1/auth/login",
        tag: "RBAC & OTP]",
        status: "200 OK",
      },
      {
        method: "POST",
        endpoint: "/api/v1/cutomers/orders",
        tag: "Paystack Webhook, Flower Worker",
        status: "201 Created",
      },
      {
        method: "GET",
        endpoint: "/api/v1/customers/restaurants",
        tag: "Redis Read-Through",
        status: "304 Cached",
      },
      {
        method: "POST",
        endpoint: "/api/v1/riders/orders/{order_id}/accept",
        tag: "rider endpoints",
        status: "200 Accepted",
      },
    ],
  },
  {
    num: "02",
    type: "frontend",
    category: "Wedding Marketplace & Planning",
    title: "VowThread Wedding App",
    description:
      "A digital wedding planning marketplace built for couples to discover, match, and message wedding specialists across 1,000+ active vendors. Features Smart Planner budget-based vendor matching and real-time vendor chat.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/vow.png",
    live: "https://vowthread.com/",
    github: "https://github.com/thegoldscarf/vowthread-app",
  },
  {
    num: "03",
    type: "frontend",
    category: "Vendor SaaS & Business Suite",
    title: "VowThread Vendor App",
    description:
      "An enterprise management dashboard for wedding service businesses supporting 1,000+ active vendors. Integrated the AI-powered Smart Receptionist interface, reducing response wait times by 90%, alongside tools for services, booking availability, and transactions.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/vow-vendor.png",
    live: "https://vowthread.com/vendors",
    github: "https://github.com/thegoldscarf/vowthread-vendor",
  },
  {
    num: "04",
    type: "frontend",
    category: "Building Intelligence & ESG",
    title: "NXLO Technology",
    description:
      "Marketing website built for a UAE-based building intelligence and ESG software company. Implemented full English and Arabic localization with right-to-left (RTL) layout support, and integrated Sanity CMS so the team could publish blog posts and update site content without developer involvement.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Sanity CMS" },
      { name: "i18n & RTL" },
    ],
    image: "/images/nxlo.png",
    live: "https://www.nxlotech.ae/",
    github: "",
  },
  {
    num: "05",
    type: "frontend",
    category: "Fashion & E-Commerce",
    title: "TheGoldScarf Marketplace",
    description:
      "A cross-border fashion platform connecting African designers and apparel brands with global customers across the UK, Nigeria, and beyond with smooth catalog browsing and checkout.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/gold.png",
    live: "https://www.thegoldscarf.com/",
    github: "https://github.com/thegoldscarf/user-webapp",
  },
  {
    num: "06",
    type: "frontend",
    category: "AI Productivity Tool",
    title: "ScrumSage Web App",
    description:
      "An intelligent companion for agile teams that streamlines sprint ceremonies, tracks velocity, and generates automated weekly insights and standup summaries to keep teams aligned.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/scrum.png",
    live: "https://www.thescrumsage.com",
    github: "https://github.com/Scrum-Sage/web-app",
  },
  {
    num: "07",
    type: "frontend",
    category: "HR Enterprise Platform",
    title: "WorkWave HR",
    description:
      "A comprehensive multi-tenant HR management platform adopted by 8 companies and 400+ employees. Covers automated onboarding, leave tracking, biometric attendance, compensation, and evaluations.",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "Ant Design" },
    ],
    image: "/images/work.png",
    live: "https://workwavehr.net/",
    github: "https://gitlab.com/enterprisessl-group/workwavehr-frontend",
  },
  {
    num: "08",
    type: "frontend",
    category: "Super Admin Platform",
    title: "WorkWave Super Admin",
    description:
      "Centralized management suite for Soft Solutions Limited to provision client company workspaces, configure module access, monitor subscription billing, and view platform-wide metrics.",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "REST APIs" },
    ],
    image: "/images/work.png",
    live: "",
    github: "https://gitlab.com/enterprisessl-group/workwavehr-adim",
  },
  {
    num: "09",
    type: "frontend",
    category: "Portfolio & Creative Tech",
    title: "Olumide Ilesanmi Portfolio",
    description:
      "A modern developer portfolio engineered with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Features interactive project case studies, dynamic category filtering, responsive timeline resumes, and fluid page animations.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/images/port.png",
    live: "/",
    liveLabel: "Current Site",
    github: "https://github.com/Olumide-z/olumide-portfolio",
  },
  {
    num: "10",
    type: "frontend",
    category: "Identity & Visa Services",
    title: "Global Plug Services",
    description:
      "A customer-facing web platform for NIN, visas, ETC, and passport applications in the UK. Designed and built to simplify the application process, provide transparent requirements, and onboard applicants with ease.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/gps.png",
    live: "https://www.globalplugservices.com/",
    github: "https://github.com/global-plug-services/gps-webapp",
  },
  {
    num: "11",
    type: "frontend",
    category: "CRM & Enterprise SaaS",
    title: "Global Plug Services CRM",
    description:
      "A custom operations CRM built for managing end-to-end client applications. Features live application tracking, pricing and discount rule management, and automated appointment scheduling for NIN services.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/gps2.png",
    live: "https://crm.globalplugservices.com",
    github: "https://github.com/global-plug-services/admin",
  },
  {
    num: "12",
    type: "frontend",
    category: "Social & Dating App",
    title: "Happy Homes",
    description:
      "A modern social discovery and relationship platform tailored for the Nigerian market, providing verified profiles, preferences matching, and private messaging.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/images/happy.png",
    live: "https://happyhomecreators.com/",
    github: "https://gitlab.com/enterprisessl-group/happy-homes-frontend",
  },
];

const Work = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  const project = filteredProjects[currentIndex] || filteredProjects[0];

  const handleFilterChange = (selected: "all" | "frontend" | "backend") => {
    setFilter(selected);
    setCurrentIndex(0);
    swiperInstance?.slideTo(0);
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const getDomain = (url: string) => {
    try {
      if (url.startsWith("/")) return "olumide-ilesanmi (live portfolio)";
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");
    } catch {
      return "internal.system";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:py-14"
    >
      <div className="container mx-auto">
        {/* Section title, filter tabs & counter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl xl:text-5xl font-bold">
              Featured <span className="text-accent">Projects</span>
            </h1>
            <p className="text-white/50 text-sm mt-1">
              Production web applications, scalable backend APIs, and enterprise
              systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl">
              {[
                { id: "all", label: "All Works" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend & API" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    filter === tab.id
                      ? "bg-accent text-primary shadow-[0_0_12px_rgba(0,255,153,0.35)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Counter badge */}
            <div className="flex items-center gap-2 font-mono text-sm px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/80">
              <strong className="text-accent">
                {(currentIndex + 1).toString().padStart(2, "0")}
              </strong>{" "}
              / {filteredProjects.length.toString().padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Main showcase grid */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-center">
          {/* Left Column: Project Details */}
          <div className="w-full xl:w-[48%] flex flex-col justify-between order-2 xl:order-none min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${currentIndex}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col gap-5"
              >
                {/* Number, Type & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline select-none">
                    {(currentIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-primary bg-accent px-2.5 py-1 rounded-md">
                      {project.type}
                    </span>
                    <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl xl:text-4xl font-bold text-white tracking-tight leading-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-sm xl:text-base">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 font-medium hover:border-accent/30 hover:text-accent transition-colors duration-200"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-2" />

                {/* Action Buttons & Slide Controls */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {/* Live preview / API docs link */}
                    {project.live ? (
                      <Link href={project.live} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="h-12 px-5 rounded-xl bg-accent text-primary font-semibold text-sm flex items-center gap-2 hover:bg-accent-hover transition-all duration-300 shadow-[0_0_15px_rgba(0,255,153,0.3)]">
                              <span>{project.liveLabel || "Live Preview"}</span>
                              <BsArrowUpRight className="text-base" />
                            </TooltipTrigger>
                            <TooltipContent className="z-[9999]">
                              <p>
                                {project.liveLabel
                                  ? "Open interactive documentation"
                                  : "Visit live site"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    ) : (
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm flex items-center gap-2 cursor-not-allowed">
                            <FiLock className="text-sm" />
                            <span>Internal System</span>
                          </TooltipTrigger>
                          <TooltipContent className="z-[9999]">
                            <p>Private corporate application</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {/* GitHub repo */}
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-12 h-12 rounded-xl bg-[#232329] border border-white/10 flex items-center justify-center text-white/80 hover:text-accent hover:border-accent/40 transition-all duration-300">
                              <BsGithub className="text-xl" />
                            </TooltipTrigger>
                            <TooltipContent className="z-[9999]">
                              <p>View source repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>

                  {/* Slider Prev / Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => swiperInstance?.slidePrev()}
                      disabled={currentIndex === 0}
                      className="w-10 h-10 rounded-xl bg-[#232329] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-primary hover:border-accent transition-all duration-200"
                      aria-label="Previous project"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>
                    <button
                      onClick={() => swiperInstance?.slideNext()}
                      disabled={currentIndex === filteredProjects.length - 1}
                      className="w-10 h-10 rounded-xl bg-[#232329] border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:text-primary hover:border-accent transition-all duration-200"
                      aria-label="Next project"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Browser Frame Slider */}
          <div className="w-full xl:w-[52%]">
            <div className="relative bg-[#232329] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1c1c22] border-b border-white/10">
                {/* Window control dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/50 max-w-[240px] sm:max-w-[320px] truncate">
                  <span className="text-accent text-[10px]">https://</span>
                  <span className="truncate">
                    {project.live
                      ? getDomain(project.live)
                      : "workwave.internal"}
                  </span>
                </div>

                {/* Live pulse dot */}
                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="hidden sm:inline text-[11px]">
                    {project.type === "backend" ? "API Live" : "Preview"}
                  </span>
                </div>
              </div>

              {/* Swiper Slider */}
              <Swiper
                key={filter} // Re-mount swiper when switching filters for perfect slide calculations
                spaceBetween={30}
                slidesPerView={1}
                className="w-full h-[300px] sm:h-[380px] xl:h-[430px]"
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
              >
                {filteredProjects.map((item, index) => (
                  <SwiperSlide key={index} className="w-full h-full relative">
                    <div className="w-full h-full relative group overflow-hidden bg-[#131317] flex items-center justify-center">
                      {item.image ? (
                        <div className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center">
                          <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              priority={index === 0}
                              className="object-contain object-center drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                          </div>
                        </div>
                      ) : item.type === "backend" ? (
                        /* Dedicated Backend / API Interactive Architecture Terminal Mockup */
                        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#121217] via-[#16161d] to-[#121216] select-none">
                          {/* Top row */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2 text-accent text-sm font-mono font-semibold">
                              <FiTerminal className="text-base" />
                              <span>FastAPI v0.111 / OpenAPI 3.1</span>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                              ● Swagger UI Ready
                            </span>
                          </div>

                          {/* Route highlight snippets */}
                          <div className="flex flex-col gap-2 my-2 font-mono text-xs">
                            {item.apiHighlights?.map((route, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-accent/30 transition-colors"
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <span
                                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                                      route.method === "POST"
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : route.method === "GET"
                                          ? "bg-blue-500/20 text-blue-400"
                                          : "bg-purple-500/20 text-purple-400"
                                    }`}
                                  >
                                    {route.method}
                                  </span>
                                  <span className="text-white/80 truncate">
                                    {route.endpoint}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="hidden sm:inline text-white/40 text-[11px]">
                                    {route.tag}
                                  </span>
                                  <span className="text-accent text-[11px]">
                                    {route.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Tech stack capabilities */}
                          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-[11px] text-white/50">
                            <span className="flex items-center gap-1">
                              <FiDatabase className="text-accent" /> PostgreSQL
                              + Redis
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <FiCpu className="text-accent" /> Celery + Flower
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <FiServer className="text-accent" /> Docker
                              Compose
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 p-8 text-center text-white/50">
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent text-2xl">
                            <FiLock />
                          </div>
                          <p className="font-semibold text-white">
                            Internal Enterprise Dashboard
                          </p>
                          <p className="text-xs text-white/40 max-w-xs">
                            Access restricted to authenticated enterprise
                            administrators
                          </p>
                        </div>
                      )}

                      {/* Hover action pill */}
                      {item.live && (
                        <Link
                          href={item.live}
                          target="_blank"
                          className="absolute bottom-5 right-5 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-white text-xs font-medium hover:border-accent hover:text-accent shadow-xl"
                        >
                          <span>
                            {item.type === "backend"
                              ? "Open Swagger Docs"
                              : "Open site"}
                          </span>
                          <FiExternalLink className="text-sm" />
                        </Link>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Quick slide jumper thumbnail dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => swiperInstance?.slideTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-accent"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Jump to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
