import React from "react";
import PageTitle from "./PageTitle";
import Link from "next/link";
import VercelHeroText from "./VercelHeroText";
import Container from "./Container";

type Props = {};

const Hero = (props: Props) => {
  return ( 
    <Container> 
      <div className="flex flex-col items-center justify-around h-fit w-full ">
        <div className="flex items-center justify-center sm:h-[95vh] h-[65vh]">
          <VercelHeroText />
        </div>

        <div className="pb-10">
          <div className=" space-y-2 md:space-y-5">
            <PageTitle>
              Hey! I'm Valentin{" "}
              <span role="img" aria-label="waving hand" className="wave">
                👋
              </span>
            </PageTitle>
           
             
            <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">A passionate mobile and web app developer with one year of programming experience. I specialize in front-end and system design. Let's collaborate and bring your ideas to life! <br />
              <Link
                href={`/contact`}
                className="font-medium leading-6 text-violet-500 dark:hover:text-violet-300 transition-color duration-500 "
                aria-label={`Go to Contact Page`}
                title={`Contact me`}
              >
                Get in touch &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container> 
  );
};

export default Hero;
