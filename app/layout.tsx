import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Group of 9801 LLC | Miami, FL",
  description:
    "Restaurant Group of 9801 LLC en Miami, Florida. Operacion, servicio y experiencias de hospitalidad para clientes y comunidades locales.",
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
