"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Copy, Loader, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { shortenUrl } from "@/app/actions/shorten/shorten";

interface ResultShortenProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  originalUrl: string;
}

export function ResultShorten({
  open,
  onOpenChange,
  originalUrl,
}: ResultShortenProps) {
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open && originalUrl) {
      setLoading(true);
      setShortUrl("");
      setError("");

      const formData = new FormData();
      formData.append("url", originalUrl);

      shortenUrl(formData)
        .then((response) => {
          if ("shortUrl" in response) {
            setShortUrl(response.shortUrl);
          } else {
            setError(response.error);
          }
        })
        .catch(() => setError("Erro inesperado"))
        .finally(() => setLoading(false));
    }
  }, [open, originalUrl]);

  function handleCopy() {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const isSuccess = !!shortUrl;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-fit text-center">
        <DialogHeader>
          <DialogTitle />
        </DialogHeader>
        {loading && (
          <div className="flex justify-center items-center p-10">
            <Loader className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        )}

        {isSuccess && (
          <div className="flex flex-col items-center justify-center p-4 gap-2">
            <div className="flex items-center justify-center animate-pulse size-20 bg-green-500/5 rounded-full mb-8">
              <CheckCircle className="size-10 text-green-500" />
            </div>
            <p className="text-sm text-muted-foreground">
              Link encurtado com sucesso
            </p>

            <div className="flex items-center gap-2 max-w-xs">
              {!copied && (
                <Badge variant={"outline"} className="p-2">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 break-all max-w-xs text-sm"
                  >
                    {shortUrl}
                  </a>
                </Badge>
              )}

              {copied && (
                <Badge variant={"secondary"} className="p-2">
                  <p className="text-xs text-green-500 transition-all">
                    Copiado!
                  </p>
                </Badge>
              )}
              <Button
                variant="secondary"
                size="icon"
                onClick={handleCopy}
                className="hover:text-green-600"
              >
                <Copy className="size-5" />
              </Button>
            </div>
          </div>
        )}

        {!isSuccess && error && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center shadow-2xl shadow-red-500/5 justify-center animate-pulse size-16 bg-red-500/5 rounded-full mb-8">
              <X className="size-10 text-red-500" />
            </div>
            <Badge
              variant={"outline"}
              className="p-2 shadow-2xl shadow-red-500/5"
            >
              <p className="text-red-500 text-sm">
                Ocorreu um erro ao tentar encurtar o link
              </p>
            </Badge>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
