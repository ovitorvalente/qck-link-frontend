import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-full backdrop-blur-3xl border-t border-dashed bg-background/80 z-50">
        <div className="w-full flex items-center justify-between max-w-[1920px] px-12 max-md:px-4 py-2 mx-auto">
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/ovitorvalente"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir link do github"
              className="text-sm text-foreground/50"
            >
              © 2025 - QCK. Link, feito por{" "}
              <span className="font-bold text-foreground">Vitor Valente</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant={"outline"}
              className="rounded-full gap-2 hover:bg-green-500/30 transition-all delay-75 duration-300"
            >
              <span className="bg-green-500 size-2 rounded-full" />
              <span>Ativo</span>
            </Badge>
          </div>
        </div>
      </footer>
    </>
  );
}
