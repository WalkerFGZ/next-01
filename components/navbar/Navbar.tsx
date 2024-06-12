// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("SOY UN TEXTO");
//     }, 2000);
//   });
// };

import { ActiveLink } from "../active-link/ActiveLink";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
  {
    path: "about",
    text: "About",
  },
  {
    path: "pricing",
    text: "Pricing",
  },
  {
    path: "contact",
    text: "Contact",
  },
];
export const Navbar = async () => {
  //   const result: any = await temporalAsync();
  return (
    <nav className="flex bg-blue-400 bg-opacity-30 p-2 m2- rounded">
      <Link href="/" className="flex items-center gap-3">
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};
