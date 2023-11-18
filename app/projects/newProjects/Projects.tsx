"use client";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
        {/* {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })} */}
        {projects &&
          projects
            .sort((a, b) => {
              if (new Date(a.id) > new Date(b.id)) {
                return -1;
              }
              return 1;
            })
            .map((project) => (
              // <ProjectCard link={item.demo} key={item.title} {...item} />
              <Project key={project.title} {...project} />
            ))}
      </div>
    </section>
  );
};

const projects = [
  {
    id: 1,
    title: "Link In Bio",
    imgSrc: "./static/assets/portfolio1.jpg",
    code: "https://github.com/ValentinEremia/links",
    projectLink: "https://valentineremia.github.io/links/",
    tech: ["HTML", "Scss", "Java Script"],
    description:
      "Link In Bio - A Linktree-like web page version made with HTML, CSS and JavaScript",
    modalContent: (
      <>
        <p>
          Is a real-time coaching app for students learning to paint. This app
          is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "ToDo App",
    imgSrc: "./static/assets/portfolio2.jpg",
    code: "https://github.com/ValentinEremia/tdv2",
    projectLink: "https://valentineremia.github.io/tdv2/",
    tech: ["HTML", "CSS", "Java Script"],
    description:
      "ToDo PWA. - A  task list application built in HTML, CSS and JavaScript. And it's a progressive web application (PWA).",

    modalContent: (
      <>
        <p>
          Is a social community for painters to connect with others in their
          community.
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Postgres & cached in Redis.
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Meal Generator",
    imgSrc: "./static/assets/portfolio3.jpg",
    code: "https://github.com/ValentinEremia/retete2",
    projectLink: "https://valentineremia.github.io/retete2/",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      ' A PWA recipe app that uses the "themealdb.com" API. It is made with HTML, CSS, JavaScript and a CSS Skeleton library. ',
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "M.R.Photo v.1",
    imgSrc: "./static/assets/portfolio4.jpg",
    code: "https://github.com/ValentinEremia/mrph",
    projectLink: "https://valentineremia.github.io/mrph/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " A red color website design idea, for a photographer portfolio. Build with HTML, CSS and JavaScript.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Resume App",
    imgSrc: "./static/assets/portfolio5.jpg",
    code: "https://github.com/ValentinEremia/rcv",
    projectLink: "https://valentineremia.github.io/rcv/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " My resume with dark mode and PDF file download button. Is a responsive PWA application.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Cris Paul",
    imgSrc: "./static/assets/portfolio6.jpg",
    code: "",
    projectLink: "https://cris-paul-photo.netlify.app",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " A website portfolio for a photographer. Build with HTML, CSS, and JavaScript Library's.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Mihai Radu v.2",
    imgSrc: "./static/assets/portfolio7.jpg",
    code: "https://github.com/ValentinEremia/rfpwa",
    projectLink: "https://valentineremia.github.io/rfpwa/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " A website portfolio for a photographer. Build with HTML, CSS, and JavaScript Library's.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    imgSrc: "./static/assets/portfolio8.jpg",
    code: "",
    projectLink: "https://x-and-o-flutter.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Check out my Flutter Tic Tac Toe app, crafted to elevate my Dart and Flutter coding skills. Challenge friends, enjoy the classic game.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "SeaSide",
    imgSrc: "./static/assets/portfolio9.jpg",
    code: "",
    projectLink: "https://sea-side-nny.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " A simple, responsive travel landing page is built with HTML, CSS and JS",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 10,
    title: "NNY-Food",
    imgSrc: "./static/assets/portfolio10.jpg",
    code: "https://github.com/ValentinEremia/NNY-Food",
    projectLink: "https://nnyfoodpwa.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " It is an example of an e-commerce web application. It is my first e-commerce web application. It is built using ReactJS, Framer Motion, TailwindCSS and Firebase.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Green Village",
    imgSrc: "./static/assets/portfolio11.jpg",
    code: "",
    projectLink: "https://greenvillagepwa.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " Is a case study website. It is built in React Js, just for fun and practice. It is also a Progressive Web Application.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "My Portfolio v.1",
    imgSrc: "./static/assets/portfolio12.jpg",
    code: "",
    projectLink: "https://ve-react.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " My portfolio website with theme mode and PDF file download button of my CV. Is a responsive PWA application. It was built with React Js.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 13,
    title: "3D Iphone 14",
    imgSrc: "./static/assets/portfolio13.jpg",
    code: "",
    projectLink: "https://14pro.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " Apple iPhone 14 landing page. Is a responsive PWA application. It was built using ThreeJs + ReactJS",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 14,
    title: "InstaClone",
    imgSrc: "./static/assets/portfolio14.jpg",
    code: "",
    projectLink: "https://insta-clone-flutter.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " A project built with Flutter, it is  a mobile and web app. It uses Google Firebase as a backend.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 15,
    title: "Travel website",
    imgSrc: "./static/assets/portfolio15.jpg",
    code: "",
    projectLink: "https://valentineremia.github.io/trvl/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " TRVL. Is a travel responsive website and PWA application. It was built using ReactJS",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 16,
    title: "The Void Tattoo",
    imgSrc: "./static/assets/portfolio16.jpg",
    code: "",
    projectLink: "https://valentineremia.github.io/tatoo/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      " The Void Tattoo . Is a responsive landing page and PWA. It was built using ReactJS",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 17,
    title: "Linear.app",
    imgSrc: "./static/assets/portfolio17.jpg",
    code: "",
    projectLink: "https://nextjs-linear-clone.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Rebuilding Linear.app homepage with Next.js and Tailwind. Is a responsive landing page.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 18,
    title: "Memory Card",
    imgSrc: "./static/assets/portfolio18.jpg",
    code: "",
    projectLink: "https://cards-memo.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "An engaging vanilla JavaScript memory game with a captivating card flip animation, now available as a Progressive Web App (PWA).",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 19,
    title: "NNYFLIX",
    imgSrc: "./static/assets/portfolio19.jpg",
    code: "",
    projectLink: "https://nnyflix.netlify.app",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Explore movies effortlessly with my React.js app, powered by the TMDB database. Discover, sort, and search with ease. Dive into synopses and trailers for a complete movie experience.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 20,
    title: "Jane Esper",
    imgSrc: "./static/assets/portfolio20.jpg",
    code: "",
    projectLink: "https://je-react-portfolio.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "This is a single-page, responsive React portfolio website, built with React, Tailwind CSS, Framer Motion, and React Hook Form for seamless interactivity and dynamic form submissions.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 21,
    title: "Rosa",
    imgSrc: "./static/assets/portfolio21.jpg",
    code: "",
    projectLink: "https://pensiunea-rosa.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Pensiunea Rosa, a small, family-owned business in Romania, built a responsive PWA website with GSAP, HTML, CSS, and JavaScript for accommodation and traditional Romanian cuisine.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 22,
    title: "Figma Portfolio",
    imgSrc: "./static/assets/portfolio22.jpg",
    code: "",
    projectLink: "https://ve-figma-portfolio.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Ve-Figma Portfolio is a personal portfolio website built with GSAP, HTML, CSS, and JavaScript. The site is designed to showcase the work of a web developer and designer named Ve.",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {"😀"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    id: 23,
    title: "V.E. – Portfolio",
    imgSrc: "./static/assets/portfolio23.jpg",
    code: "",
    projectLink: "https://ve-portfolio-wp.netlify.app/",
    tech: ["WordPress","HTML", "CSS", "JS"],
    description:
      "Ve Portfolio is a WordPress website that showcases the work of a web developer and designer named Ve. The site is responsive, easy to use, and visually appealing.",
    modalContent: (
      <>
        <p>Ve Portfolio is a WordPress website that showcases the work of a web developer and designer named Ve.</p>
        <p>WordPress, known for its flexibility and ease of use, allows user to effortlessly manage and update the content on the site.</p>
        <p>
        But what makes <b>Ve Portfolio</b> truly unique is the meticulous process of converting it from a dynamic WordPress site to a static page, meticulously coded in HTML, CSS and JavaScript. This transformation was an experiment to see how complicated it can be and if the performance of the site is optimized.
        </p>
        <p>
        The site is responsive, easy to use, and visually appealing.
        </p>
      </>
    ),
  },
  {
    id: 24,
    title: "Daily Blog",
    imgSrc: "./static/assets/portfolio24.jpg",
    code: "",
    projectLink: "https://nextjs-sanity-v3-blog-app.vercel.app/",
    tech: ["Next.js 13","Sanity.io", "Tailwind CSS"   ],
    description:
      "Developed by me to enhance Next.js skills, this blog seamlessly integrates with Sanity.io. The admin panel streamlines content creation for efficient blogging.",
    modalContent: (
      <>
         <p>This web application, crafted with cutting-edge technologies including <b> Next.js 13, Tailwind CSS,</b> and<b>  Sanity.io</b>, is hosted on the versatile <b>Vercel</b> platform. </p><p> The project's primary goal is to delve into and implement the new routing methods introduced in Next.js 13.</p>
        <p>
        With the integration of Tailwind CSS, the application boasts a flexible and easily customizable design, offering a modern and responsive aesthetic. <br /> The inclusion of Sanity.io adds a crucial component, providing a user-friendly control panel for seamless article creation and management on the blog. <br /> This introduces a level of versatility and control over content without requiring direct interventions in the source code.
        </p>
        <p>Hosting on Vercel provides a swift and scalable solution for project deployment, ensuring an efficient and <b>rapid</b> 🚀 user experience for site visitors.</p>
        <p>
        In essence, this application combines the enhanced routing capabilities of Next.js 13, the flexible aesthetics offered by Tailwind CSS, easy content management through Sanity.io, and an efficient hosting infrastructure via Vercel. </p><p> The result is responsive, modular, and user-friendly. ✨ Explore the demo live project for dynamic web experiences. 
        </p>
         
      </>
    ),
  },
  {
    id: 25,
    title: "Blog.",
    imgSrc: "./static/assets/portfolio25.jpg",
    code: "",
    projectLink: "https://static-blog-md.vercel.app/",
    tech: ["Next.js 13", "Markdown", "Tailwind CSS"],
    description:
      "Explore my static blog, powered by Next.js 13 and styled with Tailwind CSS. Each blog post, written in Markdown format, offers a seamless reading experience.",
    modalContent: (
      <>
        <p>
          This blog is a simple application where I tried to learn the new
          structure and routing of a NextJs 13 project.
        </p>
        <p>
          Is a static blog project built with Next.js 13, employing Tailwind CSS
          for styling and Markdown for content creation.{" "}
        </p>
        <p>
          Hosted on Vercel, the site follows a modern routing approach,
          transitioning from pages root to app root system.
        </p>{" "}
        <p>
          The design is clean and contemporary, and content management is
          streamlined due to the use of the Markdown format.
        </p>
      </>
    ),
  },
];
