 
import BlogPostCard from "@/components/BlogPostCard";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
 import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";


function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <Container>
       
    <div className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
      <PageTitle>Blog</PageTitle>
    </div>
 
    <div className="container py-8 md:py-12">
      <div className="flex flex-wrap -m-4"
      
      >
        {posts.map((post, idx) => (
        <BlogPostCard image={ post.image  }  link={post.url} key={idx} {...post} />
      ))}
      </div> 
    </div>
  </Container>
  );
}

export default BlogPage;


 

 
  