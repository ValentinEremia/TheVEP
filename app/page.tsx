 
import Hero from "@/components/Hero";
import LatestPostHeroSection from "@/components/LatestPostHeroSection";

 

export default function HomePage() {
  return (
    <>
      <section className="  flex flex-col items-center justify-center ">
        <Hero />
      </section>
      <LatestPostHeroSection />
      {/* <Particles
				className="absolute inset-0 -z-10 h-full   animate-fade-in text-white dark:!text-fuchsia-600  "
				quantity={70}
			/> */}
    </>
  );
}
