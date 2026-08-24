import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead - Frontend / Full Stack Development (MERN/MEAN) - Multiple Internal Projects",
    location: "Basking Ridge, New Jersey",
    description:
      "I worked on Multiple Internal Projects for both Verizon Postpaid and Prepaid brands such as Tracfone, Straightalk and other Value Brands. I started with building the UI for the Chatbot template builder application.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - present",
  },
  {
    title: "Senior Software Engineer",
    location: "New York, NY",
    description:
      "Worked on Guided Customer Care application and personalized health management portal that connects customers to personalized health coaches for managing specific conditions based on the customer’s profile ",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 – Oct 2022",
  },
  {
    title: "Software Engineer",
    location: "Pittsburgh, PA",
    description:
      "Worked on a project focused on Small Businesses to provide them with merchant services such as End-to-End Payment Processing Solutions, including point of sale (POS) and e-commerce solutions",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2019- June 2020",
  },
  {
    title: "Software Engineer",
    location: "Union, NJ",
    description:
      "Worked on a project focused on Small Businesses to provide them with merchant services such as End-to-End Payment Processing Solutions, including point of sale (POS) and e-commerce solutions",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2018– Aug 2019",
  },
  {
    title: "Software Engineer",
    location: "Farmington, CT ",
    description:
      "Worked on a project focused on Small Businesses to provide them with merchant services such as End-to-End Payment Processing Solutions, including point of sale (POS) and e-commerce solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2016 –Jan 2018",
  },
  {
    title: "Software Engineer",
    location: "Unisys Technologies, India",
    description:
      "Worked on a project focused on Small Businesses to provide them with merchant services such as End-to-End Payment Processing Solutions, including point of sale (POS) and e-commerce solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2012 – Feb 2014",
  },
  {
    title: "Software Engineer",
    location: "Lansys Technologies, India",
    description:
      "Worked on a project focused on Small Businesses to provide them with merchant services such as End-to-End Payment Processing Solutions, including point of sale (POS) and e-commerce solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2010 – July 2012",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "NGRX",
  "Bootstrap",
  "Material UI",
  "Jasmine",
  "Karma",
  "Jest",
  "React Testing Library",
  "Tailwind",
  "MongoDB",
  "Oracle SQL",
  "My SQL",
  "GraphQL",
  "Apollo",
  "Java",
  "Spring Boot",
  "Python",
  "Git",
  "Gitlab",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI CD",
  "SVN",
  "Splunk",
  "SonarQube",
  "Swagger",
  "Confluence",
  "Figma",
  "Adobe XD",
] as const;
