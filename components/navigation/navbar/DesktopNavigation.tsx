import NavLinks from "./NavLinks";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth } from "@/auth";

const DesktopNavigation = async () => {
  const session = await auth();
  const isUserLoggedIn = session?.user != undefined;
  return (
    <div className="custom-scrollbar fixed top-(--h-navbar) left-0 z-40 h-[calc(100vh-var(--h-navbar))] w-26 overflow-y-auto background-light900_dark200 px-6 pt-10 pb-8 [--h-navbar:--spacing(22)] max-sm:hidden lg:w-66.5">
      <NavLinks isMobileNav={false} />
      <div className={`${isUserLoggedIn ? "hidden" : ""} flex flex-col gap-y-2.5`}>
        <Link href={ROUTES.SIGN_IN}>
          <Button className="min-h-10.5 w-full rounded-lg btn-secondary px-4 py-3 small-medium shadow-none">
            <Image
              src="/icons/account.svg"
              alt="Account Icon"
              width={20}
              height={20}
              className="object-contain invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Button>
        </Link>
        <Link href={ROUTES.SIGN_UP}>
          <Button className="min-h-10.5 w-full rounded-lg border light-border-2 btn-tertiary px-4 py-3 small-medium text-dark400_light900 shadow-none">
            <Image
              src="/icons/sign-up.svg"
              alt="sign-up Icon"
              width={20}
              height={20}
              className="object-contain invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavigation;
