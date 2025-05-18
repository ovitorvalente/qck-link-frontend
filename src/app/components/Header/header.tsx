import { Logo } from "@/components/internal/logo";
import { SlugFading } from "@/components/internal/slug-fading";
import { ToggleModeTheme } from "@/components/internal/toggle-mode-theme";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const routes = [
    // "dashboard", "about", "faq",
    { name: "Home", link: "/", maxMdHidden: true },
    { name: "Changelog", link: "/changelog", maxMdHidden: false },
  ];

  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-3xl border-b border-dashed bg-background/80 z-50">
        <div className="w-full flex items-center justify-between max-w-[1920px] px-12 max-md:px-4 py-4 mx-auto">
          <div className="flex items-center gap-8">
            <Logo />
            <SlugFading />
          </div>

          <div className="flex items-center justify-center gap-4">
            <nav className="flex items-center justify-end gap-2 mr-8">
              {routes.map((route, index) => (
                <Button
                  asChild
                  key={index}
                  variant={"ghost"}
                  className={`${
                    route.maxMdHidden == true ? "max-md:hidden" : ""
                  }`}
                >
                  <Link href={`${route.link}`}>{route.name}</Link>
                </Button>
              ))}
            </nav>
            <ToggleModeTheme />
            {/* <Button asChild>
              <Link href={"/auth"}>Login</Link>
            </Button> */}
          </div>
        </div>
      </header>
    </>
  );
}
