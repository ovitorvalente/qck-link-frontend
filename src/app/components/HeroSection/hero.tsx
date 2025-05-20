import { Logo } from "@/components/internal/logo";
import { ShortenForm } from "./shorten-form";
import { LinkGroup } from "../ui/LinksGroup";
import { AnalyticsCounter } from "../ui/analytics-counter";

export function HeroSection() {
  return (
    <>
      <section className="flex h-fit m-auto">
        <div className="flex w-fit flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Bem-vindo ao</h1>
            <Logo />
          </div>
          <span className="text-center opacity-80 max-md:text-sm">
            Insira o link que deseja encurtar abaixo e gere uma versão compacta
            em segundos.
          </span>

          <ShortenForm />
          {/* <AlertInfo /> */}
          <AnalyticsCounter page="/shorten" />
          <div className="flex items-center justify-center gap-2 my-8">
            <LinkGroup />
          </div>
        </div>
      </section>
    </>
  );
}
