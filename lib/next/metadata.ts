import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inka - Note Taking App",
  description:
    "Inka is a fast, lightweight note-taking app designed for clarity and focus. It lets users create, edit, and organize notes with a clean text-editor experience inspired by modern knowledge tools. Inka stores content locally for privacy, supports quick search, and offers an intuitive UI that adapts to different workflows. The goal is to provide a streamlined space to capture ideas, draft documents, and manage personal knowledge without distractions.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-dark.ico",
        href: "/favicons/icon-dark.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-light.ico",
        href: "/favicons/icon-light.ico",
      },
    ],
  },
};
