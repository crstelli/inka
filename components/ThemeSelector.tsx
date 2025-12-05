"use client";

import { useTheme } from "next-themes";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function ThemeSelector() {
  const { setTheme, theme } = useTheme();

  return (
    <Select value={theme} onValueChange={(t) => setTheme(t)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose a theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { ThemeSelector };
