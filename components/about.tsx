'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8
     sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'>
      <h2 className='text-3xl font-medium capitalize mb-8'>
        <SectionHeading>About me</SectionHeading>
      </h2>
      <p className='mb-3'>
        After earning my <span className="font-medium">Bachelor of Arts in Religion Studies</span>, I discovered a passion for logic, patterns, and creative problem-solving—which drew me into programming.
        <span className="font-medium">full-stack web development</span>.{" "} I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Next.js
        </span>
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>,
        I find myself in the world of music. I Love both classical and contemporary tunes.{" "}
      </p>
    </motion.section>
  )
}
