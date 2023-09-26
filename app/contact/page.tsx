"use client";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import SubmitBtn from "@/components/SubmitBtn";
import { sendEmail } from "@/actions/sendEmail";
import {toast} from "react-hot-toast";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <Container>
      <div className=" z-10 pt-6 pb-8  ">
        <PageTitle>Contact</PageTitle>
      </div>

      <p className="z-10 text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Please contact me directly at{" "}
    
        <a
              href={`mailto:valentineremia@yahoo.com`}
              className="underline font-medium leading-6 text-violet-500 hover:text-violet-900 dark:hover:text-violet-300 transition-color duration-500 "
              aria-label={`Go to Contact Page`}
              title={`Contact me`}
            >
              valentineremia@yahoo.com {" "}
            </a>
         or through this form.
      </p>

      <form
        className="mb-14 flex flex-col dark:text-black"
        action={async (formData:FormData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 border-[1px] rounded-lg border-zinc-300  dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="  h-52 my-4 rounded-lg border-[1px]  border-zinc-300  p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </Container>
  );
}


 
// https://youtu.be/sUKptmUVIBM?t=19780
// https://youtu.be/sUKptmUVIBM?t=19221   5:20:21