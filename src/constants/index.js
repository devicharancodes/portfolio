import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Web developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an experienced Front End Developer with a strong background in UI/UX design and 
a passion for front-end technology. Skilled in JavaScript, HTML5, CSS3 and React. 
Proven track record of developing responsive user interfaces, optimizing code for 
faster page loads, and integrating RESTful APIs to enhance user experience. 
Collaborative team player adept at creating and converting UI/UX wireframes 
into code while maintaining design standards. Eager to advance expertise in 
contemporary front-end technologies like React.js and remain informed on 
industry advancements. Enthusiastic about prospects in UI/UX Design and Web development.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Front End Web Developer",
    company: " ANZ ",
    description: ` Developed an internal portal for bank employees to manage customer loyalty program 
benefits, including interest rate discounts on loans and credit products. The 
portal allowed employees to input customer data and calculate applicable 
discounts based on factors such as account balances, transaction history, and 
credit scores.`,
    technologies: [ "React","Redux" , "React Router", "Sass", "Axios", "Formik", "Yup", "React Hooks", "ESLint", "Webpack", "Git" ],
  },
  {
    year: "2020 - 2022",
    role: "Front End Web Developer",
    company: "Benchmark Managed IT Cloud Services",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React","Redux" , "React Router", "Tailwind", "Axios","Material-UI","Jest"],
  },
  {
    year: "2019 - 2020",
    role: "UI/UX Developer | Junior Front End Developer",
    company: " Aussie Digital Business Systems",
    description: `Assisted in the development and maintenance of an RFID Enabled Asset Tracking System using React JS, Express JS, Node.js and Mongo DB.`,
    technologies: ["Python", "JSX", "Node.js", "Postgres", "jQuery"," React","ExpressJS"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "355 Blackshaws rd, Altona north , 3025 ",
  phoneNo: "+61 410648828 ",
  email: "devicharand@gmail.com",
};
