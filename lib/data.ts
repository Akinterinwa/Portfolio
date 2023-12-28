import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev (1).png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const experiencesData = [
    {
        id: 1,
        title: "Graduate GomyCode bootcamp",
        location: "Lekki, Lagos",
        description:
            " In my 5-month journey as a full-stack student, I've gained proficiency in both frontend and backend technologies. I've mastered the art of crafting responsive and dynamic user interfaces using modern frontend frameworks. On the server side, I've delved into database management, server architecture, and the intricacies of backend development. Collaboration and version control have become second nature, fostering a holistic understanding of the end-to-end development process.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        id: 2,
        title: "Front-End Developer WindmillCode",
        location: "Newyork",
        description:
            " Over the past 8 months collaborating with a dynamic developer group, I've honed my teamwork skills, seamlessly integrating with diverse talents. Through daily stand-ups and code reviews, I've embraced an agile mindset, fostering efficient communication and iterative development. This collaborative journey has not only amplified my technical proficiency but also enriched my understanding of the collective power of a cohesive development team.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        id: 3,
        title: "Computer Operator",
        location: "Ondo",
        description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
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
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
