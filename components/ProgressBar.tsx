"use client"
import React from 'react'
import {motion , useScroll, useTransform } from "framer-motion";


function ProgressBar() {

    let {scrollYProgress}=useScroll();
  let progressBarWidth=useTransform(scrollYProgress, [0,1], ['0%', '100%']);

  return (
    <motion.div style={{width: progressBarWidth}} className="sticky z-40 sm:top-[60px] md:top-[59px]   top-[63px] left-0 h-[2px] bg-primary-600"/>
  )
}

export default ProgressBar