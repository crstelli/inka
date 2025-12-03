import "@/app/globals.css";
import { geist } from "@/lib/next/font";
import type { ReactNode } from "react";

export { metadata } from "@/lib/next/metadata";

interface Props {
  children: ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <html lang="en" className={`dark ${geist.className}`}>
      <body className="w-screen h-screen">
        <main className="w-full h-full flex flex-col gap-10 items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl">Inka</h1>
            <h2 className="text-secondary">A modern taking-note app.</h2>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
