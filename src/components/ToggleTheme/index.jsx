import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToggleTheme = () => {
  const pageClasses = document.documentElement.classList;

  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const toggle = () => {
    pageClasses.toggle("dark");
  };

  useEffect(() => {
    systemPreference && pageClasses.add("dark");
  }, [systemPreference, pageClasses]);

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="block h-8 text-gray-100 dark:hidden cursor-pointer"
        onClick={toggle}
      />
      <SunIcon
        className="hidden h-8 text-gray-100 dark:block cursor-pointer"
        onClick={toggle}
      />
    </div>
  );
};

export default ToggleTheme;
