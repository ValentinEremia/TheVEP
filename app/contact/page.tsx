import Container from "@/components/Container";
import { FormularContact } from "@/components/FormularContact";
import PageTitle from "@/components/PageTitle";
import siteMetadata from "@/data/siteMetadata";



export const metadata = {
  title: siteMetadata.contactMeta.title,
  description:siteMetadata.contactMeta.description,

};

type Props={}

export default function ContactPage({}: Props) {
 
  return (
    <Container>
      <div className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
        {/* <div    className=" z-10 py-5 sm:pt-6 sm:pb-8 space-y-2 md:space-y-5"> */}
        <PageTitle>Contact</PageTitle>
      </div>
      <section className=" flex flex-col  justify-center">
        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
          The easiest way to get in touch with me is directly at my email
          address:{" "}
          <a
            href={`mailto:valentineremia@yahoo.com`}
            className="underline font-medium leading-6 text-violet-500 hover:text-violet-900 dark:hover:text-violet-300 transition-color duration-500 "
            aria-label={`Go to Contact Page`}
            title={`Contact me`}
          >
            valentineremia@yahoo.com{" "}
          </a>
          or by using the form below. I guarantee a response to all inquiries
          within 24 hours.
        </p>

        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl ">
          If you're feeling a bit adventurous, here are some fun ways to reach
          out:
        </p>
        <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl mb-7">
          <ul className="list-disc   ml-6">
            <li className="mt-2">
              <b>Send me a carrier pigeon with a handwritten note.</b> Who
              knows, maybe my office is secretly a pigeon sanctuary, and your
              message will find a cozy home here!
            </li>
            <li className="mt-2">
              <b>
                Shoot a smoke signal into the sky with the message "Valentin,
                please contact me!"
              </b>{" "}
              It might sound like a scene from a wild west movie, but hey, if it
              works for Batman, it can work for us too!
            </li>
            <li className="mt-2">
              <b>
                {" "}
                Wear a signboard that says, "Looking for a programming project."
              </b>{" "}
              I promise I'll keep an eye out for anyone walking around with such
              a cool sign.
            </li>
          </ul>
        </div>

        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
          I look forward to hearing from you and embarking on our creative
          journey together! Let's make something awesome happen!
        </p>

        <FormularContact/>

      </section>
    </Container>
  );
}

