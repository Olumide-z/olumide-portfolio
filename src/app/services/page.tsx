"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";
import { FiMonitor, FiServer } from "react-icons/fi";

const services = [
  {
    num: "01",
    icon: <FiMonitor className="text-3xl" />,
    title: "Frontend Development",
    description:
      "I build fast, responsive, and accessible interfaces — from marketing sites to complex, data-heavy dashboards. My work has shipped to production for platforms scaling to 1,000+ vendors and 400+ employees, so I care as much about performance and reliability as I do about pixel-perfect design.",
    stack: [
      { icon: <SiReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <SiVuedotjs />, label: "Vue.js" },
      { icon: <SiTailwindcss />, label: "Tailwind" },
    ],
  },
  {
    num: "02",
    icon: <FiServer className="text-3xl" />,
    title: "Backend Development",
    description:
      "I design and build secure, scalable APIs and backend services — handling auth, background tasks, caching, and database design. I work across the Python and Node.js ecosystems and integrate cleanly with frontend teams and third-party services.",
    stack: [
      { icon: <SiNodedotjs />, label: "Node.js" },
      { icon: <SiPython />, label: "Python" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <SiDjango />, label: "Django" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-4">
      <div className="container mx-auto z-[100]">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center xl:text-left"
        >
          <h1 className="md:text-[38px] text-3xl font-bold mb-3">
            My <span className="text-accent">Services</span>
          </h1>
          <p className="text-white/50 max-w-[800px] mx-auto xl:mx-0">
            End-to-end product development — from polished UI to robust backend
            systems.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="group relative bg-[#232329] rounded-2xl p-8 flex flex-col gap-6 overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-2xl" />

              {/* Top row: number + icon */}
              <div className="flex items-center justify-between">
                <span className="text-6xl font-extrabold text-white/5 group-hover:text-white/10 transition-all duration-300 leading-none select-none">
                  {service.num}
                </span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/50 leading-relaxed text-sm flex-1">
                {service.description}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {service.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    <span className="text-accent">{tech.icon}</span>
                    {tech.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
