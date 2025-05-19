export async function shortenUrl(formData: FormData) {
  const url = formData.get("url") as string;
  const isEncrypted = JSON.parse(
    formData.get("isEncrypted")?.toString() || "false"
  );

  if (!url || typeof url !== "string") {
    throw new Error("URL ausente ou inválida.");
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/shorten`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url, isEncrypted: isEncrypted }),
      }
    );

    if (!response.ok) {
      return { error: "Erro ao encurtar a URL." };
    }

    const data = await response.json();
    return { shortUrl: data.shortUrl };
  } catch (err) {
    return { error: `Erro ao processar a requisição: ${err}` };
  }
}
