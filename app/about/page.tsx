"use client";
import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import Container from "@/components/Container";

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
                    
										transition-all duration-500 ease-out hover:scale-125 hover:text-primary-500"
                  >
                    {link.icon}
                  </a>
                );
              })}
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
            About this site
          </h2>
          <p className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            Welcome to my home on the internet. This site works as a portfolio,
            a place to share code and thoughts.
          </p>
          <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
            Credit
          </h2>
          <p className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            I learn how to build this site from the community:
          </p>
          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <ul className="list-disc   ml-6">
              <li className="mt-2">
                <CustomLink
                  className="text-violet-700 dark:text-violet-500"
                  href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
                >
                 Timothy's Next.js and Tailwind CSS template
                </CustomLink>
                : Template starter where I bootstrapped the project.
              </li>
              <li className="mt-2">
                <CustomLink
                  className="text-violet-700 dark:text-violet-500"
                  href="https://leerob.io/"
                >
                  Lee Robinson
                </CustomLink>
                : Guestbook, Spotify, and many other features.
              </li>
            </ul>
          </div>
          <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
            About me
          </h2>
          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <p className="py-2">
              Passionate, enthusiastic and curious in search of challenges and
              opportunities to help me develop technically, socially and
              culturally.
            </p>{" "}
            <p className="py-2">
              I studied at the Valahia University of Târgoviște, specializing in
              Electronic , with Master Degree specialization in Advanced
              Automation, Production and Industrial Informatics.
            </p>
            <p className="py-2">
              I am an orderly person at home and at work, as I plan all my tasks
              in advance. I like learning new things. I always take on my
              mistakes, trying to fix the mistake and not repeat it.
            </p>
          </div>
          <div className="mt-14">
            <p className="text-gray-300 dark:text-gray-700">
              Last updated at 12-03-2023
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
