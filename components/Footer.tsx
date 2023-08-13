import siteMetadata from "@/data/siteMetadata";
import React from "react";
import CustomLink from "./CustomLink";
import ThemeSwitch from "./ThemeSwitch";

 

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center pb-8">
        <nav className="flex  flex-col  justify-between w-full max-w-2xl gap-4 py-8  mt-4 xl:max-w-3xl  sm:flex-row">

            {/* ----- Portfolio ----- */}
            <div className="flex flex-col space-y-4  items-center max-w-fit m-auto  ">
            <p className="text-sm font-bold">Portfolio</p>

            <div className="grid grid-cols-2 sm:grid-cols-3  gap-x-16 gap-y-5 ">
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
          </div>


          {/* ----- Social ----- */}
          
          <div className="flex flex-col space-y-4  items-center max-w-fit m-auto  ">
            <p className="text-sm font-bold">Social</p>
             
            <div className="grid grid-cols-2 gap-x-16 gap-y-5">
              
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                  href={siteMetadata.twitter}
                >
                  Twitter
                </CustomLink>
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                  href={siteMetadata.github}
                >
                  GitHub
                </CustomLink>
             
              
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                  href={siteMetadata.instagram}
                >
                  Instagram
                </CustomLink>
                <CustomLink
                  className="text-sm hover:text-primary-600 dark:hover:text-primary-300"
                  href={siteMetadata.facebook}
                >
                  Facebook
                </CustomLink>
             
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
