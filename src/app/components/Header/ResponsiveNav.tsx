import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface ArrayResource {
  name: string;
  path: string;
}

interface ResponsiveNavProps {
  openMenu: boolean;
  navItems: ArrayResource[];
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
  activeSection: string;
}

const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
  openMenu,
  navItems,
  setOpenMenu,
  navRef,
  activeSection,
}) => {
  return (
    <div
      ref={navRef}
      className={`fixed top-16 left-0 h-full w-72 bg-offWhite z-40 transform transition-transform duration-700 mt-0.5 ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="flex flex-col list-none gap-8 px-4 py-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              onClick={() => setOpenMenu(false)}
              className={`relative text-2xl ${
                activeSection === item.path ? "text-orange" : "text-black"
              } hover:text-orange w-fit block transition duration-300`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveNav;