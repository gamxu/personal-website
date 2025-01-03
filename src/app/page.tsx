"use client";

import DocumentBtn from "@/components/common/DocumentBtn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Home() {
  return (
    <div className="text-white pb-20 overflow-hidden">
      <div className="px-4 md:px-10 lg:px-20">
        <div className="flex flex-row justify-center items-start md:items-center xl:items-start md:gap-10 w-full px-0 lg:px-20 mt-10">
          <div className="h-full mt-5 md:mt-16">
            <p className="text-sm mb-[20px] animate-slideInLeft_1">
              WELCOME TO MY AREA
            </p>
            <div className="text-[38px] xl:text-[48px] font-medium animate-slideInLeft_2">
              <span>I’m </span>
              <span className="text-orange-normal">Wuttipat Sanchai</span>
            </div>
            <div className="text-[24px] xl:text-[32px] leading-tight">
              <p className="animate-slideInLeft_3">Full stack Web Developer</p>
              <p className="animate-slideInLeft_4">UI/UX Designer</p>
              <p className="animate-slideInLeft_5">Trader & Content Creator</p>
            </div>
            <div>
              <p className="text-sm mt-16 mb-[20px] animate-fadeIn_1">
                FIND ME ON
              </p>
              <div className="inline-flex gap-3 h-[40px] animate-fadeIn_1">
                {[
                  {
                    icon: <FaFacebookSquare className="text-lg" />,
                    href: "https://www.facebook.com/wuttipat.sanchai/",
                  },
                  {
                    icon: <FaInstagram className="text-lg" />,
                    href: "https://www.instagram.com/9am_xu/?hl=en",
                  },
                  {
                    icon: <IoLogoLinkedin className="text-lg" />,
                    href: "https://www.linkedin.com/in/wuttipat-sanchai-249a76260/",
                  },
                  {
                    icon: <FaYoutube className="text-lg" />,
                    href: "https://www.youtube.com/@WuttipatSan",
                  },
                  {
                    icon: <AiFillTikTok className="text-lg" />,
                    href: "https://www.tiktok.com/@wuttipats",
                  },
                ].map(({ icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Improves security for external links
                    style={{
                      aspectRatio: "1/1",
                      animation: `fadeIn 0.5s ease-in-out forwards`,
                      animationDelay: `${index * 0.15}s`,
                      opacity: 0,
                    }}
                    className={`
                      flex justify-center items-center 
                      border border-gray-700 rounded-md 
                      shadow-md shadow-white/20 
                      hover:text-orange-normal 
                      transition-colors duration-150
                      `}
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-[40%] animate-slideInRight_2">
            <Image
              src="/human-pro.svg"
              className="max-h-[500px]"
              width={500}
              height={500}
              alt="profile"
            />
          </div>
        </div>
      </div>

      <AnimatedAboutSection />
    </div>
  );
}

const AnimatedAboutSection = () => {
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current);
    }
    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => {
      if (textSectionRef.current) {
        observer.unobserve(textSectionRef.current);
      }
      if (imageSectionRef.current) {
        observer.unobserve(imageSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black-light flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[5%] mt-[130px] py-11 border border-gray-700 shadow-top-bottom">
      <div
        ref={imageSectionRef}
        className="opacity-0 -translate-x-full transition-all duration-500 ease-out"
      >
        <Image
          src="/ai-pro.svg"
          className="h-auto mx-auto md:mx-0 w-[80%] md:w-full object-contain"
          width={500}
          height={500}
          alt="ai-profile"
        />
      </div>
      <div 
        ref={textSectionRef}
        className="inline-flex flex-col gap-3 md:gap-5 w-[60%] lg:w-[40%] xl:w-[30%] opacity-0 translate-x-full transition-all duration-500 ease-out"
      >
        <p className="text-xl font-medium text-center md:text-left">Who am I?</p>
        <p className="font-light text-center md:text-left">
          I am a Computer engineering student who is also passionate about
          business and entrepreneurship. I always aimed to utilize my
          engineering and business skills to fulfill any goals or tasks more
          efficiently while still creating an energized and motivated
          atmosphere for any of my companions.
        </p>
        <div className="inline-flex justify-center md:justify-start mt-2 md:mt-0">
          <DocumentBtn label="MY RESUME" fileName="resume.pdf" />
        </div>
      </div>
    </div>
  );
};
