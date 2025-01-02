import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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
  ];
  return (
    <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 font-kanit text-white py-5">
      <Link href={"/"} className="shrink-0">
        <Image
          src="/barcode-icon.svg"
          className="h-[30px] lg:h-[40px]"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className="hidden md:flex gap-12 lg:gap-24">
        {menuItems.map(({ name, href }, i) => (
          <Link
            key={i}
            className="hover:text-slate-300 text-white-primary text-sm lg:text-base"
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
      <Link
        className="hidden md:flex justify-center items-center gap-1 bg-orange-normal hover:bg-orange-normal/80 
        text-sm lg:text-base font-normal text-white-pure py-2 px-4 rounded-[5px] transition-all duration-150 group"
        href={"/resources"}
      >
        See My Resources
        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-150" />
      </Link>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <RxHamburgerMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent className="md:hidden w-[50%] bg-[#282C34] border-none [&>button]:text-white-pure">
            <SheetHeader className="mt-3">
              <SheetTitle></SheetTitle>
              <SheetDescription className="flex flex-col gap-3">
                {menuItems.map(({ name, href }, i) => (
                  <Link
                    key={i}
                    className="text-white-primary text-left text-base hover:bg-slate-300/30 
                    py-2 px-4 rounded-lg transition-all duration-150"
                    href={href}
                  >
                    {name}
                  </Link>
                ))}
                <Link
                  className="flex justify-center items-center gap-1 bg-orange-normal hover:bg-orange-normal/80 mt-5 
                  text-base font-normal text-white-pure py-2 px-4 rounded-[5px] transition-all duration-150 group"
                  href={"/resources"}
                >
                  See My Resources
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-all duration-150" />
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
