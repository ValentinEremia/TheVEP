import React from "react";
import PageTitle from "./PageTitle";
import Link from "next/link";
import VercelHeroText from "./VercelHeroText";
import Container from "./Container";
import { IconArrowRight } from "@tabler/icons-react";


type Props = {};

const Hero = (props: Props) => {
  return ( 
    <Container> 
   
      <div className="flex flex-col items-center justify-around  w-full md:h-[118vh] sm:h-[100svh] h-[94vh] lg:max-h-full">
   
      {/* <div className="flex flex-col items-center justify-around  w-full md:h-[118vh] sm:h-[90vh] h-[94vh] lg:max-h-full"> */}
        <div className="flex items-center  justify-center ">
          <VercelHeroText />
        </div>

        <div className="lg:mt-20 pb-10">
          <div className=" space-y-3 md:space-y-5 lg:space-y-8">
            <PageTitle>
              Hey! I'm Valentin{" "}
              <span role="img" aria-label="waving hand" className="wave">
                👋
              </span>
            </PageTitle>
           
             
            <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">A mobile and web developer with a strong focus in front-end and system design. <br />Let's collaborate and bring your ideas to life! {' '}
              

              <Link
               href={`/contact`}
              // target="_parent"
              aria-label={`Go to Contact Page`}
              title={`Contact me`}
              className="font-medium leading-6 dark:text-primary-500 hover:text-gray-900 group  transition-colors no-underline text-primary-500  dark:hover:text-primary-300 duration-200"
            >
              Get in touch{" "}
              <IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5 duration-200" />
            </Link>
            </p>
          </div>
        </div>
      </div>
    </Container> 
  );
};

export default Hero;
