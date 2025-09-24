"use client";

import { AnimatePresence, motion, usePageInView } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import StairTransition from './StairTransition';

type Props = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: Props) => {
  
  const pathname = usePathname();
  const [showStairs, setShowStairs] = useState(false);

  useEffect(() => {
    setShowStairs(true);
    const timer = setTimeout(() => setShowStairs(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);


  return (
    <>
    {showStairs && <StairTransition />}
    <AnimatePresence>
      <div style={{ opacity: showStairs ? 0 : 1, transition: "opacity 0.2s" }}>
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition : { delay: 1, duration: 0.4, ease: "easeInOut"} }}
          className='h-screen w-screen fixed bg-primary top-0 printer-events-none'
        />
        {children}
      </div>
      
    </AnimatePresence>
    </>
  )
}

export default PageTransition
