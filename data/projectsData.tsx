 
import IMG1 from "../app/assets/portfolio1.jpg";
import IMG2 from "../app/assets/portfolio2.jpg";
import IMG3 from "../app/assets/portfolio3.jpg";
import IMG4 from "../app/assets/portfolio4.jpg";
import IMG5 from "../app/assets/portfolio5.jpg";
import IMG6 from "../app/assets/portfolio6.jpg";
import IMG7 from "../app/assets/portfolio7.jpg";
import IMG8 from "../app/assets/portfolio8.jpg";
import IMG9 from "../app/assets/portfolio9.jpg";
import IMG10 from "../app/assets/portfolio10.jpg";
import IMG11 from "../app/assets/portfolio11.jpg";
import IMG12 from "../app/assets/portfolio12.jpg";
import IMG13 from "../app/assets/portfolio13.jpg";
import IMG14 from "../app/assets/portfolio14.jpg";
import IMG15 from "../app/assets/portfolio15.jpg";
import IMG16 from "../app/assets/portfolio16.jpg";
import IMG17 from "../app/assets/portfolio17.jpg";
import { StaticImageData } from "next/image";
 

interface Props {
	id: number;
	title: string;
	image: StaticImageData;
	description: string;
	github: string;
	demo: string;
}

export const items: Props[] = [
	{
		id: 1,
		title: "Link In Bio",
		image: IMG1,
		description:
		  "Link In Bio - A Linktree-like web page version made with HTML, CSS and JavaScript",
	
		github: "https://github.com/ValentinEremia/links",
		demo: "https://valentineremia.github.io/links/",
	  },
	  {
		id: 2,
		title: "ToDo-App",
		image: IMG2,
		description:
		  "ToDo PWA. - A  task list application built in HTML, CSS and JavaScript. And it's a progressive web application (PWA).",
		github: "https://github.com/ValentinEremia/tdv2",
		demo: "https://valentineremia.github.io/tdv2/",
	  },
	  {
		id: 3,
		title: "Random Meal Generator",
		image: IMG3,
		description:
		  ' A PWA recipe app that uses the "themealdb.com" API. It is made with HTML, CSS, JavaScript and a CSS Skeleton library. ',
		github: "https://github.com/ValentinEremia/retete2",
		demo: "https://valentineremia.github.io/retete2/",
	  },
	  {
		id: 4,
		title: "SportWeb",
		image: IMG4,
		description:
		  " A simple sports site design to practice, my HTML and CSS skills. I think it was the first thing done with HTML and CSS!",
		github: "https://github.com/ValentinEremia/sportweb",
		demo: "https://valentineremia.github.io/sportweb/index.html",
	  },
	  {
		id: 5,
		title: "Resume App",
		image: IMG5,
		description:
		  " My resume with dark mode and PDF file download button. Is a responsive PWA application.",
		github: "https://github.com/ValentinEremia/rcv",
		demo: "https://valentineremia.github.io/rcv/",
	  },
	  {
		id: 6,
		title: "Mihai Radu Photographer v.1",
		image: IMG6,
		description:
		  " A red color website design idea, for a photographer portfolio. Build with HTML, CSS and JavaScript.",
		github: "https://github.com/ValentinEremia/mrph",
		demo: "https://valentineremia.github.io/mrph/index.html",
	  },
	  {
		id: 7,
		title: "Mihai Radu fotograf v.2",
		image: IMG7,
		description:
		  " A website portfolio for a photographer. Build with HTML, CSS, and JavaScript Library's.",
		github: "https://github.com/ValentinEremia/rfpwa",
		demo: "https://valentineremia.github.io/rfpwa/index.html",
	  },
	  {
		id: 8,
		title: "Expainding Cards",
		image: IMG8,
		description:
		  " An example of JavaScript animation, just to practice ...",
		github: "https://github.com/ValentinEremia/cards",
		demo: "https://valentineremia.github.io/cards/",
	  },
	  {
		id: 9,
		title: "SeaSide",
		image: IMG9,
		description:
		  " A simple, responsive travel landing page is built with HTML, CSS and JS",
		github: " ",
		demo: "https://sea-side-nny.netlify.app/",
	  },
	  {
		id: 10,
		title: "NNY-Food",
		image: IMG10,
		description:
		  ' It is an example of an e-commerce web application. It is my first e-commerce web application. It is built using ReactJS, Framer Motion, TailwindCSS and Firebase.',
		github: "https://github.com/ValentinEremia/NNY-Food",
		demo: "https://nnyfoodpwa.netlify.app/",
	  },
	  {
		id: 11,
		title: "Green Village",
		image: IMG11,
		description:
		  ' Is a case study website. It is built in React Js, just for fun and practice. It is also a Progressive Web Application.',
		github: "https://github.com/ValentinEremia/greenvillagepwa",
		demo: "https://greenvillagepwa.netlify.app/",
	  },
	  {
		id: 12,
		title: "My Portfolio v.1",
		image: IMG12,
		description:
		  ' My portfolio website with theme mode and PDF file download button of my CV. Is a responsive PWA application. It was built with React Js.',
		github: " ",
		demo: "https://ve-react.netlify.app/",
	  },
	  {
		id: 13,
		title: "3D Iphone 14",
		image: IMG13,
		description:
		  ' Apple iPhone 14 landing page. Is a responsive PWA application. It was built using ThreeJs + ReactJS',
		github: " ",
		demo: "https://14pro.netlify.app/",
	  },
	  {
		id: 14,
		title: "InstaClone",
		image: IMG14,
		description:
		  ' A project built with Flutter, it is  a mobile and web app. It uses Google Firebase as a backend.',
		github: " ",
		demo: "https://insta-clone-flutter.netlify.app/",
	  },
	  {
		id: 15,
		title: "TRVL - Travel website",
		image: IMG15,
		description:
		  ' TRVL. Is a travel responsive website and PWA application. It was built using ReactJS',
		github: " ",
		demo: "https://valentineremia.github.io/trvl/",
	  },
	  {
		id: 16,
		title: "The Void Tattoo",
		image: IMG16,
		description:
		  ' The Void Tattoo . Is a responsive landing page and PWA. It was built using ReactJS',
		github: " ",
		demo: "https://valentineremia.github.io/tatoo/",
	  },
	  {
		id: 17,
		title: "Linear.app",
		image: IMG17,
		description:
		  'Rebuilding Linear.app homepage with Next.js and Tailwind. Is a responsive landing page.',
		github: " ",
		demo: "https://linear-clone-next-tailwind.vercel.app/",
	  },
]
 