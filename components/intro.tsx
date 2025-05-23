'use client';
import Image from 'next/image';
import React from 'react';
import myPicture from '@/public/my-image.jpg';
import { motion } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}>
                        <Image src={myPicture}
                            alt='my portrait image' width='192' height='192'
                            quality='95' priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white 
                    object-cover shadow-xl top-[-5rem]'/>
                    </motion.div>

                    <motion.span className="text-4xl absolute bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>👋</motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium
             !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I&apos;m Nifemi.</span> I&apos;m a{' '}
                <span className="font-bold">frontend developer</span> with{' '}
                <span className="font-bold">2 years</span> of hands-on experience. I specialize in creating
                <span className="italic"> user-friendly websites and web applications</span>. My primary stack is{' '}
                <span className="underline">React (Next.js)</span>.

            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}>
                <Link href='#contact' className='group bg-gray-900 text-white px-7 
                py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
                hover:scale-110 hover:gb-gray-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}>
                    Contact me here <BsArrowRight
                        className='opacity-70 group-hover:translate-x-1 transition' />{" "}
                </Link>

                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 borderBlack
                hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10
                ' href='/Akinterinwa-new-resume.pdf' download>Download CV <HiDownload className='
                opacity-60 group-hover:translate-y-1 transition'/>{" "}
                </a>

                <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full
                focus:scale-[1.15] borderBlack dark:bg-white/10 dark:text-white/60
                hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'
                    href="https://ng.linkedin.com/in/oluwanifemi-akinterinwa-242a82252" target="_blank">
                    <BsLinkedin />
                </a>
                <a className='bg-white p-4 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-[1.15] borderBlack dark:bg-white/10 dark:text-white/60
                hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'
                    href="https://github.com/Akinterinwa" target="_blank">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}