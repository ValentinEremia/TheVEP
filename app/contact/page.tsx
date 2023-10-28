"use client";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import SubmitBtn from "@/components/SubmitBtn";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";
 

type Props = {};




export default function ContactPage({}: Props) {


  const formRef = useRef<HTMLFormElement | null>(null); // Declarați o referință către formular

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return; // Verificați dacă referința la formular există

    const formData = new FormData(formRef.current);

    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");

      // Resetați valorile câmpurilor input după trimitere cu succes
      if (formRef.current) formRef.current.reset();
    }
  };


  return (
    <Container>
      
     
        <div    className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
        {/* <div    className=" z-10 py-5 sm:pt-6 sm:pb-8 space-y-2 md:space-y-5"> */}
          <PageTitle>Contact</PageTitle>
        </div>
 <section className=" flex flex-col  justify-center">
        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
        The easiest way to get in touch with me is directly at my email address:{" "}
          <a
            href={`mailto:valentineremia@yahoo.com`}
            className="underline font-medium leading-6 text-violet-500 hover:text-violet-900 dark:hover:text-violet-300 transition-color duration-500 "
            aria-label={`Go to Contact Page`}
            title={`Contact me`}
          >
            valentineremia@yahoo.com{" "}
          </a>
          or by using the form below. I guarantee a response to all inquiries within 24 hours.
        </p>

        

        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
        If you're feeling a bit adventurous, here are some fun ways to reach out:
          <div className="pb-6 text-lg leading-7 text-gray-800 dark:text-gray-300 xl:text-xl">
            <ul className="list-disc   ml-6">
              <li className="mt-2">
              <b>Send me a carrier pigeon with a handwritten note.</b> Who knows, maybe my office is secretly a pigeon sanctuary, and your message will find a cozy home here!
              </li>
              <li className="mt-2"> 
              <b>Shoot a smoke signal into the sky with the message "Valentin, please contact me!"</b> It might sound like a scene from a wild west movie, but hey, if it works for Batman, it can work for us too!
              </li>
              <li className="mt-2"> 
             <b> Wear a sandwich board that reads "Looking for a programming project."</b> I promise I'll keep an eye out for anyone walking around with such a cool sign.
              </li>
            </ul>
          </div>
        </p>
 

        <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
        
        I look forward to hearing from you and embarking on our creative journey together! Let's make something awesome happen!
        </p> 

        <form
          className="mb-14 flex flex-col text-black dark:text-slate-200"
          ref={formRef} 
          onSubmit={handleSubmit}


          
        >
          <input
            className="h-14 px-4 border-[1px] bg-white/70 rounded-lg border-zinc-400 dark:border-zinc-700  dark:bg-slate-950/30 dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <input
            className="h-14 px-4 border-[1px] bg-white/70 rounded-lg border-zinc-400 dark:border-zinc-700   dark:bg-slate-950/30 dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none my-4"
            name="subject"
            type="text"
            required
            maxLength={500}
            placeholder="Subject"
          />
          <textarea
            className="  h-52 mb-5 rounded-lg bg-white/70 border-[1px] p-4 border-zinc-400 dark:border-zinc-700   dark:bg-slate-950/30 dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>

      
      </section>
    </Container>
  );
}

// https://youtu.be/sUKptmUVIBM?t=21181
// https://github.dev/ByteGrad/portfolio-website/blob/master/email/contact-form-email.tsx
// https://youtu.be/sUKptmUVIBM?t=19221   5:20:21
