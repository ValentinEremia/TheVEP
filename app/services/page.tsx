"use client";
import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Container from "@/components/Container";
import DownloadCvBtn from "@/components/DownloadCvBtn";

type Props = {};

export default function ServicesPage({}: Props) {
  // return (
  //   <Container>
  //     <div className="h-[88svh] ">

  //     <div className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
  //       <PageTitle>Services</PageTitle>
  //     </div>

  //     <div className=" h-full flex items-center justify-center">
  //       <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
  //           Under Construction <br />
  //         <div className="h-4" />
  //         <span className="text-5xl" role="img" aria-label="roadwork sign">
  //           🚧
  //         </span>
  //       </h1>
  //     </div></div>
  //   </Container>
  // );

  // ---------------- //
  return (
    <Container>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Services</PageTitle>
      </div>

      <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          UI/UX Design.
        </h2>
        <p className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          Turning your ideas into captivating visual experiences. With expertise
          in UI/UX design using Figma, I handle every aspect of the user
          interface to ensure intuitive navigation and a delightful user
          experience.
        </p>
        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Services offered:
        </h2>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <ul className="list-disc   ml-6">
            <li className="mt-2">UI/UX Design in Figma.</li>
            <li className="mt-2">Prototyping in Figma.</li>
            <li className="mt-2">Photo Editing.</li>
            <li className="mt-2">Full ownership of the artwork.</li>
            <li className="mt-2">Creative and eye-catching design.</li>
          </ul>
        </div>
        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          Web Development.
        </h2>
        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
          Making your website shine and function flawlessly. From bug fixing to
          complete website redesign, I provide web development services that
          meet all your needs.
        </p>
        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Services offered:
        </h2>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <ul className="list-disc   ml-6">
            <li className="mt-2">Bug fixing.</li>
            <li className="mt-2">Responsive design.</li>
            <li className="mt-2">Complete website redesign.</li>
            <li className="mt-2">Progressive Web Application development.</li>
            <li className="mt-2">FREE deployment to your server.</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
      <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
        How I Can Help.
      </h2>
      <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
        <p className="py-2">
          Whether you're looking for a complete design overhaul or need
          technical improvements, I'm here to provide personalized solutions.
          With a full focus on your needs, I guarantee superior quality results.
        </p>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
            My Process.
          </h2>

          <ul className="list-disc   ml-6">
            <li className="mt-2 list-decimal">
              <strong>Detailed Consultation:</strong> I understand exactly what
              you want and establish project goals.
            </li>
            <li className="mt-2 list-decimal">
              <strong>Design and Development:</strong> I take action, creating
              captivating designs and implementing necessary functionalities.
            </li>
            <li className="mt-2 list-decimal">
              <strong>Iteration and Feedback:</strong> I welcome your feedback
              and make adjustments to ensure the final result meets
              expectations.
            </li>
            <li className="mt-2 list-decimal">
              <strong>Implementation and Support:</strong> I deliver the final
              product and provide ongoing support to ensure smooth operation.
            </li>
          </ul>
        </div>

        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Connect with Me.
        </h2>
        <p className="py-2">
          Ready to start a collaboration? I'm here to make your project shine.{" "}
          <br />{" "}
          <CustomLink
            className="text-violet-700 dark:text-violet-500"
            href="/contact"
          >
            Contact me
          </CustomLink>{" "}
          {"  "} to discuss your needs and kickstart the creative process!
        </p>
      </div></div>
    </Container>
  );
}
