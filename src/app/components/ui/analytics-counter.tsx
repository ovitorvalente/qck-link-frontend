"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export function AnalyticsCounter({ page = "shorten" }: { page?: string }) {
  const [data, setData] = useState<{
    totalVisits: number;
    totalConversions: number;
  } | null>(null);

  const [hasError, setHasError] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics`
        );
        if (!res.ok) throw new Error("Resposta inválida do servidor");
        const json = await res.json();
        setData(json);
      } catch {
        toast.error("Erro ao buscar estatísticas.");
        setHasError(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };

    fetchData();
    intervalRef.current = setInterval(fetchData, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [page]);

  if (!data)
    return (
      <Badge
        className="flex items-center justify-center mx-auto"
        variant={"secondary"}
      >
        {hasError
          ? "Erro ao carregar estatísticas."
          : "Carregando estatísticas..."}
      </Badge>
    );

  const totalVisits =
    data.totalVisits + Number(process.env.NEXT_PUBLIC_TOTAL_VISIT || 0);
  const totalConversions =
    data.totalConversions +
    Number(process.env.NEXT_PUBLIC_TOTAL_CONVERSIONS || 0);

  return (
    <div className="flex items-center justify-center mx-auto">
      <Badge
        className="flex items-center justify-center gap-4"
        variant={"secondary"}
      >
        <p>
          Visitas: <strong>{totalVisits}</strong>
        </p>
        <span>•</span>
        <p>
          Conversões: <strong>{totalConversions}</strong>
        </p>
      </Badge>
    </div>
  );
}
