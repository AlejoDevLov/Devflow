"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { AuthProvider } from "@/types/forms/AuthProvider";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "min-h-12 flex-1 rounded-2 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800";

  const handleSignIn = (provider: AuthProvider) => {
    try {
      signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign-in Failed", {
        description: error instanceof Error ? error.message : "An error ocurred during sign-in.",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className={buttonClass}
        onClick={() => handleSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain invert-colors"
        />
        <span>Sign in with Github</span>
      </Button>

      <Button
        className={buttonClass}
        onClick={() => handleSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
