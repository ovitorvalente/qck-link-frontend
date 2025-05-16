import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function AlertInfo() {
  return (
    <>
      <Alert className="rounded-2xl shadow-2xl shadow-black/4 dark:shadow-white/4">
        <AlertCircle />
        <AlertTitle>Como funciona o QCK.Link?</AlertTitle>
        <AlertDescription className="mt-2">
          <ol className="list-decimal space-y-1 pl-5">
            <li>Cole qualquer URL longa que você queira transformar</li>
            <li>
              Clique para encurtar — nós geramos um link curto instantaneamente
            </li>
            <li>Acompanhe os cliques e visualize estatísticas em tempo real</li>
          </ol>
          <p className="mt-3 font-medium">
            Precisa de ajuda? Nosso time de suporte está disponível para
            orientá-lo em cada etapa.
          </p>
        </AlertDescription>
      </Alert>
    </>
  );
}
