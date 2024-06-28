"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxex";
import { cn } from "../utils/cn";
import Image from "next/image";

export function BackgroundBoxesDemo() {
  return (
    <div className="py-10 relative w-full overflow-hidden bg-[#000319] flex flex-col items-center gap-8 justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-[#000319] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "text-white m-10 relative z-20 heading"
        )}
      >
        My Tech Stats
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center z-40">
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/re.svg"
          alt="React"
          height={100}
          width={100}
        />
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/next.svg"
          alt="Next"
          height={100}
          width={100}
        />
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/git.svg"
          alt="Github"
          height={100}
          width={100}
        />
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/javascript.svg"
          alt="Javascript"
          height={100}
          width={100}
        />
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/mongodb.svg"
          alt="MongoDB"
          height={100}
          width={100}
        />
        <Image
          className="hover:scale-105 transform transition duration-300 ease-in-out"
          src="/tail.svg"
          alt="Tailwind"
          height={100}
          width={100}
        />
      </div>

      <p className="text-center mt-2 text-neutral-300 relative z-20">
        {/* here another component will be coming */}
      </p>
    </div>
  );
}
