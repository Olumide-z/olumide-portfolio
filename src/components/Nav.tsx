"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <nav
      className="relative flex items-center gap-2"
      onMouseLeave={() => setHoveredPath(null)}
    >
      {links.map((link) => {
        const isActive = link.path === pathname;
        const isHovered = hoveredPath === link.path;

        return (
          <Link
            key={link.path}
            href={link.path}
            onMouseEnter={() => setHoveredPath(link.path)}
            className={`relative px-4 py-2 capitalize font-medium transition-colors duration-300 ${
              isActive ? "text-accent" : "text-white/80 hover:text-white"
            }`}
          >
            {/* Sliding hover pill */}
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </AnimatePresence>

            {/* Active sliding indicator underline */}
            {isActive && (
              <motion.span
                layoutId="nav-active-line"
                className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full shadow-[0_0_12px_var(--color-accent)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
