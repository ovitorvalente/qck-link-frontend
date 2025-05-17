"use client";
import { Loader, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function ToggleModeTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {mounted ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMode}
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </Button>
            ) : (
              <Button variant="ghost" size="icon">
                <Loader className="animate-spin" />
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {theme === "dark"
                ? "Ativar o tema claro"
                : "Ativar o tema escuro"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
