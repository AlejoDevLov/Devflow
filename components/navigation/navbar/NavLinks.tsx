"use client";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ isMobileNav = false }: { isMobileNav: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
        if (item.route === "/profile") item.route = `${item.route}/${userId}`;
        const linkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={`${isActive ? "text-light-900 primary-gradient" : "text-dark300_light900"} flex items-center justify-start gap-3 rounded-lg bg-transparent p-4 hover:bg-orange-400/40`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${!isActive && "invert-colors"}`}
            />
            <p className={`${isActive ? "base-bold" : "base-medium"} ${!isMobileNav && "max-lg:hidden"}`}>
              {item.label}
            </p>
          </Link>
        );
        if (isMobileNav) {
          return (
            <SheetClose
              asChild
              key={item.label}
            >
              {linkComponent}
            </SheetClose>
          );
        } else {
          return linkComponent;
        }
      })}
    </>
  );
};

export default NavLinks;
