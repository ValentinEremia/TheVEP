"use client";
import { Project } from "./Project";
import {projectsDescription} from "@/data/projectsData";

export const Projects = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
        {/* {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })} */}
        {projectsDescription &&
          projectsDescription
            .sort((a, b) => {
              if (new Date(a.id) > new Date(b.id)) {
                return -1;
              }
              return 1;
            })
            .map((projectsDescription) => (
              // <ProjectCard link={item.demo} key={item.title} {...item} />
              <Project
                key={projectsDescription.id}
                title={projectsDescription.title}
                description={projectsDescription.description}
                tech={projectsDescription.tech}
                projectLink={projectsDescription.projectLink}
                code={projectsDescription.code}
                modalContent={projectsDescription.modalContent}
                imgSrc={projectsDescription.imgSrc}
              />
            ))}

            
      </div>
    </section>
  );
};


