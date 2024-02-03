"use client";

import headerNavLinks from "@/data/headerNavLinks";
import Link from "./CustomLink";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import ThemeSwitch from "./ThemeSwitch";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

// import siteMetadata from '@/data/siteMetadata'
// import MyLogo from '@/public/static/logo.svg'

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
}

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false);
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return [menuShow, onMenuToggle] as const;
}

const social_links = [
  {
    icon: (
      <FaGithub
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-300 ease-out hover:scale-125"
      />
    ),
    url: "https://github.com/ValentinEremia",
  },
  {
    icon: (
      <FaTwitter
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-300 ease-out hover:scale-125"
      />
    ),
    url: "https://twitter.com/Valenti3112",
  },
  {
    icon: (
      <FaInstagram
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-300 ease-out hover:scale-125"
      />
    ),
    url: "https://www.instagram.com/licanianul",
  },
  {
    icon: (
      <FaYoutube
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-300 ease-out hover:scale-125"
      />
    ),
    url: "https://www.youtube.com/user/licanianul",
  },
  {
    icon: (
      <FaFacebook
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-300 ease-out hover:scale-125"
      />
    ),

    url: "https://www.facebook.com/valentin.eremia.5095",
  },
  {
    icon: (
      <MdMarkEmailUnread
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-110"
      />
    ),

    url: "mailto:valentineremia@yahoo.com",
  },
];

export default function Header() {
  const [menuShow, onMenuToggle] = useToggleMenu();
  const isTop = useIsScrollTop();

  return (
    <>
      <header
        className={`w-full sticky z-20 top-0 flex items-center justify-between py-4  ${
          isTop
            ? "border-none"
            : "border-b border-gray-200 dark:border-gray-800"
        } bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
      >
        <nav className="flex items-center justify-between w-full max-w-2xl px-4 mx-auto sm:px-6 sm:py-1 md:max-w-3xl xl:max-w-4xl xl:px-0 ">
          <div className="flex items-center text-[0.97rem]  leading-5">
            <div className="hidden sm:block sm:space-x-8">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white  "
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center sm:hidden">
              <MenuButton onClick={onMenuToggle} isOpened={menuShow} />
            </div>
          </div>
          <ThemeSwitch />
          {/* <div className="hidden  sm:flex"><ThemeSwitch /></div> */}
        </nav>
      </header>

      {/* Mobile side menu */}
      <div
        className={`sm:hidden fixed w-full h-screen right-0 bg-white dark:bg-black z-50 transform ease-in-out duration-500 ${
          menuShow ? "translate-x-0" : " -translate-x-full"
        } backdrop-filter bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
      >
        <nav className="h-screen mt-5 space-y-8">
          <div className="flex flex-col divide-y divide-zinc-500/40 p-6   text-2xl font-semibold dark:divide-zinc-600/50">
            {headerNavLinks.map((link) => (
              <Link
                href={link.href}
                title={link.title}
                key={link.title}
                className="text-2xl font-semibold leading-8 tracking-wide text-gray-700 dark:hover:text-gray-300 hover:text-black dark:text-white"
                onClick={onMenuToggle}
              >
                <div className="p-4">{link.title}</div>
              </Link>
            ))}
          </div>

          

          <div className="fixed bottom-36 flex w-full flex-wrap sm:flex-row justify-center min-[620px]:gap-12 gap-8 ">
            
            {social_links &&
              social_links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="h-7 w-7 sm:h-8 sm:w-8  cursor-pointer text-gray-900 dark:text-gray-200 dark:hover:text-primary-500  
										transition-all duration-500 ease-out hover:scale-125 hover:text-primary-500"
                  >
                    {link.icon}
                  </a>
                );
              })}
          </div>
          {/* <div className="w-full flex items-center justify-center"><ThemeSwitch /><p className="ml-2">- Theme Switch</p></div> */}
        </nav>
      </div>
    </>
  );
}
