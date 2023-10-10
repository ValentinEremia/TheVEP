"use client"
import React from 'react'
import { useRouter } from "next/navigation";

function ArrowLeftIcon(props: React.ComponentProps<"svg">): JSX.Element {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }



function BackButton() {
    const router = useRouter();
  return (
     
    <button
    type="button"
    aria-label="Go back"
    onClick={() => router.back()}
    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20  lg:-left-5 lg:mb-0  xl:left-0 xl:mt-0"
  >
    <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
  </button>
  )
}

export default BackButton