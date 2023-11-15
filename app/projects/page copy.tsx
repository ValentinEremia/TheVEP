// import PageTitle from "@/components/PageTitle";
// import ProjectCard from "@/components/ProjectCard";
// import { items } from "../../data/projectsData";
// import Container from "@/components/Container";
  

// const ProjectsPage = () => {
//   return (
//     <Container>
       
//       <div className=" z-10 pt-6 pb-8 space-y-2 md:space-y-5">
//         <PageTitle>Projects</PageTitle>
//       </div>
//       <div className="z-10" > 
//         <h2 className=" z-10 pb-5 text-xl font-extrabold  tracking-tight text-gray-900 dark:text-gray-300 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
//           HTML, CSS, JavaScript, React.Js, Framer Motion, TailwindCSS, Next.Js, Flutter, Firebase, Saniti.io
//         </h2>
//         <p className="z-10 text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
//           Some of my web projects. They were developed to practice the knowledge
//           gained so far in different web technologies, unfortunately they were
//           all case studies.
//         </p>
//       </div>
      
//       <div className="z-10 container py-8 md:py-12">
     
//         <div className="flex flex-wrap -m-4">
//           {items &&
//             items
//               .sort((a, b) => {
//                 if (new Date(a.id) > new Date(b.id)) {
//                   return -1;
//                 }
//                 return 1;
//               })
//               .map((item) => (
//                 <ProjectCard link={item.demo} key={item.title} {...item} />
//               ))}
//         </div> 
//       </div>
       
      
//     </Container>
//   );
// };
// export default ProjectsPage;
