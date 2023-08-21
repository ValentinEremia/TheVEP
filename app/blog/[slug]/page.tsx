
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import PostNotFound from "@/components/PostNotFound";
import MDXComponents from '@/utils/mdxComponets';
import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.summary };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );

  let MDXContent;

  if (!post) {
    return <PostNotFound />;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  return (
    <div className='  flex flex-col items-center justify-center '>

    <Container>


    
     <div className="my-3">
      
          <PageTitle >
         
            {post.title}
          </PageTitle>
        <br />
          <p className=" text-slate-500 ">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </p>
          <article>
            <MDXContent components={{ ...MDXComponents }} />
          </article>
        
      
    </div>
    </Container>
    <br/>
    </div>
  );
};

export default PostLayout;
