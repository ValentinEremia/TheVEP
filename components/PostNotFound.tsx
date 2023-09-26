import React from "react";

import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import PageTitle from "./PageTitle";

function PostNotFound() {
  return (
    <div className="w-full h-[60vh] flex justify-center flex-col">
       
        
        <div className="w-full h-fit flex  flex-col  items-center ">
          <PageTitle>Blog post not found!</PageTitle>
          <Link href="/blog">
            <div className="py-1 px-4 mt-10 text-sm w-fit transition-colors duration-200 text-white dark:text-black bg-gray-800 dark:bg-gray-100 border rounded-lg shadow-md  flex items-center">
              <BsArrowLeftShort className="text-3xl mr-1" /> Go to Blogs
            </div>
          </Link>
        </div>
       
    </div>
  );
}

export default PostNotFound;