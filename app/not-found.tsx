import Container from "@/components/Container";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export default function NotFound() {
  return (
    <main className=" relative h-screen">
      
      <Container>
        <section className=" flex flex-col md:gap-7 gap-5  ">
          <p className="font-extrabold md:text-8xl text-7xl  mt-16  animate-bounce text-center">
            404
          </p>
          <h1 className="font-bold   text-3xl md:text-5xl uppercase dark:text-white">
            Stay calm and don't freak out!!
          </h1>
          <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
            Looks like you've found the doorway to the great nothing. You didn't
            break the internet, but I can't find what you are looking for.
            Please visit my <b className="text-black dark:text-white"> Homepage </b> to get where you need to go.
          </p>

          <Link href="/" passHref>
            <div className="py-1 px-4 mt-10 text-sm w-fit transition-colors duration-200 text-white dark:text-black bg-gray-800 dark:bg-gray-100 border rounded-lg shadow-md  flex items-center">
              <BsArrowLeftShort className="text-3xl mr-1" /> Take me there!
            </div>
          </Link>
        </section>
      </Container>
    </main>
  );
}
