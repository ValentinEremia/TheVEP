 
import { allPosts } from "@/.contentlayer/generated";
import PostCardPreview from "@/components/PostCardPreview";
import { Link } from "@react-email/components";
import { IconArrowRight } from "@tabler/icons-react";
import { Orb, OrbContainer } from "./Orb";

const posts = allPosts
  .sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0))
  .slice(0, 4);

function LatestPostHeroSection() {
  return (
    < div className=" max-w-2xl px-4 mb-8  sm:px-6 xl:max-w-3xl xl:px-0 flex flex-col gap-10 sm:gap-14 mx-auto">
    <div className="max-w-3xl space-y-4 ">
      <div className="my-4 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold">Latest blog posts</h2>

        <Link
          href="/blog"
          target="_parent"
          aria-label={`Go to Blog Page`}
          title={`All blog posts`}
          className="text-xl  dark:text-primary-500 hover:text-gray-900 group ml-8 transition-colors  text-primary-500  dark:hover:text-primary-300 duration-200"
        >
          View All{" "}
          <IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5 duration-200" />
        </Link>
      </div><OrbContainer>
				<Orb className="h-[25rem] w-[25rem]  right-0 bg-cyan-500/30 dark:bg-fuchsia-800/30" />
				<Orb className="h-[25rem] w-[25rem] -left-20  top-72 bg-lime-500/20 dark:bg-violet-600/30" />
			</OrbContainer>

      <div className=" mx-auto mb-4 flex flex-col md:grid grid-cols-1 gap-4 md:grid-cols-3 ">
        {posts.map((post, idx) => (
          <PostCardPreview
            link={post.url}
            image={post.image}
            key={idx}
            {...post}
          />
        ))}
        {/* {posts.map((post, idx) => (
                <BlogPostCard image={post.image} link={post.url} key={idx} {...post} />
            ))} */}
      </div>
      
    </div>
  </div>
  )
}

export default LatestPostHeroSection