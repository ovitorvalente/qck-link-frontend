"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { ResultShorten } from "../ui/result-shorten";
import { EncryptionToggle } from "../ui/encryption-toggle";

export function ShortenForm() {
  const [resultDialogOpen, setResultDialogOpen] = useState<boolean>(false);
  const [originalUrl, setOriginalUrl] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(true);

  function handlerSubmit(formData: FormData) {
    formData.set("isEncrypted", String(isEncrypted));
    const url = formData.get("url") as string;
    setOriginalUrl(url);
    setResultDialogOpen(true);
  }
  return (
    <>
      <form
        action={handlerSubmit}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <Input
          type="url"
          name="url"
          required
          className="h-12 border-dashed"
          placeholder="Cole sua URL aqui"
        />
        <Button
          type="submit"
          className="size-12 transition-all delay-75 duration-300 ease-in-out hover:rounded-2xl hover:opacity-60"
          variant={"default"}
          size={"icon"}
        >
          <ChevronRight />
        </Button>
      </form>

      <EncryptionToggle
        checked={isEncrypted}
        onCheckedChange={setIsEncrypted}
      />

      <ResultShorten
        open={resultDialogOpen}
        onOpenChange={setResultDialogOpen}
        originalUrl={originalUrl}
        isEncrypted={isEncrypted}
      />
    </>
  );
}
