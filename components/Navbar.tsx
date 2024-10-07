"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as LinkIcon, CircleUserRound, Eye } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="w-full max-w-[90rem] m-auto flex items-center justify-between py-4 pl-6 pr-4">
      <Link
        href="/home"
        className="flex items-center gap-[0.38rem] cursor-pointer"
      >
        <Image src="../logo-icon.svg" alt="Logo" width={32} height={32} />
        <span className="hidden md:inline text-dark-gray text-h-md font-bold">
          devlinks
        </span>
      </Link>
      <div className="flex items-center justify-center">
        <Link
          href="/home"
          className={
            currentPath === "/home"
              ? "bg-purple-lightest group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] cursor-pointer border-purple-light rounded-lg"
              : "group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] cursor-pointer hover:bg-purple-lightest focus:bg-purple-lightest focus:border-purple-light rounded-lg"
          }
        >
          <LinkIcon
            className={
              currentPath === "/home"
                ? "text-purple"
                : "text-gray group-hover:text-purple"
            }
          />
          <span
            className={
              currentPath === "/home"
                ? "hidden md:inline text-purple text-h-normal font-bold"
                : "hidden md:inline text-gray group-hover:text-purple group-focus:text-purple text-h-normal font-bold"
            }
          >
            Links
          </span>{" "}
        </Link>
        <Link
          href="/profile"
          className={
            currentPath === "/profile"
              ? "bg-purple-lightest group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] cursor-pointer border-purple-light rounded-lg"
              : "group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] cursor-pointer hover:bg-purple-lightest focus:bg-purple-lightest focus:border-purple-light rounded-lg"
          }
        >
          <CircleUserRound
            className={
              currentPath === "/profile"
                ? "text-purple"
                : "text-gray group-hover:text-purple"
            }
          />
          <span
            className={
              currentPath === "/profile"
                ? "hidden md:inline text-purple text-h-normal font-bold"
                : "hidden md:inline text-gray group-hover:text-purple group-focus:text-purple text-h-normal font-bold"
            }
          >
            Profile details
          </span>{" "}
        </Link>
      </div>
      <Link
        href="/preview"
        className={
          currentPath === "/preview"
            ? "group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] border-solid border-purple border-[1px] rounded-lg bg-purple-lightest"
            : "group flex gap-2 items-center justify-center py-[0.69rem] px-[1.69rem] border-solid border-purple border-[1px] rounded-lg hover:bg-purple-lightest focus:bg-purple-lightest"
        }
      >
        <Eye
          className={
            currentPath === "/preview"
              ? "inline md:hidden text-purple"
              : "inline md:hidden text-purple group-hover:text-purple group-focus:text-purple"
          }
        />
        <span className="hidden md:inline text-purple text-h-normal font-bold group-hover:text-purple group-focus:text-purple">
          Preview
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
