"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { signout } from "@/actions/auth/signout";
import { useSidebar } from "@/stores/menusStore";
import { Button } from "@/components/ui/button";

import { LogOut, Settings, StickyNote, Trash } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Sidebar() {
  const isOpen = useSidebar();

  return (
    <div className={`grid grid-rows-[50px_1fr] divide-y divide-border" ${isOpen ? "lg:w-60" : null}`}>
      <div></div>
      <div className="bg-accent h-full flex flex-col row-span-3 px-4 py-10 gap-2">
        <Item isOpen={isOpen} icon={StickyNote} altPath="/">
          Notes
        </Item>
        <Item isOpen={isOpen} icon={Trash}>
          Trash
        </Item>
        <Item isOpen={isOpen} icon={Settings}>
          Settings
        </Item>
        <Button onClick={signout} variant="ghost" className="justify-start hover:bg-background mt-auto">
          <LogOut />
          {isOpen && <span className="max-lg:hidden">Logout</span>}
        </Button>
      </div>
    </div>
  );
}

interface ItemProps {
  children: string;
  icon: LucideIcon;
  isOpen: boolean;

  altPath?: string;
}

function Item({ children, icon: Icon, altPath, isOpen }: ItemProps) {
  const path = altPath || children.toLowerCase();
  const pathname = usePathname();

  const isActive = "/" + path === pathname || (altPath === "/" && pathname === "/");

  return (
    <Button variant={isActive ? "secondary" : "ghost"} className="justify-start hover:bg-background" asChild>
      <Link href={path}>
        <Icon />
        {isOpen && <span className="max-lg:hidden">{children}</span>}
      </Link>
    </Button>
  );
}

export { Sidebar };
