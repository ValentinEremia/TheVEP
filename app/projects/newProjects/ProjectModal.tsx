import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed top-0 left-0 right-0 z-[1000000] h-screen py-[4.8rem] px-[1.2rem] bg-black/25 backdrop-blur-md overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="bg-none border-none cursor-pointer absolute top-[1.2rem] right-[1.2rem] text-2xl">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] h-fit rounded-[1.2rem] overflow-hidden dark:bg-gray-800 bg-gray-100 shadow-xl cursor-default"
      >
        <img
          className="w-full m-0 rounded-none"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="sm:p-[2.4rem] p-5">
          <h4 className="text-4xl font-bold">{title}</h4>
          <div className="flex flex-wrap gap-[1.2rem] text-lg font-medium text-primary-400 mt-[0.3rem] mx-0 mb-[2.4rem]">
            {tech.join(" - ")}
          </div>

          <div
            className="flex flex-col gap-[1.2rem] text-base text-gray-600 dark:text-gray-200
          "
          >
            {modalContent}
          </div>

          <div className="mt-[2.4rem]">
            <p className="font-bold text-2xl mb-[0.8rem]">
              Project Links<span className="text-primary-400">.</span>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-[1.2rem] gap-[.5rem]">
              {code == "" ? (
                ""
              ) : (
                <Link
                  target="_blank"
                  rel="nofollow"
                  className="flex   items-center  gap-[0.4rem] text-lg text-primary-400 hover:underline"
                  href={code}
                >
                  <AiFillGithub /> source code
                </Link>
              )}

              <Link
                target="_blank"
                rel="nofollow"
                className="flex   items-center  gap-[0.4rem] text-lg text-primary-400 hover:underline"
                href={projectLink}
              >
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
