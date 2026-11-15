"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion, type Variants } from "framer-motion";

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// Stagger container
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const role = useTypewriter([
    "Frontend Engineer",
    "Backend Developer",
    "Full-Stack Engineer",
    "UI Craftsman",
  ]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* ── Text block ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center xl:text-left order-2 xl:order-none z-50 max-w-[540px]"
          >
            {/* Role typewriter */}
            <motion.div
              variants={item}
              className="flex items-center justify-center xl:justify-start gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/60 tracking-widest uppercase">
                {role || "\u00A0"}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={item} className="h1 mb-4">
              Hello, I&apos;m{" "}
              <span className="text-accent inline-flex gap-[0.25em] flex-wrap justify-center xl:justify-start">
                {"Olumide Ilesanmi".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + i * 0.2,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="max-w-[500px] mb-8 text-white/60 leading-relaxed"
            >
              I build polished, user-focused interfaces on the frontend and
              secure, scalable APIs on the backend — turning ideas into
              full-stack products with React, Next.js, TypeScript, Python,
              Nodejs, Django and FastAPI.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={item}
              className="flex flex-col xl:flex-row items-center gap-6 z-50"
            >
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1VKtEyj320KgpmJ7AP48OQVSnw_pZXWFm1d0vuPZD-vo/export?format=pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 z-[1000] cursor-pointer group relative overflow-hidden hover:text-accent"
                >
                  {/* shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 items-center"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Photo ── */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      <Stats />
    </section>
  );
};

export default Home;
