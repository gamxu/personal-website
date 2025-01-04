"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Experiences",
      href: "/experiences",
    },
    {
      name: "Contacts",
      href: "/contacts",
    },
    {
      name: "Give Feedback",
      href: "/form-review",
    },
  ];
  return (
    <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 font-kanit text-white py-5">
      <div className="flex justify-between items-center gap-5 xl:gap-14">
        <Link href={"/"} className="shrink-0">
          <Image
            src="/barcode-icon.svg"
            className="h-[30px] xl:h-[40px]"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <div className="hidden lg:flex gap-10 xl:gap-14">
          {menuItems.map(({ name, href }, i) => (
            <Link
              key={i}
              className="hover:text-slate-300 text-white-primary text-sm xl:text-base py-2"
              href={href}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <Link
          href={"https://github.com/gamxu"}
          className="hidden lg:flex gap-1 justify-center items-center border bg-white-pure text-black-pure 
          text-sm xl:text-base rounded-[5px] py-2 px-4 max-h-[36px] xl:max-h-[40px] font-medium hover:bg-white-pure/80 
          transition-all duration-150"
        >
          <FaGithub className="text-2xl" />
          <span className="hidden xl:inline">GitHub</span>
        </Link>
        <Link
          className="hidden lg:flex justify-center items-center gap-1 bg-orange-normal hover:bg-orange-normal/80 
        text-sm xl:text-base font-normal text-white-pure py-2 px-4 rounded-[5px] transition-all duration-150 group"
          href={"/resources"}
        >
          See My Resources
          <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-150" />
        </Link>
      </div>

      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <RxHamburgerMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent className="lg:hidden w-[50%] bg-[#282C34] border-none [&>button]:text-white-pure">
            <SheetHeader className="mt-3">
              <SheetTitle className="text-base text-white-secondary">
                Contents
                <div className="w-full border border-slate-300/30 mt-2 mb-3"></div>
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-3">
                {menuItems.map(({ name, href }, i) => (
                  <Link
                    key={i}
                    className="text-white-primary text-left text-base hover:bg-slate-300/30 
                    py-2 px-4 rounded-lg transition-all duration-150"
                    href={href}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Link
                    href={"https://github.com/gamxu"}
                    className="flex gap-1 justify-center items-center border bg-white-pure text-black-pure 
                      rounded-[5px] text-base py-2 px-4 max-h-[40px] font-medium hover:bg-white-pure/80 
                      transition-all duration-150"
                  >
                    <FaGithub className="text-2xl" />
                    GitHub
                  </Link>
                  <Link
                    className="flex justify-center items-center gap-1 bg-orange-normal hover:bg-orange-normal/80  
                  text-base font-normal text-white-pure py-2 px-4 rounded-[5px] transition-all duration-150 group"
                    href={"/resources"}
                    onClick={() => setIsOpen(false)}
                  >
                    See My Resources
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-150" />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
