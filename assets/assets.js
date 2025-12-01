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

import project4 from "./project-4.jpg";
import ecommmob from "./ecommmob.png";
import mobilecrypto from "./mobilecryto.png";
import portfoliomob from "./portfoliomob.png";
import admindashboard from "./admindashboard.png";
import person from "./person.png";
import programmer from "./programmer.png";
import chat2 from "./chat2.png";
import tinylink from "./tinylink.png";

export const assets = {
  tinylink,
  chat2,
  person,
  programmer,
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
    role: "Full Stack  Developer",
    company: "Multicraft digital Technology.",
    description: `Developed and maintained multiple production-level applications using the MERN stack, delivering stable and scalable
features from frontend UI to backend APIs.Built responsive, user-centric interfaces using React.js, Tailwind CSS, and modern component patterns to ensure smooth
usability across devices.Implemented RESTful API integrations using Axios and developed secure backend endpoints with Node.js and Express,
including JWT-based authentication and role-based access control.`,
    technologies: [
      "Javascript",
      "React.js",
      "TailwindCss",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Network Support Engineeer",
    company: "Multicraft digital Technology",
    description: `Network support Engineer with experience in monitoring, maintaining, and troubleshooting network infrastructure to ensure optimal performance and minimal downtime. Strong problem-solving abilities, effective communication skills, and a proactive approach to optimizing network reliability and performance.`,
    technologies: ["Networking", "LAN-WAN", "Troubleshooting", "Configuration"],
  },
];

export const PROJECTS = [
  {
    title: "Full-Stack E-Commerce-App",
    image: ecommmob,
    description: `TrendHive Store

A complete e-commerce platform featuring a responsive React frontend with product listings, filters, and cart management, integrated with a Node.js backend for authentication, order processing, and admin controls. Includes secure payment integration, database management, and a clean, user-focused design optimized for seamless shopping experience.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe/Razorpay", "TailwindCSS", "JWT"],
    link: "https://full-stack-e-commerce-app-jade.vercel.app/",
  },
  {
    title: "ZapChat",
    image: chat2,
    description: "Developed a real-time chat application with multi-theme support using Tailwind CSS and Daisy UI. The app enables instant messaging and supports theme customization for a personalized user experience. Built with WebSocket integration for seamless real-time communication, featuring user authentication, message history, and responsive design optimized for both desktop and mobile devices.",
    technologies: [
      "ReactJs",
      "MongoDB",
      "Express",
      "WebSocket",
      "TailwindCss",
    ],
    link: "https://realtime-chat-app-asqu.onrender.com/login",
  },
  {
    title: "Admin Dashboard",
    image: admindashboard,
  description: "Developed a custom admin panel for Multicraft to manage users, connections, and service analytics. Implemented secure authentication, real-time data insights, and responsive UI with React.js and REST APIs. Features include interactive data visualizations with ReCharts, user role management, and dynamic filtering for efficient server monitoring and control.",
   technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJs",
      "TailwindCss",
      "Framer Motion",
      "ReCharts",
    ],
    link: "https://multify-adminpanel.onrender.com",
  },
  {
    title: "TinyLink- URL Shortner",
    image: tinylink,
description: "Built a full-stack URL shortener with comprehensive click analytics and link management dashboard. Features real-time statistics tracking, custom short codes, responsive UI with grid/list views, and efficient data handling with Next.js and PostgreSQL.",
    technologies: ["TypeScript", "Next.js", "React.js", "TailwindCSS", "PostgreSQL", "Prisma"],
    link: "https://tinylink-three-lyart.vercel.app/",
  },
  {
    title: "Crypto Price Tracker",
    image: mobilecrypto,
   description: "A real-time crypto tracker displaying live prices, trends, and historical data. Integrates a live API to keep users updated with market fluctuations. Helps users stay informed and make data-driven decisions. Features interactive charts, price alerts, multi-currency support, and detailed market analytics for comprehensive cryptocurrency monitoring.",
    technologies: [
      "Javascript",
      "ReactJs",
      "TailwindCss",
      "Web Service API",
      "Framer Motion",
    ],
    link: "https://cryptotracker-bo9g.onrender.com",
  }
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
