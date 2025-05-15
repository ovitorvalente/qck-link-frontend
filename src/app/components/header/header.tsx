import { Logo } from "@/components/internal/logo";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

export function Header() {
  return (
    <>
      <header className="fixed top-0 w-full">
        <div className="w-full flex items-center justify-between max-w-[1920px] px-12 py-4 backdrop-blur-3xl bg-transparent mx-auto">
          <Logo />
          <div className="flex items-center justify-center gap-4">
            <Button variant={"ghost"} size={"icon"}>
              <Sun />
            </Button>
            <Button>Login</Button>
          </div>
        </div>
      </header>
    </>
  );
}
