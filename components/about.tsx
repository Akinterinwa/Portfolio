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
        After graduating with a degree of{" "}
        <span className="font-medium">Arts</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "} I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Next.js
        </span>
        {" "}I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>,
        I find myself in the world of music. Love both classical and contemporary tunes.{" "}
        Let&apos;s embark on a journey of innovation, where the artistry of development meets the precision of code! 🚀🎹🖥️
      </p>
    </motion.section>
  )
}
