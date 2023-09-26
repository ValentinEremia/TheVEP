import siteMetadata from "@/data/siteMetadata";
import React from "react";
import CustomLink from "./CustomLink";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

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
  // {
  //   icon: (
  //     <MdMarkEmailUnread
  //       className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
	// 	transition-all duration-500 ease-out hover:scale-110"
  //     />
  //   ),

  //   url: "mailto:valentineremia@yahoo.com",
  // },
  
];

export default function Footer() {
  return (
    <footer> 
      <div className="flex flex-col items-center pb-8">
        <nav className="flex  flex-col  justify-between w-full max-w-3xl  gap-14  py-8  mt-4 xl:max-w-3xl  ">
          {/* ----- N a v i g a t i o n ----- */}
          {/* <div className=" sm:hidden flex  flex-col space-y-4  items-center max-w-fit m-auto  ">
            <p className="text-md uppercase  font-bold">N a v i g a t i o n </p>

            <div className="flex gap-5">
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/"
              >
                Home
              </CustomLink>
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/blog"
              >
                Blog
              </CustomLink>
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/projects"
              >
                Projects
              </CustomLink>
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/contact"
              >
                Contact
              </CustomLink>
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/services"
              >
                Services
              </CustomLink>
              <CustomLink
                className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                href="/about"
              >
                About
              </CustomLink>
            </div>
          </div> */}

          {/* ----- Social ----- */}

          <div className="flex flex-col space-y-4  items-center max-w-fit m-auto  ">
            <p className="text-md uppercase  font-bold">S o c i a l</p>

            <div className="flex gap-4">
              {social_links &&
                social_links.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer
										transition-all duration-500 ease-out hover:scale-125 hover:text-primary-500"
                    >
                      {link.icon}
                    </a>
                  );
                })}
            </div>
          </div>
        </nav>
        <div className="flex justify-between w-full  mt-10">
          <div className="w-full truncate">
            <div className="flex justify-center  mb-1 space-x-2 text-sm text-gray-500 dark:text-gray-400  ">
              <div>Copyright</div>
              <div>{`© ${new Date().getFullYear()}`}</div>
              <CustomLink
                className="text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-300"
                href="/"
              >
                {siteMetadata.author}
              </CustomLink>
            </div>
          </div>
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </footer>
  );
}
