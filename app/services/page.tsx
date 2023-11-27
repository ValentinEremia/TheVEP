import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import React from "react";

type Props = {};

export default function ServicesPage({}: Props) {
  return (
    <Container>
      <div className="h-[88svh] ">

      
      <div className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Services</PageTitle>
      </div>

      <div className=" h-full flex items-center justify-center">
        <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Under Construction <br />
          <div className="h-4" />
          <span className="text-5xl" role="img" aria-label="roadwork sign">
            🚧
          </span>
        </h1>
      </div></div>
    </Container>
  );
}
