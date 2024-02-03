import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "../public/feyerotmta.jpeg";
import netflix from "../public/7564f7951ba5445a8f1d12fb.avif";
import phoneImg from "../public/phone.png";

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
        location: "Remote",
        description:
            " Over the past 8 months collaborating with a dynamic developer group, I've honed my teamwork skills, seamlessly integrating with diverse talents. Through daily stand-ups and code reviews, I've embraced an agile mindset, fostering efficient communication and iterative development. This collaborative journey has not only amplified my technical proficiency but also enriched my understanding of the collective power of a cohesive development team.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        id: 3,
        title: "Computer Operator",
        location: "Ondo",
        description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021",
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
        title: "NETFLIX",
        description:
            "Seamless Google Authentication: Integrate Google OAuth for effortless login and logout, Netflix-inspired Home Screen: Craft an engaging interface mirroring Netflix to display movie options.",
        tags: ["React", "Redux", "Next.js", "Stripe Checkout", "Webhooks","Firestore", " Google Auth"],
        imageUrl: netflix,
        links: "https://movie-app-8b343.web.app/",
        code: "https://github.com/Akinterinwa/streamflix"
    },
    {
        title: "Junia Dashboard",
        description:
            "A dashboard inspired by Jumia with a sleek feature and intuitive design, prioritizing user-friendly navigation and clear presentation of data. It incorporate vibrant colors,",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: phoneImg,
        links: "https://nifemi-dom.netlify.app/",
        code: "https://github.com/Akinterinwa/DOM"
    },
    {
        title: "LAMASTORE",
        description:
            "An e-commerce app that facilitates online buying and selling of goods or services through a digital platform.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: ecommerceImg,
        links: "https://marvelous-mandazi-d9edd5.netlify.app",
        code: "https://github.com/Akinterinwa/e-store"
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
    "Firestore",
    "Django",
    "Framer Motion",
] as const;
