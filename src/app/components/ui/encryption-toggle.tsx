import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface EncryptionToggleProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function EncryptionToggle({
  checked,
  onCheckedChange,
}: EncryptionToggleProps) {
  return (
    <Alert className="flex items-center justify-between bg-transparent backdrop-blur-3xl rounded-2xl border hover:bg-foreground/5 transition-all delay-100 duration-300 border-dashed">
      <div className="flex items-center space-x-3">
        <Switch
          id="url-encryption"
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="cursor-pointer"
        />
        <div className="flex flex-col space-y-1">
          <Label
            htmlFor="url-encryption"
            className="text-sm font-medium cursor-pointer leading-none"
          >
            Criptografia de URLs
          </Label>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {checked
              ? "Ativada - Suas URLs serão criptografadas"
              : "Desativada - URLs serão enviadas sem criptografia"}
          </p>
        </div>
      </div>

      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant={"ghost"}
              size={"icon"}
              className="text-foreground hover:text-foreground/50 rounded-full focus-visible:outline-none"
              aria-label="Mais informações sobre criptografia"
            >
              <Info className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-[260px]">
            <p className="text-sm">
              Quando ativado, todas as URLs enviadas serão criptografadas no
              servidor antes de serem armazenadas. Isso adiciona uma camada
              extra de segurança, mas pode deixar o processo de conversão mais
              lento devido ao tempo necessário para a criptografia.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Alert>
  );
}
