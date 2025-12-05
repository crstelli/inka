import "@/app/globals.css";
import { geist } from "@/lib/next/font";

import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

export { metadata } from "@/lib/next/metadata";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`w-screen h-screen ${geist.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full h-full grid grid-cols-[auto_10fr] grid-rows-1 divide-x divide-border">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
