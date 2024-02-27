//  icons
import {
  FiYoutube,
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

// skills images
import CSS from "./assets/img/skills/css-3.svg";
import FIREBASE from "./assets/img/skills/firebase.svg";
import FRAMER_MOTION from "./assets/img/skills/framer.svg";
import GIT from "./assets/img/skills/git.svg";
import GITHUB from "./assets/img/skills/github.svg";
import HTML from "./assets/img/skills/html-5.svg";
import JAVA from "./assets/img/skills/java.svg";
import JAVASCRIPT from "./assets/img/skills/javascript.svg";
import MAVEN from "./assets/img/skills/maven.svg";
import MYSQL from "./assets/img/skills/mysql.svg";
import NPM from "./assets/img/skills/npm.svg";
import POSTMAN from "./assets/img/skills/postman.svg";
import REACT_QUERY from "./assets/img/skills/react-query.svg";
import REACT from "./assets/img/skills/react.svg";
import REDUX from "./assets/img/skills/redux.svg";
import SPRING_BOOT from "./assets/img/skills/spring-boot.svg";
import TAILWIND_CSS from "./assets/img/skills/tailwindcss.svg";
import VS_CODE from "./assets/img/skills/vscode.svg";
import INTELLIJ_IDEA from "./assets/img/skills/intellij-idea.svg";

// Project Source
import TRONMART from "../src/assets/img/img/tronmart.png";
import HOSTIT from "../src/assets/img/img/hostit.png"
import COURSEVISTA from "../src/assets/img/img/coursevista.png";
import LINKEDIN from "../src/assets/img/img/linkedin.png";
import TODO from "../src/assets/img/img/todo.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "career",
    href: "career",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/dinesh-balan-srinivasan/",
    color: "text-blue-600",
    colorHover: "hover:text-blue-400",
  },
  // {
  //   icon: <FiYoutube />,
  //   href: "https://www.youtube.com/channel/UC6duY9-fOnOn42zHRlSaP-g",
  //   color: "text-red-500",
  //   colorHover: "hover:text-red-900",
  // },
  {
    icon: <FiGithub />,
    href: "https://github.com/dineshbalans",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/dinesh_t.i.t.o.o/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    color: "text-pink-600",
    colorHover: "hover:text-pink-400",
  },
];

// skill
export const skills = [
  {
    image: HTML,
    text: "HTML",
  },
  {
    image: CSS,
    text: "CSS",
  },
  {
    image: TAILWIND_CSS,
    text: "Tailwind CSS",
  },
  {
    image: JAVASCRIPT,
    text: "JavaScript",
  },
  {
    image: REACT,
    text: "React",
  },
  {
    image: JAVA,
    text: "Java",
  },
  {
    image: SPRING_BOOT,
    text: "Spring Boot",
  },
  {
    image: MYSQL,
    text: "MySQL",
  },
  {
    image: REDUX,
    text: "Redux",
  },
  {
    image: FIREBASE,
    text: "Firebase",
  },
  {
    image: REACT_QUERY,
    text: "React Query",
  },
  // {
  //   image: FRAMER_MOTION,
  //   text: "Framer Motion",
  // },
  {
    image: GIT,
    text: "Git",
  },
  {
    image: GITHUB,
    text: "Github",
  },
  {
    image: NPM,
    text: "npm",
  },
  {
    image: MAVEN,
    text: "Apache Maven",
  },
  {
    image: VS_CODE,
    text: "VS Code",
  },
  {
    image: INTELLIJ_IDEA,
    text: "IntelliJ IDEA",
  },
  {
    image: POSTMAN,
    text: "Postman",
  },
];

export const projects = [
  {
    id: "project_0",
    title: "Tronmart",
    src: TRONMART,
    desc: "Explore a seamless platform for discovering and acquiring the latest electronic gadgets.",
    github: "https://github.com/dineshbalans/tronmart",
    live: "https://tronmart-dineshbalan.vercel.app/",
  },
  {
    id: "project_01",
    title: "HostIT",
    src: HOSTIT,
    desc: "Discover a dynamic platform for effortless hosting solutions and unparalleled online presence.",
    github: "https://github.com/dineshbalans/hosting",
    live: "https://hostit-dineshbalan.vercel.app/",
  },
  {
    id: "project_1",
    title: "CourseVista",
    src: COURSEVISTA,
    desc: "Streamlining education and knowledge delivery through our Learning Management System.",
    github: "https://github.com/dineshbalans/CourseVista",
    live: "https://coursevista.vercel.app/",
  },
  {
    id: "project_2",
    title: "LinkedIN Clone",
    src: LINKEDIN,
    desc: "Recreating the professional networking experience with a LinkedIn-inspired project.",
    github: "https://github.com/dineshbalans/linkedin-clone",
    live: "https://linkedin-clone-dineshbalan.vercel.app/",
  },
  {
    id: "project_3",
    title: "Simple ToDo App",
    src: TODO,
    // desc: "Efficient task management made simple with our Todo App project",
    desc: "A minimalistic to-do app to make track your tasks and to increase your productivity",
    github: "https://github.com/dineshbalans/todo-app",
    live: "https://todo-app-dineshbalan.vercel.app/",
  },
];

export const sections = [
  {
    title: "YouTube Content Creator for Web Development",
    content:
      "I create videos on YouTube about web development topics such as HTML, CSS, JavaScript, React, and TypeScript.",
  },
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL databases such as MySQL and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, and TypeScript and have experience developing responsive and user-friendly web applications.",
  },
];

export const careers = [
  {
    id: "career_1",
    title: "First encounter",
    subTitle: "2016-2017",
    result: "93%",
    des: "It all started in grade 10 at Jai Sardha HSS, when a friend of mine introduced me to the world of tech with his brand new smartphone. It always amazed me to find how these things work.",
  },
  {
    id: "career_2",
    title: "The High School",
    subTitle: "2017-2019",
    result: "80%",
    des: "At this point, i started to make use of the internet in all possible ways, surfing became a passtime and getting to know something was cool. It was the time when you didn't have these much of mobile variants , so i got to know every available phone specs like back of my hand and it felt good. Almost all the games i played at that time was pirated and as you know its not that easy to install a game on your PC. Google became a friend and by fixing things for my needs learnt a lot.",
  },
  {
    id: "career_3",
    title: "Quadrennial period",
    subTitle: "2019-2023",
    result: "85%",
    des: "During my college years, I embarked on an exciting educational journey that laid the foundation for my career. These transformative years were a time of exploration, learning, and growth. I honed my skills, pursued my academic passions, and collaborated with peers on diverse projects. This period was instrumental in shaping the professional I am today, and it's where my passion for full stack development first took root.",
    // des: "As a recent graduate with a Bachelor of Technology (B.Tech) in Information Technology, I am passionate about harnessing technology to solve real-world problems. My journey has just begun, and I'm excited to embark on a career in IT, leveraging my education and skills to make a positive impact. Explore my portfolio to see how I'm applying my knowledge and creativity to create innovative solutions for a digital world.",
  },
  {
    id: "career_4",
    title: "Bridging Innovation and Expertise",
    subTitle: "Today",
    result: "👨‍💻",
    des: " After graduating I've invested time in mastering both front-end and back-end technologies, making me proficient in modern librarys and frameworks. I'm eager to leverage my skills, collaborate with like-minded professionals, and contribute to innovative projects. Throughout this journey, I've put my knowledge into practice by taking on various projects that showcase my ability to create responsive and efficient web applications. If you're seeking a dedicated and skilled Full Stack Java Developer for your team, I'd love to connect and explore opportunities together. Let's work together to create exceptional web experiences",
  },
];
