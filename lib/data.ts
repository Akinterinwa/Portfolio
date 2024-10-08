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
