'use client'
import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-9 rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-5 w-5 text-neutral-500 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block dark:text-neutral-400" />
    </Button>
  );
}

export function FloatingDockDemo() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-neutral-200/50 bg-white/30 px-4 py-2 shadow-lg backdrop-blur-md dark:border-neutral-800/50 dark:bg-neutral-900/30">
      <Link
        href="#"
        className="flex size-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
      >
        <IconHome className="size-5" />
        <span className="sr-only">Home</span>
      </Link>

      <Link
        href="#projects"
        className="flex size-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
      >
        <IconTerminal2 className="size-5" />
        <span className="sr-only">Projects</span>
      </Link>

      <Link
        href="https://github.com/vahghar"
        target="_blank"
        className="flex size-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
      >
        <IconBrandGithub className="size-5" />
        <span className="sr-only">GitHub</span>
      </Link>

      <div className="mx-1 h-6 w-[1px] bg-neutral-200 dark:bg-neutral-800"></div>

      <ModeToggle />
    </div>
  );
}
