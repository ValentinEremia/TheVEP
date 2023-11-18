import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "./Reveal";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      {/* <div className="p-3 project-card h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-400"> */}
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="px-4 sm:px-0  mx-auto z-10"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-gray-400/25 dark:bg-gray-700/30 relative rounded-[0.8rem] overflow-hidden cursor-pointer "
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-[-2.7rem] left-[50%] translate-x-[-50%] translate-y-[20%] transition-all duration-[0.25s] rounded-[0.4rem]"
          />
        </div>
        <div className="my-6 mx-0">
          <Reveal width="100%">
            <div className="flex items-center gap-[1.2rem]">
              <h4 className="font-bold text-2xl flex-shrink-0 max-w-[calc(100% - 150px)]">
                {title}
              </h4>
              <div className="w-full h-[1.5px] bg-gray-600/70 " />
              {code == "" ?'': (
                <Link
                  href={code}
                  target="_blank"
                  rel="nofollow"
                  className="opacity-50 transition-opacity duration-[0.25s] hover:opacity-80"
                >
                  <AiFillGithub size="1.5rem" />
                </Link>
              )}

              <Link
                href={projectLink}
                target="_blank"
                rel="nofollow"
                className="opacity-50 transition-opacity duration-[0.25s]  hover:opacity-80"
              >
                <AiOutlineExport size="1.5rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-[1.2rem] text-lg text-primary-400 my-[0.8rem] mx-0">
              {tech.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="font-normal text-base text-gray-600 dark:text-gray-300">
              {description}{" "}
              <span
                className="inline-block text-lg font-medium cursor-pointer text-primary-400 hover:underline "
                onClick={() => setIsOpen(true)}
              >
                Read more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
      {/* </div> */}
    </>
  );
};
