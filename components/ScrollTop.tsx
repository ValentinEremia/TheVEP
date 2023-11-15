"use client";

 
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";


const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className={`fixed bottom-[.5rem] md:bottom-6 right-8 z-30 flex-col gap-3 ${
        show ? " flex" : " hidden"
      }`}
    >
     

      <button
      type="button"
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/10 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/20 dark:hover:border-zinc-700 dark:hover:ring-white/20  lg:-left-5 lg:mb-0  xl:left-0 xl:mt-0"
      >
         
    < IconArrowUp className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </button>
    </div>
  );
};

export default ScrollTop;
