"use client";

import { useEffect } from "react";

export function RegisterVisit({ page = "/" }: { page?: string }) {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page }),
    });
  }, [page]);

  return null;
}
