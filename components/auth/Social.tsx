"use client";
import { FcGoogle } from "react-icons/fc";
import { Poppins } from "next/font/google";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { cn } from "@/lib/utils";
const font = Poppins({ weight: ["500"], subsets: ["devanagari"] });
const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full">
      <p className="text-center mb-4 font-semibold">or</p>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-5 w-5" />
          <p className={cn("text-gray-800", font.className)}> Google</p>
        </Button>
      </div>
    </div>
  );
};

export default Social;
