import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function page() {
  return (
    <main className="flex flex-col items-center py-20">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <h2 className="text-lg text-secondary font-light">Adjust the app settings to match your preferences.</h2>
      <div className="mt-20 grid grid-cols-[1fr_auto]">
        <h3 className="text-xl">Theme</h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <h4 className="text-secondary">Change the theme of the app</h4>
      </div>
    </main>
  );
}
