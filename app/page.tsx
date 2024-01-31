import Hero from "@/components/Hero";
import LatestPostHeroSection from "@/components/LatestPostHeroSection";

export default function HomePage() {
  return (
    <>
      <section className="  flex flex-col items-center justify-center ">
        <Hero />
      </section>
      <LatestPostHeroSection />
    </>
  );
}
