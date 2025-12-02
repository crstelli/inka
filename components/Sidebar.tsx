"use client";

import { usePathname } from "next/navigation";

import { Settings, StickyNote, Tag, Trash } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Sidebar() {
  const isOpen = false;

  return (
    <div className={`grid grid-rows-[50px_1fr] divide-y divide-border" ${isOpen ? "w-60" : null}`}>
      <div></div>
      <div className="bg-secondary h-full flex flex-col row-span-3 px-4 py-10 gap-2">
        <Item isOpen={isOpen} icon={StickyNote} altPath="/">
          Notes
        </Item>
        <Item isOpen={isOpen} icon={Tag}>
          Tags
        </Item>
        <Item isOpen={isOpen} icon={Trash}>
          Trash
        </Item>
        <Item isOpen={isOpen} icon={Settings}>
          Settings
        </Item>
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

  const isActive = path === pathname;

  return (
    <Button variant={isActive ? "secondary" : "ghost"} className="justify-start" asChild>
      <Link href={path}>
        <Icon />
        {isOpen && <span>{children}</span>}
      </Link>
    </Button>
  );
}

export { Sidebar };
