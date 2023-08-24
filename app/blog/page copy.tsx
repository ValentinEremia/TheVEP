// import Container from "@/components/Container";

// import React from "react";

// type Props = {};

// export default function BlogPage({}: Props) {
//   return (
//     <Container>



//       <div className="h-screen flex items-center justify-center">
//     <h1 className="text-3xl text-center font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      
//       Blog Page <br /> Under Construction <br />
//       <div className="h-4" />
//         <span className="text-5xl" role="img" aria-label="roadwork sign">
//           🚧
//         </span>
//       </h1>
//     </div>
//     </Container>
//   );
// }


import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import PostCardPreview from "@/components/PostCardPreview";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

// function PostCard(post: Post) {
//   return (
//     <div className="card">
//       <h2>
//         <Link href={post.url} legacyBehavior>
//           {post.title}
//         </Link>
//       </h2>
//       <p className="text-slate-400">{post.summary}</p>
//     </div>
//   );
// }



function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
     
    <Container>
      <PageTitle>Latest Posts</PageTitle>
      
      <div className="my-3">
        {posts.map((post, idx) => (
          <PostCardPreview key={idx} {...post} />
        ))}
      </div>
    </Container>
      
  );
}

export default page;