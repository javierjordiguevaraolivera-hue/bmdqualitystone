import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BMD Quality Stone | Miami, FL",
  description:
    "Fabricacion e instalacion de superficies de piedra para cocinas, banos, barras y proyectos residenciales o comerciales en Miami, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
