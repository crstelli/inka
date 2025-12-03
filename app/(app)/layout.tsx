import "@/app/globals.css";
import { geist } from "@/lib/font";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export { metadata } from "@/lib/metadata";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`dark ${geist.className}`}>
      <body className="w-screen h-screen">
        <main className="w-full h-full grid grid-cols-[auto_10fr] grid-rows-1 divide-x divide-border">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
