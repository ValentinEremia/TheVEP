"use client"
import React from 'react'
import {motion , useScroll, useTransform } from "framer-motion";


function ProgressBar() {

    let {scrollYProgress}=useScroll();
  let progressBarWidth=useTransform(scrollYProgress, [0,1], ['0%', '100%']);

  return (
    <motion.div style={{width: progressBarWidth}} className="sticky z-40 md:top-[58px] top-[61px] left-0 h-[2px] bg-violet-700/80"/>
  )
}

export default ProgressBar