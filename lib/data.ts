import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "../public/banner-2.jpg";
import netflix from "../public/movie.jpg";
import phoneImg from "../public/phone.png";
import stem from "../public/pexels-mikhail-nilov-8923375.jpg";
import Find from "../public/find-me.jpg"

export const experiencesData = [
    {
        id: 1,
        title: "Graduate GomyCode bootcamp",
        location: "Lekki, Lagos",
        description:
            "In my journey as a full-stack student, I’ve built solid skills in both frontend and backend development. I’ve learned how to create responsive, interactive user interfaces with modern tools, and I’ve also worked with databases and server-side logic. I’m comfortable working in teams and using version control, which has helped me understand how all parts of a project come together from start to finish.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        id: 2,
        title: "Front-End Developer WindmillCode",
        location: "Remote",
        description:
        "Over the past 8 months, working with a team of skilled developers has helped me grow as a team player. Regular stand-ups and code reviews taught me the value of clear communication and working in short, focused cycles. This experience has improved my technical skills and shown me how much stronger a team can be when everyone works together.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        id: 3,
        title: "Computer Operator",
        location: "Ondo",
        description: "Hollaram Educational Concept is an organization that help O-level students in all various kinds of school to prepare and register them for Joint Admissions and Matriculation Board (JAMB) and The West African Examinations Council (WAEC). my role in this organization was to register each student using fingerprint scanner, webcam to capture their faces and also sending their details to the database for final registration.",
        icon: React.createElement(FaReact),
        date: "2017 - 2018",
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
        title: "Find Me",
        description:
        "This application demonstrates the use of React and the Google Maps API for location tracking. It includes features for real-time location updates, route tracking, and a return path guide, along with dark mode support for the map.",
        tags: ["React", "Google-Map", "GPS"],
        imageUrl: Find,
        links: "https://find-me-roan.vercel.app/",
        code: "https://github.com/Akinterinwa/find-me"
    },
    {
        title: "Inspire STEM Girls",
        description:
            "The vision is to ignite passion and confidence in young women, empowering them with STEM knowledge and skills to become future innovators and leaders in the ever-evolving world of technology and science.",
        tags: ["React", "Framer-motion", "React-Spinner", "Paypal Donation","Emailjs"],
        imageUrl: stem,
        links: "https://inspirestemgirls.com/",
        code: "https://github.com/Akinterinwa/STEM-GIRLS"
    },
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
        title: "Jumia Dashboard",
        description:
            "A dashboard inspired by Jumia with a sleek feature and intuitive design, prioritizing user-friendly navigation and clear presentation of data. It incorporate vibrant colors,",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: phoneImg,
        links: "https://nifemi-dom.netlify.app/",
        code: "https://github.com/Akinterinwa/DOM"
    },
    {
        title: "Glowing",
        description:
            "An e-commerce app that facilitates online buying and selling of product through a digital platform.",
        tags: ["HTML", "CSS", "JAVASCRIPT"],
        imageUrl: ecommerceImg,
        links: "https://akinterinwa-product.netlify.app/",
        code: "https://github.com/Akinterinwa/Product"
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
