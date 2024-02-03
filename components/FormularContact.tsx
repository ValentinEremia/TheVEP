 "use client"
 
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-hot-toast";
import SubmitBtn from "@/components/SubmitBtn";
import { useRef,  } from "react";



// https://youtu.be/sUKptmUVIBM?t=21181
// https://github.dev/ByteGrad/portfolio-website/blob/master/email/contact-form-email.tsx
// https://youtu.be/sUKptmUVIBM?t=19221   5:20:21



export const FormularContact = () => {
    const formRef = useRef<HTMLFormElement | null>(null); // Declarați o referință către formular

 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit;
      if (!formRef.current) return; // Verificați dacă referința la formular există
  
      const formData = new FormData(formRef.current);
  
      const { data, error } = await sendEmail(formData);
  
      if (error) {
        toast.error(error);
        return;
      } else {
        toast.success("Email sent successfully!");
  
        // Resetați valorile câmpurilor input după trimitere cu succes
        if (formRef.current) formRef.current.reset();
      }
    };
  
  return (
    <>
      <form
          className="mb-14 flex flex-col text-black dark:text-slate-200"
          ref={formRef}
          // onSubmit={handleSubmit}
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
            // Resetați valorile câmpurilor input după trimitere cu succes
            if (formRef.current) formRef.current.reset();
          }}
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
    </>
  )

}
