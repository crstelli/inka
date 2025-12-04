import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function page() {
  return (
    <main className="flex flex-col items-center py-20 w-[50%] mx-auto">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <h2 className="text-lg text-secondary font-light">Adjust the app settings to match your preferences.</h2>
      <div className="mt-20 grid grid-cols-[1fr_auto] items-center w-full">
        <h3 className="text-xl">Theme</h3>
        <Select defaultValue="dark">
          <SelectTrigger className="w-[180px] row-span-2">
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
        <h4 className="text-secondary">Change the theme of the app</h4>
      </div>
    </main>
  );
}
