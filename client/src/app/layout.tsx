import type { Metadata } from "next";
import "./globals.css";
import { OpenAPIConfig } from "@/components/OpenAPIConfig";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Proto",
  description: "Workflow Creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <OpenAPIConfig />
          {children}
        </Providers>
      </body>
    </html>
  );
}
