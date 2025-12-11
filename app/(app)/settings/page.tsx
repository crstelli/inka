import { Section } from "@/components/Section";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function page() {
  return (
    <Section>
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <h2 className="text-lg text-secondary font-light">Adjust the app settings to match your preferences.</h2>
      <div className="mt-10 gap-x-4 grid text-left grid-cols-[1fr_auto] items-center w-full max-w-[600px] mx-auto">
        <h3 className="text-xl">Theme</h3>
        <div className="row-span-2">
          <ThemeSelector />
        </div>
        <h4 className="text-secondary">Change the theme of the app</h4>
      </div>
    </Section>
  );
}
