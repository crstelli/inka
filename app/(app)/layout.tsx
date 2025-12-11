import "@/app/globals.css";
import { geist } from "@/lib/next/font";

import { getCurrentUser } from "@/lib/prisma/getCurrentUser";
import { redirect, RedirectType } from "next/navigation";

import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

import type { ReactNode } from "react";
export { metadata } from "@/lib/next/metadata";

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const user = await getCurrentUser();
  if (!user) redirect("/login", RedirectType.replace);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`w-screen h-screen ${geist.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full h-full grid grid-cols-[auto_10fr] grid-rows-1 divide-x">
            <Sidebar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
