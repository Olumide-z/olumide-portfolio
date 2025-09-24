"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
     {
    num: "01",
    title: "Web Development",
    description:
      "I create modern, responsive, and high-performance user interfaces using the latest frontend technologies. Whether you need a landing page, business website, or complex web app, I deliver accessible and engaging solutions—both independently and as part of a team.",
  },
  // {
  //   num: "02",
  //   title: "Mobile Developement",
  //   description: "test test",
  //   href: "",
  // },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto z-[100]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services?.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex items-center justify-between">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                  {service.num}
                </div>
                <div className="w-[70px] h-[70px] cursor-pointer rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </div>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">{service.title}</h2>
              {/* desc */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
