"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";
export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex ml-5">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <SunIcon fill={"#ffc400"} />
        </button>
      )}
    </div>
  );
}
