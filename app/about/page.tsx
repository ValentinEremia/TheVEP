"use client";
import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Image from "next/image"; 
import siteMetadata from "@/data/siteMetadata";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Container from "@/components/Container";
import DownloadCvBtn from "@/components/DownloadCvBtn";
  
 

type Props = {};

const social_links = [
  {
    icon: (
      <FaGithub
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125 "
      />
    ),
    url: "https://github.com/ValentinEremia",
  },
  {
    icon: (
      <FaTwitter
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
      />
    ),
    url: "https://twitter.com/Valenti3112",
  },
  {
    icon: (
      <FaInstagram
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
      />
    ),
    url: "https://www.instagram.com/licanianul",
  },
  {
    icon: (
      <FaYoutube
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
      />
    ),
    url: "https://www.youtube.com/user/licanianul",
  },
  {
    icon: (
      <FaFacebook
        className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer 
		transition-all duration-500 ease-out hover:scale-125"
      />
    ),

    url: "https://www.facebook.com/valentin.eremia.5095",
  },
];

export default function AboutPage({}: Props) {
  return (
    <Container>
 
			 
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center xl:items-start pt-8 xl:sticky xl:top-12">
          <Image
            width={192}
            height={192}
            src={siteMetadata.image}
            alt="poza profil"
            priority={true}
            className="object-cover rounded-full xl:rounded-lg"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            {siteMetadata.author}
          </h3>
          <div className="text-gray-500 dark:text-gray-400">
            {siteMetadata.mySpecialization}
          </div>
          <div className="flex pt-6 space-x-3">
            {social_links &&
              social_links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer
                    
										transition-all duration-300 ease-out hover:scale-125 hover:text-primary-500"
                  >
                    {link.icon}
                  </a>
                );
              })}
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
            This site.
          </h2>
          <p className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          Welcome to my digital domain, a space where I showcase my work, share my code, and voice my thoughts.
          </p>
          <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
            Credit
          </h2>
          <p className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          This site is a product of my passion for learning and creating. I drew inspiration from the community:
          </p>
          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <ul className="list-disc   ml-6">
              <li className="mt-2">
              incorporating elements from : {' '} 
                <CustomLink
                  className="text-violet-700 dark:text-violet-500"
                  href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                >
                 Timothy's Next.js and Tailwind CSS template
                </CustomLink>
                {" "} 
              </li>
              <li className="mt-2"> 
                <CustomLink
                  className="text-violet-700 dark:text-violet-500"
                  href="https://leerob.io/"
                >
                  Lee Robinson's
                </CustomLink>{" "}
                : Spotify integration, and my own unique perspective.
              </li>
              
            </ul>
          </div>
          <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
            Me.
          </h2>
          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <p className="py-2">
            I am a curious and enthusiastic individual, constantly seeking challenges and opportunities to grow. 
            </p>{" "}
            <p className="py-2">
            My academic background in Electronic Engineering, with a specialization in Advanced Automation, Production, and Industrial Informatics, has equipped me with the skills and knowledge to tackle complex problems and create innovative solutions.
            </p>
            <p className="py-2">
            At home and at work, I am an orderly person who plans carefully and executes with precision. I am always eager to learn new things and take on new challenges. I view my mistakes as valuable learning experiences, always striving to improve and evolve.
            </p>
            <p className="py-2">
            I invite you to explore my digital domain and discover the world of my work, thoughts, and creations.
            </p>
            <DownloadCvBtn/>
          </div>
           
          <div className="mt-14">
            <p className="text-gray-400 dark:text-gray-500">
              Last updated at 04-11-2023
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
