"use client"
 
import {motion} from 'framer-motion'
import CustomLink from "./CustomLink"
import Image from 'next/image'

 
 

interface Props {
	title?: string
	image?: string  
	summary?: string
	link: string
 
}

 

const BlogPostCard = ({ link, image, title, summary }: Props) => {
	 
	return (
		 
        <CustomLink
      href={link}
      aria-label={`Link to ${title}`}
      className="z-10 p-3 lg:p-4 mx-auto  sm:w-1/2 max-w-[34rem]"
      showIcon={false}
    >
      <motion.div className=" post-card h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-400"
      initial="initial"
      viewport={{once:true}}
      whileInView="animate"
      variants={PreviewAnimation}
      >
        {/* <img
          alt={title||''}
          src={image||''}
          className="object-cover object-center   lg:h-48 md:h-36 "
          width={544}
          height={306}
           
        /> */}
        <Image
          alt={title||''}
          src={image||''}
          className="object-cover object-center border-b border-gray-800 border-solid lg:h-48 md:h-36 "
          width={544}
          height={306}
        />
        <div className="p-4">
          <h4 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-black dark:text-white">
            {title}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="ml-1 h-4 w-4 inline-block fill-current"
            >
              <g data-name="Layer 2">
                <g data-name="external-link">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                  <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                </g>
              </g>
            </svg> */}
          </h4>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{summary}</p>
          
        </div>
      </motion.div>
    </CustomLink>
	)
}

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
  
};

export default BlogPostCard
