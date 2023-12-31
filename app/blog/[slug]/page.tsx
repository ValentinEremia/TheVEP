import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import PostNotFound from "@/components/PostNotFound";
import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import ProgressBar from "@/components/ProgressBar";
import BackButton from "@/components/BackButton";
import CodeSnippet from "@/components/CodeSnippet";

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
    <>
      <ProgressBar />

      <div className="  flex flex-col items-center justify-center ">
        <Container>
          <div className="my-3">
            <BackButton />

            <div className="md:mt-10 text-center">
              <PageTitle>{post.title}</PageTitle>
            </div>

            <br />
            <p className=" text-slate-500 ">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </p>
            {/* <img src={post.image ||''} alt={post.title} /> */}

            <div className="max-w-2xl mx-auto my-6 sm:my-8 rounded-md">
              <Image
                src={post.image || ""}
                alt={post.title}
                height={200}
                width={900}
                 
                priority
              />
            </div>
            {/* <article className=" prose  w-[90vw] md:w-auto  mx-auto">
            <MDXContent components={{CodeSnippet} }/>
          </article> */}
            <article className=" prose xl:prose-xl md:prose-lg sm:prose-base dark:prose-dark dark:prose-neutral w-[90vw] md:w-auto  mx-auto">
              {/* <MDXContent  /> */}
              <MDXContent components={{ CodeSnippet }} />
            </article>
          </div>
        </Container>
        <br />
      </div>
    </>
  );
};

export default PostLayout;
