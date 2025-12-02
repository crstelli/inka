import "@/app/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";

const geist = Geist({
  subsets: ["latin"],
});

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Inka - Note Taking App",
  description:
    "Inka is a fast, lightweight note-taking app designed for clarity and focus. It lets users create, edit, and organize notes with a clean text-editor experience inspired by modern knowledge tools. Inka stores content locally for privacy, supports quick search, and offers an intuitive UI that adapts to different workflows. The goal is to provide a streamlined space to capture ideas, draft documents, and manage personal knowledge without distractions.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`dark ${geist.className}`}>
      <body className="w-screen h-screen bg-background text-foreground grid grid-cols-[auto_10fr] grid-rows-1 divide-x divide-border">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
