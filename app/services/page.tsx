
import CustomLink from "@/components/CustomLink";
import PageTitle from "@/components/PageTitle";
import React from "react";
import Container from "@/components/Container";
import siteMetadata from "@/data/siteMetadata";


export const metadata = {
  title: siteMetadata.servicesMeta.title,
  description:siteMetadata.servicesMeta.description,
};

type Props = {};

export default function ServicesPage({}: Props) {
  
  return (
    <Container>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Services</PageTitle>
      </div>

      <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          Web Design.
        </h2>
        <p className="indent-10 pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          Do you need a website that represents your business or passion in the
          best possible way? I offer you personalized web design solutions, that
          match your vision and needs. Whether you want a simple, elegant and
          functional website, or a complex, interactive and creative one, i can
          help you achieve it.
        </p>
        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Services offered:
        </h2>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <ul className="list-disc   ml-6">
            <li className="mt-2">UI/UX Design in Figma</li>
            <li className="mt-2">Prototyping in Figma</li>
            <li className="mt-2">Photo Editing</li>
            <li className="mt-2">Full ownership of the artwork</li>
            <li className="mt-2">Creative and eye-catching design</li>
          </ul>
        </div>
        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          Web Development.
        </h2>
        <p className=" indent-10 z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
          A website is not just a facade, but also a machinery that needs to
          work smoothly. I offer you quality web development services, that
          ensure the performance, security and scalability of your website. <br />I
          use the latest technologies and standards to create responsive, fast
          and easy to maintain websites.
        </p>
        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Services offered:
        </h2>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <ul className="list-disc   ml-6">
            <li className="mt-2">Bug fixing</li>
            <li className="mt-2">Responsive design</li>
            <li className="mt-2">Complete website redesign</li>
            <li className="mt-2">Progressive Web Application development</li>
            <li className="mt-2">FREE deployment to your server</li>
          </ul>
        </div>

        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          Mobile Applications.
        </h2>
        <p className="indent-10 z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
          Do you want to expand your online presence and reach more customers on
          mobile devices? <br />
           I offer you mobile or cross-platform application
          development services, using Flutter and Dart. <br />Flutter is a modern and
          flexible framework, that allows creating beautiful, fast and native
          applications for Android, iOS and web. <br /> Dart is a powerful and
          expressive programming language, that facilitates writing clean and
          efficient code. 
        </p>
        <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
          Services offered:
        </h2>

        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <ul className="list-disc   ml-6">
            <li className="mt-2">Native App Development</li>
            <li className="mt-2">Cross-Platform App Development</li>
            <li className="mt-2">App Testing and Quality Assurance</li>
            <li className="mt-2">App Deployment and Maintenance</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
        <h2 className="pb-4 text-3xl font-extrabold  tracking-tight text-gray-800 dark:text-gray-200   sm:leading-7 md:text-4xl md:leading-9">
          How I Can Help.
        </h2>
        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
          <p className="indent-10 py-2">
            Whether you're looking for a complete design overhaul or need
            technical improvements, I'm here to provide personalized solutions.
            With a full focus on your needs, I guarantee superior quality
            results.
          </p>

          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <h2 className="pb-3 text-xl font-bold  tracking-tight text-gray-800 dark:text-gray-200  sm:leading-7 md:text-2xl md:leading-9">
              My Process.
            </h2>

            <ul className="list-disc   ml-6">
              <li className="mt-2 list-decimal">
                <strong>Detailed Consultation:</strong> I understand exactly
                what you want and establish project goals.
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
          <p className=" py-2">
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
        </div>
      </div>
    </Container>
  );
}
