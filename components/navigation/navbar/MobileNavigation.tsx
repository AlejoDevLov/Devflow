import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu Icon"
          className="cursor-pointer invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none background-light900_dark200"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link
          href="/"
          className="flex items-center gap-1"
        >
          <Image
            src="/images/site-logo.svg"
            alt="DevFlow Logo"
            width={23}
            height={23}
          />
          <p className="font-space-grotesk h2-bold text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between gap-2 overflow-y-auto">
          <section className="flex h-full flex-col gap-4 pt-12">
            <NavLinks isMobileNav />
          </section>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="min-h-10.5 w-full rounded-lg btn-secondary px-4 py-3 small-medium shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="min-h-10.5 w-full rounded-lg border light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light900 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
