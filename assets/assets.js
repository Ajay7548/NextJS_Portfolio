import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

import project1 from "./project-1.jpg";
import project2 from "./project-2.jpg";
import project3 from "./project-3.jpg";
import project4 from "./project-4.jpg";
import ecommmob from './ecommmob.png'
import ecommm from './ecomm.png'
import mobilecrypto from './mobilecryto.png'
import portfoliomob from './portfoliomob.png'

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

//ReactJS Old Portfolio
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Multicraft digital Technology.",
    description:`Provided support in building the company website as a Software Developer, focusing on developing responsive, user-friendly interfaces and ensuring optimal performance. Collaborated with the team to implement design features, improve functionality, and enhance the overall user experience.`,
    technologies: ["HTML","CSS","Javascript", "React.js","TailwindCss","Next.js"],
  },
  {
    year: "2022 - 2023",
    role: "Network Support Engineeer",
    company: "Multicraft digital Technology",
    description:`Network support Engineer with experience in monitoring, maintaining, and troubleshooting network infrastructure to ensure optimal performance and minimal downtime. Strong problem-solving abilities, effective communication skills, and a proactive approach to optimizing network reliability and performance.`,
    technologies: ["Networking", "LAN-WAN", "Troubleshooting","Configuration"],
  },
];

export const PROJECTS = [
 
  {
    title: "Portfolio Website",
    image: portfoliomob,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["Javascript", "TailwindCss","ReactJs","NextJs","Framer Motion"],
      link:"https://portfolio-0rin.onrender.com",
  },
  
  {
    title: "Crypto Price Tracker",
    image: mobilecrypto,
    description:`This project provides up-to-date prices, trends, and historical data for various cryptocurrencies, helping users stay informed about market fluctuations.`,
    technologies: ["Javascript", "ReactJs", "TailwindCss", "Web Service API","Framer Motion"],
    link:"https://cryptotracker-bo9g.onrender.com",
  },
  {
    title: "E-Commerce App",
    image: ecommmob,
    description:`A modern e-commerce platform built with React, featuring a seamless shopping experience with a wishlist, cart functionality.`,
    technologies: ["Javascript", "ReactJs", "TailwindCss", "Framer Motion"],
      link:" https://e-commerce-app-ss1q.onrender.com",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js"],
    link:"http://google.com",
  },
];

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  // {
  //   icon: assets.code_icon,
  //   iconDark: assets.code_icon_dark,
  //   title: "Languages",
  //   description: "HTML, CSS, JavaScript React Js, Next Js",
  // },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master's in Computer Application ",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
