"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {!open && (
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-[var(--color-accent)]" />
        </SheetTrigger>
      )}
      <SheetContent className="flex flex-col bg-[var(--color-primary)] z-[100] border-none transition-all duration-500">
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href='/'>
                <h1 className="text-3xl font-semibold">
                    Olumide<span className="text-accent">.</span>
                </h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
                <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;