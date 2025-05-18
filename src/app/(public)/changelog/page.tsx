import { ChangelogOptions } from "./components/changelog-options";
import ChangelogView from "./components/changelog-view";
import { ChangelogProvider } from "./contexts /ChangelogContext";

export default function ChangelogPage() {
  return (
    <>
      <div className="min-h-screen max-w-4xl mx-auto max-md:p-6 my-32">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-foreground">
            Notas de Lançamento
          </h1>
          <p className="text-foreground/80">
            Fique por dentro das últimas atualizações do QCK.Link! Desde a{" "}
            <a href="#1.0.0-beta" className="font-bold hover:underline">
              versão 1.0.0 (Beta)
            </a>
            , estamos trabalhando para tornar o encurtador de links cada vez
            mais eficiente, seguro e funcional. Agradecemos todo o apoio e
            feedback durante essa fase inicial de testes! 🚀❤️
          </p>
        </header>
        <ChangelogProvider>
          <ChangelogOptions />
          <ChangelogView />
        </ChangelogProvider>
      </div>
    </>
  );
}
