import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akinterinwa Oluwanifemi | Full-Stack Developer Portfolio",
  description: "Explore the portfolio of Akinterinwa Oluwanifemi, a passionate full-stack developer with expertise in building modern web applications. Discover my projects, skills, and professional experience.",
  keywords: ["full-stack developer", "portfolio", "Next.js", "React", "TypeScript", "web developer", "Akinterinwa Oluwanifemi"],
  authors: [{ name: "Akinterinwa Oluwanifemi", url: "https://www.linkedin.com/in/oluwanifemi-akinterinwa-242a82252/" }],
  creator: "Akinterinwa Oluwanifemi",
  openGraph: {
    type: "website",
    url: "https://akinterinwa-oluwanifemi.vercel.app/", // Replace with your actual website URL
    title: "Akinterinwa Oluwanifemi | Full-Stack Developer Portfolio",
    description: "Explore the portfolio of Akinterinwa Oluwanifemi, a passionate full-stack developer with expertise in building modern web applications. Discover my projects, skills, and professional experience.",
    images: [
      {
        url: "https://akinterinwa-oluwanifemi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-image.f108a70d.jpg&w=384&q=95", // Replace with a URL to an attractive image for social sharing
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@akinterinwa5",
    title: "Akinterinwa Oluwanifemi | Full-Stack Developer Portfolio",
    description: "Explore the portfolio of Akinterinwa Oluwanifemi, a passionate full-stack developer with expertise in building modern web applications. Discover my projects, skills, and professional experience.",
    images: ["https://akinterinwa-oluwanifemi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-image.f108a70d.jpg&w=384&q=95"], // Replace with a URL to an attractive image for Twitter sharing
  },
  icons: {
    icon: "./favicon.png",
    shortcut: "./favicon.png",
    apple: "./favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}
      relative pt-28 sm:pt-36 bg-gray-50 text-gray-950
      dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        dark:bg-[#676394]'></div>

        <ThemeContextProvider>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position='top-right' />
        <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}