import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { geist } from "@/lib/next/font";
import { Info } from "lucide-react";
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
          <main className="w-full h-full flex flex-col gap-5 py-5 items-center max-w-[95%] mx-auto">
            <Alert className="w-auto">
              <Info />
              <AlertTitle>Welcome to Inka</AlertTitle>
              <AlertDescription>
                Login with credentials is currently disabled, please login with Google
              </AlertDescription>
            </Alert>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
