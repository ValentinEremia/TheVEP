// import Link from "next/link";
// import { allPosts, Post } from "@/.contentlayer/generated";
// import { format, parseISO } from "date-fns";


// const PostCardPreview = (post: Post) => {
//     return (
    
    
    
//     <div className=" mb-4 max-w-md mx-auto">
    
    
//         <Link href={post.url} legacyBehavior >
    
//           <div className="border border-slate-800 p-4 rounded-md   shadow-sm hover:shadow-md transition-all  hover:scale-[1.005] ">
//             <div className="article-card">
    
//               <h2 className=" text-lg text-primary-400 font-medium  mb-3">{post.title}</h2>
//               <p className="text-sm text-slate-400  mb-1">{format(parseISO(post.date), "d LLLL, yyyy")}</p>
    
//               <p className="text-slate-500  ">{post.summary}</p>
//             </div>
//           </div>
//         </Link>
//     </div>
//   );
// };

// export default PostCardPreview;


"use client"

import { format, parseISO } from "date-fns";
import {motion} from 'framer-motion'
 

import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

 

interface Props {
	title?: string
	image?: string  
	summary?: string
	link: string
  date:string
   
}


const PostCard = ({ link, image, title, summary,  date}: Props) => {
	 
	return (

  
<Link
			href={link}
			className="group relative h-60 overflow-hidden rounded-xl text-white md:first:col-span-2 only:col-span-full max-md:last:even:col-span-full md:h-80 md:last:[&:nth-child(3)]:col-span-full last:[&:nth-child(4)]:col-span-2 shadow-md"
		>
			
        
          <Image
          src={image||''}
          alt={title||'post cover-image'}
          fill={true}
          className="object-cover transition ease-in-out group-hover:scale-105"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
          
        />
        

        <div className="absolute h-min w-full bg-gradient-to-b from-black/70 via-black/70 via-80% p-4 group-first:via-black/70">
				<div className="text-base drop-shadow-sm">
					{/* {formattedDate} &bull; {readingTime} min read */}
          {format(parseISO(date), "LLLL d, yyyy")}
				</div>

        <h1 className="max-w-lg text-2xl font-bold drop-shadow-sm md:group-first:text-3xl">
					<Balancer>{title}</Balancer>
				</h1>
			</div>

      <div className="absolute bottom-4 left-4 rounded-lg bg-black/30 px-4 py-2 text-sm backdrop-blur transition hover:bg-black/50 md:text-base">
				Read post
			</div>
		</Link>

	);
}



export default PostCard;