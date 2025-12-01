"use client";

import { usePathname } from "next/navigation";

import { Settings, StickyNote, Tag, Trash } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="grid grid-rows-[50px_1fr] divide-y divide-border">
      <div></div>
      <div className="bg-secondary h-full flex flex-col row-span-3 px-4 py-10 gap-2">
        <Item icon={StickyNote} altPath="/">
          Notes
        </Item>
        <Item icon={Tag}>Tags</Item>
        <Item icon={Trash}>Trash</Item>
        <Item icon={Settings}>Settings</Item>
      </div>
    </div>
  );
}

interface ItemProps {
  children: string;
  icon: LucideIcon;

  altPath?: string;
}

function Item({ children, icon: Icon, altPath }: ItemProps) {
  const path = altPath || children.toLowerCase();
  const pathname = usePathname();

  const isActive = path === pathname;

  return (
    <Button variant={isActive ? "secondary" : "ghost"} className="justify-start" asChild>
      <Link href={path}>
        <Icon />
        <span>{children}</span>
      </Link>
    </Button>
  );
}

export { Sidebar };
