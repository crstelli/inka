import "@/app/globals.css";
import { geist } from "@/lib/font";
import type { ReactNode } from "react";

export { metadata } from "@/lib/metadata";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <html lang="en" className={`dark ${geist.className}`}>
      <body className="w-screen h-screen bg-background text-foreground">
        <main className="grid grid-cols-[auto_10fr] grid-rows-1 divide-x divide-border">{children}</main>
      </body>
    </html>
  );
}
