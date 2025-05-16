import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/header";
import { Footer } from "./components/Footer/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QCK.link – Encurtador de URLs rápido e inteligente",
  description:
    "O QCK.link é um encurtador de links simples, ágil e inteligente. Gere links curtos, monitore acessos e compartilhe com eficiência.",
  metadataBase: new URL("https://qck.link"),
  alternates: {
    canonical: "https://qck.link",
  },
  openGraph: {
    title: "QCK.link – Encurtador de URLs rápido e inteligente",
    description:
      "Transforme links longos em URLs curtas e profissionais com o QCK.link. Monitore cliques, personalize seus links e compartilhe com confiança.",
    url: "https://qck.link",
    siteName: "QCK.link",
    images: [
      {
        url: "https://qck.link/og-image.png",
        width: 1200,
        height: 630,
        alt: "QCK.link - Encurtador de URLs",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QCK.link – Encurtador de URLs rápido e inteligente",
    description:
      "Encurte, personalize e monitore seus links com facilidade usando o QCK.link.",
    images: ["https://qck.link/og-image.png"],
    creator: "@qcklink",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} dark antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
