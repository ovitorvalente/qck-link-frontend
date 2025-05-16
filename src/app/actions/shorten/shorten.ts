export async function shortenUrl(formData: FormData) {
  const url = formData.get("url") as string;

  if (!url || typeof url !== "string") {
    throw new Error("URL ausente ou inválida.");
  }

  try {
    const response = await fetch("http://localhost:3333/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl: url }),
    });

    if (!response.ok) {
      return { error: "Erro ao encurtar a URL." };
    }

    const data = await response.json();
    return { shortUrl: data.shortUrl };
  } catch (err) {
    return { error: `Erro ao processar a requisição: ${err}` };
  }
}
