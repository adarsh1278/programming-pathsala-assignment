"use client";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import { ModeToggle } from "./theme-toggle";

interface NavItem {
  id: number;
  name: string;
  link: string;
}

const NavItems: NavItem[] = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Service",
   
    link: "#",
  },
  {
    id: 2,
    name: "Feature",
    link: "#",
  },
  {
    id: 3,
    name: "Product",
    link: "#",
  },
  {
    id: 5,
    name: "Testonimal",
    link: "#",
  },
  {
    id: 4,
    name: "FAQs",
    link: "#",
  },
 
  {
    id: 6,
    name:"Login",
    link: "#",
  }
];

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border border-x-0 border-y-0 border-b-[1px] border-[#27272A]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between my-6 mx-8">
          {/* code for left side */}
          <nav className="flex mt-2 gap-8">
            {/* code for logo */}
            <Link href="/">
              <div className="flex gap-3">
                
                  <img src="/icon.png"/>
                <h2 className=" text-3xl font-medium leading-7 text-left hidden md:block dark:text-[#FFFFFF]">
                  Nextcent
                </h2>

              </div>
            </Link>
            {/* code for navitems */}
            <div className="hidden lg:flex text-[#D9D9D9]">
              <ul className="flex gap-8">
                {NavItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="dark:text-[#D9D9D9] text-gray-800"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* styleName: p-regular;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 28px;
          text-align: left;
          */}

          {/* code for right side */}
          <div className="flex gap-2.5">
            <div className="flex gap-2 md:gap-8">
              <ModeToggle/>
              {/* <button
                className="dark:text-[#D9D9D9] text-gray-900 text-base leading-7 text-left font-normal"
               
              >
                <Link href="/login"> Login</Link>
              </button> */}
              <button className="border border-gray-800 rounded-[6px] text-black bg-[#FAFAFA] px-4 py-1">
                <Link
                  href="/signup"
                  className="text-lg leading-7 text-left font-semibold"
                >
                  Sign Up
                </Link>
              </button>
            </div>
            {/* code for mobile responsive */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H20"
                        stroke="#D9D9D9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6H20"
                        stroke="#D9D9D9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 18H20"
                        stroke="#D9D9D9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Nextcent</SheetTitle>
                  </SheetHeader>

                  <ul className="flex-col">
                    {NavItems.map((item) => (
                      <li className="text-center my-2" key={item.id}>
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <SheetClose asChild />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
