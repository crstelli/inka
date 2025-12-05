import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { geist } from "@/lib/next/font";
import type { ReactNode } from "react";

export { metadata } from "@/lib/next/metadata";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`w-screen h-screen ${geist.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full h-full flex flex-col gap-10 items-center justify-center">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
