"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import NewsLetter from "./NewsLetter";

const navItems = [
  { name: "About me", path: "#about-me" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "#blog" },
];

const StickyHeader: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const newsRef = useRef<HTMLDivElement>(null);

  const toggleNewsletter = () => setShowNewsletter(!showNewsletter);

  const handleSetSticky = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleSetSticky);
    return () => {
      document.removeEventListener("scroll", handleSetSticky);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = navItems.map(item => document.querySelector(item.path));

      sections.forEach((section, index) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            setActiveSection(navItems[index].path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (newsRef.current && !newsRef.current.contains(e.target as Node)) {
        setShowNewsletter(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full hidden lg:flex justify-between items-center bg-white shadow-md border transition-transform duration-800 z-50 ${isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="relative cursor-pointer justify-center w-[105px] h-[52px] bg-cream z-40 px-7">
        {showNewsletter ? (
          <RxCross2
            size={50}
            className="text-slate-600 hover:text-teal"
            onClick={toggleNewsletter}
          />
        ) : (
          <TbMenu
            size={50}
            className="text-green-950 hover:text-teal"
            onClick={toggleNewsletter}
          />
        )}
        {showNewsletter && (

          <div className="">
            <NewsLetter
              openNewsPopover={showNewsletter}
              newsRef={newsRef}
              className="p-40 mt-[52px] lg:left-0"
            />
          </div>
        )}
      </div>
      <div className="ml-4 mr-auto">
        <Link href="/" >
          <Image
            src="/logo.png"
            alt="logo"
            width={125}
            height={125}
            className="py-2"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ul className="hidden lg:flex list-none lg:gap-20 lg:ml-[150px] mr-[35px]">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center">
              <Link
                href={item.path}
                className={`relative text-xl text-black hover:text-black w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange after:w-full after:transition after:duration-300 after:origin-left ${activeSection === item.path
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center lg:mr-12">
        <FaFacebookMessenger
          size={35}
          className="text-orange hover:text-cream cursor-pointer transition-all duration-500"
        />
      </div>
    </header>
  );
};

export default StickyHeader;

