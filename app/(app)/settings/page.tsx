import { ThemeSelector } from "@/components/ThemeSelector";

export default function page() {
  return (
    <section className="flex flex-col items-center py-20 w-[50%] mx-auto">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <h2 className="text-lg text-secondary font-light">Adjust the app settings to match your preferences.</h2>
      <div className="mt-20 grid grid-cols-[1fr_auto] items-center w-full">
        <h3 className="text-xl">Theme</h3>
        <div className="row-span-2">
          <ThemeSelector />
        </div>
        <h4 className="text-secondary">Change the theme of the app</h4>
      </div>
    </section>
  );
}
