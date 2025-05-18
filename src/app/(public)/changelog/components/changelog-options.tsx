"use client";
import { Button } from "@/components/ui/button";
import { useChangelog } from "../contexts /ChangelogContext";

export function ChangelogOptions() {
  const { expandAll, toggleExpandAll } = useChangelog();

  return (
    <>
      <div className="flex items-center justify-start py-8 gap-4 border-dashed border-b">
        <Button
          className="shadow-2xl shadow-foreground/30 dark:shadow-foreground/10 hover:scale-105 transition-all delay-75 duration-500"
          size={"lg"}
          onClick={toggleExpandAll}
        >
          {expandAll == false ? "Expandir tudo" : "Recolher tudo"}
        </Button>
        <Button
          className="shadow-2xl shadow-foreground/30 dark:shadow-foreground/10 hover:scale-105 transition-all delay-75 duration-500 cursor-not-allowed"
          size={"lg"}
          variant={"secondary"}
        >
          Navegar até a versão...
        </Button>
      </div>
    </>
  );
}
