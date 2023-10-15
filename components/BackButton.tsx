"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { IconArrowLeft   } from '@tabler/icons-react';

 



function BackButton() {
    const router = useRouter();
  return (
  
    <button
    type="button"
    aria-label="Go back"
    onClick={() => router.back()}
    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20  lg:-left-5 lg:mb-0  xl:left-0 xl:mt-0"
  >
   
    < IconArrowLeft className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
  </button>
     
  )
}

export default BackButton