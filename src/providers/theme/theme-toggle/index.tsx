"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const useMounted = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

const themeOptions = [
  {
    value: "system",
    label: "Sistema",
    icon: Monitor,
  },
  {
    value: "light",
    label: "Claro",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Escuro",
    icon: Moon,
  },
] as const;

export const ThemeToggle = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 p-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {themeOptions.map(({ value, label, icon: Icon }) => {
        const isActive = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            title={label}
            aria-label={`Selecionar tema ${label}`}
            aria-pressed={isActive}
            onClick={() => setTheme(value)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
};
