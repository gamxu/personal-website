import DocumentBtn from "@/components/common/DocumentBtn";
import Image from "next/image";
import Link from "next/link";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Home() {
  return (
    <div className="text-white pb-20">
      <div className="px-4 md:px-10 lg:px-20">
        <div className="flex flex-row justify-center items-start md:items-center xl:items-start md:gap-10 w-full px-0 lg:px-20 mt-10">
          <div className="h-full mt-5 md:mt-16">
            <p className="text-sm mb-[20px]">WELCOME TO MY AREA</p>
            <div className="text-[38px] xl:text-[48px] font-medium">
              <span>I’m </span>
              <span className="text-orange-normal">Wuttipat Sanchai</span>
            </div>
            <div className="text-[24px] xl:text-[32px] leading-tight">
              <p>Full stack Web Developer</p>
              <p>UI/UX Designer</p>
              <p>Trader & Content Creator</p>
            </div>
            <div>
              <p className="text-sm mt-16 mb-[20px]">FIND ME ON</p>
              <div className="inline-flex gap-3 h-[40px]">
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
                    style={{ aspectRatio: "1/1" }}
                    className="flex justify-center items-center border border-gray-700 rounded-md 
                  shadow-md shadow-white/20 hover:text-orange-normal transition-all duration-100"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-[40%]">
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

      <div
        className="bg-black-light flex flex-col md:flex-row justify-center items-center gap-[20px] md:gap-[5%] mt-[130px] py-11
      border border-gray-700 shadow-top-bottom"
      >
        <div>
          <Image
            src={"/ai-pro.svg"}
            className="h-auto mx-auto md:mx-0 w-[80%] md:w-full object-contain"
            width={500}
            height={500}
            alt="ai-profile"
          />
        </div>
        <div className="inline-flex flex-col gap-3 md:gap-5 w-[60%] lg:w-[40%] xl:w-[30%]">
          <p className="text-xl text-center md:text-left">Who I Am?</p>
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
    </div>
  );
}
