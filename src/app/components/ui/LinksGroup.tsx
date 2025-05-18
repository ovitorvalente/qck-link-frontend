import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function LinkGroup() {
  const links = [
    {
      name: "Github",
      url: "https://github.com/ovitorvalente",
      icon: <Github />,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ovitorvalente/",
      icon: <Linkedin />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ovitorvalente/",
      icon: <Instagram />,
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                key={index}
                variant={"secondary"}
                size={"icon"}
                className="bg-foreground/2 group hover:scale-110 delay-75 duration-500"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir link do ${link.name}`}
                  className="text-foreground/60 group-hover:text-foreground transition-all delay-75 duration-500"
                >
                  {link.icon}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </>
  );
}
