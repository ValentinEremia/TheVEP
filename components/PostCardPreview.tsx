import Link from "next/link";
import { allPosts, Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";

const PostCardPreview = (post: Post) => {
  return (

    

<div className=" mb-4 max-w-md mx-auto">


    <Link href={post.url} legacyBehavior >
     
      <div className="border border-slate-800 p-4 rounded-md   shadow-sm hover:shadow-md transition-all  hover:scale-[1.005] ">
        <div className="article-card">

          <h2 className=" text-lg text-primary-400 font-medium  mb-3">{post.title}</h2>
          <p className="text-sm text-slate-400  mb-1">{format(parseISO(post.date), "d LLLL, yyyy")}</p>

          <p className="text-slate-500  ">{post.summary}</p>
        </div>
      </div>
    </Link>
</div>
  );
};

export default PostCardPreview;
