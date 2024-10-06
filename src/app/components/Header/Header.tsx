"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import ResponsiveNav from "./ResponsiveNav";
import NewsLetter from "./NewsLetter";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { name: "About me", path: "#about-me" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
  { name: "Blog", path: "#blog" },
];

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNewsPopover, setOpenNewsPopover] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

  const handleNavOpen = () => setOpenMenu(prev => !prev);
  const handleNewPopover = () => setOpenNewsPopover(prev => !prev);

  const [isSticky, setIsSticky] = useState(false);

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
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClickForNews = (e: MouseEvent) => {
      if (newsRef.current && !newsRef.current.contains(e.target as Node)) {
        setOpenNewsPopover(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClickForNews);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClickForNews);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full lg:static flex bg-white lg:bg-offWhite items-center justify-between !py-2 lg:!pt-12 pl-0 z-50 ${isSticky ? "shadow-lg" : ""
        }`}
    >
      <div>
        <div
          className={`absolute top-0 left-0 hidden lg:flex items-center justify-center h-[342px] w-[105px]  bg-cream z-40 ${isSticky ? "!hidden" : "lg:flex"
            }`}
        >
          {openNewsPopover ? (
              <RxCross2
                  size={50}
                  className={`cursor-pointer text-slate-600 hover:text-teal animate-iconFadeIn`}
                  onClick={handleNewPopover}
              />
          ) : (
              <TbMenu
                  size={50}
                  className={`cursor-pointer text-slate-600 hover:text-teal animate-iconFadeIn`}
                  onClick={handleNewPopover}
              />
          )}
          {openNewsPopover && (
            <NewsLetter
              openNewsPopover={openNewsPopover}
              newsRef={newsRef}
              className={isSticky ? "hidden" : ""}
            />
          )}
        </div>

        <div className="lg:hidden flex">
          <TbMenu
            size={30}
            className={`cursor-pointer ${openMenu ? "text-orange" : "text-black"}`}
            onClick={handleNavOpen}
          />
        </div>
      </div>
      <div className="lg:ml-[70px] ">
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
      <ul className="hidden lg:flex list-none lg:gap-20 lg:ml-[150px] mr-[-40px] ">
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

      <div className="lg:hidden flex items-center gap-3">
        <BsThreeDotsVertical
          size={20}
          className="cursor-pointer"
          onClick={handleNewPopover}
        />
        <FaFacebookMessenger
          size={20}
          className="text-orange hover:text-cream cursor-pointer transition-all duration-500"
        />
      </div>

      {openMenu && (
        <ResponsiveNav
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          navItems={navItems}
          navRef={navRef}
          activeSection={activeSection}
        />
      )}
      {openNewsPopover && (
        <NewsLetter
          openNewsPopover={openNewsPopover}
          newsRef={newsRef}
          className={"lg:hidden"}
        />
      )}
    </header>
  );
};

export default Header;