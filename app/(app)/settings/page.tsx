export default function page() {
  return (
    <main className="flex flex-col items-center py-20">
      <h1 className="text-2xl font-bold text-primary">Settings</h1>
      <h2 className="text-lg text-secondary font-light">Adjust the app settings to match your preferences.</h2>
      <div className="mt-20 grid grid-cols-[1fr_auto]">
        <h3 className="text-xl">Theme</h3>
        <div className="row-span-2"></div>
        <h4 className="text-secondary">Change the theme of the app</h4>
      </div>
    </main>
  );
}
