import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Container from "./Container";
import PageTitle from "./PageTitle";

function PostNotFound() {
  return (
    <div className="w-full   flex justify-center flex-col">
      <Container>
        <div className="w-full h-[45vh] flex  flex-col  items-center justify-center ">
          <PageTitle>Blog post not found!</PageTitle>
          <Link href="/blog">
            <div className="py-1 px-4 mt-10 text-sm w-fit transition-colors duration-200 text-white dark:text-black bg-gray-800 dark:bg-gray-100 border rounded-lg shadow-md  flex items-center">
              <BsArrowLeftShort className="text-3xl mr-1" /> Go to Blogs
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default PostNotFound;

// export default function PageNotFound() {
//   return (

//      <div className="flex items-center justify-center h-screen">
// <Container>

//       <section className=" flex flex-col gap-7  ">
//       <h1  className="font-bold mx-auto mb-10  text-5xl md:text-7xl uppercase dark:text-white/60" >404!</h1>
//         <h1 className="font-bold   text-3xl md:text-5xl uppercase dark:text-white">
//           Stay calm and don't freak out!!
//         </h1>
//         <p className="z-10 text-lg leading-7 text-gray-700 dark:text-gray-300 xl:text-xl mb-7">
//           Looks like you've found the doorway to the great nothing. You didn't
//           break the internet, but I can't find what you are looking for. Please
//           visit my <b>Homepage</b> to get where you need to go.
//         </p>

//         <Link href="/blog">
//              <div className="py-1 px-4 mt-10 text-sm w-fit transition-colors duration-200 text-white dark:text-black bg-gray-800 dark:bg-gray-100 border rounded-lg shadow-md  flex items-center">
//                <BsArrowLeftShort className="text-3xl mr-1" /> Go to Blogs
//              </div>
//             </Link>
//       </section>
//     </Container></div>
//   );
